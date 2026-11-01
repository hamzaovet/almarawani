"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Sparkles, Clock, ShieldCheck, Flame } from "lucide-react";

interface HeroBannerProps {
  onSelectCategory: (cat: string) => void;
}

export default function HeroBanner({ onSelectCategory }: HeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: "عروض كبرى • وفر حتى 25%",
      title: "مهرجان التوفير من سوبرماركت المرواني 🛒",
      subtitle: "أقوى خصومات الأسبوع على الألبان والأجبان والمؤن الأساسية بفرع المعادي",
      buttonText: "تسوق العروض فوراً",
      categoryTarget: "عروض",
      bgGradient: "from-[#004f9f] via-[#003875] to-[#00204a]",
      accentColor: "#e60000",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      badge: "المرواني ناو ⚡ 60 دقيقة",
      title: "خدمة التوصيل السوبر سريع بالمعادي 🛵",
      subtitle: "طلبك يتجمع طازج ومغلف بعناية ويوصل لحد باب بيتك في أقل من ساعة واحدة!",
      buttonText: "اطلب الآن واستلم فوراً",
      categoryTarget: "ألبان وأجبان",
      bgGradient: "from-[#002d62] via-[#0a4585] to-[#005bb5]",
      accentColor: "#f59e0b",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      badge: "كرتونة الخير والتوفير 📦",
      title: "كرتونة التوفير المتكاملة بـ 380 ج.م فقط!",
      subtitle: "10 أصناف أساسية: أرز، مكرونة، زيت، سمن، شاي، صلصة، سكر مع توصيل مجاني",
      buttonText: "اطلب كرتونة التوفير",
      categoryTarget: "كراتين وعروض التوفير",
      bgGradient: "from-[#8b0000] via-[#b31414] to-[#e60000]",
      accentColor: "#fbbf24",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      badge: "طازج يومياً من المزرعة 🥦",
      title: "سوق الخضار والفاكهة فرز أول 🍅",
      subtitle: "طماطم، بطاطس تحمير، بصل، خيار، وتفاح سكري منتقاة حبة بحبة بأسعار الجملة",
      buttonText: "تصفح الطازج اليوم",
      categoryTarget: "خضروات وفواكه طازجة",
      bgGradient: "from-[#065f46] via-[#047857] to-[#059669]",
      accentColor: "#34d399",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-4 pb-2">
      {/* 1. Main Carousel Banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 aspect-[21/9] sm:aspect-[24/9] md:aspect-[30/9] min-h-[220px] md:min-h-[260px] flex items-center">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 bg-gradient-to-r ${s.bgGradient} transition-opacity duration-700 flex items-center ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background pattern & overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />

            <div className="relative z-10 w-full h-full flex items-center justify-between px-6 sm:px-12 md:px-16">
              {/* Text content */}
              <div className="max-w-xl text-white space-y-2 sm:space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-black bg-white/20 backdrop-blur-md border border-white/30 text-amber-300">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>{s.badge}</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight drop-shadow-md">
                  {s.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed max-w-lg line-clamp-2 sm:line-clamp-none">
                  {s.subtitle}
                </p>

                <div className="pt-1">
                  <button
                    onClick={() => onSelectCategory(s.categoryTarget)}
                    className="px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm text-slate-900 bg-white hover:bg-amber-300 shadow-md transition-all transform active:scale-95 flex items-center gap-2"
                  >
                    <span>{s.buttonText}</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Photo Showcase */}
              <div className="hidden sm:block shrink-0 relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 rotate-1 transform hover:rotate-0 transition-transform">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Arrows */}
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-3 right-1/2 translate-x-1/2 z-20 flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide ? "w-6 bg-white shadow-sm" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. Carrefour 4 Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004f9f] flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-xs text-slate-800">المرواني ناو ⚡</h4>
            <p className="text-[11px] text-slate-500">توصيل 60 دقيقة بالمعادي</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-xs text-slate-800">طازج 100% ومضمون</h4>
            <p className="text-[11px] text-slate-500">جودة وفحص عند الاستلام</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-xs text-slate-800">أسعار الجملة</h4>
            <p className="text-[11px] text-slate-500">عروض يومية لا تقارن</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-xs text-slate-800">دفع كاش أو فيزا</h4>
            <p className="text-[11px] text-slate-500">ماكينة فيزا مع الطيار</p>
          </div>
        </div>
      </div>
    </div>
  );
}
