import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { supplierId, amount, paymentMethod, notes, recordedBy } = data;

    if (!supplierId || !amount || parseFloat(amount) <= 0) {
      return NextResponse.json(
        { success: false, error: "معرف المورد وقيمة المبلغ المدفوع مطلوبان بشكل صحيح" },
        { status: 400 }
      );
    }

    const payAmount = parseFloat(amount);

    const supplier = await prisma.supplier.findUnique({
      where: { id: supplierId },
    });

    if (!supplier) {
      return NextResponse.json({ success: false, error: "المورد غير موجود" }, { status: 404 });
    }

    // Generate Payment Number
    const count = await prisma.supplierPayment.count();
    const paymentNumber = `PAY-${1001 + count}`;
    const today = new Date().toISOString().split("T")[0];

    // 1. Create SupplierPayment
    const payment = await prisma.supplierPayment.create({
      data: {
        paymentNumber,
        supplierId: supplier.id,
        supplierName: supplier.name,
        amount: payAmount,
        paymentDate: today,
        paymentMethod: paymentMethod || "cash",
        treasury: "الخزينة الرئيسية",
        notes: notes || `سداد مستحقات للمورد ${supplier.name}`,
        recordedBy: recordedBy || "الإدارة",
      },
    });

    // 2. Decrement Supplier current balance
    const updatedSupplier = await prisma.supplier.update({
      where: { id: supplier.id },
      data: {
        currentBalance: {
          decrement: payAmount,
        },
      },
    });

    // 3. Record Treasury Outflow
    // Calculate new treasury balance
    const lastTx = await prisma.treasuryTransaction.findFirst({
      orderBy: { createdAt: "desc" },
    });
    const currentTreasuryBal = lastTx ? lastTx.balanceAfter : 0;
    const newTreasuryBal = currentTreasuryBal - payAmount;

    await prisma.treasuryTransaction.create({
      data: {
        type: "out",
        category: "سداد مورد",
        amount: payAmount,
        balanceAfter: newTreasuryBal,
        description: `سداد مستحقات للمورد: ${supplier.name} (${paymentNumber})`,
        reference: paymentNumber,
        recordedBy: recordedBy || "الإدارة",
      },
    });

    return NextResponse.json({
      success: true,
      payment,
      updatedBalance: updatedSupplier.currentBalance,
      message: `تم سداد مبلغ ${payAmount} ج.م للمورد بنجاح وتسجيله في الخزينة`,
    });
  } catch (error: any) {
    console.error("Supplier payment error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
