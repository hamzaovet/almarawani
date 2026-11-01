import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const showAll = searchParams.get("all") === "true";

    const zones = await prisma.deliveryZone.findMany({
      where: showAll ? {} : { isActive: true },
      orderBy: { fee: "asc" },
    });
    return NextResponse.json({ success: true, zones });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data.nameAr || data.fee === undefined) {
      return NextResponse.json({ success: false, error: "اسم المنطقة ورسوم التوصيل مطلوبان" }, { status: 400 });
    }

    const zone = await prisma.deliveryZone.create({
      data: {
        nameAr: data.nameAr,
        fee: parseFloat(data.fee),
        timeMinutes: data.timeMinutes ? parseInt(data.timeMinutes) : 45,
        minOrder: data.minOrder ? parseFloat(data.minOrder) : 100,
        isActive: data.isActive !== undefined ? Boolean(data.isActive) : true,
      },
    });

    return NextResponse.json({ success: true, zone });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    if (!data.id) {
      return NextResponse.json({ success: false, error: "معرف المنطقة مطلوب" }, { status: 400 });
    }

    const updateData: any = {};
    if (data.nameAr !== undefined) updateData.nameAr = data.nameAr;
    if (data.fee !== undefined) updateData.fee = parseFloat(data.fee);
    if (data.timeMinutes !== undefined) updateData.timeMinutes = parseInt(data.timeMinutes);
    if (data.minOrder !== undefined) updateData.minOrder = parseFloat(data.minOrder);
    if (data.isActive !== undefined) updateData.isActive = Boolean(data.isActive);

    const updated = await prisma.deliveryZone.update({
      where: { id: data.id },
      data: updateData,
    });

    return NextResponse.json({ success: true, zone: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, error: "معرف المنطقة مطلوب" }, { status: 400 });
    }

    await prisma.deliveryZone.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "تم حذف المنطقة بنجاح" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
