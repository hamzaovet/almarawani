"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Search,
  Plus,
  Minus,
  Trash2,
  Printer,
  CreditCard,
  DollarSign,
  User,
  ArrowRight,
  LogOut,
  Barcode,
  CheckCircle2,
} from "lucide-react";

export default function CashierPOSPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCat, setSelectedCat] = useState("الكل");
  const [barcodeQuery, setBarcodeQuery] = useState("");
  const [cart, setCart] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<any>(null);
  const barcodeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("almarawani_user");
      if (saved) setUser(JSON.parse(saved));
    } catch {}

    const fetchData = async () => {
      try {
        const [pRes, cRes] = await Promise.all([
          fetch("/api/products"),
          fetch("/api/categories"),
        ]);
        const [pData, cData] = await Promise.all([pRes.json(), cRes.json()]);
        if (pData.success) setProducts(pData.products);
        if (cData.success) setCategories(cData.categories);
      } catch {}
    };
    fetchData();
  }, []);

  const addToCart = (product: any) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.product.id === product.id);
      if (exist) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const updateQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.product.id === productId) {
            const newQty = i.qty + delta;
            return newQty > 0 ? { ...i, qty: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as any[]
    );
  };

  const removeItem = (productId: string) => {
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const handleBarcodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!barcodeQuery.trim()) return;

    const code = barcodeQuery.trim();
    const found = products.find(
      (p) =>
        p.barcode === code ||
        p.nameAr.toLowerCase().includes(code.toLowerCase())
    );

    if (found) {
      addToCart(found);
      setBarcodeQuery("");
    } else {
      alert("لم يتم العثور على صنف بهذا الباركود");
    }
  };

  const subtotal = cart.reduce((acc, i) => acc + i.product.basePrice * i.qty, 0);

  const handleCheckout = async (paymentMethod: "cash" | "card") => {
    if (cart.length === 0) return;
    try {
      setLoading(true);
      const itemsPayload = cart.map((i) => ({
        productId: i.product.id,
        nameAr: i.product.nameAr,
        unit: i.product.unit,
        qty: i.qty,
        unitPrice: i.product.basePrice,
        total: i.product.basePrice * i.qty,
      }));

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: "عميل الفرع (كاشير)",
          phone: "01000000000",
          address: "شراء مباشر من فرع المعادي",
          zone: "فرع المعادي الرئيسي",
          orderType: "pos",
          items: itemsPayload,
          subtotal,
          deliveryFee: 0,
          total: subtotal,
          paymentMethod,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setCompletedOrder(data.order);
        setCart([]);
      }
    } catch {
      alert("فشل تسجيل الفاتورة");
    } finally {
      setLoading(false);
    }
  };

  const filtered = products.filter((p) => {
    if (selectedCat !== "الكل" && p.category !== selectedCat) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 flex flex-col">
      {/* Cashier Topbar */}
      <header className="bg-[#002d62] text-white px-4 py-2.5 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#004f9f] text-white flex items-center justify-center font-black">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <span className="font-black text-sm">سوبرماركت المرواني • نقطة البيع (POS)</span>
          </Link>
          <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
            كاشير فرع المعادي 🖥️
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-blue-200">
            <User className="w-3.5 h-3.5" />
            <span>{user ? user.name : "كاشير 1"}</span>
          </div>
          <Link
            href="/dashboard"
            className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-white font-bold"
          >
            لوحة الإدارة
          </Link>
          <Link
            href="/"
            className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-white font-bold"
          >
            المتجر
          </Link>
        </div>
      </header>

      {/* POS Screen Layout */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left / Main Section: Products Grid */}
        <div className="flex-1 flex flex-col p-3 overflow-hidden">
          {/* Barcode Search Row */}
          <form onSubmit={handleBarcodeSubmit} className="flex gap-2 mb-3">
            <div className="relative flex-1">
              <input
                ref={barcodeInputRef}
                type="text"
                value={barcodeQuery}
                onChange={(e) => setBarcodeQuery(e.target.value)}
                placeholder="امسح الباركود ضوئياً أو ابحث باسم الصنف..."
                className="w-full h-11 pl-4 pr-11 bg-white border-2 border-slate-300 focus:border-[#004f9f] rounded-xl outline-none font-bold text-sm"
                autoFocus
              />
              <Barcode className="w-5 h-5 text-slate-400 absolute right-3.5 top-3" />
            </div>
            <button
              type="submit"
              className="px-5 bg-[#004f9f] text-white rounded-xl font-bold text-xs shadow-sm hover:bg-[#003875]"
            >
              إضافة
            </button>
          </form>

          {/* Category Chips */}
          <div className="flex gap-1.5 overflow-x-auto pb-2 mb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCat("الكل")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 ${
                selectedCat === "الكل"
                  ? "bg-[#004f9f] text-white"
                  : "bg-white text-slate-700 border border-slate-200"
              }`}
            >
              الكل ({products.length})
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.nameAr)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1 ${
                  selectedCat === c.nameAr
                    ? "bg-[#004f9f] text-white"
                    : "bg-white text-slate-700 border border-slate-200"
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.nameAr}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pr-1">
            {filtered.map((product) => (
              <button
                key={product.id}
                onClick={() => addToCart(product)}
                className="bg-white rounded-xl p-2.5 border border-slate-200 hover:border-[#004f9f] shadow-2xs text-right flex flex-col justify-between transition-all active:scale-95 group"
              >
                <div className="aspect-square w-full rounded-lg bg-slate-50 p-2 flex items-center justify-center mb-1">
                  <img
                    src={product.image}
                    alt={product.nameAr}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-800 line-clamp-1">
                    {product.nameAr}
                  </h4>
                  <div className="text-[10px] text-slate-400">{product.unit}</div>
                </div>
                <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-100 w-full">
                  <span className="font-black text-sm text-[#004f9f]">
                    {product.basePrice.toFixed(2)} ج.م
                  </span>
                  <span className="w-6 h-6 rounded-md bg-blue-50 text-[#004f9f] flex items-center justify-center text-xs font-bold group-hover:bg-[#004f9f] group-hover:text-white transition-colors">
                    +
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Section: Bill & Cart */}
        <div className="w-full lg:w-96 bg-white border-t lg:border-t-0 lg:border-r border-slate-200 flex flex-col justify-between shadow-lg">
          {/* Bill Header */}
          <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="font-black text-sm text-slate-800">
                فاتورة العميل الحالية
              </h3>
              <span className="text-[11px] text-slate-500">
                عدد الأصناف: {cart.reduce((a, b) => a + b.qty, 0)}
              </span>
            </div>
            {cart.length > 0 && (
              <button
                onClick={() => setCart([])}
                className="text-xs text-red-500 hover:underline font-bold"
              >
                تفريغ الفاتورة
              </button>
            )}
          </div>

          {/* Bill Items */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {cart.length === 0 ? (
              <div className="text-center py-16 text-slate-400 space-y-2">
                <ShoppingBag className="w-10 h-10 mx-auto" />
                <p className="text-xs">امسح الباركود أو اضغط على الأصناف لإضافتها للفاتورة</p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/80 text-xs"
                >
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="font-bold text-slate-800 truncate">
                      {item.product.nameAr}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {item.product.basePrice.toFixed(2)} ج.م × {item.qty}
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => updateQty(item.product.id, -1)}
                      className="w-6 h-6 rounded bg-white border border-slate-200 text-slate-700 flex items-center justify-center font-bold"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-black px-1.5">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.product.id, 1)}
                      className="w-6 h-6 rounded bg-[#004f9f] text-white flex items-center justify-center font-bold"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="text-left font-black text-slate-900 w-16">
                    {(item.product.basePrice * item.qty).toFixed(2)}
                  </div>

                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="p-1 text-slate-400 hover:text-red-500"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Payment Section */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
            <div className="flex justify-between items-center text-sm font-black">
              <span>الإجمالي المطلوب:</span>
              <span className="text-xl text-[#004f9f] font-black">
                {subtotal.toFixed(2)} ج.م
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleCheckout("cash")}
                disabled={cart.length === 0 || loading}
                className="py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl font-black text-xs shadow-sm flex items-center justify-center gap-1.5"
              >
                <DollarSign className="w-4 h-4" />
                <span>دفع كاش 💵</span>
              </button>

              <button
                onClick={() => handleCheckout("card")}
                disabled={cart.length === 0 || loading}
                className="py-3 bg-[#004f9f] hover:bg-[#003875] disabled:opacity-50 text-white rounded-xl font-black text-xs shadow-sm flex items-center justify-center gap-1.5"
              >
                <CreditCard className="w-4 h-4" />
                <span>دفع فيزا 💳</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Receipt Completed Modal */}
      {completedOrder && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-black text-lg text-slate-900">
                تم إصدار الفاتورة بنجاح!
              </h3>
              <p className="text-xs text-slate-500">
                رقم الفاتورة: <strong>{completedOrder.orderNumber}</strong>
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1 text-right">
              <div className="flex justify-between">
                <span>المبلغ المدفوع:</span>
                <span className="font-bold">{completedOrder.total.toFixed(2)} ج.م</span>
              </div>
              <div className="flex justify-between">
                <span>طريقة الدفع:</span>
                <span className="font-bold">
                  {completedOrder.paymentMethod === "cash" ? "نقداً (كاش)" : "بطاقة بنكية (فيزا)"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>الفرع:</span>
                <span>فرع المعادي الرئيسي</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2.5 bg-[#004f9f] text-white rounded-xl text-xs font-bold shadow-sm flex items-center justify-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>طباعة الإيصال</span>
              </button>
              <button
                onClick={() => setCompletedOrder(null)}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold"
              >
                فاتورة جديدة
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
