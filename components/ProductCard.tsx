"use client";

import React from "react";
import { Plus, Minus, Zap, Check } from "lucide-react";

interface ProductCardProps {
  product: any;
  cartQty: number;
  onAddToCart: (product: any) => void;
  onUpdateQty: (productId: string, delta: number) => void;
}

export default function ProductCard({
  product,
  cartQty,
  onAddToCart,
  onUpdateQty,
}: ProductCardProps) {
  const savings =
    product.originalPrice && product.originalPrice > product.basePrice
      ? (product.originalPrice - product.basePrice).toFixed(2)
      : null;

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden">
      {/* 1. Top Badges Row */}
      <div className="absolute top-2.5 inset-x-2.5 z-10 flex items-center justify-between pointer-events-none">
        {/* Discount Badge */}
        {product.discountPercent ? (
          <div className="bg-[#e60000] text-white text-[11px] font-black px-2 py-0.5 rounded-lg shadow-sm">
            خصم {product.discountPercent}%
          </div>
        ) : product.isOffer ? (
          <div className="bg-[#e60000] text-white text-[11px] font-black px-2 py-0.5 rounded-lg shadow-sm">
            عرض خاص 🔥
          </div>
        ) : <div />}

        {/* Express / 60 Min Tag */}
        {product.isExpress && (
          <div className="bg-blue-50 text-[#004f9f] border border-blue-200 text-[10px] font-extrabold px-1.5 py-0.5 rounded-md flex items-center gap-0.5 shadow-2xs">
            <Zap className="w-3 h-3 text-[#004f9f] fill-current" />
            <span>60 دقيقة ⚡</span>
          </div>
        )}
      </div>

      {/* 2. Product Image */}
      <div className="relative pt-8 pb-3 px-4 aspect-square flex items-center justify-center bg-slate-50/50 group-hover:bg-white transition-colors">
        <img
          src={
            product.image ||
            "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80"
          }
          alt={product.nameAr}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* 3. Product Info */}
      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          {/* Brand & Unit */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
            <span className="text-[#004f9f] font-bold">{product.brand || "المرواني"}</span>
            <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px]">
              {product.unit}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-extrabold text-xs md:text-sm text-slate-800 line-clamp-2 leading-snug group-hover:text-[#004f9f] transition-colors">
            {product.nameAr}
          </h3>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="mt-3 pt-2.5 border-t border-slate-100">
          {/* Price details */}
          <div className="flex items-baseline justify-between mb-2.5">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-base md:text-lg font-black text-[#004f9f]">
                  {product.basePrice.toFixed(2)}
                </span>
                <span className="text-xs font-bold text-slate-700">ج.م</span>
              </div>
              {product.originalPrice && product.originalPrice > product.basePrice && (
                <div className="flex items-center gap-1.5 text-[11px]">
                  <span className="text-slate-400 line-through">
                    {product.originalPrice.toFixed(2)} ج.م
                  </span>
                  {savings && (
                    <span className="text-emerald-700 font-extrabold text-[10px] bg-emerald-50 px-1 rounded">
                      وفر {savings}
                    </span>
                  )}
                </div>
              )}
            </div>

            {product.isWeighted && (
              <span className="text-[10px] text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded font-bold">
                بالوزن ⚖️
              </span>
            )}
          </div>

          {/* Carrefour Interactive Button / Stepper */}
          {cartQty > 0 ? (
            <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl p-1 shadow-2xs">
              <button
                onClick={() => onUpdateQty(product.id, -1)}
                className="w-8 h-8 rounded-lg bg-white hover:bg-red-50 text-slate-700 hover:text-red-600 flex items-center justify-center font-bold shadow-2xs transition-colors"
                title="إنقاص الكمية"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>

              <div className="flex flex-col items-center">
                <span className="font-black text-sm text-[#004f9f]">{cartQty}</span>
                <span className="text-[9px] text-slate-500 font-medium">في السلة</span>
              </div>

              <button
                onClick={() => onUpdateQty(product.id, 1)}
                className="w-8 h-8 rounded-lg bg-[#004f9f] hover:bg-[#003875] text-white flex items-center justify-center font-bold shadow-2xs transition-colors"
                title="زيادة الكمية"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAddToCart(product)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-[#004f9f] text-slate-800 hover:text-white border border-slate-200 hover:border-[#004f9f] text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all shadow-2xs active:scale-95 group-hover:bg-[#004f9f] group-hover:text-white"
            >
              <Plus className="w-4 h-4" />
              <span>أضف للعربة</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
