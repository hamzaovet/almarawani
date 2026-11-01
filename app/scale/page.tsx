"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Scale,
  Printer,
  Search,
  RotateCcw,
  Sliders,
  ChevronRight,
  ExternalLink,
  ShoppingBag,
  Layers,
  Sparkles,
  HelpCircle,
  FileText,
  ShieldCheck,
  Check,
  ArrowRight,
  Calculator,
} from "lucide-react";
import BarcodeEan13 from "@/components/BarcodeEan13";
import { generateScaleBarcode } from "@/lib/barcode";

export default function ScaleStationPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [selectedCat, setSelectedCat] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");

  // Weight State
  const [grossWeight, setGrossWeight] = useState<number>(0.25); // kg
  const [tareWeight, setTareWeight] = useState<number>(0.01); // 10 grams default
  const [isLiveReading, setIsLiveReading] = useState(true);
  const [isStable, setIsStable] = useState(true);
  const [printedCount, setPrintedCount] = useState(0);
  const [showKeypad, setShowKeypad] = useState(false);
  const [keypadInput, setKeypadInput] = useState("");
  const [lastPrintedSticker, setLastPrintedSticker] = useState<any | null>(null);

  // Load weighted products
  useEffect(() => {
    const fetchWeighted = async () => {
      try {
        const res = await fetch("/api/products?all=true");
        const data = await res.json();
        if (data.success) {
          const weighted = data.products.filter(
            (p: any) => p.isWeighted || p.scaleItemCode
          );
          setProducts(weighted);
          if (weighted.length > 0) {
            // Select potato or first product
            const potato = weighted.find((p: any) => p.scaleItemCode === "00002");
            setSelectedProduct(potato || weighted[0]);
          }
        }
      } catch (err) {
        console.error("Scale fetch error:", err);
      }
    };
    fetchWeighted();
  }, []);

  // Keyboard shortcut: Enter or Space prints sticker
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === "Enter" || e.code === "Space") {
        e.preventDefault();
        printSticker();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const netWeight = Math.max(0, Number((grossWeight - tareWeight).toFixed(3)));
  const unitPrice = selectedProduct?.basePrice || 0;
  const totalPrice = Number((netWeight * unitPrice).toFixed(2));
  const plu = selectedProduct?.scaleItemCode || "00001";
  const shelfLife = selectedProduct?.shelfLifeDays || 3;

  // Calculate Dates
  const today = new Date();
  const packDateStr = `${String(today.getDate()).padStart(2, "0")}/${String(
    today.getMonth() + 1
  ).padStart(2, "0")}/${today.getFullYear()}`;

  const expDate = new Date();
  expDate.setDate(today.getDate() + shelfLife);
  const expDateStr = `${String(expDate.getDate()).padStart(2, "0")}/${String(
    expDate.getMonth() + 1
  ).padStart(2, "0")}/${expDate.getFullYear()}`;

  // Generated Barcode
  const barcodeValue = generateScaleBarcode("20", plu, netWeight);

  // Quick weight adjustment
  const handleQuickWeight = (kg: number) => {
    setGrossWeight(kg + tareWeight);
    setIsStable(true);
  };

  const handleTare = (grams: number) => {
    setTareWeight(grams / 1000);
  };

  const handleZero = () => {
    setGrossWeight(0);
    setTareWeight(0);
  };

  const printSticker = () => {
    if (!selectedProduct || netWeight <= 0) {
      alert("يرجى وضع وزن صحيح للصنف قبل الطباعة");
      return;
    }

    setPrintedCount((c) => c + 1);
    setLastPrintedSticker({
      product: selectedProduct,
      netWeight,
      unitPrice,
      totalPrice,
      barcodeValue,
      printedAt: new Date().toLocaleTimeString("ar-EG"),
    });

    // Play print chime
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch {}

    window.print();
  };

  const filteredProducts = products.filter((p) => {
    if (selectedCat !== "الكل" && p.category !== selectedCat) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.nameAr.toLowerCase().includes(q);
      const matchPlu = (p.scaleItemCode || "").includes(q);
      return matchName || matchPlu;
    }
    return true;
  });

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="min-h-screen bg-[#0b1329] text-white flex flex-col font-sans select-none">
      {/* Scale Station Header */}
      <header className="bg-[#070e1e] border-b border-slate-800 px-4 py-2 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#004f9f] text-white flex items-center justify-center font-black">
            <Scale className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-sm text-white">سوبرماركت المرواني</span>
              <span className="text-slate-500 text-xs">•</span>
              <span className="text-xs text-sky-400 font-bold">محطة الميزان والباركود ⚖️</span>
            </div>
            <div className="text-[10px] text-slate-400 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>متصل بالميزان الرقمي (CAS) • مقاس الاستيكر: 56×40 ملم • المنفذ: COM3</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold">
          <Link
            href="/cashier"
            className="px-3 py-1.5 bg-[#004f9f]/30 border border-[#004f9f]/50 hover:bg-[#004f9f] rounded-lg text-white flex items-center gap-1.5 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>رابط الكاشير</span>
          </Link>
          <Link
            href="/dashboard"
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-200 flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>لوحة الإدارة</span>
          </Link>
          <Link
            href="/"
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-200"
          >
            المتجر
          </Link>
        </div>
      </header>

      {/* Main Scale Workstation */}
      <div className="flex-1 p-3 flex flex-col gap-3 max-w-7xl mx-auto w-full">
        {/* Top Control & Metrics Bar */}
        <div className="bg-[#101b33] border border-slate-800 rounded-2xl p-4 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                الميزان يقرأ لحظياً ⚡
              </span>
              <button
                onClick={handleZero}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold rounded-lg text-slate-300"
              >
                تصفير الميزان (Zero)
              </button>
              <button
                onClick={() => handleTare(10)}
                className="px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-xs font-bold rounded-lg text-amber-300"
              >
                خصم العبوة (Tare)
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="text-slate-400">
                ملصقات اليوم: <strong className="text-white">{printedCount}</strong>
              </span>
              <button
                onClick={() => setShowKeypad(!showKeypad)}
                className="px-2.5 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg font-bold flex items-center gap-1"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>لوحة الأرقام (PLU)</span>
              </button>
            </div>
          </div>

          {/* Scale Numbers Display */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            {/* Gross Weight */}
            <div className="bg-[#0b1329] p-3 rounded-xl border border-slate-800">
              <div className="text-[11px] text-slate-400 font-bold mb-1">الوزن القائم (Gross)</div>
              <div className="text-2xl font-black font-mono text-slate-200">
                {grossWeight.toFixed(3)}{" "}
                <span className="text-xs font-sans text-slate-500">كجم</span>
              </div>
            </div>

            {/* Tare */}
            <div className="bg-[#0b1329] p-3 rounded-xl border border-slate-800">
              <div className="text-[11px] text-amber-400 font-bold mb-1">وزن الفارغ (Tare)</div>
              <div className="text-2xl font-black font-mono text-amber-400">
                {Math.round(tareWeight * 1000)}{" "}
                <span className="text-xs font-sans text-amber-500">جرام</span>
              </div>
            </div>

            {/* Net Weight */}
            <div className="bg-[#0b1329] p-3 rounded-xl border-2 border-emerald-500/40 relative">
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-emerald-400 font-bold mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>الوزن الصافي (Net)</span>
                <span className="bg-emerald-500/20 text-[9px] px-1.5 py-0.2 rounded text-emerald-300">
                  ثابت
                </span>
              </div>
              <div className="text-3xl font-black font-mono text-emerald-400">
                {netWeight.toFixed(3)}{" "}
                <span className="text-xs font-sans text-emerald-500">كجم</span>
              </div>
            </div>

            {/* Unit Price */}
            <div className="bg-[#0b1329] p-3 rounded-xl border border-slate-800">
              <div className="text-[11px] text-slate-400 font-bold mb-1">سعر الكيلو</div>
              <div className="text-2xl font-black font-mono text-slate-200">
                {unitPrice.toFixed(2)}{" "}
                <span className="text-xs font-sans text-slate-500">ج.م</span>
              </div>
            </div>

            {/* Total Required */}
            <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-[#002d62] to-[#004f9f] p-3 rounded-xl border border-blue-400/30 text-white shadow-lg">
              <div className="text-[11px] text-blue-200 font-bold mb-1">الإجمالي المطلوب</div>
              <div className="text-3xl font-black font-mono text-emerald-300">
                {totalPrice.toFixed(2)}{" "}
                <span className="text-xs font-sans text-blue-200">ج.م</span>
              </div>
            </div>
          </div>
        </div>

        {/* Work Area: Sticker Preview + Product Selector */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* Left Column (5 Cols): 56x40mm Sticker Preview & Print Action */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="bg-[#101b33] border border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-between">
              <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-bold flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-sky-400" />
                  معاينة استيكر الميزان الحراري (56×40 ملم)
                </span>
                <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px]">EAN-13 Modulo 10</span>
              </div>

              {/* Physical Thermal Label Preview Box */}
              <div
                id="scale-sticker"
                className="w-full max-w-[340px] bg-white text-black p-3.5 rounded-lg shadow-2xl border-2 border-slate-300 select-text flex flex-col justify-between aspect-[1.4/1]"
                dir="rtl"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-black/80 pb-1">
                  <span className="font-mono font-black text-xs">
                    PLU: {selectedProduct?.scaleItemCode || "00000"}
                  </span>
                  <span className="font-black text-xs text-slate-900">سوبرماركت المرواني</span>
                </div>

                {/* Product Name */}
                <div className="text-center my-1">
                  <h3 className="font-black text-base text-black truncate leading-tight">
                    {selectedProduct?.nameAr || "يرجى اختيار صنف وزني"}
                  </h3>
                </div>

                {/* Pricing & Weight Grid */}
                <div className="grid grid-cols-3 text-center border-t border-b border-black/80 py-1 my-1 text-[11px] leading-tight font-bold">
                  <div className="border-l border-black/30">
                    <div className="text-[9px] text-slate-600">سعر الكيلو</div>
                    <div className="font-mono font-black">{unitPrice.toFixed(2)} ج</div>
                  </div>
                  <div className="border-l border-black/30">
                    <div className="text-[9px] text-slate-600">الوزن الصافي</div>
                    <div className="font-mono font-black text-black">
                      {netWeight.toFixed(3)} ك
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-600">المطلوب سداده</div>
                    <div className="font-mono font-black text-black">
                      {totalPrice.toFixed(2)} ج
                    </div>
                  </div>
                </div>

                {/* Packing & Expiry Dates */}
                <div className="flex justify-between text-[9px] font-mono text-slate-700 px-0.5">
                  <span>تعبئة: {packDateStr}</span>
                  <span>صلاحية حتى: {expDateStr}</span>
                </div>

                {/* Crisp EAN-13 Barcode */}
                <div className="mt-1 pt-0.5 flex flex-col items-center">
                  <BarcodeEan13 value={barcodeValue} height={42} width="100%" />
                </div>
              </div>

              {/* Big Print Button */}
              <button
                onClick={printSticker}
                disabled={!selectedProduct || netWeight <= 0}
                className="w-full mt-4 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 text-white font-black text-base rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-98 transition-transform"
              >
                <Printer className="w-5 h-5" />
                <span>طباعة الاستيكر (Enter / مسافة)</span>
              </button>

              <div className="mt-2 text-[11px] text-slate-400 text-center">
                💡 اضغط <kbd className="bg-slate-800 px-1.5 py-0.5 rounded font-mono text-white">Enter</kbd> أو <kbd className="bg-slate-800 px-1.5 py-0.5 rounded font-mono text-white">Space</kbd> من لوحة المفاتيح للطباعة السريعة
              </div>
            </div>

            {/* Quick Weight Adjusters & Tare Controls */}
            <div className="bg-[#101b33] border border-slate-800 rounded-2xl p-3.5">
              <div className="text-xs font-bold text-slate-300 mb-2 flex items-center justify-between">
                <span>أوزان سريعة:</span>
                <span className="text-[10px] text-slate-500">محاكاة أو اختيار مباشر</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5 mb-3">
                {[0.25, 0.5, 0.75, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0].map((w) => (
                  <button
                    key={w}
                    onClick={() => handleQuickWeight(w)}
                    className="py-1.5 bg-[#0b1329] hover:bg-[#004f9f] border border-slate-700 rounded-lg text-xs font-mono font-bold text-slate-200 transition-colors"
                  >
                    {w < 1 ? `${w * 1000} جم` : `${w} كجم`}
                  </button>
                ))}
              </div>

              {/* Tare selection */}
              <div className="text-xs font-bold text-amber-400 mb-2">فارغ العبوة (Tare):</div>
              <div className="flex gap-2">
                {[
                  { label: "10 جم (كيس)", val: 10 },
                  { label: "25 جم (طبق)", val: 25 },
                  { label: "50 جم (علبة)", val: 50 },
                  { label: "100 جم", val: 100 },
                  { label: "إلغاء", val: 0 },
                ].map((t) => (
                  <button
                    key={t.val}
                    onClick={() => handleTare(t.val)}
                    className={`flex-1 py-1 text-xs rounded-lg font-bold border transition-colors ${
                      tareWeight === t.val / 1000
                        ? "bg-amber-500 text-black border-amber-400"
                        : "bg-[#0b1329] text-slate-300 border-slate-700 hover:border-amber-400"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Products Catalog & Search */}
          <div className="lg:col-span-7 bg-[#101b33] border border-slate-800 rounded-2xl p-4 flex flex-col overflow-hidden">
            {/* Search Input */}
            <div className="relative mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن صنف وزني أو كود الميزان (PLU)..."
                className="w-full h-11 pl-4 pr-10 bg-[#0b1329] border border-slate-700 focus:border-[#004f9f] rounded-xl outline-none font-bold text-sm text-white"
              />
              <Search className="w-5 h-5 text-slate-500 absolute right-3 top-3" />
            </div>

            {/* Category Filter Chips */}
            <div className="flex gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
              <button
                onClick={() => setSelectedCat("الكل")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 ${
                  selectedCat === "الكل"
                    ? "bg-[#004f9f] text-white"
                    : "bg-[#0b1329] text-slate-400 border border-slate-800"
                }`}
              >
                الكل ({products.length})
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCat(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 ${
                    selectedCat === c
                      ? "bg-[#004f9f] text-white"
                      : "bg-[#0b1329] text-slate-400 border border-slate-800"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-2.5 pr-1">
              {filteredProducts.map((p) => {
                const isSelected = selectedProduct?.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProduct(p)}
                    className={`p-3 rounded-xl border text-right flex flex-col justify-between transition-all active:scale-95 group ${
                      isSelected
                        ? "bg-[#002d62] border-sky-400 shadow-md ring-2 ring-sky-400/40"
                        : "bg-[#0b1329] border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700">
                        PLU {p.scaleItemCode || "00000"}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      )}
                    </div>

                    <div className="w-full aspect-square rounded-lg bg-slate-900/60 p-2 flex items-center justify-center mb-2 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.nameAr}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-xs text-white line-clamp-1 mb-1">
                        {p.nameAr}
                      </h4>
                      <div className="flex items-center justify-between text-xs font-black">
                        <span className="text-emerald-400 font-mono">
                          {p.basePrice.toFixed(2)} ج.م
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          / {p.unit || "كجم"}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Numeric Keypad Modal for quick PLU typing */}
      {showKeypad && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#101b33] border border-slate-700 rounded-2xl max-w-xs w-full p-5 text-center shadow-2xl">
            <h3 className="font-black text-sm text-white mb-2">
              إدخال كود الميزان السريع (PLU)
            </h3>
            <div className="bg-[#0b1329] border border-slate-700 rounded-xl p-3 font-mono font-black text-2xl text-emerald-400 mb-4 tracking-widest">
              {keypadInput || "00000"}
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                <button
                  key={num}
                  onClick={() => {
                    if (keypadInput.length < 5) {
                      setKeypadInput((prev) => prev + num);
                    }
                  }}
                  className={`py-3 bg-[#0b1329] hover:bg-[#004f9f] border border-slate-700 rounded-xl font-mono font-black text-lg text-white ${
                    num === 0 ? "col-span-2" : ""
                  }`}
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => setKeypadInput("")}
                className="py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 rounded-xl font-bold text-xs text-red-300"
              >
                مسح
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  const targetPlu = keypadInput.padStart(5, "0");
                  const found = products.find((p) => p.scaleItemCode === targetPlu);
                  if (found) {
                    setSelectedProduct(found);
                    setShowKeypad(false);
                    setKeypadInput("");
                  } else {
                    alert(`لم يتم العثور على صنف بكود PLU: ${targetPlu}`);
                  }
                }}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-xs"
              >
                اختيار الصنف
              </button>
              <button
                onClick={() => {
                  setShowKeypad(false);
                  setKeypadInput("");
                }}
                className="px-4 py-2.5 bg-slate-800 text-slate-300 rounded-xl font-bold text-xs"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Print Media Styles for Thermal Label Printer */}
      <style jsx global>{`
        @media print {
          @page {
            size: 56mm 40mm;
            margin: 0;
          }
          body * {
            visibility: hidden !important;
          }
          #scale-sticker,
          #scale-sticker * {
            visibility: visible !important;
          }
          #scale-sticker {
            position: fixed !important;
            left: 0 !important;
            top: 0 !important;
            width: 56mm !important;
            height: 40mm !important;
            max-width: 56mm !important;
            max-height: 40mm !important;
            padding: 3mm !important;
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            background: #ffffff !important;
            color: #000000 !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
