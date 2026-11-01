import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const query = searchParams.get("q");
    const offersOnly = searchParams.get("offers") === "true";
    const expressOnly = searchParams.get("express") === "true";
    const showAll = searchParams.get("all") === "true";

    const where: any = {};
    if (!showAll) {
      where.inStock = true;
    }

    if (category && category !== "الكل") {
      where.category = category;
    }

    if (offersOnly) {
      where.isOffer = true;
    }

    if (expressOnly) {
      where.isExpress = true;
    }

    if (query) {
      where.OR = [
        { nameAr: { contains: query, mode: "insensitive" } },
        { brand: { contains: query, mode: "insensitive" } },
        { category: { contains: query, mode: "insensitive" } },
        { barcode: { contains: query, mode: "insensitive" } },
      ];
    }

    const products = await prisma.product.findMany({
      where,
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });

    return NextResponse.json({ success: true, products });
  } catch (error: any) {
    console.error("Products API error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const costPrice = data.costPrice ? parseFloat(data.costPrice) : Math.round(parseFloat(data.basePrice) * 0.8);
    const stockQty = data.stockQty !== undefined ? parseInt(data.stockQty) : 100;
    const openingStock = data.openingStock !== undefined ? parseInt(data.openingStock) : stockQty;

    const product = await prisma.product.create({
      data: {
        nameAr: data.nameAr,
        brand: data.brand || "المرواني",
        category: data.category || "بقالة عامة",
        unit: data.unit || "1 كجم",
        barcode: data.barcode || null,
        costPrice,
        basePrice: parseFloat(data.basePrice),
        originalPrice: data.originalPrice ? parseFloat(data.originalPrice) : null,
        discountPercent: data.discountPercent ? parseInt(data.discountPercent) : null,
        isOffer: Boolean(data.isOffer),
        isExpress: data.isExpress !== undefined ? Boolean(data.isExpress) : true,
        isWeighted: Boolean(data.isWeighted),
        inStock: data.inStock !== undefined ? Boolean(data.inStock) : true,
        stockQty,
        minStockQty: data.minStockQty ? parseInt(data.minStockQty) : 15,
        openingStock,
        image: data.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",
        description: data.description || null,
      },
    });

    // Record initial stock movement
    await prisma.stockMovement.create({
      data: {
        productId: product.id,
        productName: product.nameAr,
        movementType: "opening",
        quantity: stockQty,
        balanceAfter: stockQty,
        unitCost: costPrice,
        reference: "NEW-PRODUCT",
        notes: "تسجيل صنف جديد ورصيد أول المدة",
        performedBy: data.recordedBy || "الإدارة",
      },
    });

    return NextResponse.json({ success: true, product });
  } catch (error: any) {
    console.error("Product create error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    if (!data.id) {
      return NextResponse.json({ success: false, error: "معرف الصنف مطلوب" }, { status: 400 });
    }

    const current = await prisma.product.findUnique({ where: { id: data.id } });
    if (!current) {
      return NextResponse.json({ success: false, error: "الصنف غير موجود" }, { status: 404 });
    }

    const updateData: any = {};
    if (data.nameAr !== undefined) updateData.nameAr = data.nameAr;
    if (data.brand !== undefined) updateData.brand = data.brand;
    if (data.category !== undefined) updateData.category = data.category;
    if (data.unit !== undefined) updateData.unit = data.unit;
    if (data.barcode !== undefined) updateData.barcode = data.barcode;
    if (data.costPrice !== undefined) updateData.costPrice = parseFloat(data.costPrice);
    if (data.basePrice !== undefined) updateData.basePrice = parseFloat(data.basePrice);
    if (data.originalPrice !== undefined) updateData.originalPrice = data.originalPrice ? parseFloat(data.originalPrice) : null;
    if (data.discountPercent !== undefined) updateData.discountPercent = data.discountPercent ? parseInt(data.discountPercent) : null;
    if (data.isOffer !== undefined) updateData.isOffer = Boolean(data.isOffer);
    if (data.isExpress !== undefined) updateData.isExpress = Boolean(data.isExpress);
    if (data.isWeighted !== undefined) updateData.isWeighted = Boolean(data.isWeighted);
    if (data.inStock !== undefined) updateData.inStock = Boolean(data.inStock);
    if (data.minStockQty !== undefined) updateData.minStockQty = parseInt(data.minStockQty);
    if (data.image !== undefined) updateData.image = data.image;
    if (data.description !== undefined) updateData.description = data.description;

    // If stockQty is updated manually (adjustment)
    if (data.stockQty !== undefined && parseInt(data.stockQty) !== current.stockQty) {
      const newQty = parseInt(data.stockQty);
      const diff = newQty - current.stockQty;
      updateData.stockQty = newQty;

      await prisma.stockMovement.create({
        data: {
          productId: current.id,
          productName: updateData.nameAr || current.nameAr,
          movementType: "adjustment",
          quantity: diff,
          balanceAfter: newQty,
          unitCost: updateData.costPrice || current.costPrice,
          reference: "ADJ-MANUAL",
          notes: data.adjustmentReason || "تعديل رصيد يدوي من لوحة التحكم",
          performedBy: data.recordedBy || "الإدارة",
        },
      });
    }

    const updated = await prisma.product.update({
      where: { id: data.id },
      data: updateData,
    });

    return NextResponse.json({ success: true, product: updated });
  } catch (error: any) {
    console.error("Product update error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "معرف الصنف مطلوب" }, { status: 400 });
    }

    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "تم حذف الصنف بنجاح" });
  } catch (error: any) {
    console.error("Product delete error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
