import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        username: true,
        phone: true,
        pin: true,
        role: true,
        branch: true,
        isActive: true,
        createdAt: true,
      },
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json({ success: true, users });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, isActive, password, pin, role } = await req.json();

    if (!id) {
      return NextResponse.json({ success: false, error: "معرف المستخدم مطلوب" }, { status: 400 });
    }

    const data: any = {};
    if (isActive !== undefined) data.isActive = Boolean(isActive);
    if (password) data.passwordHash = password;
    if (pin) data.pin = pin;
    if (role) data.role = role;

    const updated = await prisma.user.update({
      where: { id },
      data,
    });

    return NextResponse.json({ success: true, user: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
