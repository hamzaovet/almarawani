import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const customerPhone = searchParams.get("phone");

    const where: any = {};
    if (customerPhone) {
      where.OR = [
        { customerPhone: customerPhone },
        { isStaff: true, customerPhone: null },
      ];
    }

    const messages = await prisma.chatMessage.findMany({
      where,
      orderBy: { createdAt: "asc" },
      take: 100,
    });

    return NextResponse.json({ success: true, messages });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { senderName, senderRole, text, orderNumber, customerPhone, isStaff } = body;

    if (!text?.trim()) {
      return NextResponse.json({ success: false, error: "النص مطلوب" }, { status: 400 });
    }

    const message = await prisma.chatMessage.create({
      data: {
        senderName: senderName || "عميل المعادي",
        senderRole: senderRole || "customer",
        text: text.trim(),
        orderNumber: orderNumber || null,
        customerPhone: customerPhone || null,
        isStaff: Boolean(isStaff),
      },
    });

    return NextResponse.json({ success: true, message });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
