"use client";

import React, { useState } from "react";
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Truck,
  CheckCircle2,
  MapPin,
  Phone,
  User,
  CreditCard,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: any[];
  onUpdateQty: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  deliveryZones: any[];
  selectedZone: string;
  onSelectZone: (zone: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  deliveryZones,
  selectedZone,
  onSelectZone,
}: CartDrawerProps) {
  const router = useRouter();
  const [step, setStep] = useState<"cart" | "checkout" | "success">("cart");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [loading, setLoading] = useState(false);
  const [lastOrder, setLastOrder] = useState<any>(null);
  const [formError, setFormError] = useState("");

  if (!isOpen) return null;

  // Calculate pricing
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.basePrice * item.qty,
    0
  );

  const activeZoneObj = deliveryZones.find((z) => z.nameAr === selectedZone) || deliveryZones[0];
  const isFreeDelivery = subtotal >= 400;
  const deliveryFee = isFreeDelivery ? 0 : (activeZoneObj ? activeZoneObj.fee : 15);
  const total = subtotal + deliveryFee;
  const freeDeliveryRemaining = Math.max(0, 400 - subtotal);
  const progressPercent = Math.min(100, (subtotal / 400) * 100);

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!customerName.trim()) {
      setFormError("يرجى إدخال اسم المستلم");
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setFormError("يرجى إدخال رقم هاتف صحيح للتواصل مع الطيار");
      return;
    }
    if (!address.trim()) {
      setFormError("يرجى كتابة عنوان التوصيل بالتفصيل (الشارع والعمارة والشقة)");
      return;
    }

    try {
      setLoading(true);

      const itemsPayload = cartItems.map((item) => ({
        productId: item.product.id,
        nameAr: item.product.nameAr,
        brand: item.product.brand || "المرواني",
        unit: item.product.unit,
        qty: item.qty,
        unitPrice: item.product.basePrice,
        total: item.product.basePrice * item.qty,
      }));

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: customerName.trim(),
          phone: phone.trim(),
          address: address.trim(),
          zone: selectedZone || "المعادي القديمة ودجلة",
          branchName: "فرع المعادي الرئيسي",
          items: itemsPayload,
          subtotal,
          deliveryFee,
          total,
          paymentMethod,
          notes: notes.trim(),
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "فشل تسجيل الطلب");
      }

      setLastOrder(data.order);
      setStep("success");
      onClearCart();
    } catch (err: any) {
      setFormError(err.message || "حدث خطأ أثناء إتمام الطلب، يرجى المحاولة ثانية");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 bg-[#004f9f] text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-300" />
              <h2 className="font-extrabold text-base">
                {step === "cart" && `سلة المشتريات (${cartItems.length})`}
                {step === "checkout" && "بيانات التوصيل السريع بالمعادي 🛵"}
                {step === "success" && "تم تأكيد طلبك بنجاح! 🎉"}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {step === "cart" && (
              <>
                {/* Free shipping banner */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                  <div className="flex items-center justify-between text-xs mb-1.5 font-bold">
                    <span className="text-[#004f9f] flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5" />
                      {isFreeDelivery
                        ? "🎉 مبروك! حصلت على توصيل مجاني بالمعادي!"
                        : `أضف بـ ${freeDeliveryRemaining.toFixed(2)} ج.م أخرى لتوصيل مجاني`}
                    </span>
                    <span className="text-slate-600">{progressPercent.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-blue-200/60 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-[#004f9f] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Items List */}
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                      <ShoppingBag className="w-10 h-10" />
                    </div>
                    <h3 className="font-bold text-slate-700 text-base">
                      سلتك فارغة حالياً
                    </h3>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      تصفح أقسام سوبرماركت المرواني وأضف احتياجات بيتك من الألبان، الجبن، الخضار، والبقالة!
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-2 px-5 py-2.5 rounded-xl bg-[#004f9f] text-white text-xs font-bold shadow-md hover:bg-[#003875]"
                    >
                      ابدأ التسوق الآن
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200/80 hover:border-slate-300 bg-white shadow-2xs"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.nameAr}
                          className="w-16 h-16 object-contain rounded-lg bg-slate-50 p-1 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-xs text-slate-800 truncate">
                            {item.product.nameAr}
                          </h4>
                          <div className="text-[11px] text-slate-500">
                            {item.product.basePrice.toFixed(2)} ج.م • {item.product.unit}
                          </div>
                          <div className="text-xs font-black text-[#004f9f] mt-0.5">
                            {(item.product.basePrice * item.qty).toFixed(2)} ج.م
                          </div>
                        </div>

                        {/* Stepper */}
                        <div className="flex items-center gap-1.5 shrink-0 bg-slate-50 p-1 rounded-lg border border-slate-200">
                          <button
                            onClick={() => onUpdateQty(item.product.id, -1)}
                            className="w-6 h-6 rounded bg-white hover:bg-red-50 text-slate-700 hover:text-red-600 flex items-center justify-center font-bold text-xs shadow-2xs"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-black text-xs px-1 text-[#004f9f]">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.product.id, 1)}
                            className="w-6 h-6 rounded bg-[#004f9f] text-white flex items-center justify-center font-bold text-xs shadow-2xs"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                          title="حذف الصنف"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {step === "checkout" && (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    اسم المستلم <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="مثال: محمد السيد"
                      className="w-full h-10 pr-9 pl-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#004f9f] outline-none"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    رقم الهاتف المحمول (للتواصل مع الطيار) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01xxxxxxxxx"
                      className="w-full h-10 pr-9 pl-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#004f9f] outline-none"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                  </div>
                </div>

                {/* Delivery Zone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    منطقة التوصيل بالمعادي <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedZone}
                    onChange={(e) => onSelectZone(e.target.value)}
                    className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#004f9f] outline-none font-medium"
                  >
                    {deliveryZones.map((z) => (
                      <option key={z.id} value={z.nameAr}>
                        {z.nameAr} (رسوم التوصيل: {isFreeDelivery ? "مجاناً" : `${z.fee} ج.م`} • ~{z.timeMinutes} دقيقة)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    العنوان بالتفصيل <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      required
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="اسم الشارع، رقم العمارة، الدور، رقم الشقة، علامة مميزة بجوارك..."
                      className="w-full p-2.5 pr-9 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#004f9f] outline-none"
                    />
                    <MapPin className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    ملاحظات للطيار أو تجميع الطلب (اختياري)
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="مثال: رن الجرس بدون إزعاج / الجبنة تقطيع رفيع..."
                    className="w-full h-9 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#004f9f] outline-none"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    طريقة الدفع
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("cash")}
                      className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        paymentMethod === "cash"
                          ? "border-[#004f9f] bg-blue-50 text-[#004f9f] shadow-xs"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      💵 كاش عند الاستلام
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("visa_on_delivery")}
                      className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        paymentMethod === "visa_on_delivery"
                          ? "border-[#004f9f] bg-blue-50 text-[#004f9f] shadow-xs"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      💳 فيزا مع الطيار
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("instapay")}
                      className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        paymentMethod === "instapay"
                          ? "border-[#004f9f] bg-blue-50 text-[#004f9f] shadow-xs"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      ⚡ إنستاباي
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-[#004f9f] hover:bg-[#003875] text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>جاري تأكيد الطلب وإرساله للفرع...</span>
                  ) : (
                    <>
                      <span>تأكيد الطلب الآن ({total.toFixed(2)} ج.م)</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {step === "success" && lastOrder && (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-black text-xl text-slate-900">
                    تم استلام طلبك بنجاح!
                  </h3>
                  <p className="text-xs text-slate-500">
                    سوبرماركت المرواني • فرع المعادي
                  </p>
                </div>

                {/* Order Code Box */}
                <div className="p-4 bg-blue-50 border-2 border-dashed border-[#004f9f]/40 rounded-2xl max-w-xs mx-auto">
                  <div className="text-xs text-slate-500 font-bold mb-1">
                    كود تتبع طلبك:
                  </div>
                  <div className="text-2xl font-black text-[#004f9f] tracking-wider">
                    {lastOrder.orderNumber}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-2">
                    المبلغ المطلوب سداده: <strong>{lastOrder.total.toFixed(2)} ج.م</strong>
                  </div>
                </div>

                <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                  فريق السوبرماركت يقوم الآن بتجميع أكياس طلبك ووزن الأصناف، وسينطلق الطيار إليك في المعادي مباشرة!
                </p>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      router.push(`/track?q=${lastOrder.orderNumber}`);
                    }}
                    className="w-full py-3 rounded-xl bg-[#004f9f] hover:bg-[#003875] text-white text-xs font-black shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>تتبع خط سير الطيار لحظياً 🛵</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/201009988771?text=${encodeURIComponent(
                      `مرحباً سوبرماركت المرواني، قمت بتأكيد طلب جديد رقم ${lastOrder.orderNumber} بقيمة ${lastOrder.total} ج.م في المعادي.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>تأكيد عبر واتساب المحل</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Footer (Pricing Summary) */}
          {step === "cart" && cartItems.length > 0 && (
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>إجمالي المشتريات:</span>
                  <span>{subtotal.toFixed(2)} ج.م</span>
                </div>
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>خدمة التوصيل ({selectedZone}):</span>
                  <span>{isFreeDelivery ? "مجاناً 🚚" : `${deliveryFee.toFixed(2)} ج.م`}</span>
                </div>
                <div className="flex justify-between text-slate-900 font-black text-sm pt-2 border-t border-slate-200">
                  <span>الإجمالي النهائي:</span>
                  <span className="text-[#004f9f] text-base font-black">
                    {total.toFixed(2)} ج.م
                  </span>
                </div>
              </div>

              <button
                onClick={() => setStep("checkout")}
                className="w-full py-3 px-4 rounded-xl bg-[#004f9f] hover:bg-[#003875] text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <span>متابعة إتمام الطلب ({total.toFixed(2)} ج.م)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === "checkout" && (
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setStep("cart")}
                className="text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                ← العودة للسلة
              </button>
              <div className="text-right">
                <span className="text-[10px] text-slate-500 block">الإجمالي:</span>
                <span className="text-xs font-black text-[#004f9f]">
                  {total.toFixed(2)} ج.م
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
