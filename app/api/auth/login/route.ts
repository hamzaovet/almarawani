import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { identifier, password, pin } = await req.json();

    if (!identifier && !pin) {
      return NextResponse.json({ success: false, error: "يرجى إدخال اسم المستخدم أو كود الـ PIN" }, { status: 400 });
    }

    let user = null;

    if (pin) {
      user = await prisma.user.findFirst({
        where: { pin: String(pin) },
      });
    } else {
      user = await prisma.user.findFirst({
        where: {
          OR: [
            { username: { equals: identifier, mode: "insensitive" } },
            { phone: identifier },
          ],
        },
      });
    }

    if (!user) {
      return NextResponse.json({ success: false, error: "بيانات الدخول غير صحيحة" }, { status: 401 });
    }

    if (!user.isActive) {
      return NextResponse.json({ success: false, error: "هذا الحساب تم تعطيله من قِبل إدارة سوبرماركت المرواني" }, { status: 403 });
    }

    // Verify password if provided
    if (password && user.passwordHash && user.passwordHash !== password) {
      return NextResponse.json({ success: false, error: "كلمة المرور غير صحيحة" }, { status: 401 });
    }

    const { passwordHash, ...safeUser } = user;
    return NextResponse.json({ success: true, user: safeUser });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
