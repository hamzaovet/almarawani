import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const captainId = searchParams.get("captainId");
    const phone = searchParams.get("phone");

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

    const orders = await prisma.order.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 100,
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

    const timeline = [
      {
        stage: "تم استلام الطلب بنجاح",
        at: new Date().toISOString(),
        by: "العميل عبر المتجر الإلكتروني",
      },
    ];

    const newOrder = await prisma.order.create({
      data: {
        orderNumber,
        customerName: body.customerName || "عميل المعادي",
        phone: body.phone,
        address: body.address,
        zone: body.zone || "المعادي القديمة ودجلة",
        branchName: body.branchName || "فرع المعادي الرئيسي",
        orderType: body.orderType || "delivery",
        status: "new",
        items: JSON.stringify(body.items || []),
        subtotal: parseFloat(body.subtotal || 0),
        deliveryFee: parseFloat(body.deliveryFee || 0),
        discount: parseFloat(body.discount || 0),
        total: parseFloat(body.total || 0),
        paymentMethod: body.paymentMethod || "cash",
        notes: body.notes || "",
        timeline: JSON.stringify(timeline),
      },
    });

    // Also upsert customer record
    if (body.phone) {
      await prisma.customer.upsert({
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

    return NextResponse.json({ success: true, order: newOrder });
  } catch (error: any) {
    console.error("Order creation error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, status, captainId, captainName, captainPhone, assignedPicker, note } = body;

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

    const updated = await prisma.order.update({
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

    return NextResponse.json({ success: true, order: updated });
  } catch (error: any) {
    console.error("Order update error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
