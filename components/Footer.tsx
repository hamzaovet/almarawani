"use client";

import React from "react";
import Link from "next/link";
import {
  ShoppingBag,
  MapPin,
  PhoneCall,
  Clock,
  Truck,
  ShieldCheck,
  Smartphone,
  CreditCard,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#002d62] text-white pt-12 pb-8 border-t-4 border-[#004f9f] mt-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-blue-900/60">
          {/* Col 1: Brand & About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white text-[#004f9f] flex items-center justify-center font-black">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight">
                  سوبرماركت المرواني
                </span>
                <span className="bg-[#e60000] text-white text-[9px] font-black px-1.5 py-0.5 rounded mr-1.5">
                  ماركت
                </span>
              </div>
            </div>
            <p className="text-xs text-blue-100 leading-relaxed">
              سلسلة سوبرماركت المرواني في خدمتكم من فرعنا الرئيسي في المعادي. نقدم أرقى تشكيلة من الألبان والأجبان، الخضروات والفواكه الطازجة، واللحوم والبقالة بأفضل أسعار الجملة.
            </p>
            <div className="text-xs text-amber-300 font-bold flex items-center gap-1.5 pt-1">
              <Truck className="w-4 h-4 text-amber-400" />
              <span>المرواني ناو ⚡ توصيل سوبر سريع في 60 دقيقة</span>
            </div>
          </div>

          {/* Col 2: Branch & Contact */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>بيانات الفرع والاتصال</span>
            </h4>
            <div className="space-y-2 text-xs text-blue-100">
              <p>
                <strong>العنوان:</strong> شارع النصر، تقاطع شارع 261، دجلة، المعادي - القاهرة.
              </p>
              <p>
                <strong>ساعات العمل:</strong> يومياً من 8 صباحاً حتى 2 بعد منتصف الليل.
              </p>
              <p className="flex items-center gap-1 text-amber-300 font-bold">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>الخط الساخن: 01009988771</span>
              </p>
              <p className="text-[11px] text-blue-200">
                أرقام إضافية: 01122334455 | 01234567890
              </p>
            </div>
          </div>

          {/* Col 3: Delivery Zones */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-300" />
              <span>مناطق التوصيل بالمعادي</span>
            </h4>
            <ul className="text-xs text-blue-100 space-y-1.5">
              <li>• المعادي القديمة ودجلة (~35 دقيقة)</li>
              <li>• سرايات المعادي وميدان الحرية (~35 دقيقة)</li>
              <li>• شارع النصر واللاسلكي والعروبة (~30 دقيقة)</li>
              <li>• زهراء المعادي والشطر العاشر (~45 دقيقة)</li>
              <li>• كورنيش المعادي وأبراج عثمان (~45 دقيقة)</li>
              <li>• المقطم وطريق الأوتوستراد (~55 دقيقة)</li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Staff */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-amber-300" />
              <span>روابط سريعة</span>
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-blue-100 font-medium">
              <Link href="/track" className="hover:text-amber-300 transition-colors">
                🛵 تتبع خط سير الطيار لحظياً
              </Link>
              <Link href="/card" className="hover:text-amber-300 transition-colors">
                🪪 كارت المرواني الرسمي ورموز QR
              </Link>
              <Link href="/delivery" className="hover:text-amber-300 transition-colors">
                🏍️ بوابة طياري الدليفري
              </Link>
              <Link href="/cashier" className="hover:text-amber-300 transition-colors">
                🖥️ شاشة كاشير ونقطة البيع (POS)
              </Link>
              <Link href="/login" className="hover:text-amber-300 transition-colors text-amber-300 font-bold">
                🔒 بوابة دخول الإدارة والموظفين
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
          <div>
            © {new Date().getFullYear()} سوبرماركت المرواني — فرع المعادي. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-3">
            <span>طرق الدفع: كاش • فيزا مع الطيار • إنستاباي</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
