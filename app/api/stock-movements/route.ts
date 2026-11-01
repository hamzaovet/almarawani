import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    const where: any = {};
    if (productId) {
      where.productId = productId;
    }

    const movements = await prisma.stockMovement.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 100,
    });

    let product = null;
    if (productId) {
      product = await prisma.product.findUnique({
        where: { id: productId },
      });
    }

    return NextResponse.json({ success: true, movements, product });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { productId, newStockQty, reason, performedBy } = data;

    if (!productId || newStockQty === undefined) {
      return NextResponse.json({ success: false, error: "معرف الصنف والرصيد الجديد مطلوبان" }, { status: 400 });
    }

    const prod = await prisma.product.findUnique({ where: { id: productId } });
    if (!prod) {
      return NextResponse.json({ success: false, error: "الصنف غير موجود" }, { status: 404 });
    }

    const newQty = parseInt(newStockQty);
    const diff = newQty - prod.stockQty;

    // Update product stock
    const updated = await prisma.product.update({
      where: { id: prod.id },
      data: {
        stockQty: newQty,
        inStock: newQty > 0,
      },
    });

    // Record adjustment movement
    const movement = await prisma.stockMovement.create({
      data: {
        productId: prod.id,
        productName: prod.nameAr,
        movementType: "adjustment",
        quantity: diff,
        balanceAfter: newQty,
        unitCost: prod.costPrice,
        reference: `ADJ-${Date.now().toString().slice(-4)}`,
        notes: reason || (diff >= 0 ? `تسوية جردية بالزيادة (+${diff})` : `تسوية جردية بالعجز (${diff})`),
        performedBy: performedBy || "الإدارة",
      },
    });

    return NextResponse.json({ success: true, product: updated, movement });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
