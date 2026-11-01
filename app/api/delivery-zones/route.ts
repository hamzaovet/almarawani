import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const zones = await prisma.deliveryZone.findMany({
      where: { isActive: true },
      orderBy: { fee: "asc" },
    });
    return NextResponse.json({ success: true, zones });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
