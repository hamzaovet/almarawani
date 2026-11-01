import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type"); // sales_return, purchase_return, or all

    const where: any = {};
    if (type && type !== "all") {
      where.type = type;
    }

    const returns = await prisma.returnRecord.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 100,
    });

    return NextResponse.json({ success: true, returns });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      type, // "sales_return" | "purchase_return"
      referenceNumber,
      customerOrSupplier,
      items, // array of { productId, nameAr, unit, qty, price, total }
      totalAmount,
      reason,
      recordedBy,
      supplierId,
      refundMethod, // "cash" or "balance_deduction"
    } = body;

    if (!type || !referenceNumber || !items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "بيانات المرتجع غير مكتملة" },
        { status: 400 }
      );
    }

    const count = await prisma.returnRecord.count();
    const returnNumber = `RET-${1001 + count}`;
    const parsedTotal = parseFloat(totalAmount || 0);

    const result = await prisma.$transaction(async (tx) => {
      // 1. Create Return Record
      const record = await tx.returnRecord.create({
        data: {
          returnNumber,
          type,
          referenceNumber,
          customerOrSupplier: customerOrSupplier || (type === "sales_return" ? "عميل نقدي" : "مورد"),
          items: JSON.stringify(items),
          totalAmount: parsedTotal,
          reason: reason || "",
          recordedBy: recordedBy || "كاشير / مسؤول الإدارة",
        },
      });

      // 2. Adjust Stock for each returned item
      for (const item of items) {
        const itemQty = parseFloat(item.qty || 1);
        if (type === "sales_return") {
          // Returning back into supermarket stock (+qty)
          const updatedProd = await tx.product.update({
            where: { id: item.productId },
            data: { stockQty: { increment: Math.round(itemQty) } },
          });

          await tx.stockMovement.create({
            data: {
              productId: item.productId,
              productName: item.nameAr || updatedProd.nameAr,
              movementType: "return",
              quantity: itemQty,
              balanceAfter: updatedProd.stockQty,
              reference: returnNumber,
              notes: `مرتجع مبيعات فاتورة ${referenceNumber} - السبب: ${reason || "بدون"}`,
              performedBy: recordedBy || "كاشير",
            },
          });
        } else if (type === "purchase_return") {
          // Returning back to supplier, deducting from supermarket stock (-qty)
          const updatedProd = await tx.product.update({
            where: { id: item.productId },
            data: { stockQty: { decrement: Math.round(itemQty) } },
          });

          await tx.stockMovement.create({
            data: {
              productId: item.productId,
              productName: item.nameAr || updatedProd.nameAr,
              movementType: "purchase_return",
              quantity: -itemQty,
              balanceAfter: updatedProd.stockQty,
              reference: returnNumber,
              notes: `مرتجع مشتريات فاتورة ${referenceNumber} للمورد ${customerOrSupplier}`,
              performedBy: recordedBy || "مسؤول المشتريات",
            },
          });
        }
      }

      // 3. Treasury & Financial Adjustments
      if (type === "sales_return") {
        // Cash outflow from Treasury
        const lastTx = await tx.treasuryTransaction.findFirst({
          orderBy: { createdAt: "desc" },
        });
        const currentBalance = lastTx ? lastTx.balanceAfter : 0;
        const newBalance = currentBalance - parsedTotal;

        await tx.treasuryTransaction.create({
          data: {
            type: "out",
            category: "مرتجع مبيعات",
            amount: parsedTotal,
            balanceAfter: newBalance,
            description: `رد نقدي لمرتجع مبيعات ${returnNumber} (فاتورة ${referenceNumber})`,
            recordedBy: recordedBy || "كاشير",
          },
        });
      } else if (type === "purchase_return") {
        // Purchase return: if supplier is selected, reduce supplier's credit dues
        if (supplierId) {
          await tx.supplier.update({
            where: { id: supplierId },
            data: {
              currentBalance: { decrement: parsedTotal },
            },
          });
        } else if (refundMethod === "cash") {
          // Received cash back from supplier into treasury
          const lastTx = await tx.treasuryTransaction.findFirst({
            orderBy: { createdAt: "desc" },
          });
          const currentBalance = lastTx ? lastTx.balanceAfter : 0;
          const newBalance = currentBalance + parsedTotal;

          await tx.treasuryTransaction.create({
            data: {
              type: "in",
              category: "مرتجع مشتريات",
              amount: parsedTotal,
              balanceAfter: newBalance,
              description: `استرداد نقدي لمرتجع مشتريات ${returnNumber} من المورد ${customerOrSupplier}`,
              recordedBy: recordedBy || "مسؤول المشتريات",
            },
          });
        }
      }

      return record;
    });

    return NextResponse.json({ success: true, returnRecord: result });
  } catch (error: any) {
    console.error("Return error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
