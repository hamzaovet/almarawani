"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bike,
  Phone,
  MessageSquare,
  Navigation,
  CheckCircle2,
  Clock,
  MapPin,
  DollarSign,
  Package,
  ShoppingBag,
  RefreshCw,
  LogOut,
  AlertCircle,
  Truck,
} from "lucide-react";

export default function DeliveryPortalPage() {
  const [user, setUser] = useState<any>(null);
  const [pinInput, setPinInput] = useState("");
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [filterTab, setFilterTab] = useState<"active" | "delivered">("active");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("almarawani_delivery_user");
      if (saved) {
        setUser(JSON.parse(saved));
      }
    } catch {}
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/orders");
      const data = await res.json();
      if (data.success) {
        setOrders(data.orders);
      }
    } catch {
      // Ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
      const interval = setInterval(fetchOrders, 8000);
      return () => clearInterval(interval);
    }
  }, [user]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: pinInput }),
      });
      const data = await res.json();
      if (data.success && data.user) {
        if (data.user.role !== "delivery" && data.user.role !== "owner" && data.user.role !== "manager") {
          setLoginError("هذا الحساب غير مخصص لطياري التوصيل");
          return;
        }
        setUser(data.user);
        localStorage.setItem("almarawani_delivery_user", JSON.stringify(data.user));
      } else {
        setLoginError(data.error || "كود الـ PIN غير صحيح");
      }
    } catch {
      setLoginError("فشل تسجيل الدخول");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("almarawani_delivery_user");
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      await fetch("/api/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: orderId,
          status: newStatus,
          captainId: user?.id,
          captainName: user?.name,
          captainPhone: user?.phone,
        }),
      });
      fetchOrders();
    } catch {
      alert("فشل تحديث حالة الطلب");
    }
  };

  // Filter orders
  const activeOrders = orders.filter(
    (o) => o.status === "new" || o.status === "preparing" || o.status === "ready" || o.status === "out_for_delivery"
  );
  const deliveredOrders = orders.filter((o) => o.status === "delivered");
  const totalCollectedToday = deliveredOrders.reduce((acc, o) => acc + o.total, 0);

  if (!user) {
    return (
      <div className="min-h-screen bg-[#002d62] text-white flex items-center justify-center p-4">
        <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#004f9f] text-white flex items-center justify-center mx-auto shadow-md">
            <Bike className="w-9 h-9" />
          </div>

          <div>
            <h1 className="text-xl font-black text-slate-900">
              بوابة كابتن الدليفري 🛵
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              سوبرماركت المرواني • فرع المعادي
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-right">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                أدخل كود الـ PIN الخاص بك:
              </label>
              <input
                type="password"
                maxLength={6}
                required
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="أدخل 333333"
                className="w-full h-12 text-center tracking-widest text-lg font-black bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-[#004f9f] outline-none"
              />
            </div>

            {loginError && (
              <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs text-center font-bold">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl font-black text-sm shadow-md transition-all"
            >
              دخول كابتن التوصيل ⚡
            </button>
          </form>

          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400">
            كود تجريبي سريع للطيار: <strong>333333</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-12">
      {/* Driver Header */}
      <header className="bg-[#002d62] text-white p-4 shadow-md sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-amber-300 border border-blue-400/30 flex items-center justify-center font-black">
              <Bike className="w-6 h-6" />
            </div>
            <div>
              <div className="font-black text-sm sm:text-base flex items-center gap-2">
                <span>{user.name}</span>
                <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold">
                  متصل وجاهز 🛵
                </span>
              </div>
              <div className="text-xs text-blue-200">
                فرع المعادي • سكوتر دليفري سريع
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchOrders}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="تحديث الطلبات"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={handleLogout}
              className="p-2 rounded-xl bg-white/10 hover:bg-red-500 text-white transition-colors"
              title="تسجيل الخروج"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-2xs text-center">
            <span className="text-[11px] text-slate-400 block font-bold">
              طلبات بالانتظار
            </span>
            <span className="text-xl sm:text-2xl font-black text-amber-500">
              {activeOrders.length}
            </span>
          </div>

          <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-2xs text-center">
            <span className="text-[11px] text-slate-400 block font-bold">
              تم تسليمها اليوم
            </span>
            <span className="text-xl sm:text-2xl font-black text-emerald-600">
              {deliveredOrders.length}
            </span>
          </div>

          <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-2xs text-center">
            <span className="text-[11px] text-slate-400 block font-bold">
              كاش بحوزتك
            </span>
            <span className="text-base sm:text-xl font-black text-[#004f9f]">
              {totalCollectedToday.toFixed(0)} ج.م
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4 pt-4 flex gap-2">
        <button
          onClick={() => setFilterTab("active")}
          className={`flex-1 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
            filterTab === "active"
              ? "bg-[#004f9f] text-white shadow-sm"
              : "bg-white text-slate-600 border border-slate-200"
          }`}
        >
          <Truck className="w-4 h-4" />
          <span>طلبات قيد التوصيل ({activeOrders.length})</span>
        </button>

        <button
          onClick={() => setFilterTab("delivered")}
          className={`flex-1 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
            filterTab === "delivered"
              ? "bg-emerald-600 text-white shadow-sm"
              : "bg-white text-slate-600 border border-slate-200"
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>الطلبات المسلمة ({deliveredOrders.length})</span>
        </button>
      </div>

      {/* Orders List */}
      <main className="max-w-4xl mx-auto px-4 pt-4 space-y-4">
        {(filterTab === "active" ? activeOrders : deliveredOrders).length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-6 space-y-2">
            <Bike className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-bold text-slate-700 text-sm">
              لا توجد طلبات في هذا القسم حالياً
            </h3>
            <p className="text-xs text-slate-400">
              سيظهر أي طلب جديد فور تأكيده من العميل أو الكاشير.
            </p>
          </div>
        ) : (
          (filterTab === "active" ? activeOrders : deliveredOrders).map((order) => {
            let items: any[] = [];
            try {
              items = JSON.parse(order.items || "[]");
            } catch {}

            return (
              <div
                key={order.id}
                className="bg-white rounded-2xl p-5 border-2 border-slate-200 hover:border-[#004f9f]/40 shadow-xs space-y-4"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-xs text-slate-400 font-bold ml-2">
                      كود الطلب:
                    </span>
                    <span className="text-lg font-black text-[#004f9f]">
                      {order.orderNumber}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-extrabold px-2.5 py-1 rounded-lg ${
                        order.status === "delivered"
                          ? "bg-emerald-100 text-emerald-800"
                          : order.status === "out_for_delivery"
                          ? "bg-amber-100 text-amber-800 animate-pulse"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {order.status === "new" && "طلب جديد 🛒"}
                      {order.status === "preparing" && "جاري التجميع 📦"}
                      {order.status === "ready" && "جاهز للاستلام ⚡"}
                      {order.status === "out_for_delivery" && "في الطريق للعميل 🛵"}
                      {order.status === "delivered" && "تم التسليم بنجاح ✅"}
                    </span>
                    <span className="text-xs font-black text-slate-900 bg-slate-100 px-2 py-1 rounded-lg">
                      {order.total.toFixed(2)} ج.م ({order.paymentMethod === "cash" ? "كاش" : "فيزا"})
                    </span>
                  </div>
                </div>

                {/* Customer Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">اسم العميل:</span>
                    <span className="font-extrabold text-slate-800 text-sm">
                      {order.customerName}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block font-medium">منطقة المعادي:</span>
                    <span className="font-extrabold text-[#004f9f]">{order.zone}</span>
                  </div>

                  <div className="sm:col-span-2">
                    <span className="text-slate-400 block font-medium">العنوان التفصيلي:</span>
                    <span className="font-bold text-slate-800 block bg-slate-50 p-2 rounded-lg border border-slate-100">
                      {order.address}
                    </span>
                  </div>

                  {order.notes && (
                    <div className="sm:col-span-2 text-amber-800 bg-amber-50 p-2 rounded-lg text-[11px] font-bold">
                      ⚠️ ملاحظة العميل: {order.notes}
                    </div>
                  )}
                </div>

                {/* Quick Action Buttons for the Driver */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <a
                    href={`tel:${order.phone}`}
                    className="py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#004f9f] border border-blue-200 text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-4 h-4" />
                    <span>اتصال</span>
                  </a>

                  <a
                    href={`https://wa.me/20${order.phone.replace(/^0/, "")}?text=${encodeURIComponent(
                      `مرحباً أستاذ ${order.customerName}، معك كابتن سوبرماركت المرواني بفرع المعادي بخصوص طلبك رقم ${order.orderNumber}. أنا في طريقي إليك الآن.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>واتساب</span>
                  </a>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${order.address}, المعادي, القاهرة`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>الخريطة</span>
                  </a>
                </div>

                {/* Bag items breakdown */}
                <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div className="font-bold text-slate-700 mb-1">
                    محتويات الأكياس ({items.length} صنف):
                  </div>
                  <div className="space-y-0.5 max-h-24 overflow-y-auto pr-1">
                    {items.map((it, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span>• {it.nameAr}</span>
                        <span className="font-bold text-slate-700">× {it.qty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Advancement Buttons */}
                {order.status !== "delivered" && (
                  <div className="flex gap-2 pt-2 border-t border-slate-100">
                    {order.status !== "out_for_delivery" ? (
                      <button
                        onClick={() => updateOrderStatus(order.id, "out_for_delivery")}
                        className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
                      >
                        <Bike className="w-4 h-4" />
                        <span>استلمت من الفرع وأنا في الطريق 🛵</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => updateOrderStatus(order.id, "delivered")}
                        className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>تم التسليم بنجاح وتحصيل {order.total.toFixed(2)} ج.م ✅</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </main>
    </div>
  );
}
