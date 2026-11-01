import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const format = searchParams.get("format") || "standard"; // standard, rongta, cas

    // Fetch weighted products
    const products = await prisma.product.findMany({
      where: { isWeighted: true },
      orderBy: { scaleItemCode: "asc" },
    });

    let content = "";
    let filename = `scale-plu-${format}-${new Date().toISOString().split("T")[0]}`;
    let contentType = "text/csv; charset=utf-8";

    if (format === "rongta") {
      // Rongta RLS1000 / Xprinter format:
      // PLU,Name,LFCode,CodeType,UnitPrice,PackageType,WeightUnit,Department,Tare,ShelfLife
      const headers = ["PLU", "Name", "LFCode", "CodeType", "UnitPrice", "PackageType", "WeightUnit", "Department", "Tare", "ShelfLife"];
      const rows = products.map((p, idx) => {
        const plu = p.scaleItemCode || String(idx + 1).padStart(5, "0");
        const safeName = p.nameAr.replace(/,/g, " ");
        return [
          plu,
          safeName,
          plu,
          "0", // 0: Weight, 1: Piece
          p.basePrice.toFixed(2),
          "0", // Normal
          "kg",
          "1", // Deli / Produce dept
          p.scaleTareWeight || 0,
          p.shelfLifeDays || 3,
        ].join(",");
      });
      content = "\uFEFF" + [headers.join(","), ...rows].join("\r\n");
      filename += ".csv";
    } else if (format === "cas") {
      // CAS CL5000 / CL-Works format:
      // ItemCode,Name1,DeptNo,GroupNo,UnitPrice,UnitWeight,TareWeight,BarcodeType,ShelfLife
      const headers = ["ItemCode", "Name1", "DeptNo", "GroupNo", "UnitPrice", "UnitWeight", "TareWeight", "BarcodeType", "ShelfLife"];
      const rows = products.map((p, idx) => {
        const plu = p.scaleItemCode || String(idx + 1).padStart(5, "0");
        const safeName = p.nameAr.replace(/,/g, " ");
        return [
          plu,
          safeName,
          "1",
          "1",
          p.basePrice.toFixed(2),
          "1", // 1 kg
          p.scaleTareWeight || 0,
          "EAN13",
          p.shelfLifeDays || 3,
        ].join(",");
      });
      content = "\uFEFF" + [headers.join(","), ...rows].join("\r\n");
      filename += ".csv";
    } else {
      // Standard Excel CSV
      const headers = ["كود الميزان (PLU)", "اسم الصنف", "سعر الكيلو (ج.م)", "فترة الصلاحية (أيام)", "وزن الفارغ (جرام)", "القسم", "الباركود الدولي"];
      const rows = products.map((p, idx) => {
        const plu = p.scaleItemCode || String(idx + 1).padStart(5, "0");
        return [
          plu,
          `"${p.nameAr.replace(/"/g, '""')}"`,
          p.basePrice.toFixed(2),
          p.shelfLifeDays || 3,
          p.scaleTareWeight || 0,
          `"${p.category}"`,
          p.barcode || "",
        ].join(",");
      });
      content = "\uFEFF" + [headers.join(","), ...rows].join("\r\n");
      filename += ".csv";
    }

    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
