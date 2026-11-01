import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const suppliers = await prisma.supplier.findMany({
      include: {
        _count: {
          select: { purchases: true, payments: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, suppliers });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data.name || !data.phone) {
      return NextResponse.json({ success: false, error: "اسم المورد ورقم الهاتف مطلوبان" }, { status: 400 });
    }

    const openingBalance = data.openingBalance ? parseFloat(data.openingBalance) : 0;

    const supplier = await prisma.supplier.create({
      data: {
        name: data.name,
        contactPerson: data.contactPerson || null,
        phone: data.phone,
        address: data.address || null,
        category: data.category || "أغذية وبقالة عامة",
        openingBalance,
        currentBalance: openingBalance,
        isActive: data.isActive !== undefined ? Boolean(data.isActive) : true,
        notes: data.notes || null,
      },
    });

    return NextResponse.json({ success: true, supplier });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    if (!data.id) {
      return NextResponse.json({ success: false, error: "معرف المورد مطلوب" }, { status: 400 });
    }

    const updateData: any = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.contactPerson !== undefined) updateData.contactPerson = data.contactPerson;
    if (data.phone !== undefined) updateData.phone = data.phone;
    if (data.address !== undefined) updateData.address = data.address;
    if (data.category !== undefined) updateData.category = data.category;
    if (data.isActive !== undefined) updateData.isActive = Boolean(data.isActive);
    if (data.notes !== undefined) updateData.notes = data.notes;
    if (data.currentBalance !== undefined) updateData.currentBalance = parseFloat(data.currentBalance);

    const updated = await prisma.supplier.update({
      where: { id: data.id },
      data: updateData,
    });

    return NextResponse.json({ success: true, supplier: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, error: "معرف المورد مطلوب" }, { status: 400 });
    }

    await prisma.supplier.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "تم حذف المورد بنجاح" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
