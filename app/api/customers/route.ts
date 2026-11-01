import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const customers = await prisma.customer.findMany({
      orderBy: { totalOrders: "desc" },
    });
    return NextResponse.json({ success: true, customers });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, address, zone, notes } = data;

    if (!name || !phone) {
      return NextResponse.json({ success: false, error: "اسم العميل ورقم الهاتف مطلوبان" }, { status: 400 });
    }

    const customer = await prisma.customer.upsert({
      where: { phone },
      update: {
        name,
        address: address || undefined,
        zone: zone || undefined,
        notes: notes || undefined,
      },
      create: {
        name,
        phone,
        address: address || null,
        zone: zone || "المعادي",
        notes: notes || null,
      },
    });

    return NextResponse.json({ success: true, customer });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
