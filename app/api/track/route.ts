import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.trim();

    if (!q) {
      return NextResponse.json({ success: false, error: "رقم الطلب أو الهاتف مطلوب" }, { status: 400 });
    }

    const order = await prisma.order.findFirst({
      where: {
        OR: [
          { orderNumber: { equals: q, mode: "insensitive" } },
          { phone: { equals: q } },
        ],
      },
      orderBy: { createdAt: "desc" },
    });

    if (!order) {
      return NextResponse.json({ success: false, error: "لم يتم العثور على أي طلب مسجل بهذا الرقم" }, { status: 404 });
    }

    return NextResponse.json({ success: true, order });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
