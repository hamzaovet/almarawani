import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { identifier, password, pin } = await req.json();

    if (!identifier && !pin) {
      return NextResponse.json(
        { success: false, error: "يرجى تحديد الحساب وإدخال كود الـ PIN السري" },
        { status: 400 }
      );
    }

    let user = null;

    if (identifier && pin) {
      // Find specific user and check their PIN
      user = await prisma.user.findFirst({
        where: {
          OR: [
            { username: { equals: identifier, mode: "insensitive" } },
            { phone: identifier },
          ],
          pin: String(pin),
        },
      });

      if (!user) {
        return NextResponse.json(
          { success: false, error: "كود الـ PIN غير صحيح لهذا الحساب!" },
          { status: 401 }
        );
      }
    } else if (pin) {
      // Direct PIN entry
      user = await prisma.user.findFirst({
        where: { pin: String(pin) },
      });

      if (!user) {
        return NextResponse.json(
          { success: false, error: "كود الـ PIN غير مسجل لأي موظف في السيستم" },
          { status: 401 }
        );
      }
    } else {
      // Credentials login
      user = await prisma.user.findFirst({
        where: {
          OR: [
            { username: { equals: identifier, mode: "insensitive" } },
            { phone: identifier },
          ],
        },
      });

      if (!user) {
        return NextResponse.json(
          { success: false, error: "اسم المستخدم أو رقم الهاتف غير مسجل" },
          { status: 401 }
        );
      }

      if (password && user.passwordHash && user.passwordHash !== password) {
        return NextResponse.json(
          { success: false, error: "كلمة المرور غير صحيحة" },
          { status: 401 }
        );
      }
    }

    if (!user.isActive) {
      return NextResponse.json(
        { success: false, error: "هذا الحساب تم تعطيله من قِبل إدارة سوبرماركت المرواني" },
        { status: 403 }
      );
    }

    const { passwordHash, ...safeUser } = user;
    return NextResponse.json({ success: true, user: safeUser });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
