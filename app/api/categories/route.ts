import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { sortOrder: "asc" },
    });
    return NextResponse.json({ success: true, categories });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data.nameAr) {
      return NextResponse.json({ success: false, error: "اسم القسم مطلوب" }, { status: 400 });
    }

    const count = await prisma.category.count();

    const category = await prisma.category.create({
      data: {
        nameAr: data.nameAr,
        nameEn: data.nameEn || null,
        badge: data.badge || null,
        icon: data.icon || "ShoppingBag",
        sortOrder: data.sortOrder !== undefined ? parseInt(data.sortOrder) : count + 1,
      },
    });

    return NextResponse.json({ success: true, category });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    if (!data.id) {
      return NextResponse.json({ success: false, error: "معرف القسم مطلوب" }, { status: 400 });
    }

    const updateData: any = {};
    if (data.nameAr !== undefined) updateData.nameAr = data.nameAr;
    if (data.badge !== undefined) updateData.badge = data.badge;
    if (data.icon !== undefined) updateData.icon = data.icon;
    if (data.sortOrder !== undefined) updateData.sortOrder = parseInt(data.sortOrder);

    const updated = await prisma.category.update({
      where: { id: data.id },
      data: updateData,
    });

    return NextResponse.json({ success: true, category: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, error: "معرف القسم مطلوب" }, { status: 400 });
    }

    await prisma.category.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "تم حذف القسم بنجاح" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
