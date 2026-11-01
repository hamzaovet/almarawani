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
  Barcode,
  CheckCircle2,
  Scale,
  RefreshCw,
  X,
  FileText,
  Calculator,
  ArrowRight,
} from "lucide-react";
import BarcodeEan13 from "@/components/BarcodeEan13";
import { parseScaleBarcode } from "@/lib/barcode";

export default function CashierPOSPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCat, setSelectedCat] = useState("الكل");
  const [barcodeQuery, setBarcodeQuery] = useState("");
  const [cart, setCart] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<any>(null);
  const [tenderCash, setTenderCash] = useState<string>("");
  const [lastScannedMsg, setLastScannedMsg] = useState<string>("");
  const barcodeInputRef = useRef<HTMLInputElement>(null);

  // Load User, Products, Categories, Settings
  useEffect(() => {
    try {
      const saved = localStorage.getItem("almarawani_user");
      if (saved) setUser(JSON.parse(saved));
    } catch {}

    const fetchData = async () => {
      try {
        const [pRes, cRes, sRes] = await Promise.all([
          fetch("/api/products?all=true"),
          fetch("/api/categories"),
          fetch("/api/settings"),
        ]);
        const [pData, cData, sData] = await Promise.all([
          pRes.json(),
          cRes.json(),
          sRes.json(),
        ]);
        if (pData.success) setProducts(pData.products);
        if (cData.success) setCategories(cData.categories);
        if (sData.success) setSettings(sData.settings);
      } catch (err) {
        console.error("POS Data fetch error:", err);
      }
    };
    fetchData();
  }, []);

  // Keyboard Shortcuts (F9 or Enter on modal prints)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (completedOrder) {
        if (e.key === "Enter" || e.key === "F9") {
          e.preventDefault();
          window.print();
        } else if (e.key === "Escape") {
          e.preventDefault();
          setCompletedOrder(null);
          setTenderCash("");
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [completedOrder]);

  const playBeep = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.frequency.setValueAtTime(1050, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch {}
  };

  const addToCart = (product: any, customQty?: number) => {
    const qtyToAdd = customQty !== undefined ? customQty : 1;
    setCart((prev) => {
      const existIndex = prev.findIndex((i) => i.product.id === product.id);
      if (existIndex > -1) {
        const updated = [...prev];
        const existing = updated[existIndex];
        const newQty = Number((existing.qty + qtyToAdd).toFixed(3));
        updated[existIndex] = { ...existing, qty: newQty };
        return updated;
      }
      return [...prev, { product, qty: qtyToAdd }];
    });
    playBeep();
  };

  const updateQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.product.id === productId) {
            const isWeighted = i.product.isWeighted;
            const step = isWeighted ? 0.1 : 1;
            const newQty = Number((i.qty + delta * step).toFixed(3));
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
    const query = barcodeQuery.trim();
    if (!query) return;

    // Check if it's an EAN-13 scale barcode (weight or price embedded)
    const scaleResult = parseScaleBarcode(query, {
      weightPrefixes: settings?.weightPrefixes || "20,21",
      pricePrefixes: settings?.pricePrefixes || "22,23",
      pluDigits: settings?.pluDigits || 5,
    });

    if (scaleResult.isScaleBarcode && scaleResult.plu) {
      // Find product by scaleItemCode or barcode
      const foundWeighted = products.find(
        (p) =>
          p.scaleItemCode === scaleResult.plu ||
          p.barcode === scaleResult.plu ||
          p.id === scaleResult.plu
      );

      if (foundWeighted) {
        if (scaleResult.mode === "weight" && scaleResult.weightKg) {
          addToCart(foundWeighted, scaleResult.weightKg);
          setLastScannedMsg(
            `⚖️ ميزان: ${foundWeighted.nameAr} (${scaleResult.weightKg} كجم)`
          );
        } else if (scaleResult.mode === "price" && scaleResult.embeddedPrice) {
          const calculatedKg = Number(
            (scaleResult.embeddedPrice / foundWeighted.basePrice).toFixed(3)
          );
          addToCart(foundWeighted, calculatedKg);
          setLastScannedMsg(
            `⚖️ ميزان: ${foundWeighted.nameAr} (${scaleResult.embeddedPrice} ج.م)`
          );
        }
        setBarcodeQuery("");
        return;
      }
    }

    // Standard barcode or product name search
    const found = products.find(
      (p) =>
        p.barcode === query ||
        p.nameAr.toLowerCase().includes(query.toLowerCase()) ||
        p.scaleItemCode === query
    );

    if (found) {
      addToCart(found, 1);
      setLastScannedMsg(`📦 تم إضافة: ${found.nameAr}`);
      setBarcodeQuery("");
    } else {
      alert(`لم يتم العثور على صنف بالباركود أو الاسم: ${query}`);
    }
  };

  const subtotal = Number(
    cart.reduce((acc, i) => acc + i.product.basePrice * i.qty, 0).toFixed(2)
  );
  const totalItemCount = cart.reduce((acc, i) => acc + (i.product.isWeighted ? 1 : i.qty), 0);

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
        total: Number((i.product.basePrice * i.qty).toFixed(2)),
      }));

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: "عميل الفرع (كاشير)",
          phone: "01000000000",
          address: "شراء مباشر من فرع المعادي",
          zone: "فرع المعادي الرئيسي",
          branchName: "فرع المعادي",
          orderType: "pos",
          items: itemsPayload,
          subtotal,
          deliveryFee: 0,
          discount: 0,
          total: subtotal,
          paymentMethod,
          cashierName: user?.name || "كاشير 1",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setCompletedOrder({
          ...data.order,
          parsedItems: itemsPayload,
          cashierName: user?.name || "كاشير 1",
        });
        setCart([]);
        setTenderCash(String(Math.ceil(subtotal)));
      } else {
        alert("فشل إصدار الفاتورة: " + data.error);
      }
    } catch (err: any) {
      alert("خطأ أثناء إصدار الفاتورة: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((p) => {
    if (selectedCat !== "الكل" && p.category !== selectedCat) return false;
    return true;
  });

  const parsedTender = parseFloat(tenderCash) || completedOrder?.total || 0;
  const changeAmount = Math.max(0, parsedTender - (completedOrder?.total || 0));

  return (
    <div className="h-screen max-h-screen bg-[#f1f5f9] text-slate-800 flex flex-col overflow-hidden font-sans select-none">
      {/* Cashier Topbar */}
      <header className="bg-[#002d62] text-white px-4 py-2 flex items-center justify-between shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#004f9f] text-white flex items-center justify-center font-black">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <span className="font-black text-sm">سوبرماركت المرواني • نقطة البيع (POS)</span>
          </Link>
          <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold">
            كاشير فرع المعادي 🖥️
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <Link
            href="/scale"
            className="px-3 py-1 bg-sky-500/20 border border-sky-400/40 hover:bg-sky-500/30 rounded-lg text-sky-200 font-bold flex items-center gap-1.5 transition-colors"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>محطة الميزان ⚖️</span>
          </Link>

          <Link
            href="/dashboard"
            className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-white font-bold"
          >
            لوحة الإدارة
          </Link>

          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded-lg text-blue-200">
            <User className="w-3.5 h-3.5" />
            <span className="font-bold">{user ? user.name : "كاشير 1"}</span>
          </div>
        </div>
      </header>

      {/* Main Full-Height POS Split View (No Page Scrolling) */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Right Section: Products Grid + Barcode Search (Takes available space) */}
        <div className="flex-1 flex flex-col p-3 overflow-hidden border-l border-slate-200">
          {/* Barcode Search Bar */}
          <form onSubmit={handleBarcodeSubmit} className="flex gap-2 mb-2 shrink-0">
            <div className="relative flex-1">
              <input
                ref={barcodeInputRef}
                type="text"
                value={barcodeQuery}
                onChange={(e) => setBarcodeQuery(e.target.value)}
                placeholder="امسح الباركود أو استيكر الميزان ضوئياً، أو ابحث باسم الصنف..."
                className="w-full h-11 pl-4 pr-11 bg-white border-2 border-slate-300 focus:border-[#004f9f] rounded-xl outline-none font-bold text-sm shadow-2xs"
                autoFocus
              />
              <Barcode className="w-5 h-5 text-slate-400 absolute right-3.5 top-3" />
            </div>
            <button
              type="submit"
              className="px-6 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl font-black text-xs shadow-sm"
            >
              إضافة
            </button>
          </form>

          {/* Quick Notice if Barcode Scanned */}
          {lastScannedMsg && (
            <div className="mb-2 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-bold flex items-center justify-between shrink-0">
              <span>{lastScannedMsg}</span>
              <button
                onClick={() => setLastScannedMsg("")}
                className="text-emerald-500 hover:text-emerald-800"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Categories Horizontal Scroll */}
          <div className="flex gap-1.5 overflow-x-auto pb-2 mb-2 shrink-0 scrollbar-none">
            <button
              onClick={() => setSelectedCat("الكل")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-colors ${
                selectedCat === "الكل"
                  ? "bg-[#004f9f] text-white shadow-2xs"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              الكل ({products.length})
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.nameAr)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1 transition-colors ${
                  selectedCat === c.nameAr
                    ? "bg-[#004f9f] text-white shadow-2xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.nameAr}</span>
              </button>
            ))}
          </div>

          {/* Products Grid with its own smooth internal scroll */}
          <div className="flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 pr-1">
            {filteredProducts.map((product) => {
              const inCartItem = cart.find((i) => i.product.id === product.id);
              return (
                <button
                  key={product.id}
                  onClick={() => addToCart(product)}
                  className={`bg-white rounded-xl p-2.5 border text-right flex flex-col justify-between transition-all active:scale-95 group shadow-2xs relative ${
                    inCartItem
                      ? "border-[#004f9f] ring-2 ring-[#004f9f]/20"
                      : "border-slate-200 hover:border-[#004f9f]"
                  }`}
                >
                  {/* Weighted Badge */}
                  {product.isWeighted && (
                    <span className="absolute top-2 left-2 bg-sky-100 text-sky-800 text-[9px] font-black px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                      <Scale className="w-2.5 h-2.5" />
                      ميزان
                    </span>
                  )}

                  {/* Quantity In Cart Badge */}
                  {inCartItem && (
                    <span className="absolute top-2 right-2 bg-[#004f9f] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                      {inCartItem.qty}
                    </span>
                  )}

                  <div className="aspect-square w-full rounded-lg bg-slate-50 p-1.5 flex items-center justify-center mb-1 overflow-hidden">
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
                    <div className="text-[10px] text-slate-400">
                      {product.scaleItemCode ? `PLU: ${product.scaleItemCode}` : product.unit}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-slate-100 w-full">
                    <span className="font-black text-xs text-[#004f9f]">
                      {product.basePrice.toFixed(2)} ج.م
                    </span>
                    <span className="w-5 h-5 rounded bg-blue-50 text-[#004f9f] flex items-center justify-center text-xs font-bold group-hover:bg-[#004f9f] group-hover:text-white transition-colors">
                      +
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Left Section: Active Invoice Cart with PINNED Bottom Checkout (Fixed Width ~380px) */}
        <div className="w-full md:w-96 bg-white flex flex-col justify-between shadow-xl h-full border-r border-slate-200">
          {/* Invoice Header */}
          <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
            <div>
              <h3 className="font-black text-sm text-slate-900 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#004f9f]" />
                <span>فاتورة العميل الحالية</span>
              </h3>
              <span className="text-[11px] text-slate-500">
                عدد الأصناف: {cart.length} | الكمية: {totalItemCount}
              </span>
            </div>
            {cart.length > 0 && (
              <button
                onClick={() => setCart([])}
                className="text-xs text-red-500 hover:text-red-700 font-bold flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>تفريغ</span>
              </button>
            )}
          </div>

          {/* Invoice Items: Scrolls internally inside its container */}
          <div className="flex-1 overflow-y-auto p-2.5 space-y-1.5">
            {cart.length === 0 ? (
              <div className="text-center py-20 text-slate-400 space-y-2">
                <ShoppingBag className="w-12 h-12 mx-auto text-slate-300" />
                <p className="text-xs font-bold">الفاتورة فارغة</p>
                <p className="text-[11px] text-slate-400">
                  امسح الباركود، أو استيكر الميزان، أو انقر على الأصناف
                </p>
              </div>
            ) : (
              cart.map((item) => {
                const itemTotal = Number((item.product.basePrice * item.qty).toFixed(2));
                return (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs hover:border-slate-300 transition-colors"
                  >
                    <div className="flex-1 min-w-0 pr-1">
                      <div className="font-bold text-slate-900 truncate">
                        {item.product.nameAr}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {item.product.basePrice.toFixed(2)} ج.م × {item.qty}{" "}
                        {item.product.isWeighted ? "كجم" : "ق"}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 ml-2">
                      <button
                        onClick={() => updateQty(item.product.id, -1)}
                        className="w-6 h-6 rounded bg-white border border-slate-200 text-slate-700 flex items-center justify-center font-bold active:bg-slate-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-black font-mono px-1 min-w-[28px] text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.product.id, 1)}
                        className="w-6 h-6 rounded bg-[#004f9f] text-white flex items-center justify-center font-bold active:bg-[#003875]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-left font-black font-mono text-slate-900 w-16 text-xs">
                      {itemTotal.toFixed(2)}
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {/* PINNED BOTTOM CHECKOUT PANEL (Never scrolls away!) */}
          <div className="p-3 bg-slate-50 border-t-2 border-slate-200 space-y-2.5 shrink-0 shadow-lg">
            <div className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-600">الإجمالي الصافي:</span>
              <span className="text-2xl text-[#004f9f] font-black font-mono">
                {subtotal.toFixed(2)}{" "}
                <span className="text-xs font-sans text-slate-500">ج.م</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleCheckout("cash")}
                disabled={cart.length === 0 || loading}
                className="py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl font-black text-sm shadow-md flex items-center justify-center gap-1.5 active:scale-98 transition-all"
              >
                <DollarSign className="w-4 h-4" />
                <span>دفع كاش 💵</span>
              </button>

              <button
                onClick={() => handleCheckout("card")}
                disabled={cart.length === 0 || loading}
                className="py-3.5 bg-[#004f9f] hover:bg-[#003875] disabled:opacity-50 text-white rounded-xl font-black text-sm shadow-md flex items-center justify-center gap-1.5 active:scale-98 transition-all"
              >
                <CreditCard className="w-4 h-4" />
                <span>دفع فيزا 💳</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* COMPLETED ORDER & THERMAL RECEIPT MODAL */}
      {completedOrder && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 text-center space-y-4 shadow-2xl relative my-auto">
            {/* Success Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <span className="font-black text-sm text-slate-900">
                  تم إصدار الفاتورة بنجاح!
                </span>
              </div>
              <button
                onClick={() => setCompletedOrder(null)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Tender / Change Calculator */}
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs grid grid-cols-3 gap-2 text-right">
              <div>
                <span className="text-[10px] text-slate-500">المطلوب:</span>
                <div className="font-mono font-black text-sm text-[#004f9f]">
                  {completedOrder.total.toFixed(2)} ج.م
                </div>
              </div>
              <div>
                <span className="text-[10px] text-slate-500">المدفوع كاش:</span>
                <input
                  type="number"
                  value={tenderCash}
                  onChange={(e) => setTenderCash(e.target.value)}
                  className="w-full h-7 bg-white border border-slate-300 rounded px-1.5 font-mono font-black text-xs text-slate-800"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-500">الباقي للعميل:</span>
                <div className="font-mono font-black text-sm text-emerald-600">
                  {changeAmount.toFixed(2)} ج.م
                </div>
              </div>
            </div>

            {/* REALISTIC 80mm THERMAL RECEIPT PREVIEW (Also targeted by @media print) */}
            <div
              id="thermal-receipt"
              className="bg-white text-black p-4 rounded border border-slate-300 font-mono text-xs text-right max-h-72 overflow-y-auto shadow-inner select-text"
              dir="rtl"
            >
              {/* Receipt Header */}
              <div className="text-center space-y-0.5 border-b-2 border-dashed border-black pb-2 mb-2">
                <h2 className="font-black text-base text-black">سوبرماركت المرواني</h2>
                <div className="text-[10px] font-bold">AL MARAWANI SUPERMARKET</div>
                <div className="text-[9px] text-slate-700 leading-tight">
                  شارع النصر، تقاطع شارع 261، دجلة، المعادي - القاهرة
                </div>
                <div className="text-[9px]">الخط الساخن: 01009988771 | موبايل: 01122334455</div>
                <div className="text-[9px] font-bold">ر.ض: 684-219-450 • س.ت: 148920</div>
                <div className="text-[10px] font-black mt-1">
                  *** فاتورة كاشير ضريبية مبسطة ***
                </div>
              </div>

              {/* Receipt Metadata */}
              <div className="text-[10px] space-y-0.5 border-b border-dashed border-black pb-2 mb-2">
                <div className="flex justify-between">
                  <span>رقم الفاتورة:</span>
                  <span className="font-bold">{completedOrder.orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>التاريخ والوقت:</span>
                  <span>{new Date().toLocaleString("ar-EG")}</span>
                </div>
                <div className="flex justify-between">
                  <span>الكاشير:</span>
                  <span>{completedOrder.cashierName || user?.name || "كاشير 1"}</span>
                </div>
                <div className="flex justify-between">
                  <span>طريقة الدفع:</span>
                  <span className="font-bold">
                    {completedOrder.paymentMethod === "cash" ? "نقداً (كاش)" : "بطاقة بنكية (فيزا)"}
                  </span>
                </div>
              </div>

              {/* Items Table */}
              <table className="w-full text-[10px] mb-2 border-b-2 border-dashed border-black pb-2">
                <thead>
                  <tr className="border-b border-black text-[9px]">
                    <th className="text-right py-1">الصنف</th>
                    <th className="text-center py-1">الكمية</th>
                    <th className="text-center py-1">السعر</th>
                    <th className="text-left py-1">الإجمالي</th>
                  </tr>
                </thead>
                <tbody>
                  {(completedOrder.parsedItems || []).map((it: any, idx: number) => (
                    <tr key={idx} className="border-b border-slate-100">
                      <td className="py-1 font-bold">{it.nameAr}</td>
                      <td className="text-center py-1 font-mono">{it.qty}</td>
                      <td className="text-center py-1 font-mono">{it.unitPrice.toFixed(2)}</td>
                      <td className="text-left py-1 font-mono font-bold">{it.total.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Receipt Financial Totals */}
              <div className="space-y-1 text-xs border-b-2 border-dashed border-black pb-2 mb-2">
                <div className="flex justify-between">
                  <span>الإجمالي الفرعي:</span>
                  <span className="font-bold font-mono">
                    {completedOrder.subtotal.toFixed(2)} ج.م
                  </span>
                </div>
                {completedOrder.discount > 0 && (
                  <div className="flex justify-between text-red-600">
                    <span>الخصم:</span>
                    <span className="font-bold font-mono">
                      -{completedOrder.discount.toFixed(2)} ج.م
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-black pt-1 border-t border-black">
                  <span>الصافي النهائي:</span>
                  <span className="font-mono">{completedOrder.total.toFixed(2)} ج.م</span>
                </div>
                <div className="flex justify-between text-[10px] text-slate-700">
                  <span>المبلغ المسدد:</span>
                  <span className="font-mono">{parsedTender.toFixed(2)} ج.م</span>
                </div>
                {changeAmount > 0 && (
                  <div className="flex justify-between text-[10px] font-bold text-emerald-800">
                    <span>الباقي للعميل:</span>
                    <span className="font-mono">{changeAmount.toFixed(2)} ج.م</span>
                  </div>
                )}
              </div>

              {/* Return Policy & Notice */}
              <div className="text-center text-[9px] text-slate-800 space-y-1 mb-2 leading-tight">
                <div>الأسعار شاملة ضريبة القيمة المضافة 14%</div>
                <div>
                  البضاعة المباعة ترد وتستبدل خلال 14 يوماً بأصل الفاتورة وبحالتها الأصلية مع مراعاة المواد الغذائية الطازجة.
                </div>
                <div className="font-bold mt-1">شكراً لزيارتكم سوبرماركت المرواني 🛒</div>
              </div>

              {/* Invoice Verification Barcode */}
              <div className="flex flex-col items-center pt-1 border-t border-dashed border-black">
                <div className="font-mono text-[9px] font-bold tracking-widest">
                  {completedOrder.orderNumber}
                </div>
              </div>
            </div>

            {/* Print & Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-3 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl text-xs font-black shadow-md flex items-center justify-center gap-1.5 active:scale-98"
              >
                <Printer className="w-4 h-4" />
                <span>طباعة الإيصال (F9 / Enter)</span>
              </button>
              <button
                onClick={() => {
                  setCompletedOrder(null);
                  setTenderCash("");
                }}
                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold"
              >
                فاتورة جديدة (Esc)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Clean 80mm Thermal Receipt Print CSS */}
      <style jsx global>{`
        @media print {
          @page {
            size: 80mm auto;
            margin: 0;
          }
          body * {
            visibility: hidden !important;
          }
          #thermal-receipt,
          #thermal-receipt * {
            visibility: visible !important;
          }
          #thermal-receipt {
            position: fixed !important;
            left: 0 !important;
            top: 0 !important;
            width: 80mm !important;
            max-width: 80mm !important;
            margin: 0 auto !important;
            padding: 4mm !important;
            border: none !important;
            box-shadow: none !important;
            background: #ffffff !important;
            color: #000000 !important;
            border-radius: 0 !important;
            font-size: 11px !important;
            line-height: 1.3 !important;
          }
        }
      `}</style>
    </div>
  );
}
