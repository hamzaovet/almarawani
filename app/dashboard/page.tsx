"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Package,
  Bike,
  Users,
  Settings,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  LogOut,
  Edit,
  Save,
  Plus,
  Trash2,
  Lock,
  Unlock,
  Phone,
  MapPin,
  ExternalLink,
  Shield,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"orders" | "captains" | "products" | "users" | "settings">("orders");
  const [orders, setOrders] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [captains, setCaptains] = useState<any[]>([]);
  const [usersList, setUsersList] = useState<any[]>([]);
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // In-place product editing
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState<number>(0);
  const [editOffer, setEditOffer] = useState<boolean>(false);

  // Check auth
  useEffect(() => {
    try {
      const saved = localStorage.getItem("almarawani_user");
      if (!saved) {
        router.push("/login");
        return;
      }
      const parsed = JSON.parse(saved);
      setUser(parsed);
    } catch {
      router.push("/login");
    }
  }, [router]);

  // Load data
  const loadData = async () => {
    try {
      setLoading(true);
      const [ordRes, prodRes, capRes, usersRes, settRes] = await Promise.all([
        fetch("/api/orders"),
        fetch("/api/products"),
        fetch("/api/captains"),
        fetch("/api/auth/users"),
        fetch("/api/settings"),
      ]);

      const [ordData, prodData, capData, usersData, settData] = await Promise.all([
        ordRes.json(),
        prodRes.json(),
        capRes.json(),
        usersRes.json(),
        settRes.json(),
      ]);

      if (ordData.success) setOrders(ordData.orders);
      if (prodData.success) setProducts(prodData.products);
      if (capData.success) setCaptains(capData.captains);
      if (usersData.success) setUsersList(usersData.users);
      if (settData.success) setSettings(settData.settings);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      loadData();
      const interval = setInterval(loadData, 10000);
      return () => clearInterval(interval);
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("almarawani_user");
    router.push("/login");
  };

  // Order status advance
  const handleUpdateOrderStatus = async (orderId: string, newStatus: string, captainId?: string) => {
    try {
      const capObj = captains.find((c) => c.id === captainId);
      await fetch("/api/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: orderId,
          status: newStatus,
          captainId: captainId || undefined,
          captainName: capObj ? capObj.name : undefined,
          captainPhone: capObj ? capObj.phone : undefined,
        }),
      });
      loadData();
    } catch {
      alert("فشل تحديث الطلب");
    }
  };

  // User status toggle (Owner only)
  const handleToggleUser = async (userId: string, currentStatus: boolean) => {
    try {
      await fetch("/api/auth/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: userId,
          isActive: !currentStatus,
        }),
      });
      loadData();
    } catch {
      alert("فشل تحديث حالة المستخدم");
    }
  };

  // In-place product save
  const handleSaveProductPrice = async (productId: string) => {
    try {
      await fetch("/api/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: productId,
          basePrice: editPrice,
          isOffer: editOffer,
        }),
      });
      setEditingProductId(null);
      loadData();
    } catch {
      alert("فشل حفظ التعديل");
    }
  };

  // Save Settings
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      alert("تم حفظ إعدادات السوبرماركت بنجاح!");
      loadData();
    } catch {
      alert("فشل حفظ الإعدادات");
    }
  };

  if (!user) return null;

  const isOwner = user.role === "owner";
  const todayTotalSales = orders.reduce((acc, o) => acc + o.total, 0);
  const activeOrdersCount = orders.filter((o) => o.status !== "delivered" && o.status !== "cancelled").length;

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 flex flex-col">
      {/* Top Header */}
      <header className="bg-[#002d62] text-white px-4 py-3 flex items-center justify-between shadow-md sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#004f9f] text-white flex items-center justify-center font-black">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-sm sm:text-base">
                سوبرماركت المرواني • لوحة الإدارة
              </span>
              <span className="text-[10px] text-blue-200 block">
                فرع المعادي الرئيسي
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
            <Shield className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-bold">{user.name}</span>
            <span className="bg-amber-400 text-slate-900 text-[10px] font-black px-1.5 py-0.2 rounded uppercase mr-1">
              {user.role}
            </span>
          </div>

          <Link
            href="/cashier"
            className="hidden sm:inline-flex px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors"
          >
            نقطة البيع (POS)
          </Link>

          <Link
            href="/delivery"
            className="hidden sm:inline-flex px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors"
          >
            بوابة الطيارين
          </Link>

          <button
            onClick={loadData}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
            title="تحديث البيانات"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>

          <button
            onClick={handleLogout}
            className="p-2 rounded-xl bg-white/10 hover:bg-red-500 text-white"
            title="تسجيل الخروج"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Stats Ribbon */}
      <div className="max-w-7xl mx-auto px-4 pt-4 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] text-slate-400 font-bold block">إجمالي مبيعات اليوم</span>
            <span className="text-xl sm:text-2xl font-black text-[#004f9f]">
              {todayTotalSales.toFixed(2)} ج.م
            </span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] text-slate-400 font-bold block">الطلبات النشطة الآن</span>
            <span className="text-xl sm:text-2xl font-black text-amber-500">
              {activeOrdersCount}
            </span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] text-slate-400 font-bold block">أصناف السوبرماركت</span>
            <span className="text-xl sm:text-2xl font-black text-emerald-600">
              {products.length}
            </span>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] text-slate-400 font-bold block">أسطول الطيارين المتاح</span>
            <span className="text-xl sm:text-2xl font-black text-slate-800">
              {captains.filter((c) => c.isActive).length} طيار
            </span>
          </div>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-4 w-full">
        <div className="flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === "orders"
                ? "bg-[#004f9f] text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>الطلبات ومتابعة التوصيل ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === "products"
                ? "bg-[#004f9f] text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            <Package className="w-4 h-4" />
            <span>الأصناف والأسعار ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("captains")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === "captains"
                ? "bg-[#004f9f] text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            <Bike className="w-4 h-4" />
            <span>طيارو الدليفري ({captains.length})</span>
          </button>

          {isOwner && (
            <button
              onClick={() => setActiveTab("users")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 shrink-0 ${
                activeTab === "users"
                  ? "bg-[#004f9f] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>المستخدمين والصلاحيات ({usersList.length})</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab("settings")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === "settings"
                ? "bg-[#004f9f] text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>إعدادات الفرع</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <main className="max-w-7xl mx-auto px-4 py-4 w-full flex-1">
        {/* TAB 1: ORDERS */}
        {activeTab === "orders" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {orders.map((order) => {
                let items: any[] = [];
                try {
                  items = JSON.parse(order.items || "[]");
                } catch {}

                return (
                  <div
                    key={order.id}
                    className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                        <div>
                          <span className="font-black text-sm text-[#004f9f]">
                            {order.orderNumber}
                          </span>
                          <span className="text-[10px] text-slate-400 block">
                            {new Date(order.createdAt).toLocaleTimeString("ar-EG", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-black px-2 py-0.5 rounded-lg ${
                            order.status === "delivered"
                              ? "bg-emerald-100 text-emerald-800"
                              : order.status === "out_for_delivery"
                              ? "bg-amber-100 text-amber-800 animate-pulse"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {order.status === "new" && "طلب جديد 🛒"}
                          {order.status === "preparing" && "جاري التجميع 📦"}
                          {order.status === "ready" && "جاهز للتسليم ⚡"}
                          {order.status === "out_for_delivery" && "مع الطيار 🛵"}
                          {order.status === "delivered" && "تم التسليم ✅"}
                        </span>
                      </div>

                      {/* Customer info */}
                      <div className="text-xs space-y-1">
                        <div className="font-bold text-slate-800">
                          {order.customerName} •{" "}
                          <a
                            href={`tel:${order.phone}`}
                            className="text-[#004f9f] hover:underline"
                            dir="ltr"
                          >
                            {order.phone}
                          </a>
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          📍 {order.zone} — {order.address}
                        </div>
                      </div>

                      {/* Items */}
                      <div className="mt-3 text-[11px] bg-slate-50 p-2 rounded-xl border border-slate-100 max-h-24 overflow-y-auto space-y-0.5">
                        {items.map((it: any, idx: number) => (
                          <div key={idx} className="flex justify-between">
                            <span>{it.nameAr}</span>
                            <span className="font-bold text-slate-700">
                              {it.qty} × {it.unitPrice.toFixed(0)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom row & status buttons */}
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500">الإجمالي:</span>
                        <span className="font-black text-sm text-[#004f9f]">
                          {order.total.toFixed(2)} ج.م ({order.paymentMethod === "cash" ? "كاش" : "فيزا"})
                        </span>
                      </div>

                      {/* Captain Assignment Selector */}
                      <div className="flex gap-1.5">
                        <select
                          value={order.captainId || ""}
                          onChange={(e) =>
                            handleUpdateOrderStatus(order.id, order.status, e.target.value)
                          }
                          className="flex-1 h-8 text-[11px] bg-slate-50 border border-slate-200 rounded-lg px-2 outline-none"
                        >
                          <option value="">تعيين كابتن التوصيل 🛵</option>
                          {captains.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name} ({c.zone})
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Advance buttons */}
                      <div className="grid grid-cols-3 gap-1">
                        <button
                          onClick={() => handleUpdateOrderStatus(order.id, "preparing")}
                          className="py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-bold"
                        >
                          تجميع 📦
                        </button>
                        <button
                          onClick={() => handleUpdateOrderStatus(order.id, "out_for_delivery")}
                          className="py-1 rounded bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-bold"
                        >
                          للشحن 🛵
                        </button>
                        <button
                          onClick={() => handleUpdateOrderStatus(order.id, "delivered")}
                          className="py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold"
                        >
                          تسليم ✅
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS & PRICES */}
        {activeTab === "products" && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-black text-sm text-slate-800">
                قائمة أصناف السوبرماركت والأسعار اللحظية ({products.length} صنف)
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold">
                  <tr>
                    <th className="p-3">الصورة</th>
                    <th className="p-3">اسم الصنف</th>
                    <th className="p-3">القسم</th>
                    <th className="p-3">الوحدة</th>
                    <th className="p-3">السعر الحالي (ج.م)</th>
                    <th className="p-3">عرض خاص</th>
                    <th className="p-3">إجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {products.map((p) => {
                    const isEditing = editingProductId === p.id;

                    return (
                      <tr key={p.id} className="hover:bg-slate-50/50">
                        <td className="p-2.5">
                          <img
                            src={p.image}
                            alt={p.nameAr}
                            className="w-10 h-10 object-contain rounded-lg bg-slate-50 p-1"
                          />
                        </td>
                        <td className="p-2.5 font-bold text-slate-800">
                          {p.nameAr}
                          <span className="text-[10px] text-slate-400 block">
                            {p.brand} • {p.barcode || "بدون باركود"}
                          </span>
                        </td>
                        <td className="p-2.5 text-slate-600">{p.category}</td>
                        <td className="p-2.5 text-slate-500">{p.unit}</td>

                        {/* Price column with in-place editor */}
                        <td className="p-2.5">
                          {isEditing ? (
                            <input
                              type="number"
                              step="0.5"
                              value={editPrice}
                              onChange={(e) => setEditPrice(parseFloat(e.target.value) || 0)}
                              className="w-20 h-8 px-2 border-2 border-[#004f9f] rounded-lg font-black text-sm"
                            />
                          ) : (
                            <span className="font-black text-sm text-[#004f9f]">
                              {p.basePrice.toFixed(2)} ج.م
                            </span>
                          )}
                        </td>

                        <td className="p-2.5">
                          {isEditing ? (
                            <label className="flex items-center gap-1 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={editOffer}
                                onChange={(e) => setEditOffer(e.target.checked)}
                              />
                              <span className="text-[11px]">تفعيل</span>
                            </label>
                          ) : p.isOffer ? (
                            <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded font-black text-[10px]">
                              عرض 🔥
                            </span>
                          ) : (
                            <span className="text-slate-400 text-[10px]">—</span>
                          )}
                        </td>

                        <td className="p-2.5">
                          {isEditing ? (
                            <div className="flex gap-1">
                              <button
                                onClick={() => handleSaveProductPrice(p.id)}
                                className="px-2.5 py-1 bg-emerald-600 text-white rounded-lg font-bold text-[11px] flex items-center gap-1 shadow-xs"
                              >
                                <Save className="w-3 h-3" />
                                <span>حفظ</span>
                              </button>
                              <button
                                onClick={() => setEditingProductId(null)}
                                className="px-2 py-1 bg-slate-200 text-slate-600 rounded-lg text-[11px]"
                              >
                                إلغاء
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                setEditingProductId(p.id);
                                setEditPrice(p.basePrice);
                                setEditOffer(p.isOffer);
                              }}
                              className="px-2.5 py-1 bg-blue-50 text-[#004f9f] hover:bg-blue-100 rounded-lg font-bold text-[11px] flex items-center gap-1"
                            >
                              <Edit className="w-3 h-3" />
                              <span>تعديل السعر</span>
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: CAPTAINS */}
        {activeTab === "captains" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {captains.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
                    🛵
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-slate-800">{c.name}</h4>
                    <p className="text-xs text-slate-500">{c.vehicle}</p>
                  </div>
                </div>

                <div className="text-xs text-slate-600 space-y-1 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div className="flex justify-between">
                    <span>الهاتف:</span>
                    <a href={`tel:${c.phone}`} className="font-bold text-[#004f9f]">
                      {c.phone}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span>المنطقة المغطاة:</span>
                    <span className="font-bold">{c.zone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: USERS (OWNER ONLY) */}
        {activeTab === "users" && isOwner && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="font-black text-sm text-slate-800">
                  إدارة مستخدمي وموظفي النظام (خاص بالمالك المعلم المايسترو)
                </h3>
                <p className="text-xs text-slate-400">
                  يمكنك تعطيل أو تفعيل أي حساب موظف فوراً بضغطة زر واحدة.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold">
                  <tr>
                    <th className="p-3">الاسم</th>
                    <th className="p-3">اسم الدخول (Username)</th>
                    <th className="p-3">الهاتف</th>
                    <th className="p-3">كود الـ PIN</th>
                    <th className="p-3">الدور / الوظيفة</th>
                    <th className="p-3">الحالة</th>
                    <th className="p-3">التحكم</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {usersList.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-50/50">
                      <td className="p-3 font-bold text-slate-800">{u.name}</td>
                      <td className="p-3 text-slate-600 font-mono">{u.username || "—"}</td>
                      <td className="p-3 text-slate-600 font-mono" dir="ltr">{u.phone}</td>
                      <td className="p-3 text-[#004f9f] font-mono font-bold">{u.pin}</td>
                      <td className="p-3 font-black text-[11px] uppercase text-slate-700">
                        {u.role}
                      </td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                            u.isActive
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {u.isActive ? "نشط وفعّال" : "معطّل ومحظور"}
                        </span>
                      </td>
                      <td className="p-3">
                        {u.role !== "owner" ? (
                          <button
                            onClick={() => handleToggleUser(u.id, u.isActive)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                              u.isActive
                                ? "bg-red-50 hover:bg-red-100 text-red-600 border border-red-200"
                                : "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200"
                            }`}
                          >
                            {u.isActive ? "تعطيل الحساب 🚫" : "إعادة التفعيل ✅"}
                          </button>
                        ) : (
                          <span className="text-[10px] text-slate-400 font-bold">
                            المالك الأساسي 👑
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: SETTINGS */}
        {activeTab === "settings" && settings && (
          <form onSubmit={handleSaveSettings} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs max-w-2xl space-y-4">
            <h3 className="font-black text-sm text-slate-800 border-b border-slate-100 pb-2">
              إعدادات سوبرماركت المرواني
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                اسم السوبرماركت:
              </label>
              <input
                type="text"
                value={settings.storeName || ""}
                onChange={(e) => setSettings({ ...settings, storeName: e.target.value })}
                className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                عنوان الفرع الرئيسي:
              </label>
              <input
                type="text"
                value={settings.address || ""}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  الخط الساخن:
                </label>
                <input
                  type="text"
                  value={settings.phone || ""}
                  onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  حد التوصيل المجاني (ج.م):
                </label>
                <input
                  type="number"
                  value={settings.freeDeliveryThreshold || 400}
                  onChange={(e) =>
                    setSettings({ ...settings, freeDeliveryThreshold: parseFloat(e.target.value) || 400 })
                  }
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                شريط التنبيهات الإعلاني بالمتجر:
              </label>
              <input
                type="text"
                value={settings.bannerNotice || ""}
                onChange={(e) => setSettings({ ...settings, bannerNotice: e.target.value })}
                className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl text-xs font-black shadow-sm"
            >
              حفظ الإعدادات فوراً
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
