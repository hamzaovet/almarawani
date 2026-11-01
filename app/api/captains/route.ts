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
