import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const expenses = await prisma.expense.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, expenses });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { description, amount, expenseDate, category, recordedBy } = data;

    if (!description || !amount || parseFloat(amount) <= 0) {
      return NextResponse.json({ success: false, error: "بيان المصروف والمبلغ مطلوبان" }, { status: 400 });
    }

    const amt = parseFloat(amount);
    const dateStr = expenseDate || new Date().toISOString().split("T")[0];

    // 1. Create Expense
    const expense = await prisma.expense.create({
      data: {
        description,
        amount: amt,
        expenseDate: dateStr,
        category: category || "تشغيل ونثريات",
        recordedBy: recordedBy || "الإدارة",
      },
    });

    // 2. Record Treasury Outflow
    const lastTx = await prisma.treasuryTransaction.findFirst({
      orderBy: { createdAt: "desc" },
    });
    const currentTreasuryBal = lastTx ? lastTx.balanceAfter : 0;
    const newTreasuryBal = currentTreasuryBal - amt;

    await prisma.treasuryTransaction.create({
      data: {
        type: "out",
        category: `مصروف: ${expense.category}`,
        amount: amt,
        balanceAfter: newTreasuryBal,
        description: `صرف: ${description}`,
        reference: expense.id,
        recordedBy: recordedBy || "الإدارة",
      },
    });

    return NextResponse.json({ success: true, expense, message: "تم تسجيل المصروف وصرفه من الخزينة بنجاح" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, error: "معرف المصروف مطلوب" }, { status: 400 });
    }

    await prisma.expense.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "تم حذف المصروف بنجاح" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
