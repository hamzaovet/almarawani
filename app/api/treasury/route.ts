import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const transactions = await prisma.treasuryTransaction.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
    });

    // Compute metrics
    let totalIn = 0;
    let totalOut = 0;

    for (const tx of transactions) {
      if (tx.type === "in") {
        totalIn += tx.amount;
      } else {
        totalOut += tx.amount;
      }
    }

    const lastTx = transactions[0];
    const balance = lastTx ? lastTx.balanceAfter : 0;

    // Today's orders total
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayOrders = await prisma.order.aggregate({
      where: {
        createdAt: { gte: today },
        status: { not: "cancelled" },
      },
      _sum: { total: true },
      _count: { id: true },
    });

    return NextResponse.json({
      success: true,
      balance,
      totalIn,
      totalOut,
      todayRevenue: todayOrders._sum.total || 0,
      todayOrdersCount: todayOrders._count.id || 0,
      transactions,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { action, type, category, amount, description, reference, recordedBy, clearPrevious } = data;

    // Special Action: Set or Reset Opening Balance
    if (action === "set_opening_balance") {
      const amt = parseFloat(amount || 0);

      const result = await prisma.$transaction(async (tx) => {
        if (clearPrevious) {
          // Clear all past treasury transactions and expenses
          await tx.treasuryTransaction.deleteMany();
          await tx.expense.deleteMany();
        }

        // Create opening transaction if amount >= 0
        const openingTx = await tx.treasuryTransaction.create({
          data: {
            type: "in",
            category: "رصيد افتتاح",
            amount: amt,
            balanceAfter: amt,
            description: description || "رصيد افتتاح الخزينة النقدية لبداية التشغيل (فرع المعادي)",
            reference: "OPENING-CASH",
            recordedBy: recordedBy || "المعلم المايسترو (المالك)",
          },
        });

        return openingTx;
      });

      return NextResponse.json({
        success: true,
        transaction: result,
        newBalance: amt,
        message: `تم تحديد رصيد أول المدة بنجاح بقيمة ${amt.toFixed(2)} ج.م`,
      });
    }

    // Standard manual inflow / outflow
    if (!type || !amount || parseFloat(amount) <= 0) {
      return NextResponse.json({ success: false, error: "نوع الحركة وقيمة المبلغ مطلوبان" }, { status: 400 });
    }

    const amt = parseFloat(amount);
    const lastTx = await prisma.treasuryTransaction.findFirst({
      orderBy: { createdAt: "desc" },
    });
    const currentBal = lastTx ? lastTx.balanceAfter : 0;
    const balanceAfter = type === "in" ? currentBal + amt : currentBal - amt;

    const tx = await prisma.treasuryTransaction.create({
      data: {
        type,
        category: category || (type === "in" ? "إيداع نقدي" : "سحب نقدي"),
        amount: amt,
        balanceAfter,
        description: description || "حركة خزينة يدوية",
        reference: reference || null,
        recordedBy: recordedBy || "الإدارة",
      },
    });

    return NextResponse.json({ success: true, transaction: tx, newBalance: balanceAfter });
  } catch (error: any) {
    console.error("Treasury POST error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const clearAll = searchParams.get("clearAll") === "true";
    const id = searchParams.get("id");

    if (clearAll) {
      // Clear all demo transactions & expenses
      await prisma.$transaction([
        prisma.treasuryTransaction.deleteMany(),
        prisma.expense.deleteMany(),
      ]);
      return NextResponse.json({ success: true, message: "تم تفريغ وحذف سجلات الخزينة والمصروفات بالكامل" });
    }

    if (id) {
      await prisma.treasuryTransaction.delete({ where: { id } });
      return NextResponse.json({ success: true, message: "تم حذف الحركة بنجاح" });
    }

    return NextResponse.json({ success: false, error: "معرف الحركة مطلوب" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
