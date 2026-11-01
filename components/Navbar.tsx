"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Search,
  MapPin,
  PhoneCall,
  Clock,
  Sparkles,
  User,
  X,
  ChevronDown,
  Percent,
  MessageCircle,
  Truck,
  Flame,
} from "lucide-react";

interface NavbarProps {
  cartItemsCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  categories: any[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedZone: string;
  onSelectZone: (zone: string) => void;
  deliveryZones: any[];
  user: any;
  onOpenChat: () => void;
}

export default function Navbar({
  cartItemsCount,
  cartTotal,
  onOpenCart,
  selectedCategory,
  onSelectCategory,
  categories,
  searchQuery,
  onSearchChange,
  selectedZone,
  onSelectZone,
  deliveryZones,
  user,
  onOpenChat,
}: NavbarProps) {
  const [isZoneModalOpen, setIsZoneModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. Carrefour Top Utility Bar */}
      <div className="bg-[#002d62] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Right: Branch & Fast Delivery */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-amber-300">
              <Truck className="w-3.5 h-3.5" />
              توصيل سوبر سريع خلال 60 دقيقة في المعادي ⚡
            </span>
            <span className="hidden md:inline text-blue-200">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-blue-300" />
              فرع المعادي: شارع النصر، دجلة
            </span>
          </div>

          {/* Center: Free Delivery Promo */}
          <div className="hidden lg:block text-slate-200">
            🚚 توصيل مجاني لكافة طلبات المعادي بقيمة 400 ج.م أو أكثر!
          </div>

          {/* Left: Hotline & Track */}
          <div className="flex items-center gap-4 text-slate-200">
            <Link
              href="/track"
              className="hover:text-amber-300 transition-colors flex items-center gap-1 font-medium"
            >
              <Clock className="w-3.5 h-3.5" />
              تتبع طلبك
            </Link>
            <button
              onClick={onOpenChat}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              خدمة العملاء
            </button>
            <a
              href="tel:01009988771"
              className="hover:text-white transition-colors flex items-center gap-1 font-bold text-amber-300 ltr:text-right"
              dir="ltr"
            >
              <PhoneCall className="w-3 h-3 text-amber-300" />
              01009988771
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-200 border-b border-slate-100 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3 lg:gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#004f9f] to-[#002d62] flex items-center justify-center text-white shadow-sm border border-blue-400/30">
                <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl md:text-2xl text-[#004f9f] tracking-tight">
                    المرواني
                  </span>
                  <span className="bg-[#e60000] text-white text-[10px] font-black px-1.5 py-0.5 rounded uppercase">
                    ماركت
                  </span>
                </div>
                <span className="text-[10px] md:text-xs text-slate-500 font-medium">
                  سلسلة سوبرماركت • فرع المعادي
                </span>
              </div>
            </Link>

            {/* Address / Zone Selector */}
            <button
              onClick={() => setIsZoneModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-700 transition-colors shrink-0"
              title="تغيير منطقة التوصيل بالمعادي"
            >
              <MapPin className="w-4 h-4 text-[#004f9f] shrink-0" />
              <div className="text-right">
                <div className="text-[10px] text-slate-400">التوصيل إلى:</div>
                <div className="font-bold text-slate-800 truncate max-w-[130px]">
                  {selectedZone || "المعادي القديمة ودجلة"}
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </button>

            {/* Carrefour Big Search Bar */}
            <div className="flex-1 max-w-2xl relative">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="ابحث عن أكثر من 1,000 صنف: حليب، جبنة، أرز، زيت، منظفات، خضار..."
                  className="w-full h-11 pl-12 pr-11 text-xs md:text-sm bg-slate-50 border-2 border-slate-200 focus:border-[#004f9f] focus:bg-white rounded-full outline-none transition-all placeholder:text-slate-400"
                />
                <Search className="w-4 h-4 text-slate-400 absolute right-4 pointer-events-none" />
                {searchQuery ? (
                  <button
                    onClick={() => onSearchChange("")}
                    className="absolute left-3 w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs hover:bg-slate-300"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="absolute left-3 hidden md:flex items-center gap-1 text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-bold">
                    <Sparkles className="w-3 h-3 text-blue-500" />
                    المرواني ناو ⚡
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions (User & Cart) */}
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              {/* User / Staff portal */}
              <Link
                href={user ? "/dashboard" : "/login"}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-700 hover:text-[#004f9f] hover:bg-slate-50 text-xs font-bold transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#004f9f]">
                  <User className="w-4 h-4" />
                </div>
                <div className="hidden lg:block text-right">
                  <div className="text-[10px] text-slate-400">
                    {user ? user.role : "حسابي"}
                  </div>
                  <div className="font-bold truncate max-w-[100px]">
                    {user ? user.name.split(" ")[0] : "دخول الإدارة"}
                  </div>
                </div>
              </Link>

              {/* Cart Button */}
              <button
                onClick={onOpenCart}
                className="flex items-center gap-2.5 px-3 md:px-4 py-2.5 rounded-xl bg-[#004f9f] hover:bg-[#003875] text-white shadow-md shadow-blue-900/10 transition-all transform active:scale-95"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 text-white" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#e60000] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                      {cartItemsCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:flex flex-col text-right">
                  <span className="text-[10px] text-blue-100">سلة المشتريات</span>
                  <span className="text-xs font-extrabold text-amber-300">
                    {cartTotal.toFixed(2)} ج.م
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Category Bar with Quick Chips */}
        <div className="bg-white border-t border-slate-100 py-2 px-4 shadow-sm overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
            <button
              onClick={() => onSelectCategory("الكل")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === "الكل"
                  ? "bg-[#004f9f] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span>جميع الأصناف</span>
            </button>

            <button
              onClick={() => onSelectCategory("عروض")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === "عروض"
                  ? "bg-[#e60000] text-white shadow-sm"
                  : "bg-red-50 text-red-700 hover:bg-red-100 border border-red-200"
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-red-500 fill-current" />
              <span>عروض وتخفيضات الأسبوع 🔥</span>
            </button>

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.nameAr)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.nameAr
                    ? "bg-[#004f9f] text-white shadow-sm"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.nameAr}</span>
                {cat.badge && (
                  <span className="text-[9px] bg-amber-100 text-amber-800 px-1 py-0.2 rounded font-bold">
                    {cat.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Delivery Zone Selector Modal */}
      {isZoneModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#004f9f]" />
                <h3 className="font-extrabold text-base text-slate-800">
                  حدد منطقة التوصيل في المعادي
                </h3>
              </div>
              <button
                onClick={() => setIsZoneModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-500 mb-3">
              خدمة المرواني ناو للتوصيل السوبر سريع متوفرة لكافة أحياء المعادي وضواحيها من فرعنا الرئيسي بشارع النصر:
            </p>

            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
              {deliveryZones.map((z) => (
                <button
                  key={z.id}
                  onClick={() => {
                    onSelectZone(z.nameAr);
                    setIsZoneModalOpen(false);
                  }}
                  className={`w-full p-3 rounded-xl border text-right transition-all flex items-center justify-between ${
                    selectedZone === z.nameAr
                      ? "border-[#004f9f] bg-blue-50/50 shadow-sm"
                      : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div>
                    <div className="font-bold text-xs text-slate-800">
                      {z.nameAr}
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                      <span>مدة التوصيل: ~{z.timeMinutes} دقيقة</span>
                      <span>•</span>
                      <span>حد أدنى: {z.minOrder} ج.م</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-black text-[#004f9f] bg-white px-2 py-1 rounded-lg border border-blue-200 shadow-xs">
                      {z.fee} ج.م
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>🚀 طلبات فوق 400 ج.م التوصيل مجاني</span>
              <button
                onClick={() => setIsZoneModalOpen(false)}
                className="font-bold text-[#004f9f] hover:underline"
              >
                تأكيد ومتابعة
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
