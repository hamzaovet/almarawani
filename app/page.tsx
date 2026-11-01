"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import LiveChatWidget from "@/components/LiveChatWidget";
import Footer from "@/components/Footer";
import {
  Flame,
  Package,
  Zap,
  ShoppingBag,
  Home,
  Layers,
  Clock,
  Sparkles,
  Check,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [deliveryZones, setDeliveryZones] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState("المعادي القديمة ودجلة");
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [prodRes, catRes, zoneRes] = await Promise.all([
          fetch("/api/products"),
          fetch("/api/categories"),
          fetch("/api/delivery-zones"),
        ]);

        const [prodData, catData, zoneData] = await Promise.all([
          prodRes.json(),
          catRes.json(),
          zoneRes.json(),
        ]);

        if (prodData.success) setProducts(prodData.products);
        if (catData.success) setCategories(catData.categories);
        if (zoneData.success && zoneData.zones.length > 0) {
          setDeliveryZones(zoneData.zones);
          setSelectedZone(zoneData.zones[0].nameAr);
        }
      } catch (err) {
        console.error("Data load error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Load saved cart from localStorage
    try {
      const savedCart = localStorage.getItem("almarawani_cart");
      if (savedCart) setCartItems(JSON.parse(savedCart));

      const savedUser = localStorage.getItem("almarawani_user");
      if (savedUser) setUser(JSON.parse(savedUser));
    } catch {
      // Ignore storage error
    }
  }, []);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("almarawani_cart", JSON.stringify(cartItems));
    } catch {
      // Ignore
    }
  }, [cartItems]);

  // Cart operations
  const handleAddToCart = (product: any) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const handleUpdateQty = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((i) => {
          if (i.product.id === productId) {
            const newQty = i.qty + delta;
            return newQty > 0 ? { ...i, qty: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as any[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const getProductCartQty = (productId: string) => {
    const item = cartItems.find((i) => i.product.id === productId);
    return item ? item.qty : 0;
  };

  // Filter products
  const filteredProducts = products.filter((p) => {
    if (selectedCategory === "عروض") {
      if (!p.isOffer && !p.discountPercent) return false;
    } else if (selectedCategory !== "الكل") {
      if (p.category !== selectedCategory) return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      const matchName = p.nameAr?.toLowerCase().includes(q);
      const matchBrand = p.brand?.toLowerCase().includes(q);
      const matchCategory = p.category?.toLowerCase().includes(q);
      const matchBarcode = p.barcode?.includes(q);
      if (!matchName && !matchBrand && !matchCategory && !matchBarcode) return false;
    }

    return true;
  });

  // Highlight sections
  const flashOffers = products.filter((p) => p.isOffer || (p.discountPercent && p.discountPercent >= 15)).slice(0, 6);
  const bundleOffers = products.filter((p) => p.category === "كراتين وعروض التوفير");

  const cartItemsCount = cartItems.reduce((acc, i) => acc + i.qty, 0);
  const cartTotal = cartItems.reduce((acc, i) => acc + i.product.basePrice * i.qty, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 pb-16 md:pb-0">
      {/* 1. Header & Navigation */}
      <Navbar
        cartItemsCount={cartItemsCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setSearchQuery("");
        }}
        categories={categories}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedZone={selectedZone}
        onSelectZone={setSelectedZone}
        deliveryZones={deliveryZones}
        user={user}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* 2. Hero Banner & Promotions (Visible when no active search) */}
      {!searchQuery && selectedCategory === "الكل" && (
        <HeroBanner
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            window.scrollTo({ top: 480, behavior: "smooth" });
          }}
        />
      )}

      {/* 3. Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 py-6 flex-1 w-full space-y-8">
        {/* Flash Offers Carousel Section (When in All or Offers) */}
        {!searchQuery && (selectedCategory === "الكل" || selectedCategory === "عروض") && flashOffers.length > 0 && (
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-red-100 text-[#e60000] flex items-center justify-center font-bold">
                  <Flame className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                    عروض وتخفيضات اليوم النارية 🔥
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    خصومات حصرية تصل إلى 25% على أصناف مختارة بفرع المعادي
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedCategory("عروض")}
                className="text-xs font-bold text-[#004f9f] hover:underline"
              >
                عرض كل التخفيضات ←
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {flashOffers.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  cartQty={getProductCartQty(product.id)}
                  onAddToCart={handleAddToCart}
                  onUpdateQty={handleUpdateQty}
                />
              ))}
            </div>
          </section>
        )}

        {/* Value Bundles (كراتين التوفير) */}
        {!searchQuery && selectedCategory === "الكل" && bundleOffers.length > 0 && (
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-4 sm:p-6 rounded-3xl border border-blue-200/60 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#004f9f] text-white flex items-center justify-center font-black">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#002d62]">
                    كراتين وباقات التوفير العائلية 📦
                  </h2>
                  <p className="text-xs text-slate-600 font-medium">
                    وفر وقتك وفلوسك مع كراتين الخير الأسبوعية وشيكارات الأرز والمؤن
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bundleOffers.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  cartQty={getProductCartQty(product.id)}
                  onAddToCart={handleAddToCart}
                  onUpdateQty={handleUpdateQty}
                />
              ))}
            </div>
          </section>
        )}

        {/* 4. Filtered Supermarket Products Grid */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                {searchQuery ? (
                  <span>نتائج البحث عن: "{searchQuery}"</span>
                ) : selectedCategory === "الكل" ? (
                  <span>جميع أصناف السوبرماركت</span>
                ) : (
                  <span>قسم {selectedCategory}</span>
                )}
                <span className="text-xs font-bold bg-slate-200 text-slate-700 px-2.5 py-0.5 rounded-full">
                  {filteredProducts.length} صنف
                </span>
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                توصيل سوبر سريع في 60 دقيقة لكافة أحياء المعادي
              </p>
            </div>

            {/* Quick reset if filtered */}
            {(selectedCategory !== "الكل" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("الكل");
                  setSearchQuery("");
                }}
                className="text-xs font-bold text-[#004f9f] hover:underline"
              >
                إظهار جميع الأصناف
              </button>
            )}
          </div>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 animate-pulse">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl h-64 border border-slate-200 p-4 space-y-3"
                >
                  <div className="bg-slate-200 rounded-xl h-32 w-full" />
                  <div className="h-4 bg-slate-200 rounded w-3/4" />
                  <div className="h-4 bg-slate-200 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-slate-700 text-base">
                لم يتم العثور على أي صنف مطابق
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                جرب البحث بكلمة أخرى أو اختر قسماً آخر من شريط الأقسام بالأعلى.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("الكل");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-xl bg-[#004f9f] text-white text-xs font-bold shadow-sm"
              >
                العودة لكافة الأصناف
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  cartQty={getProductCartQty(product.id)}
                  onAddToCart={handleAddToCart}
                  onUpdateQty={handleUpdateQty}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* 5. Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        deliveryZones={deliveryZones}
        selectedZone={selectedZone}
        onSelectZone={setSelectedZone}
      />

      {/* 6. Live Support Chat Widget */}
      <LiveChatWidget
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpen={() => setIsChatOpen(true)}
      />

      {/* 7. Footer */}
      <Footer />

      {/* 8. Mobile Native App Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 px-4 py-2 flex items-center justify-around shadow-lg">
        <button
          onClick={() => {
            setSelectedCategory("الكل");
            setSearchQuery("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`flex flex-col items-center gap-1 ${
            selectedCategory === "الكل" && !searchQuery
              ? "text-[#004f9f] font-black"
              : "text-slate-500"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px]">الرئيسية</span>
        </button>

        <button
          onClick={() => {
            setSelectedCategory("ألبان وأجبان");
            window.scrollTo({ top: 400, behavior: "smooth" });
          }}
          className={`flex flex-col items-center gap-1 ${
            selectedCategory !== "الكل" && selectedCategory !== "عروض"
              ? "text-[#004f9f] font-black"
              : "text-slate-500"
          }`}
        >
          <Layers className="w-5 h-5" />
          <span className="text-[10px]">الأقسام</span>
        </button>

        <button
          onClick={() => {
            setSelectedCategory("عروض");
            window.scrollTo({ top: 400, behavior: "smooth" });
          }}
          className={`flex flex-col items-center gap-1 ${
            selectedCategory === "عروض" ? "text-[#e60000] font-black" : "text-slate-500"
          }`}
        >
          <Flame className="w-5 h-5 fill-current" />
          <span className="text-[10px]">العروض 🔥</span>
        </button>

        <Link
          href="/track"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#004f9f]"
        >
          <Clock className="w-5 h-5" />
          <span className="text-[10px]">تتبع الطلب</span>
        </Link>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center gap-1 text-slate-500 relative"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-[#004f9f]" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#e60000] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold text-[#004f9f]">السلة</span>
        </button>
      </div>
    </div>
  );
}
