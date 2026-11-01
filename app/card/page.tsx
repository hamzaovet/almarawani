"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import QRCode from "qrcode";
import {
  ShoppingBag,
  Printer,
  ArrowRight,
  Download,
  MapPin,
  Clock,
  Truck,
  Sparkles,
  Smartphone,
  Globe,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function PromoCardPage() {
  const [webQr, setWebQr] = useState("");
  const [apkQr, setApkQr] = useState("");

  useEffect(() => {
    const webUrl = "https://almarawani.vercel.app";
    const apkUrl = "https://almarawani.vercel.app/api/download/apk";

    QRCode.toDataURL(webUrl, {
      width: 380,
      margin: 1,
      color: { dark: "#002d62", light: "#ffffff" },
    })
      .then(setWebQr)
      .catch(console.error);

    QRCode.toDataURL(apkUrl, {
      width: 380,
      margin: 1,
      color: { dark: "#004f9f", light: "#ffffff" },
    })
      .then(setApkQr)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 flex flex-col items-center justify-center font-['Cairo',sans-serif]">
      {/* Action Header (Hidden in Print) */}
      <div className="max-w-2xl w-full mb-6 flex flex-wrap items-center justify-between gap-3 no-print">
        <Link
          href="/"
          className="text-xs font-bold text-slate-600 hover:text-[#004f9f] flex items-center gap-1.5 transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للمتجر الرئيسي</span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="/almarawani-official-card.png"
            download="almarawani-official-card.png"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold shadow flex items-center gap-2 transition-all active:scale-95"
          >
            <Download className="w-4 h-4 text-amber-300" />
            <span>تحميل الكارت صورة (PNG بدقة 4K)</span>
          </a>

          <button
            onClick={() => window.print()}
            className="px-5 py-2 rounded-xl bg-[#004f9f] hover:bg-[#003875] text-white text-xs font-extrabold shadow flex items-center gap-2 transition-all active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>طباعة فورية (A4 / مقاس بروشور)</span>
          </button>
        </div>
      </div>

      {/* The Printable Official Card (Carrefour Egypt Royal Aesthetic) */}
      <div
        id="official-card"
        className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border-4 border-[#004f9f] overflow-hidden p-6 sm:p-8 space-y-5 text-slate-800 transition-all"
      >
        {/* Card Header */}
        <div className="bg-gradient-to-r from-[#002d62] via-[#004f9f] to-[#002d62] -m-6 sm:-m-8 p-6 text-white text-center space-y-2.5 mb-5 relative overflow-hidden">
          {/* Top red accent ribbon */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#e60000]" />

          {/* Logo Badge */}
          <div className="w-14 h-14 rounded-2xl bg-white text-[#004f9f] flex items-center justify-center mx-auto shadow-md border-2 border-amber-400">
            <ShoppingBag className="w-8 h-8 text-[#004f9f]" />
          </div>

          <div className="flex items-center justify-center gap-2.5">
            <h1 className="font-black text-2xl sm:text-3xl tracking-tight text-white drop-shadow-sm">
              سوبرماركت المرواني
            </h1>
            <span className="bg-[#e60000] text-white text-xs font-black px-2 py-0.5 rounded shadow">
              ماركت
            </span>
          </div>

          <p className="text-xs text-amber-300 font-extrabold tracking-wide">
            سلسلة سوبرماركت المرواني • فرع المعادي الرئيسي
          </p>

          <p className="text-[11px] text-blue-100 max-w-sm mx-auto leading-relaxed">
            أسعار الجملة وجودة الطازج 100% حتى باب بيتك في المعادي وضواحيها
          </p>
        </div>

        {/* 60-Minute Fast Delivery Ribbon */}
        <div className="bg-[#e60000] text-white rounded-2xl p-3 flex items-center justify-between text-xs font-bold shadow-sm">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-white animate-pulse" />
            <span>خدمة المرواني ناو: توصيل سوبر سريع خلال 60 دقيقة ⚡</span>
          </div>
          <span className="bg-white text-[#e60000] text-[10px] font-black px-2 py-0.5 rounded-lg shadow-xs">
            مجاناً فوق 400 ج.م
          </span>
        </div>

        {/* Two High-Density QR Codes Side-by-Side */}
        <div className="grid grid-cols-2 gap-4">
          {/* QR 1: Web Store */}
          <div className="bg-[#f8fafc] rounded-2xl p-4 border-2 border-[#004f9f] text-center space-y-2.5 flex flex-col justify-between shadow-xs">
            <div className="inline-flex items-center justify-center gap-1.5 text-xs font-black text-white bg-[#002d62] py-1.5 px-3 rounded-xl shadow-xs">
              <Globe className="w-3.5 h-3.5 text-amber-300" />
              <span>المتجر الإلكتروني (Web)</span>
            </div>

            <div className="aspect-square bg-white rounded-xl p-2 border border-slate-200 flex items-center justify-center shadow-xs">
              {webQr ? (
                <img
                  src={webQr}
                  alt="متجر سوبرماركت المرواني"
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-8 h-8 rounded-full border-2 border-slate-300 border-t-blue-500 animate-spin" />
              )}
            </div>

            <div className="space-y-0.5">
              <p className="text-[11px] font-black text-[#002d62]">
                امسح الكود للتسوق أونلاين فوراً
              </p>
              <p className="text-[10px] text-slate-500 font-medium">
                تصفح كافة الأقسام والعروض الأسبوعية
              </p>
            </div>

            <div className="py-2 px-3 rounded-xl bg-[#004f9f] text-white text-[11px] font-black tracking-wide shadow-xs">
              تصفح المتجر واطلب الآن ◄
            </div>
          </div>

          {/* QR 2: Official Android APK */}
          <div className="bg-[#f8fafc] rounded-2xl p-4 border-2 border-[#e60000] text-center space-y-2.5 flex flex-col justify-between shadow-xs">
            <div className="inline-flex items-center justify-center gap-1.5 text-xs font-black text-white bg-[#e60000] py-1.5 px-3 rounded-xl shadow-xs">
              <Smartphone className="w-3.5 h-3.5 text-white" />
              <span>تطبيق الأندرويد (APK)</span>
            </div>

            <div className="aspect-square bg-white rounded-xl p-2 border border-slate-200 flex items-center justify-center shadow-xs">
              {apkQr ? (
                <img
                  src={apkQr}
                  alt="تطبيق سوبرماركت المرواني أندرويد"
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-8 h-8 rounded-full border-2 border-slate-300 border-t-red-500 animate-spin" />
              )}
            </div>

            <div className="space-y-0.5">
              <p className="text-[11px] font-black text-[#e60000]">
                امسح الكود لتثبيت التطبيق مباشرة
              </p>
              <p className="text-[10px] text-slate-500 font-medium">
                ملف APK أصلي وخفيف • إشعارات العروض
              </p>
            </div>

            <div className="py-2 px-3 rounded-xl bg-[#e60000] text-white text-[11px] font-black tracking-wide shadow-xs">
              تحميل تطبيق الأندرويد ◄
            </div>
          </div>
        </div>

        {/* 4 Feature Badges Strip */}
        <div className="bg-[#ebf3fc] border border-blue-200 rounded-2xl p-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-bold text-[#002d62]">
          <div className="flex items-center justify-center gap-1 bg-white py-1.5 px-2 rounded-xl border border-blue-100">
            <Truck className="w-3.5 h-3.5 text-[#004f9f]" />
            <span>توصيل خلال 60 دقيقة</span>
          </div>
          <div className="flex items-center justify-center gap-1 bg-white py-1.5 px-2 rounded-xl border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>طازج ويومي 100%</span>
          </div>
          <div className="flex items-center justify-center gap-1 bg-white py-1.5 px-2 rounded-xl border border-blue-100">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#e60000]" />
            <span>أسعار جملة وتوفير</span>
          </div>
          <div className="flex items-center justify-center gap-1 bg-white py-1.5 px-2 rounded-xl border border-blue-100">
            <CreditCard className="w-3.5 h-3.5 text-[#004f9f]" />
            <span>كاش • فيزا • إنستاباي</span>
          </div>
        </div>

        {/* Branch Details Box (STRICTLY NO PHONE NUMBERS) */}
        <div className="bg-[#f8fafc] rounded-2xl p-4 border border-slate-200 space-y-2 text-xs">
          <div className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-100">
            <MapPin className="w-4 h-4 text-[#004f9f] shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-extrabold text-[#002d62]">عنوان الفرع: </span>
              <span className="text-slate-700 font-semibold">
                شارع النصر، تقاطع شارع 261، دجلة، المعادي - القاهرة
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-100">
            <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-extrabold text-[#002d62]">مواعيد العمل: </span>
              <span className="text-slate-700 font-semibold">
                يومياً من الساعة 8:00 صباحاً حتى 2:00 بعد منتصف الليل
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-100">
            <Truck className="w-4 h-4 text-[#004f9f] shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-extrabold text-[#002d62]">مناطق التوصيل: </span>
              <span className="text-slate-700 font-semibold">
                المعادي القديمة، دجلة، سرايات المعادي، زهراء المعادي، الكورنيش، المقطم
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-100">
            <CreditCard className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-extrabold text-[#002d62]">طرق الدفع والتسوية: </span>
              <span className="text-slate-700 font-semibold">
                كاش عند الاستلام • ماكينة فيزا مع الطيار • تحويل لحظي إنستاباي
              </span>
            </div>
          </div>
        </div>

        {/* Footer Link & Branding */}
        <div className="text-center space-y-1 pt-1 border-t border-slate-100">
          <p className="text-xs font-black text-[#004f9f] tracking-wide">
            https://almarawani.vercel.app
          </p>
          <p className="text-[10px] text-slate-400">
            سوبرماركت المرواني — فرع المعادي • تم تطوير المنظومة بواسطة أوركا للحلول البرمجية والسحابية 2026
          </p>
        </div>
      </div>
    </div>
  );
}
