import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const query = searchParams.get("q");
    const offersOnly = searchParams.get("offers") === "true";
    const expressOnly = searchParams.get("express") === "true";

    const where: any = { inStock: true };

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
    const product = await prisma.product.create({
      data: {
        nameAr: data.nameAr,
        brand: data.brand || "المرواني",
        category: data.category,
        unit: data.unit || "1 كجم",
        barcode: data.barcode || null,
        basePrice: parseFloat(data.basePrice),
        originalPrice: data.originalPrice ? parseFloat(data.originalPrice) : null,
        discountPercent: data.discountPercent ? parseInt(data.discountPercent) : null,
        isOffer: Boolean(data.isOffer),
        isExpress: data.isExpress !== undefined ? Boolean(data.isExpress) : true,
        isWeighted: Boolean(data.isWeighted),
        inStock: data.inStock !== undefined ? Boolean(data.inStock) : true,
        stockQty: data.stockQty ? parseInt(data.stockQty) : 100,
        image: data.image || null,
        description: data.description || null,
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
      return NextResponse.json({ success: false, error: "ID required" }, { status: 400 });
    }

    const updated = await prisma.product.update({
      where: { id: data.id },
      data: {
        nameAr: data.nameAr,
        brand: data.brand,
        category: data.category,
        unit: data.unit,
        barcode: data.barcode,
        basePrice: data.basePrice !== undefined ? parseFloat(data.basePrice) : undefined,
        originalPrice: data.originalPrice ? parseFloat(data.originalPrice) : null,
        discountPercent: data.discountPercent ? parseInt(data.discountPercent) : null,
        isOffer: data.isOffer !== undefined ? Boolean(data.isOffer) : undefined,
        isExpress: data.isExpress !== undefined ? Boolean(data.isExpress) : undefined,
        isWeighted: data.isWeighted !== undefined ? Boolean(data.isWeighted) : undefined,
        inStock: data.inStock !== undefined ? Boolean(data.inStock) : undefined,
        stockQty: data.stockQty !== undefined ? parseInt(data.stockQty) : undefined,
        image: data.image,
        description: data.description,
      },
    });

    return NextResponse.json({ success: true, product: updated });
  } catch (error: any) {
    console.error("Product update error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
