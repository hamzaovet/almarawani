"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import QRCode from "qrcode";
import {
  ShoppingBag,
  Printer,
  ArrowRight,
  PhoneCall,
  MapPin,
  Clock,
  Truck,
  Sparkles,
  Smartphone,
  Globe,
} from "lucide-react";

export default function PromoCardPage() {
  const [webQr, setWebQr] = useState("");
  const [apkQr, setApkQr] = useState("");

  useEffect(() => {
    const webUrl = "https://almarawani.vercel.app";
    const apkUrl = "https://almarawani.vercel.app/download";

    QRCode.toDataURL(webUrl, { width: 300, margin: 1, color: { dark: "#002d62", light: "#ffffff" } })
      .then(setWebQr)
      .catch(console.error);

    QRCode.toDataURL(apkUrl, { width: 300, margin: 1, color: { dark: "#004f9f", light: "#ffffff" } })
      .then(setApkQr)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 flex flex-col items-center justify-center font-['Cairo',sans-serif]">
      {/* Controls Bar */}
      <div className="max-w-2xl w-full mb-4 flex items-center justify-between no-print">
        <Link
          href="/"
          className="text-xs font-bold text-slate-600 hover:text-[#004f9f] flex items-center gap-1.5"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة لمتجر المرواني</span>
        </Link>

        <button
          onClick={() => window.print()}
          className="px-5 py-2.5 rounded-xl bg-[#004f9f] hover:bg-[#003875] text-white text-xs font-extrabold shadow-md flex items-center gap-2"
        >
          <Printer className="w-4 h-4" />
          <span>طباعة الكارت الرسمي (A4 / مقاس كارت)</span>
        </button>
      </div>

      {/* The Printable Official Promo Card */}
      <div
        id="official-card"
        className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border-4 border-[#004f9f] overflow-hidden p-6 sm:p-8 space-y-6 text-slate-800"
      >
        {/* Card Header */}
        <div className="bg-gradient-to-r from-[#002d62] via-[#004f9f] to-[#002d62] -m-6 sm:-m-8 p-6 text-white text-center space-y-2 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white text-[#004f9f] flex items-center justify-center mx-auto shadow-md">
            <ShoppingBag className="w-8 h-8" />
          </div>

          <div className="flex items-center justify-center gap-2">
            <h1 className="font-black text-2xl sm:text-3xl tracking-tight text-white">
              سوبرماركت المرواني
            </h1>
            <span className="bg-[#e60000] text-white text-xs font-black px-2 py-0.5 rounded">
              ماركت
            </span>
          </div>

          <p className="text-xs text-amber-300 font-bold">
            سلسلة سوبرماركت المرواني • فرع المعادي الرئيسي
          </p>

          <p className="text-[11px] text-blue-100 max-w-sm mx-auto">
            أسعار الجملة وجودة الطازج 100% حتى باب بيتك في المعادي وضواحيها
          </p>
        </div>

        {/* 60 Min Express Delivery Pill */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3 flex items-center justify-between text-xs font-bold text-[#004f9f]">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#e60000]" />
            <span>خدمة المرواني ناو للتوصيل السوبر سريع ⚡</span>
          </div>
          <span className="bg-[#004f9f] text-white text-[10px] font-black px-2 py-0.5 rounded-lg">
            خلال 60 دقيقة
          </span>
        </div>

        {/* Two QR Codes Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* QR 1: Web Store */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-center space-y-2">
            <div className="inline-flex items-center gap-1 text-xs font-black text-[#002d62]">
              <Globe className="w-3.5 h-3.5 text-[#004f9f]" />
              <span>المتجر الإلكتروني</span>
            </div>
            <div className="aspect-square bg-white rounded-xl p-2 border border-slate-200 flex items-center justify-center shadow-xs">
              {webQr ? (
                <img src={webQr} alt="متجر المرواني" className="w-full h-full object-contain" />
              ) : (
                <div className="w-8 h-8 rounded-full border-2 border-slate-300 border-t-blue-500 animate-spin" />
              )}
            </div>
            <p className="text-[10px] font-bold text-slate-500">
              امسح الكود واطلب أونلاين فوراً
            </p>
          </div>

          {/* QR 2: Android App */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-center space-y-2">
            <div className="inline-flex items-center gap-1 text-xs font-black text-[#004f9f]">
              <Smartphone className="w-3.5 h-3.5 text-[#004f9f]" />
              <span>تطبيق الأندرويد</span>
            </div>
            <div className="aspect-square bg-white rounded-xl p-2 border border-slate-200 flex items-center justify-center shadow-xs">
              {apkQr ? (
                <img src={apkQr} alt="تطبيق المرواني" className="w-full h-full object-contain" />
              ) : (
                <div className="w-8 h-8 rounded-full border-2 border-slate-300 border-t-blue-500 animate-spin" />
              )}
            </div>
            <p className="text-[10px] font-bold text-slate-500">
              امسح لتحميل ملف التطبيق APK
            </p>
          </div>
        </div>

        {/* Branch & Contact Info */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <MapPin className="w-4 h-4 text-[#004f9f] shrink-0" />
            <span>شارع النصر، تقاطع شارع 261، دجلة، المعادي - القاهرة</span>
          </div>

          <div className="flex items-center gap-2 font-black text-[#004f9f] text-sm">
            <PhoneCall className="w-4 h-4 text-[#e60000] shrink-0" />
            <span>الخط الساخن والدليفري: 01009988771</span>
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>خدمة التوصيل تعمل يومياً من 8 صباحاً حتى 2 بعد منتصف الليل</span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-[10px] text-slate-400 pt-2 border-t border-slate-100">
          تم تصميم وتطوير النظام بواسطة أوركا للحلول السحابية • سوبرماركت المرواني
        </div>
      </div>
    </div>
  );
}
