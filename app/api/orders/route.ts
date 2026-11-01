import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const captainId = searchParams.get("captainId");
    const phone = searchParams.get("phone");
    const orderType = searchParams.get("orderType"); // delivery, pos, takeaway, all

    const where: any = {};
    if (status && status !== "all") {
      where.status = status;
    }
    if (captainId) {
      where.captainId = captainId;
    }
    if (phone) {
      where.phone = phone;
    }
    if (orderType && orderType !== "all") {
      where.orderType = orderType;
    }

    const orders = await prisma.order.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 150,
    });

    return NextResponse.json({ success: true, orders });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Generate unique order number: MRW-XXXX
    const count = await prisma.order.count();
    const orderNumber = `MRW-${1001 + count}`;
    const isPos = body.orderType === "pos";
    const subtotal = parseFloat(body.subtotal || 0);
    const deliveryFee = parseFloat(body.deliveryFee || 0);
    const discount = parseFloat(body.discount || 0);
    const total = parseFloat(body.total || subtotal + deliveryFee - discount);
    const items = body.items || [];

    const timeline = [
      {
        stage: isPos ? "تمت عملية البيع المباشر بنجاح" : "تم استلام الطلب بنجاح",
        at: new Date().toISOString(),
        by: isPos ? (body.cashierName || "كاشير المعادي") : "العميل عبر المتجر الإلكتروني",
      },
    ];

    const result = await prisma.$transaction(async (tx) => {
      // 1. Create order
      const newOrder = await tx.order.create({
        data: {
          orderNumber,
          customerName: body.customerName || (isPos ? "عميل الفرع (كاشير)" : "عميل المعادي"),
          phone: body.phone || (isPos ? "01000000000" : ""),
          address: body.address || (isPos ? "شراء مباشر من فرع المعادي" : ""),
          zone: body.zone || (isPos ? "فرع المعادي الرئيسي" : "المعادي القديمة ودجلة"),
          branchName: body.branchName || "فرع المعادي الرئيسي",
          orderType: body.orderType || "delivery",
          status: isPos ? "completed" : "new",
          items: JSON.stringify(items),
          subtotal,
          deliveryFee,
          discount,
          total,
          paymentMethod: body.paymentMethod || "cash",
          notes: body.notes || "",
          timeline: JSON.stringify(timeline),
          isSettled: isPos ? true : false,
        },
      });

      // 2. If POS sale: deduct stock and record stock movements & Treasury entry
      if (isPos && items.length > 0) {
        for (const item of items) {
          const qty = parseFloat(item.qty || 1);
          if (item.productId) {
            const updatedProd = await tx.product.update({
              where: { id: item.productId },
              data: { stockQty: { decrement: Math.round(qty) } },
            }).catch(() => null);

            if (updatedProd) {
              await tx.stockMovement.create({
                data: {
                  productId: item.productId,
                  productName: item.nameAr || updatedProd.nameAr,
                  movementType: "sale",
                  quantity: -qty,
                  balanceAfter: updatedProd.stockQty,
                  reference: orderNumber,
                  notes: `مبيعات كاشير فاتورة ${orderNumber}`,
                  performedBy: body.cashierName || "كاشير",
                },
              });
            }
          }
        }

        // Add to Treasury
        const lastTx = await tx.treasuryTransaction.findFirst({
          orderBy: { createdAt: "desc" },
        });
        const currentBalance = lastTx ? lastTx.balanceAfter : 0;
        const newBalance = currentBalance + total;

        await tx.treasuryTransaction.create({
          data: {
            type: "in",
            category: "مبيعات كاشير",
            amount: total,
            balanceAfter: newBalance,
            description: `إيراد مبيعات كاشير نقطة البيع فاتورة ${orderNumber} (${body.paymentMethod === "card" ? "فيزا" : "نقدي"})`,
            recordedBy: body.cashierName || "كاشير",
          },
        });
      }

      // 3. Upsert customer record if valid phone and not pos
      if (body.phone && !isPos) {
        await tx.customer.upsert({
          where: { phone: body.phone },
          update: {
            name: body.customerName,
            address: body.address,
            zone: body.zone,
          },
          create: {
            name: body.customerName,
            phone: body.phone,
            address: body.address,
            zone: body.zone,
          },
        }).catch(() => {});
      }

      return newOrder;
    });

    return NextResponse.json({ success: true, order: result });
  } catch (error: any) {
    console.error("Order creation error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, status, captainId, captainName, captainPhone, assignedPicker, note, settleCaptainId } = body;

    // Special action: Settle all pending orders for a captain
    if (settleCaptainId) {
      const captain = await prisma.captain.findUnique({ where: { id: settleCaptainId } });
      if (!captain) {
        return NextResponse.json({ success: false, error: "الطيار غير موجود" }, { status: 404 });
      }

      // Find all delivered but unsettled orders for this captain
      const unsettledOrders = await prisma.order.findMany({
        where: {
          captainId: settleCaptainId,
          status: "delivered",
          isSettled: false,
        },
      });

      const totalSettled = unsettledOrders.reduce((sum, o) => sum + o.total, 0);

      if (unsettledOrders.length > 0) {
        await prisma.$transaction(async (tx) => {
          // Mark orders as settled
          await tx.order.updateMany({
            where: {
              id: { in: unsettledOrders.map((o) => o.id) },
            },
            data: { isSettled: true },
          });

          // Reset captain pending balance
          await tx.captain.update({
            where: { id: settleCaptainId },
            data: { pendingBalance: 0 },
          });

          // Add to treasury
          const lastTx = await tx.treasuryTransaction.findFirst({
            orderBy: { createdAt: "desc" },
          });
          const currentBalance = lastTx ? lastTx.balanceAfter : 0;
          const newBalance = currentBalance + totalSettled;

          await tx.treasuryTransaction.create({
            data: {
              type: "in",
              category: "مبيعات دليفري",
              amount: totalSettled,
              balanceAfter: newBalance,
              description: `تسوية وتوريد عهدة طيار نقدية: ${captain.name} (عدد ${unsettledOrders.length} طلب)`,
              recordedBy: "مسؤول الخزينة",
            },
          });
        });
      }

      return NextResponse.json({
        success: true,
        settledCount: unsettledOrders.length,
        settledAmount: totalSettled,
      });
    }

    if (!id) {
      return NextResponse.json({ success: false, error: "Order ID required" }, { status: 400 });
    }

    const currentOrder = await prisma.order.findUnique({ where: { id } });
    if (!currentOrder) {
      return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
    }

    let timeline = [];
    try {
      timeline = JSON.parse(currentOrder.timeline || "[]");
    } catch {
      timeline = [];
    }

    const stageMap: Record<string, string> = {
      preparing: "جاري تجميع الأصناف في أكياس السوبرماركت 📦",
      ready: "الطلب جاهز للاستلام والتوصيل ⚡",
      out_for_delivery: `الطلب مع الطيار (${captainName || currentOrder.captainName || "كابتن التوصيل"}) في الطريق 🛵`,
      delivered: "تم تسليم الطلب للعميل بنجاح واستلام المبلغ ✅",
      cancelled: "تم إلغاء الطلب ❌",
    };

    if (status && status !== currentOrder.status) {
      timeline.push({
        stage: stageMap[status] || status,
        at: new Date().toISOString(),
        by: note || "النظام",
      });
    }

    const updated = await prisma.$transaction(async (tx) => {
      const order = await tx.order.update({
        where: { id },
        data: {
          status: status || currentOrder.status,
          captainId: captainId !== undefined ? captainId : currentOrder.captainId,
          captainName: captainName !== undefined ? captainName : currentOrder.captainName,
          captainPhone: captainPhone !== undefined ? captainPhone : currentOrder.captainPhone,
          assignedPicker: assignedPicker !== undefined ? assignedPicker : currentOrder.assignedPicker,
          timeline: JSON.stringify(timeline),
        },
      });

      // If delivery order was just delivered, increment captain's pending uncollected balance
      if (
        status === "delivered" &&
        currentOrder.status !== "delivered" &&
        order.orderType === "delivery" &&
        order.captainId
      ) {
        await tx.captain.update({
          where: { id: order.captainId },
          data: {
            pendingBalance: { increment: order.total },
          },
        }).catch(() => {});
      }

      return order;
    });

    return NextResponse.json({ success: true, order: updated });
  } catch (error: any) {
    console.error("Order update error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
