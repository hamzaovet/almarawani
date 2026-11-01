import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const purchases = await prisma.purchase.findMany({
      include: {
        supplier: {
          select: { id: true, name: true, phone: true, category: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, purchases });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { supplierId, items, paidAmount, paymentType, notes, receivedBy, invoiceDate } = data;

    if (!supplierId || !items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "المورد والأصناف المشتراة مطلوبان لتسجيل الفاتورة" },
        { status: 400 }
      );
    }

    const supplier = await prisma.supplier.findUnique({ where: { id: supplierId } });
    if (!supplier) {
      return NextResponse.json({ success: false, error: "المورد غير موجود" }, { status: 404 });
    }

    // Compute totals
    let totalAmount = 0;
    for (const item of items) {
      const qty = parseInt(item.qty) || 1;
      const cost = parseFloat(item.costPrice) || 0;
      totalAmount += qty * cost;
    }

    const paid = paidAmount !== undefined ? parseFloat(paidAmount) : totalAmount;
    const remaining = Math.max(0, totalAmount - paid);

    const count = await prisma.purchase.count();
    const invoiceNumber = `PUR-${1001 + count}`;
    const dateStr = invoiceDate || new Date().toISOString().split("T")[0];

    // 1. Create Purchase Invoice
    const purchase = await prisma.purchase.create({
      data: {
        invoiceNumber,
        supplierId: supplier.id,
        supplierName: supplier.name,
        invoiceDate: dateStr,
        items: JSON.stringify(items),
        totalAmount,
        paidAmount: paid,
        remainingAmount: remaining,
        paymentType: paymentType || (remaining === 0 ? "cash" : paid === 0 ? "credit" : "partial"),
        notes: notes || null,
        receivedBy: receivedBy || "الإدارة",
      },
    });

    // 2. Update stock for each product & create StockMovement
    for (const item of items) {
      const qty = parseInt(item.qty) || 0;
      const cost = parseFloat(item.costPrice) || 0;

      if (item.productId && qty > 0) {
        const prod = await prisma.product.findUnique({ where: { id: item.productId } });
        if (prod) {
          const newQty = prod.stockQty + qty;
          await prisma.product.update({
            where: { id: prod.id },
            data: {
              stockQty: newQty,
              costPrice: cost > 0 ? cost : prod.costPrice,
              inStock: true,
            },
          });

          await prisma.stockMovement.create({
            data: {
              productId: prod.id,
              productName: prod.nameAr,
              movementType: "purchase",
              quantity: qty,
              balanceAfter: newQty,
              unitCost: cost,
              reference: invoiceNumber,
              notes: `وارد مشتريات من المورد ${supplier.name} بفاتورة رقم ${invoiceNumber}`,
              performedBy: receivedBy || "الإدارة",
            },
          });
        }
      }
    }

    // 3. Update Supplier balance with remaining amount
    if (remaining > 0) {
      await prisma.supplier.update({
        where: { id: supplier.id },
        data: {
          currentBalance: {
            increment: remaining,
          },
        },
      });
    }

    // 4. Record Treasury Outflow if cash paid
    if (paid > 0) {
      const lastTx = await prisma.treasuryTransaction.findFirst({
        orderBy: { createdAt: "desc" },
      });
      const currentTreasuryBal = lastTx ? lastTx.balanceAfter : 0;
      const newTreasuryBal = currentTreasuryBal - paid;

      await prisma.treasuryTransaction.create({
        data: {
          type: "out",
          category: "مشتريات نقدية",
          amount: paid,
          balanceAfter: newTreasuryBal,
          description: `سداد فاتورة مشتريات للمورد: ${supplier.name} (${invoiceNumber})`,
          reference: invoiceNumber,
          recordedBy: receivedBy || "الإدارة",
        },
      });
    }

    return NextResponse.json({
      success: true,
      purchase,
      message: `تم تسجيل فاتورة المشتريات رقم ${invoiceNumber} وتحديث الأرصدة بالمخزن بنجاح`,
    });
  } catch (error: any) {
    console.error("Purchase create error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
