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
    const balance = lastTx ? lastTx.balanceAfter : Math.max(0, totalIn - totalOut);

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
    const { type, category, amount, description, reference, recordedBy } = data;

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
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
