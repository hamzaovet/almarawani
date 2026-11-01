import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const captains = await prisma.captain.findMany({
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json({ success: true, captains });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data.name || !data.phone) {
      return NextResponse.json({ success: false, error: "الاسم ورقم الهاتف مطلوبان" }, { status: 400 });
    }

    const captain = await prisma.captain.create({
      data: {
        name: data.name,
        phone: data.phone,
        vehicle: data.vehicle || "سكوتر دليفري سريع",
        zone: data.zone || "المعادي",
        isActive: data.isActive !== undefined ? Boolean(data.isActive) : true,
      },
    });
    return NextResponse.json({ success: true, captain });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    if (!data.id) {
      return NextResponse.json({ success: false, error: "معرف الطيار مطلوب" }, { status: 400 });
    }

    const updateData: any = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.phone !== undefined) updateData.phone = data.phone;
    if (data.vehicle !== undefined) updateData.vehicle = data.vehicle;
    if (data.zone !== undefined) updateData.zone = data.zone;
    if (data.isActive !== undefined) updateData.isActive = Boolean(data.isActive);

    const updated = await prisma.captain.update({
      where: { id: data.id },
      data: updateData,
    });
    return NextResponse.json({ success: true, captain: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, error: "معرف الطيار مطلوب" }, { status: 400 });
    }

    await prisma.captain.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "تم حذف الطيار بنجاح" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
