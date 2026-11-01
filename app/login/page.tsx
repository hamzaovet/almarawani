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
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [loginMode, setLoginMode] = useState<"credentials" | "pin">("credentials");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e?: React.FormEvent, customCreds?: any) => {
    if (e) e.preventDefault();
    setError("");

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
        setError(data.error || "بيانات الدخول غير صحيحة");
      }
    } catch {
      setError("حدث خطأ في الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  };

  const quickLogin = (idVal: string, passVal: string, pinVal: string) => {
    setIdentifier(idVal);
    setPassword(passVal);
    setPin(pinVal);
    handleLogin(undefined, { identifier: idVal, password: passVal });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#002d62] via-[#004f9f] to-[#001c3d] text-white flex flex-col justify-between p-4">
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
            كود الـ PIN السريع
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
                    placeholder="مثال: maestro أو manager"
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
                كود الـ PIN المكون من 6 أرقام:
              </label>
              <div className="relative">
                <input
                  type="password"
                  maxLength={6}
                  required
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="مثال: 157230"
                  className="w-full h-12 text-center tracking-widest text-lg font-black bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#004f9f] outline-none"
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute right-3.5 top-4" />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl font-black text-sm shadow-md transition-all"
          >
            {loading ? "جاري التحقق والدخول..." : "تسجيل الدخول"}
          </button>
        </form>

        {/* Quick Demo Accounts Chips */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          <span className="text-[11px] font-extrabold text-slate-400 block text-center">
            حسابات النظام التجريبية (اضغط للدخول فوراً):
          </span>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => quickLogin("maestro", "123456789", "157230")}
              className="p-2 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 text-[11px] font-extrabold text-right flex items-center justify-between"
            >
              <span>👑 المالك (المايسترو)</span>
              <span className="text-[9px] text-amber-700">123456789</span>
            </button>

            <button
              onClick={() => quickLogin("manager", "123456", "123456")}
              className="p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-[11px] font-bold text-right flex items-center justify-between"
            >
              <span>👔 المدير</span>
              <span className="text-[9px] text-slate-400">123456</span>
            </button>

            <button
              onClick={() => quickLogin("cashier1", "123456", "111111")}
              className="p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-[11px] font-bold text-right flex items-center justify-between"
            >
              <span>🖥️ كاشير 1</span>
              <span className="text-[9px] text-slate-400">123456</span>
            </button>

            <button
              onClick={() => quickLogin("cashier2", "123456", "222222")}
              className="p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-[11px] font-bold text-right flex items-center justify-between"
            >
              <span>🖥️ كاشير 2</span>
              <span className="text-[9px] text-slate-400">123456</span>
            </button>

            <button
              onClick={() => quickLogin("delivery", "123456", "333333")}
              className="p-2 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-[11px] font-extrabold text-right flex items-center justify-between"
            >
              <span>🛵 طيار دليفري</span>
              <span className="text-[9px] text-emerald-700">123456</span>
            </button>

            <button
              onClick={() => quickLogin("picker", "123456", "444444")}
              className="p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-[11px] font-bold text-right flex items-center justify-between"
            >
              <span>📦 مجمع طلبات</span>
              <span className="text-[9px] text-slate-400">123456</span>
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-blue-200 pb-2">
        نظام سوبرماركت المرواني لإدارة نقاط البيع والتوصيل السحابي
      </div>
    </div>
  );
}
