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

export async function POST(req: Request) {
  try {
    const { name, username, phone, pin, role, password } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ success: false, error: "الاسم ورقم الهاتف مطلوبان" }, { status: 400 });
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        username: username || null,
        phone,
        pin: pin || "123456",
        role: role || "cashier",
        passwordHash: password || "123456",
        branch: "المعادي",
        isActive: true,
      },
    });

    return NextResponse.json({ success: true, user: newUser });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, name, username, phone, isActive, password, pin, role } = await req.json();

    if (!id) {
      return NextResponse.json({ success: false, error: "معرف المستخدم مطلوب" }, { status: 400 });
    }

    const data: any = {};
    if (name) data.name = name;
    if (username !== undefined) data.username = username;
    if (phone) data.phone = phone;
    if (isActive !== undefined) data.isActive = Boolean(isActive);
    if (password) data.passwordHash = password;
    if (pin) data.pin = String(pin);
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

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "معرف المستخدم مطلوب" }, { status: 400 });
    }

    // Protect maestro from being deleted
    const user = await prisma.user.findUnique({ where: { id } });
    if (user?.username === "maestro" || user?.role === "owner") {
      return NextResponse.json({ success: false, error: "لا يمكن حذف حساب المالك الرئيسي (المايسترو)" }, { status: 403 });
    }

    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "تم حذف الموظف بنجاح" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
