import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const supplierId = searchParams.get("supplierId");

    if (!supplierId) {
      return NextResponse.json({ success: false, error: "معرف المورد مطلوب" }, { status: 400 });
    }

    const supplier = await prisma.supplier.findUnique({
      where: { id: supplierId },
      include: {
        purchases: {
          orderBy: { createdAt: "desc" },
        },
        payments: {
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!supplier) {
      return NextResponse.json({ success: false, error: "المورد غير موجود" }, { status: 404 });
    }

    // Build timeline ledger
    const transactions: any[] = [];

    // Opening balance
    transactions.push({
      date: supplier.createdAt.toISOString().split("T")[0],
      type: "opening",
      typeAr: "رصيد أول المدة",
      reference: "INIT-BAL",
      debit: 0,
      credit: supplier.openingBalance,
      notes: "رصيد بداية التعامل المسجل في السيستم",
      timestamp: new Date(supplier.createdAt).getTime(),
    });

    // Invoices (Purchases)
    for (const pur of supplier.purchases) {
      transactions.push({
        date: pur.invoiceDate || pur.createdAt.toISOString().split("T")[0],
        type: "purchase",
        typeAr: "فاتورة مشتريات واردة",
        reference: pur.invoiceNumber,
        debit: 0,
        credit: pur.totalAmount,
        notes: `إجمالي: ${pur.totalAmount} ج.م (مدفوع: ${pur.paidAmount} ج.م • آجل: ${pur.remainingAmount} ج.م)`,
        timestamp: new Date(pur.createdAt).getTime(),
      });

      // If there was an immediate cash payment recorded with the invoice
      if (pur.paidAmount > 0) {
        transactions.push({
          date: pur.invoiceDate || pur.createdAt.toISOString().split("T")[0],
          type: "downpayment",
          typeAr: "دفعة نقدية فورية مع الفاتورة",
          reference: pur.invoiceNumber,
          debit: pur.paidAmount,
          credit: 0,
          notes: "سداد نقدي مباشر عند استلام البضاعة",
          timestamp: new Date(pur.createdAt).getTime() + 10,
        });
      }
    }

    // Payments (سندات صرف)
    for (const pay of supplier.payments) {
      transactions.push({
        date: pay.paymentDate || pay.createdAt.toISOString().split("T")[0],
        type: "payment",
        typeAr: "سند صرف / سداد نقدي للمورد",
        reference: pay.paymentNumber,
        debit: pay.amount,
        credit: 0,
        notes: `${pay.notes || "سداد مستحقات"} • طريقة الدفع: ${pay.paymentMethod}`,
        timestamp: new Date(pay.createdAt).getTime(),
      });
    }

    // Sort chronologically
    transactions.sort((a, b) => a.timestamp - b.timestamp);

    // Compute running balance
    let runningBalance = 0;
    for (const tx of transactions) {
      runningBalance += tx.credit - tx.debit;
      tx.runningBalance = runningBalance;
    }

    return NextResponse.json({
      success: true,
      supplier: {
        id: supplier.id,
        name: supplier.name,
        contactPerson: supplier.contactPerson,
        phone: supplier.phone,
        address: supplier.address,
        category: supplier.category,
        openingBalance: supplier.openingBalance,
        currentBalance: runningBalance,
      },
      transactions: transactions.reverse(), // most recent first for display
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
