"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShoppingBag,
  Lock,
  User,
  KeyRound,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  Bike,
  Crown,
  Delete,
  CheckCircle,
  X,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [loginMode, setLoginMode] = useState<"credentials" | "pin">("credentials");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // PIN Keypad Modal State
  const [selectedStaff, setSelectedStaff] = useState<any | null>(null);
  const [modalPin, setModalPin] = useState("");
  const [pinError, setPinError] = useState("");

  const handleLogin = async (e?: React.FormEvent, customCreds?: any) => {
    if (e) e.preventDefault();
    setError("");
    setPinError("");

    const payload = customCreds || (loginMode === "pin" ? { pin } : { identifier, password });

    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success && data.user) {
        localStorage.setItem("almarawani_user", JSON.stringify(data.user));

        if (data.user.role === "delivery") {
          localStorage.setItem("almarawani_delivery_user", JSON.stringify(data.user));
          router.push("/delivery");
        } else if (data.user.role === "cashier") {
          router.push("/cashier");
        } else {
          router.push("/dashboard");
        }
      } else {
        const errMsg = data.error || "بيانات الدخول أو كود الـ PIN غير صحيح";
        if (selectedStaff) {
          setPinError(errMsg);
          setModalPin("");
        } else {
          setError(errMsg);
        }
      }
    } catch {
      const errMsg = "حدث خطأ في الاتصال بالخادم";
      if (selectedStaff) setPinError(errMsg);
      else setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  // When clicking a staff chip, open PIN modal
  const openPinModal = (staff: { roleName: string; username: string; defaultPinHint: string; icon: string; color: string }) => {
    setSelectedStaff(staff);
    setModalPin("");
    setPinError("");
  };

  // Handle Numpad clicks
  const handleNumpad = (digit: string) => {
    if (modalPin.length < 6) {
      const nextPin = modalPin + digit;
      setModalPin(nextPin);
      setPinError("");
      if (nextPin.length === 6) {
        // Auto-submit when 6 digits are reached
        handleLogin(undefined, { identifier: selectedStaff.username, pin: nextPin });
      }
    }
  };

  const handleBackspace = () => {
    setModalPin((prev) => prev.slice(0, -1));
    setPinError("");
  };

  const staffChips = [
    {
      roleName: "المالك (المايسترو)",
      username: "maestro",
      defaultPinHint: "157230",
      badge: "صلاحيات كاملة",
      color: "border-amber-500 bg-amber-50 text-amber-900 hover:bg-amber-100",
      icon: "👑",
    },
    {
      roleName: "مدير الفرع",
      username: "manager",
      defaultPinHint: "123456",
      badge: "إدارة وتشغيل",
      color: "border-blue-500 bg-blue-50 text-blue-900 hover:bg-blue-100",
      icon: "👔",
    },
    {
      roleName: "كاشير صالة 1",
      username: "cashier1",
      defaultPinHint: "111111",
      badge: "نقطة بيع POS",
      color: "border-emerald-500 bg-emerald-50 text-emerald-900 hover:bg-emerald-100",
      icon: "💳",
    },
    {
      roleName: "كاشير صالة 2",
      username: "cashier2",
      defaultPinHint: "222222",
      badge: "نقطة بيع POS",
      color: "border-teal-500 bg-teal-50 text-teal-900 hover:bg-teal-100",
      icon: "💳",
    },
    {
      roleName: "كابتن طيار الدليفري",
      username: "delivery",
      defaultPinHint: "333333",
      badge: "بوابة السائقين",
      color: "border-red-500 bg-red-50 text-red-900 hover:bg-red-100",
      icon: "🛵",
    },
    {
      roleName: "مسؤول تجهيز الطلبات",
      username: "picker",
      defaultPinHint: "444444",
      badge: "تجميع المنتجات",
      color: "border-purple-500 bg-purple-50 text-purple-900 hover:bg-purple-100",
      icon: "📦",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#002d62] via-[#004f9f] to-[#001c3d] text-white flex flex-col justify-between p-4 font-['Cairo',sans-serif]">
      {/* Top Bar */}
      <div className="max-w-md mx-auto w-full pt-4 flex justify-between items-center text-xs">
        <Link
          href="/"
          className="text-amber-300 hover:text-white transition-colors flex items-center gap-1 font-bold"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة لمتجر المرواني</span>
        </Link>
        <span className="text-blue-200">فرع المعادي الرئيسي 🏪</span>
      </div>

      {/* Login Card */}
      <div className="max-w-md mx-auto w-full bg-white text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-auto border border-blue-400/20">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-[#004f9f] text-white flex items-center justify-center mx-auto shadow-md">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">
            بوابة تسجيل الدخول للإدارة والموظفين
          </h1>
          <p className="text-xs text-slate-500">
            سوبرماركت المرواني • فرع المعادي
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setLoginMode("credentials")}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
              loginMode === "credentials"
                ? "bg-white text-[#004f9f] shadow-xs"
                : "text-slate-500"
            }`}
          >
            اسم المستخدم وكلمة المرور
          </button>
          <button
            type="button"
            onClick={() => setLoginMode("pin")}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
              loginMode === "pin"
                ? "bg-white text-[#004f9f] shadow-xs"
                : "text-slate-500"
            }`}
          >
            كود الـ PIN المباشر
          </button>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          {loginMode === "credentials" ? (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  اسم المستخدم أو الهاتف:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="مثال: maestro أو manager أو رقم الهاتف"
                    className="w-full h-11 pr-10 pl-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#004f9f] outline-none font-bold"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  كلمة المرور:
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-11 pr-10 pl-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#004f9f] outline-none font-bold"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
                </div>
              </div>
            </>
          ) : (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                كود الـ PIN السريع (مكون من 6 أرقام):
              </label>
              <div className="relative">
                <input
                  type="password"
                  maxLength={6}
                  required
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="••••••"
                  className="w-full h-12 text-center tracking-widest text-lg font-black bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#004f9f] outline-none"
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute right-3.5 top-4" />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl font-black text-sm shadow-md transition-all active:scale-[0.99]"
          >
            {loading ? "جاري التحقق والدخول..." : "تسجيل الدخول"}
          </button>
        </form>

        {/* Staff Quick Selection (Protected by PIN Pad) */}
        <div className="pt-4 border-t border-slate-100 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-500">
              تسجيل دخول سريع للموظفين (مؤمن بالـ PIN):
            </span>
            <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-full">
              محمي بنظام ATM
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {staffChips.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => openPinModal(s)}
                className={`p-2.5 rounded-xl border text-right transition-all flex items-center justify-between gap-1.5 active:scale-95 shadow-2xs ${s.color}`}
              >
                <div className="min-w-0">
                  <div className="font-bold text-xs truncate flex items-center gap-1">
                    <span>{s.icon}</span>
                    <span>{s.roleName}</span>
                  </div>
                  <div className="text-[10px] opacity-75 font-semibold">
                    {s.username} • {s.badge}
                  </div>
                </div>
                <KeyRound className="w-3.5 h-3.5 opacity-60 shrink-0" />
              </button>
            ))}
          </div>

          <p className="text-[10px] text-center text-slate-400 pt-1">
            * اضغط على أي حساب وسيطلب منك إدخال كود الـ PIN المخصص له للدخول
          </p>
        </div>
      </div>

      {/* Secure PIN Keypad Modal (ATM/POS Style) */}
      {selectedStaff && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-3xl max-w-sm w-full p-6 shadow-2xl border-2 border-[#004f9f] space-y-5 animate-in fade-in zoom-in-95">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedStaff.icon}</span>
                <div>
                  <h3 className="font-black text-sm text-slate-900">
                    {selectedStaff.roleName}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    حساب: <span className="font-bold text-[#004f9f]">{selectedStaff.username}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStaff(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Instruction */}
            <div className="text-center space-y-1">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#004f9f] flex items-center justify-center mx-auto mb-2">
                <Lock className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-slate-700">
                أدخل كود الـ PIN السري المكون من 6 أرقام:
              </p>
              <p className="text-[10px] text-slate-400">
                (الكود الافتراضي: <span className="font-mono font-bold text-blue-600">{selectedStaff.defaultPinHint}</span>)
              </p>
            </div>

            {/* 6 Digit Circles Display */}
            <div className="flex justify-center gap-3 py-2">
              {[0, 1, 2, 3, 4, 5].map((idx) => {
                const filled = modalPin.length > idx;
                return (
                  <div
                    key={idx}
                    className={`w-4 h-4 rounded-full border-2 transition-all ${
                      filled
                        ? "bg-[#004f9f] border-[#004f9f] scale-110 shadow-xs"
                        : "border-slate-300 bg-slate-100"
                    }`}
                  />
                );
              })}
            </div>

            {pinError && (
              <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs text-center font-bold">
                {pinError}
              </div>
            )}

            {/* Touchscreen Numpad Grid */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleNumpad(num)}
                  disabled={loading}
                  className="h-13 rounded-2xl bg-slate-50 hover:bg-blue-50 hover:border-blue-300 border border-slate-200 text-lg font-black text-slate-800 transition-all active:scale-95 shadow-2xs"
                >
                  {num}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setModalPin("")}
                disabled={loading || modalPin.length === 0}
                className="h-13 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-600 transition-all active:scale-95"
              >
                مسح
              </button>
              <button
                type="button"
                onClick={() => handleNumpad("0")}
                disabled={loading}
                className="h-13 rounded-2xl bg-slate-50 hover:bg-blue-50 hover:border-blue-300 border border-slate-200 text-lg font-black text-slate-800 transition-all active:scale-95 shadow-2xs"
              >
                0
              </button>
              <button
                type="button"
                onClick={handleBackspace}
                disabled={loading || modalPin.length === 0}
                className="h-13 rounded-2xl bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 flex items-center justify-center transition-all active:scale-95"
              >
                <Delete className="w-5 h-5" />
              </button>
            </div>

            {/* Submit button if entered via keyboard */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  handleLogin(undefined, { identifier: selectedStaff.username, pin: modalPin })
                }
                disabled={loading || modalPin.length === 0}
                className="w-full py-2.5 rounded-xl bg-[#004f9f] hover:bg-[#003875] text-white text-xs font-bold shadow transition-all disabled:opacity-50"
              >
                {loading ? "جاري التحقق والدخول..." : "تأكيد الدخول"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center text-[11px] text-blue-200/80 py-2">
        نظام سوبرماركت المرواني السحابي © 2026 • فرع المعادي — مدعوم بأحدث تقنيات أوركا
      </div>
    </div>
  );
}
