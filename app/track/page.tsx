"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingBag,
  Clock,
  CheckCircle2,
  Package,
  Bike,
  Home,
  Phone,
  MapPin,
  Calendar,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchOrder = async (searchVal: string) => {
    if (!searchVal.trim()) return;
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`/api/track?q=${encodeURIComponent(searchVal.trim())}`);
      const data = await res.json();
      if (data.success && data.order) {
        setOrder(data.order);
      } else {
        setOrder(null);
        setError(data.error || "لم يتم العثور على أي طلب مسجل بهذا الرقم");
      }
    } catch {
      setError("حدث خطأ في الاتصال، يرجى المحاولة ثانية");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialQuery) {
      fetchOrder(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchOrder(query);
  };

  // Status mapping to steps 1..4
  const getStepIndex = (status: string) => {
    switch (status) {
      case "new":
        return 1;
      case "preparing":
        return 2;
      case "ready":
      case "out_for_delivery":
        return 3;
      case "delivered":
        return 4;
      default:
        return 1;
    }
  };

  const currentStep = order ? getStepIndex(order.status) : 1;

  let parsedItems = [];
  try {
    parsedItems = order ? JSON.parse(order.items || "[]") : [];
  } catch {
    parsedItems = [];
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      {/* Search Bar Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#004f9f]" />
          <h1 className="text-lg font-black text-slate-900">
            تتبع خط سير طلبك لحظياً 🛵
          </h1>
        </div>
        <p className="text-xs text-slate-500">
          أدخل كود الطلب (مثال: MRW-1001) أو رقم هاتفك المسجل لمعرفة موعد وصول الطيار لباب بيتك بالمعادي:
        </p>

        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="أدخل كود الطلب MRW-XXXX أو رقم الهاتف..."
              className="w-full h-11 pl-4 pr-10 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#004f9f] outline-none font-medium"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 h-11 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl text-xs sm:text-sm font-extrabold shadow-sm transition-all"
          >
            {loading ? "جاري البحث..." : "تتبع الطلب"}
          </button>
        </form>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Order Details & Stepper */}
      {order && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Status Visual Stepper */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs text-slate-400 block font-bold">كود الطلب</span>
                <span className="text-2xl font-black text-[#004f9f]">
                  {order.orderNumber}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-bold">تاريخ وتوقيت الطلب</span>
                <span className="text-xs font-bold text-slate-700">
                  {new Date(order.createdAt).toLocaleDateString("ar-EG")} •{" "}
                  {new Date(order.createdAt).toLocaleTimeString("ar-EG", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>

            {/* 4 Steps */}
            <div className="grid grid-cols-4 gap-2 text-center relative">
              {/* Connecting Bar */}
              <div className="absolute top-5 inset-x-8 h-1 bg-slate-100 -z-0">
                <div
                  className="h-1 bg-[#004f9f] transition-all duration-500"
                  style={{
                    width: `${((currentStep - 1) / 3) * 100}%`,
                  }}
                />
              </div>

              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-sm transition-all ${
                    currentStep >= 1
                      ? "bg-[#004f9f] text-white"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-slate-800">
                  تم استلام الطلب
                </div>
                <div className="text-[9px] text-slate-400">بالسوبرماركت</div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-sm transition-all ${
                    currentStep >= 2
                      ? "bg-[#004f9f] text-white"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <Package className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-slate-800">
                  جاري التجميع
                </div>
                <div className="text-[9px] text-slate-400">تعبئة الأكياس</div>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-sm transition-all ${
                    currentStep >= 3
                      ? "bg-amber-500 text-white animate-pulse"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <Bike className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-slate-800">
                  مع الطيار في الطريق
                </div>
                <div className="text-[9px] text-slate-400">خلال دقائق 🛵</div>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-sm transition-all ${
                    currentStep >= 4
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-slate-800">
                  تم التسليم
                </div>
                <div className="text-[9px] text-slate-400">بالهنا والشفاء</div>
              </div>
            </div>

            {/* Delivery Captain Card */}
            {order.captainName && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#004f9f] text-white flex items-center justify-center font-bold text-lg">
                    🛵
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold">
                      كابتن التوصيل المعين:
                    </div>
                    <div className="font-extrabold text-sm text-[#002d62]">
                      {order.captainName}
                    </div>
                    <div className="text-xs text-slate-600">
                      سكوتر دليفري سريع • فرع المعادي
                    </div>
                  </div>
                </div>

                {order.captainPhone && (
                  <a
                    href={`tel:${order.captainPhone}`}
                    className="px-4 py-2 rounded-xl bg-[#004f9f] hover:bg-[#003875] text-white text-xs font-bold shadow-sm flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>اتصال بالطيار</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Delivery Details Card */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-extrabold text-sm text-slate-900 border-b border-slate-100 pb-2">
              تفاصيل التوصيل وعنوان الاستلام
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">اسم العميل:</span>
                <span className="font-bold text-slate-800">{order.customerName}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">رقم الهاتف:</span>
                <span className="font-bold text-slate-800" dir="ltr">
                  {order.phone}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">منطقة التوصيل:</span>
                <span className="font-bold text-[#004f9f]">{order.zone}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">العنوان التفصيلي:</span>
                <span className="font-bold text-slate-800">{order.address}</span>
              </div>
              {order.notes && (
                <div className="sm:col-span-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block font-medium">ملاحظات العميل:</span>
                  <span className="font-bold text-slate-700">{order.notes}</span>
                </div>
              )}
            </div>
          </div>

          {/* Items List Card */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-extrabold text-sm text-slate-900 border-b border-slate-100 pb-2">
              أصناف الطلب ({parsedItems.length})
            </h3>
            <div className="space-y-2">
              {parsedItems.map((item: any, i: number) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-xs py-1.5 border-b border-slate-50 last:border-none"
                >
                  <div>
                    <span className="font-bold text-slate-800">{item.nameAr}</span>
                    <span className="text-slate-400 text-[11px] mr-2">
                      ({item.qty} × {item.unitPrice.toFixed(2)} ج.م)
                    </span>
                  </div>
                  <span className="font-black text-slate-900">
                    {item.total.toFixed(2)} ج.م
                  </span>
                </div>
              ))}
            </div>

            {/* Total Calculation */}
            <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-500 font-medium">
                <span>إجمالي الأصناف:</span>
                <span>{order.subtotal.toFixed(2)} ج.م</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>رسوم التوصيل:</span>
                <span>{order.deliveryFee === 0 ? "مجاناً 🚚" : `${order.deliveryFee.toFixed(2)} ج.م`}</span>
              </div>
              <div className="flex justify-between text-slate-900 font-black text-sm pt-2 border-t border-slate-200">
                <span>المبلغ المطلوب سداده:</span>
                <span className="text-[#004f9f] text-base font-black">
                  {order.total.toFixed(2)} ج.م ({order.paymentMethod === "cash" ? "كاش" : "فيزا"})
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default function TrackOrderPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* Top Header */}
      <header className="bg-[#002d62] text-white py-4 px-4 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-white text-[#004f9f] flex items-center justify-center font-black">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-lg text-white">سوبرماركت المرواني</span>
              <span className="text-[10px] text-blue-200 block">فرع المعادي</span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-xs font-bold text-amber-300 hover:text-white transition-colors flex items-center gap-1"
          >
            <span>العودة للمتجر</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      <Suspense fallback={
        <div className="text-center py-20 text-slate-400 font-bold text-sm">
          جاري تحميل بيانات التتبع...
        </div>
      }>
        <TrackOrderContent />
      </Suspense>
    </div>
  );
}

