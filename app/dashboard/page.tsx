"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShoppingBag,
  Package,
  Bike,
  Users,
  Settings,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  LogOut,
  Edit,
  Save,
  Plus,
  Trash2,
  Lock,
  Unlock,
  Phone,
  MapPin,
  ExternalLink,
  Shield,
  Layers,
  FileText,
  Warehouse,
  Receipt,
  UserCheck,
  CreditCard,
  Building2,
  ArrowDownRight,
  ArrowUpRight,
  Eye,
  Check,
  X,
  Sliders,
  Sparkles,
  Calendar,
  Search,
  Filter,
  Scale,
  Barcode,
  Download,
  RotateCcw,
} from "lucide-react";
import { parseScaleBarcode, validateEan13 } from "@/lib/barcode";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  // Active Main Tab
  const [activeTab, setActiveTab] = useState<
    | "orders"
    | "sales"
    | "products"
    | "inventory"
    | "purchases"
    | "suppliers"
    | "customers"
    | "captains"
    | "treasury"
    | "users"
    | "settings"
  >("orders");

  // Core Data Lists
  const [orders, setOrders] = useState<any[]>([]);
  const [returnsList, setReturnsList] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [captains, setCaptains] = useState<any[]>([]);
  const [deliveryZones, setDeliveryZones] = useState<any[]>([]);
  const [suppliers, setSuppliers] = useState<any[]>([]);
  const [purchases, setPurchases] = useState<any[]>([]);
  const [customers, setCustomers] = useState<any[]>([]);
  const [expenses, setExpenses] = useState<any[]>([]);
  const [treasuryData, setTreasuryData] = useState<any>(null);
  const [usersList, setUsersList] = useState<any[]>([]);
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [actionMsg, setActionMsg] = useState("");

  // Modals States
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any | null>(null);

  const [showStockCardModal, setShowStockCardModal] = useState(false);
  const [selectedStockProduct, setSelectedStockProduct] = useState<any | null>(null);
  const [stockMovements, setStockMovements] = useState<any[]>([]);

  const [showAdjustmentModal, setShowAdjustmentModal] = useState(false);
  const [adjustmentProduct, setAdjustmentProduct] = useState<any | null>(null);
  const [adjustQty, setAdjustQty] = useState<number>(0);
  const [adjustReason, setAdjustReason] = useState("");

  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [purchaseForm, setPurchaseForm] = useState({
    supplierId: "",
    invoiceDate: new Date().toISOString().split("T")[0],
    paymentType: "cash",
    paidAmount: "",
    notes: "",
    items: [{ productId: "", qty: 1, costPrice: 0 }],
  });

  const [showSupplierModal, setShowSupplierModal] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState<any | null>(null);

  const [showSupplierPayModal, setShowSupplierPayModal] = useState(false);
  const [payingSupplier, setPayingSupplier] = useState<any | null>(null);
  const [payAmount, setPayAmount] = useState("");
  const [payNotes, setPayNotes] = useState("");

  const [showStatementModal, setShowStatementModal] = useState(false);
  const [statementData, setStatementData] = useState<any | null>(null);

  const [showCaptainModal, setShowCaptainModal] = useState(false);
  const [editingCaptain, setEditingCaptain] = useState<any | null>(null);

  const [showZoneModal, setShowZoneModal] = useState(false);
  const [editingZone, setEditingZone] = useState<any | null>(null);

  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [expenseForm, setExpenseForm] = useState({
    description: "",
    amount: "",
    category: "تشغيل ونثريات",
    expenseDate: new Date().toISOString().split("T")[0],
  });

  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUserStaff, setEditingUserStaff] = useState<any | null>(null);

  // Returns Management State
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [returnForm, setReturnForm] = useState({
    type: "sales_return", // "sales_return" | "purchase_return"
    referenceNumber: "",
    customerOrSupplier: "",
    supplierId: "",
    items: [{ productId: "", nameAr: "", qty: 1, price: 0, total: 0 }],
    totalAmount: 0,
    reason: "",
    refundMethod: "cash",
  });

  // Scale Barcode Tester State
  const [barcodeTestInput, setBarcodeTestInput] = useState("");
  const [barcodeTestResult, setBarcodeTestResult] = useState<any | null>(null);

  // Filters
  const [productCatFilter, setProductCatFilter] = useState("الكل");
  const [productSearch, setProductSearch] = useState("");
  const [orderStatusFilter, setOrderStatusFilter] = useState("all");
  const [orderChannelFilter, setOrderChannelFilter] = useState<"delivery" | "pos" | "all">("delivery");

  // Check auth
  useEffect(() => {
    try {
      const saved = localStorage.getItem("almarawani_user");
      if (!saved) {
        router.push("/login");
        return;
      }
      const parsed = JSON.parse(saved);
      setUser(parsed);
    } catch {
      router.push("/login");
    }
  }, [router]);

  // Load all dashboard data
  const loadData = async () => {
    try {
      setLoading(true);
      const [
        ordRes,
        prodRes,
        catRes,
        capRes,
        zoneRes,
        supRes,
        purRes,
        custRes,
        expRes,
        treRes,
        usersRes,
        settRes,
        retRes,
      ] = await Promise.all([
        fetch("/api/orders"),
        fetch("/api/products?all=true"),
        fetch("/api/categories"),
        fetch("/api/captains"),
        fetch("/api/delivery-zones?all=true"),
        fetch("/api/suppliers"),
        fetch("/api/purchases"),
        fetch("/api/customers"),
        fetch("/api/expenses"),
        fetch("/api/treasury"),
        fetch("/api/auth/users"),
        fetch("/api/settings"),
        fetch("/api/returns"),
      ]);

      const [
        ordData,
        prodData,
        catData,
        capData,
        zoneData,
        supData,
        purData,
        custData,
        expData,
        treData,
        usersData,
        settData,
        retData,
      ] = await Promise.all([
        ordRes.json(),
        prodRes.json(),
        catRes.json(),
        capRes.json(),
        zoneRes.json(),
        supRes.json(),
        purRes.json(),
        custRes.json(),
        expRes.json(),
        treRes.json(),
        usersRes.json(),
        settRes.json(),
        retRes.json(),
      ]);

      if (ordData.success) setOrders(ordData.orders);
      if (prodData.success) setProducts(prodData.products);
      if (catData.success) setCategories(catData.categories);
      if (capData.success) setCaptains(capData.captains);
      if (zoneData.success) setDeliveryZones(zoneData.zones);
      if (supData.success) setSuppliers(supData.suppliers);
      if (purData.success) setPurchases(purData.purchases);
      if (custData.success) setCustomers(custData.customers);
      if (expData.success) setExpenses(expData.expenses);
      if (treData.success) setTreasuryData(treData);
      if (usersData.success) setUsersList(usersData.users);
      if (settData.success) setSettings(settData.settings);
      if (retData.success) setReturnsList(retData.returns);
    } catch (err) {
      console.error("Dashboard data load error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      loadData();
      const interval = setInterval(loadData, 15000);
      return () => clearInterval(interval);
    }
  }, [user]);

  const showNotification = (msg: string) => {
    setActionMsg(msg);
    setTimeout(() => setActionMsg(""), 4000);
  };

  // --- ORDER MANAGEMENT ---
  const handleUpdateOrderStatus = async (orderId: string, status: string, captainId?: string) => {
    try {
      const payload: any = { id: orderId, status };
      if (captainId) {
        const cap = captains.find((c) => c.id === captainId);
        if (cap) {
          payload.captainId = cap.id;
          payload.captainName = cap.name;
          payload.captainPhone = cap.phone;
        }
      }

      const res = await fetch("/api/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        showNotification("تم تحديث حالة الطلب بنجاح");
        loadData();
      }
    } catch {
      alert("حدث خطأ أثناء تحديث حالة الطلب");
    }
  };

  // --- CAPTAIN CASH SETTLEMENT ---
  const handleSettleCaptain = async (captainId: string) => {
    if (!confirm("هل تريد تسوية عهدة الطيار وتوريد المبالغ النقدية المعلقة إلى الخزينة؟")) return;
    try {
      const res = await fetch("/api/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settleCaptainId: captainId }),
      });
      const data = await res.json();
      if (data.success) {
        showNotification(`تمت تسوية ${data.settledCount} طلب بمبلغ ${data.settledAmount.toFixed(2)} ج.م وتوريدها للخزينة`);
        loadData();
      } else {
        alert("فشلت التسوية: " + data.error);
      }
    } catch {
      alert("حدث خطأ أثناء تسوية عهدة الطيار");
    }
  };

  // --- RETURNS MANAGEMENT ---
  const handleCreateReturn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!returnForm.referenceNumber || returnForm.items.length === 0) {
      alert("يرجى إدخال رقم الفاتورة واختيار صنف واحد على الأقل");
      return;
    }
    try {
      const res = await fetch("/api/returns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...returnForm,
          recordedBy: user?.name || "الإدارة",
        }),
      });
      const data = await res.json();
      if (data.success) {
        showNotification(`تم إصدار المرتجع بنجاح برقم ${data.returnRecord.returnNumber}`);
        setShowReturnModal(false);
        setReturnForm({
          type: "sales_return",
          referenceNumber: "",
          customerOrSupplier: "",
          supplierId: "",
          items: [{ productId: "", nameAr: "", qty: 1, price: 0, total: 0 }],
          totalAmount: 0,
          reason: "",
          refundMethod: "cash",
        });
        loadData();
      } else {
        alert("فشل تسجيل المرتجع: " + data.error);
      }
    } catch {
      alert("حدث خطأ أثناء حفظ المرتجع");
    }
  };

  // --- SCALE BARCODE TESTER ---
  const handleTestBarcode = (e: React.FormEvent) => {
    e.preventDefault();
    const barcode = barcodeTestInput.trim();
    if (!barcode) return;
    const parsed = parseScaleBarcode(barcode, {
      weightPrefixes: settings?.weightPrefixes || "20,21",
      pricePrefixes: settings?.pricePrefixes || "22,23",
      pluDigits: settings?.pluDigits || 5,
    });
    const isValid = validateEan13(barcode);
    let matchedProduct: any = null;
    if (parsed.plu) {
      matchedProduct = products.find(
        (p) => p.scaleItemCode === parsed.plu || p.barcode === parsed.plu
      );
    }
    setBarcodeTestResult({ ...parsed, isValid, matchedProduct });
  };

  // --- PRODUCT MANAGEMENT ---
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingProduct?.id ? "PUT" : "POST";
      const res = await fetch("/api/products", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...editingProduct, recordedBy: user?.name || "الإدارة" }),
      });
      const data = await res.json();
      if (data.success) {
        showNotification(editingProduct?.id ? "تم تعديل الصنف بنجاح" : "تمت إضافة الصنف الجديد بنجاح");
        setShowProductModal(false);
        setEditingProduct(null);
        loadData();
      } else {
        alert(data.error);
      }
    } catch {
      alert("حدث خطأ أثناء حفظ الصنف");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا الصنف نهائياً من السيستم؟")) return;
    try {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        showNotification("تم حذف الصنف بنجاح");
        loadData();
      }
    } catch {
      alert("فشل حذف الصنف");
    }
  };

  // --- ITEM STOCK MOVEMENT CARD ---
  const handleOpenStockCard = async (product: any) => {
    setSelectedStockProduct(product);
    setShowStockCardModal(true);
    setStockMovements([]);
    try {
      const res = await fetch(`/api/stock-movements?productId=${product.id}`);
      const data = await res.json();
      if (data.success) {
        setStockMovements(data.movements);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // --- STOCK ADJUSTMENT ---
  const handleSaveAdjustment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adjustmentProduct) return;
    try {
      const res = await fetch("/api/stock-movements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: adjustmentProduct.id,
          newStockQty: adjustQty,
          reason: adjustReason,
          performedBy: user?.name || "الإدارة",
        }),
      });
      const data = await res.json();
      if (data.success) {
        showNotification("تم تسجيل التسوية الجردية وتحديث الرصيد بالمخزن");
        setShowAdjustmentModal(false);
        setAdjustmentProduct(null);
        loadData();
      }
    } catch {
      alert("فشل حفظ التسوية الجردية");
    }
  };

  // --- PURCHASES ---
  const handleAddPurchaseItem = () => {
    setPurchaseForm((prev) => ({
      ...prev,
      items: [...prev.items, { productId: "", qty: 1, costPrice: 0 }],
    }));
  };

  const handleRemovePurchaseItem = (index: number) => {
    setPurchaseForm((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const handlePurchaseItemChange = (index: number, field: string, value: any) => {
    setPurchaseForm((prev) => {
      const items = [...prev.items];
      items[index] = { ...items[index], [field]: value };

      // Auto fill costPrice if product selected
      if (field === "productId") {
        const prod = products.find((p) => p.id === value);
        if (prod) {
          items[index].costPrice = prod.costPrice || Math.round(prod.basePrice * 0.8);
        }
      }
      return { ...prev, items };
    });
  };

  const calculatePurchaseTotal = () => {
    return purchaseForm.items.reduce((sum, item) => {
      const q = parseInt(item.qty as any) || 0;
      const c = parseFloat(item.costPrice as any) || 0;
      return sum + q * c;
    }, 0);
  };

  const handleSavePurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    const total = calculatePurchaseTotal();
    const paid =
      purchaseForm.paidAmount !== "" ? parseFloat(purchaseForm.paidAmount) : total;

    try {
      const res = await fetch("/api/purchases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          supplierId: purchaseForm.supplierId,
          invoiceDate: purchaseForm.invoiceDate,
          paymentType: purchaseForm.paymentType,
          paidAmount: paid,
          notes: purchaseForm.notes,
          receivedBy: user?.name || "الإدارة",
          items: purchaseForm.items.map((it) => {
            const p = products.find((prod) => prod.id === it.productId);
            return {
              productId: it.productId,
              nameAr: p?.nameAr || "صنف مجهول",
              unit: p?.unit || "قطعة",
              qty: parseInt(it.qty as any) || 1,
              costPrice: parseFloat(it.costPrice as any) || 0,
              total: (parseInt(it.qty as any) || 1) * (parseFloat(it.costPrice as any) || 0),
            };
          }),
        }),
      });

      const data = await res.json();
      if (data.success) {
        showNotification(data.message);
        setShowPurchaseModal(false);
        setPurchaseForm({
          supplierId: "",
          invoiceDate: new Date().toISOString().split("T")[0],
          paymentType: "cash",
          paidAmount: "",
          notes: "",
          items: [{ productId: "", qty: 1, costPrice: 0 }],
        });
        loadData();
      } else {
        alert(data.error);
      }
    } catch {
      alert("فشل تسجيل فاتورة المشتريات");
    }
  };

  // --- SUPPLIERS ---
  const handleSaveSupplier = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingSupplier?.id ? "PUT" : "POST";
      const res = await fetch("/api/suppliers", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingSupplier),
      });
      const data = await res.json();
      if (data.success) {
        showNotification(editingSupplier?.id ? "تم تعديل المورد بنجاح" : "تمت إضافة المورد الجديد بنجاح");
        setShowSupplierModal(false);
        setEditingSupplier(null);
        loadData();
      } else {
        alert(data.error);
      }
    } catch {
      alert("فشل حفظ بيانات المورد");
    }
  };

  const handleOpenStatement = async (supplierId: string) => {
    setShowStatementModal(true);
    setStatementData(null);
    try {
      const res = await fetch(`/api/suppliers/statement?supplierId=${supplierId}`);
      const data = await res.json();
      if (data.success) {
        setStatementData(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePaySupplier = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!payingSupplier || !payAmount) return;
    try {
      const res = await fetch("/api/suppliers/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          supplierId: payingSupplier.id,
          amount: parseFloat(payAmount),
          notes: payNotes,
          recordedBy: user?.name || "الإدارة",
        }),
      });
      const data = await res.json();
      if (data.success) {
        showNotification(data.message);
        setShowSupplierPayModal(false);
        setPayingSupplier(null);
        setPayAmount("");
        setPayNotes("");
        loadData();
      } else {
        alert(data.error);
      }
    } catch {
      alert("فشل تسجيل سداد مستحقات المورد");
    }
  };

  // --- CAPTAINS (DELIVERY FLEET) ---
  const handleSaveCaptain = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingCaptain?.id ? "PUT" : "POST";
      const res = await fetch("/api/captains", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingCaptain),
      });
      const data = await res.json();
      if (data.success) {
        showNotification(editingCaptain?.id ? "تم تعديل الطيار بنجاح" : "تمت إضافة الطيار بنجاح");
        setShowCaptainModal(false);
        setEditingCaptain(null);
        loadData();
      } else {
        alert(data.error);
      }
    } catch {
      alert("فشل حفظ بيانات الطيار");
    }
  };

  const handleDeleteCaptain = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا الطيار؟")) return;
    try {
      const res = await fetch(`/api/captains?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        showNotification("تم حذف الطيار بنجاح");
        loadData();
      }
    } catch {
      alert("فشل حذف الطيار");
    }
  };

  // --- DELIVERY ZONES ---
  const handleSaveZone = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingZone?.id ? "PUT" : "POST";
      const res = await fetch("/api/delivery-zones", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingZone),
      });
      const data = await res.json();
      if (data.success) {
        showNotification(editingZone?.id ? "تم تعديل المنطقة بنجاح" : "تمت إضافة المنطقة بنجاح");
        setShowZoneModal(false);
        setEditingZone(null);
        loadData();
      } else {
        alert(data.error);
      }
    } catch {
      alert("فشل حفظ المنطقة");
    }
  };

  const handleDeleteZone = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذه المنطقة؟")) return;
    try {
      const res = await fetch(`/api/delivery-zones?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        showNotification("تم حذف المنطقة بنجاح");
        loadData();
      }
    } catch {
      alert("فشل حذف المنطقة");
    }
  };

  // --- EXPENSES ---
  const handleSaveExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...expenseForm, recordedBy: user?.name || "الإدارة" }),
      });
      const data = await res.json();
      if (data.success) {
        showNotification("تم تسجيل المصروف وصرفه من الخزينة بنجاح");
        setShowExpenseModal(false);
        setExpenseForm({
          description: "",
          amount: "",
          category: "تشغيل ونثريات",
          expenseDate: new Date().toISOString().split("T")[0],
        });
        loadData();
      } else {
        alert(data.error);
      }
    } catch {
      alert("فشل تسجيل المصروف");
    }
  };

  // --- STAFF & PIN CODES ---
  const handleSaveUserStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingUserStaff?.id ? "PUT" : "POST";
      const res = await fetch("/api/auth/users", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingUserStaff),
      });
      const data = await res.json();
      if (data.success) {
        showNotification("تم حفظ بيانات الموظف وكود الـ PIN بنجاح");
        setShowUserModal(false);
        setEditingUserStaff(null);
        loadData();
      } else {
        alert(data.error);
      }
    } catch {
      alert("فشل حفظ الموظف");
    }
  };

  const handleToggleUserActive = async (id: string, current: boolean) => {
    try {
      const res = await fetch("/api/auth/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, isActive: !current }),
      });
      const data = await res.json();
      if (data.success) {
        showNotification(!current ? "تم تفعيل الحساب" : "تم تعطيل الحساب");
        loadData();
      }
    } catch {
      alert("فشل تغيير حالة الحساب");
    }
  };

  // --- SETTINGS ---
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      if (data.success) {
        showNotification("تم حفظ إعدادات السوبرماركت والفرع بنجاح");
        loadData();
      }
    } catch {
      alert("فشل حفظ الإعدادات");
    }
  };

  // --- LOGOUT ---
  const handleLogout = () => {
    localStorage.removeItem("almarawani_user");
    router.push("/login");
  };

  // Metrics Calculations
  const totalInventoryCost = products.reduce(
    (sum, p) => sum + (p.stockQty || 0) * (p.costPrice || 0),
    0
  );
  const totalInventoryRetail = products.reduce(
    (sum, p) => sum + (p.stockQty || 0) * (p.basePrice || 0),
    0
  );
  const totalSupplierDebt = suppliers.reduce(
    (sum, s) => sum + (s.currentBalance || 0),
    0
  );
  const lowStockCount = products.filter(
    (p) => (p.stockQty || 0) <= (p.minStockQty || 15)
  ).length;

  if (!user) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center font-['Cairo',sans-serif]">
        <div className="w-10 h-10 border-4 border-[#004f9f] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 flex flex-col font-['Cairo',sans-serif]" dir="rtl">
      {/* Top Navbar */}
      <header className="bg-[#002d62] text-white border-b-2 border-amber-400 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-[#004f9f] flex items-center justify-center font-black shadow">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg text-white">سوبرماركت المرواني</span>
                <span className="bg-[#e60000] text-white text-[10px] font-black px-2 py-0.5 rounded">
                  ERP لوحة التحكم
                </span>
              </div>
              <p className="text-[11px] text-blue-200">
                فرع المعادي الرئيسي • شارع النصر، دجلة
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              disabled={loading}
              className="px-3 py-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-xs font-bold text-blue-200 flex items-center gap-1.5 transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>تحديث البيانات</span>
            </button>

            <Link
              href="/"
              target="_blank"
              className="px-3 py-1.5 rounded-lg bg-[#004f9f] hover:bg-[#003875] text-xs font-bold text-white flex items-center gap-1.5 shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>المتجر أونلاين</span>
            </Link>

            <Link
              href="/cashier"
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white flex items-center gap-1.5 shadow-xs"
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>نقطة الكاشير (POS)</span>
            </Link>

            <Link
              href="/scale"
              className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-xs font-bold text-white flex items-center gap-1.5 shadow-xs"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>محطة الميزان ⚖️</span>
            </Link>

            <div className="h-6 w-px bg-blue-800/80 mx-1 hidden sm:block" />

            <div className="flex items-center gap-2 text-right">
              <div className="hidden sm:block">
                <p className="text-xs font-black text-white">{user.name}</p>
                <p className="text-[10px] text-amber-300 font-bold">{user.role}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-8 h-8 rounded-lg bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                title="تسجيل الخروج"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Global Toast Notification */}
        {actionMsg && (
          <div className="bg-emerald-600 text-white text-xs font-bold py-2 px-4 text-center flex items-center justify-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>{actionMsg}</span>
          </div>
        )}
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full px-4 py-6 flex-1 flex flex-col space-y-6">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500">رصيد الخزينة المتاح 💵</p>
              <p className="text-xl font-black text-emerald-600 mt-1">
                {(treasuryData?.balance || 0).toLocaleString()} ج.م
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">جاهز للدفع الفوري</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500">قيمة بضاعة المخزن 🏬</p>
              <p className="text-xl font-black text-[#004f9f] mt-1">
                {Math.round(totalInventoryCost).toLocaleString()} ج.م
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">
                سعر البيع: {Math.round(totalInventoryRetail).toLocaleString()} ج.م
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#004f9f] flex items-center justify-center">
              <Warehouse className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500">مستحقات الموردين 🤝</p>
              <p className="text-xl font-black text-amber-600 mt-1">
                {Math.round(totalSupplierDebt).toLocaleString()} ج.م
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">
                {suppliers.length} شركات وموردين
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500">طلبات اليوم والدليفري 🛵</p>
              <p className="text-xl font-black text-purple-600 mt-1">
                {orders.length} طلب
              </p>
              <p className="text-[10px] text-red-500 font-bold mt-0.5">
                {lowStockCount > 0 ? `⚠️ ${lowStockCount} أصناف قاربت على النفاد` : "المخزون آمن ومستقر"}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Bike className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-xs flex flex-wrap gap-1.5 overflow-x-auto">
          {[
            { id: "orders", label: "طلبات الدليفري الحية", icon: Bike, count: orders.filter(o => o.orderType === "delivery" && o.status !== "delivered").length },
            { id: "sales", label: "المبيعات والمرتجعات", icon: TrendingUp, count: returnsList.length ? `🔄 ${returnsList.length}` : undefined },
            { id: "products", label: "الأصناف والأقسام", icon: Package, count: products.length },
            { id: "inventory", label: "المخازن وكارت الصنف", icon: Warehouse, count: lowStockCount ? `⚠️ ${lowStockCount}` : undefined },
            { id: "purchases", label: "فواتير المشتريات", icon: FileText, count: purchases.length },
            { id: "suppliers", label: "الموردين والشركات", icon: Building2, count: suppliers.length },
            { id: "customers", label: "قاعدة العملاء", icon: UserCheck, count: customers.length },
            { id: "captains", label: "أسطول الطيارين والمناطق", icon: ShoppingBag, count: captains.length },
            { id: "treasury", label: "الخزينة والمصروفات", icon: CreditCard },
            { id: "users", label: "الموظفين وأكواد الـ PIN", icon: Users, count: usersList.length },
            { id: "settings", label: "إعدادات الفرع والميزان", icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2 px-3.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shrink-0 ${
                  active
                    ? "bg-[#004f9f] text-white shadow-xs scale-[1.02]"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-600"
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? "text-amber-300" : "text-slate-400"}`} />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`text-[10px] font-black px-1.5 py-0.2 rounded-full ${
                      active ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* TAB 1: ORDERS */}
        {/* ======================================================== */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#004f9f]" />
                  <span>الطلبات الواردة وخدمة التوصيل السريع (المعادي)</span>
                </h2>
                <p className="text-xs text-slate-500">
                  متابعة حالة الطلبات، تعيين الطيارين، وتسليم الشحنات
                </p>
              </div>

              {/* Channel and Status filter */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
                  <button
                    onClick={() => setOrderChannelFilter("delivery")}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      orderChannelFilter === "delivery"
                        ? "bg-white text-[#004f9f] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    طلبات الدليفري 🛵
                  </button>
                  <button
                    onClick={() => setOrderChannelFilter("pos")}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      orderChannelFilter === "pos"
                        ? "bg-white text-[#004f9f] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    مبيعات الكاشير 🖥️
                  </button>
                  <button
                    onClick={() => setOrderChannelFilter("all")}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      orderChannelFilter === "all"
                        ? "bg-white text-[#004f9f] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    الكل 📋
                  </button>
                </div>

                <div className="flex gap-1">
                  {[
                    { id: "all", label: "الكل" },
                    { id: "new", label: "جديدة" },
                    { id: "preparing", label: "تجهيز" },
                    { id: "out_for_delivery", label: "مع الطيار" },
                    { id: "delivered", label: "تم التوصيل" },
                  ].map((st) => (
                    <button
                      key={st.id}
                      onClick={() => setOrderStatusFilter(st.id)}
                      className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                        orderStatusFilter === st.id
                          ? "bg-[#004f9f] text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-black">
                    <th className="p-3">رقم الطلب</th>
                    <th className="p-3">النوع والقناة</th>
                    <th className="p-3">العميل والهاتف</th>
                    <th className="p-3">العنوان والمنطقة</th>
                    <th className="p-3">الأصناف</th>
                    <th className="p-3">الإجمالي</th>
                    <th className="p-3">الطيار المعين</th>
                    <th className="p-3">الحالة</th>
                    <th className="p-3">الإجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders
                    .filter((o) => {
                      if (orderChannelFilter === "delivery" && o.orderType && o.orderType !== "delivery") return false;
                      if (orderChannelFilter === "pos" && o.orderType !== "pos") return false;
                      if (orderStatusFilter !== "all" && o.status !== orderStatusFilter) return false;
                      return true;
                    })
                    .map((ord) => {
                      let parsedItems: any[] = [];
                      try {
                        parsedItems = JSON.parse(ord.items);
                      } catch {}

                      return (
                        <tr key={ord.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-3 font-mono font-black text-[#004f9f]">
                            {ord.orderNumber}
                          </td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                                ord.orderType === "pos"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {ord.orderType === "pos" ? "كاشير مباشر 🖥️" : "دليفري 🛵"}
                            </span>
                          </td>
                          <td className="p-3">
                            <p className="font-bold text-slate-900">{ord.customerName}</p>
                            <p className="text-[11px] text-slate-500 font-mono">{ord.phone}</p>
                          </td>
                          <td className="p-3 max-w-xs">
                            <p className="font-bold text-slate-800 truncate">{ord.zone}</p>
                            <p className="text-[10px] text-slate-500 truncate">{ord.address}</p>
                          </td>
                          <td className="p-3 max-w-xs">
                            <span className="font-bold text-slate-700">
                              {parsedItems.length} صنف:
                            </span>{" "}
                            <span className="text-[11px] text-slate-500 truncate">
                              {parsedItems.map((i) => `${i.nameAr} (${i.qty})`).join("، ")}
                            </span>
                          </td>
                          <td className="p-3 font-black text-slate-900">
                            {ord.total} ج.م
                          </td>
                          <td className="p-3">
                            <select
                              value={ord.captainId || ""}
                              onChange={(e) =>
                                handleUpdateOrderStatus(ord.id, ord.status, e.target.value)
                              }
                              className="text-[11px] bg-slate-50 border border-slate-200 rounded-lg p-1.5 font-bold outline-none"
                            >
                              <option value="">-- لم يعين طيار --</option>
                              {captains.map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.name} ({c.phone})
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="p-3">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10px] font-black ${
                                ord.status === "delivered"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : ord.status === "out_for_delivery"
                                  ? "bg-amber-100 text-amber-800"
                                  : ord.status === "preparing"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {ord.status === "delivered"
                                ? "تم التوصيل"
                                : ord.status === "out_for_delivery"
                                ? "مع الطيار"
                                : ord.status === "preparing"
                                ? "جاري التجهيز"
                                : "طلب جديد"}
                            </span>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center gap-1">
                              {ord.status === "new" && (
                                <button
                                  onClick={() => handleUpdateOrderStatus(ord.id, "preparing")}
                                  className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[10px] font-bold"
                                >
                                  بدء التجهيز
                                </button>
                              )}
                              {ord.status === "preparing" && (
                                <button
                                  onClick={() => handleUpdateOrderStatus(ord.id, "out_for_delivery")}
                                  className="px-2 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-[10px] font-bold"
                                >
                                  تسليم للطيار
                                </button>
                              )}
                              {ord.status === "out_for_delivery" && (
                                <button
                                  onClick={() => handleUpdateOrderStatus(ord.id, "delivered")}
                                  className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[10px] font-bold"
                                >
                                  تأكيد التوصيل
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              {orders.length === 0 && (
                <div className="p-8 text-center text-slate-400 font-bold">
                  لا توجد طلبات مسجلة حالياً
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB: SALES, CHANNELS, CAPTAINS RECONCILIATION & RETURNS */}
        {/* ======================================================== */}
        {activeTab === "sales" && (
          <div className="space-y-6">
            {/* Sales Header */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#004f9f]" />
                  <span>لوحة المبيعات، تحليلات القنوات، وتسوية الطيارين والمرتجعات</span>
                </h2>
                <p className="text-xs text-slate-500">
                  فصل دقيق بين مبيعات المحل المباشرة وطلبات الدليفري، جرد عهد الطيارين، وتسجيل المرتجعات
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setReturnForm({
                      type: "sales_return",
                      referenceNumber: "",
                      customerOrSupplier: "",
                      supplierId: "",
                      items: [{ productId: products[0]?.id || "", nameAr: products[0]?.nameAr || "", qty: 1, price: products[0]?.basePrice || 0, total: products[0]?.basePrice || 0 }],
                      totalAmount: products[0]?.basePrice || 0,
                      reason: "طلب العميل / صنف تالف",
                      refundMethod: "cash",
                    });
                    setShowReturnModal(true);
                  }}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black shadow flex items-center gap-1.5 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>تسجيل مرتجع جديد (عميل / مورد)</span>
                </button>

                <Link
                  href="/cashier"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black shadow flex items-center gap-1.5 transition-all"
                >
                  <Receipt className="w-4 h-4" />
                  <span>شاشة الكاشير (POS)</span>
                </Link>

                <Link
                  href="/scale"
                  className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-black shadow flex items-center gap-1.5 transition-all"
                >
                  <Scale className="w-4 h-4" />
                  <span>محطة الميزان ⚖️</span>
                </Link>
              </div>
            </div>

            {/* Channels Sales KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* POS Sales */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500">مبيعات الكاشير المباشرة (POS)</span>
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    🖥️
                  </span>
                </div>
                <div className="text-2xl font-black font-mono text-emerald-600">
                  {orders
                    .filter((o) => o.orderType === "pos")
                    .reduce((sum, o) => sum + (o.total || 0), 0)
                    .toLocaleString()}{" "}
                  <span className="text-xs font-sans text-slate-500">ج.م</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  عدد الفواتير: <strong>{orders.filter((o) => o.orderType === "pos").length}</strong> • موردة فورياً للخزينة
                </div>
              </div>

              {/* Delivery Sales */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500">مبيعات الدليفري والتوصيل (Online)</span>
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#004f9f] flex items-center justify-center font-bold">
                    🛵
                  </span>
                </div>
                <div className="text-2xl font-black font-mono text-[#004f9f]">
                  {orders
                    .filter((o) => o.orderType === "delivery" || !o.orderType)
                    .reduce((sum, o) => sum + (o.total || 0), 0)
                    .toLocaleString()}{" "}
                  <span className="text-xs font-sans text-slate-500">ج.م</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  عدد الطلبات: <strong>{orders.filter((o) => o.orderType === "delivery" || !o.orderType).length}</strong> • فرع المعادي
                </div>
              </div>

              {/* Uncollected Cash with Captains */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500">نقدية معلقة مع الطيارين (عهدة)</span>
                  <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    💰
                  </span>
                </div>
                <div className="text-2xl font-black font-mono text-amber-600">
                  {captains
                    .reduce((sum, c) => sum + (c.pendingBalance || 0), 0)
                    .toLocaleString()}{" "}
                  <span className="text-xs font-sans text-slate-500">ج.م</span>
                </div>
                <div className="text-[11px] text-amber-600 font-bold mt-1">
                  جاهزة للتسوية الفورية وتوريدها للخزينة
                </div>
              </div>

              {/* Total Returns */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500">إجمالي المرتجعات المستردة</span>
                  <span className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold">
                    🔄
                  </span>
                </div>
                <div className="text-2xl font-black font-mono text-red-600">
                  {returnsList
                    .reduce((sum, r) => sum + (r.totalAmount || 0), 0)
                    .toLocaleString()}{" "}
                  <span className="text-xs font-sans text-slate-500">ج.م</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  عدد حركات المرتجع: <strong>{returnsList.length}</strong> حركة
                </div>
              </div>
            </div>

            {/* Delivery Captains Cash Reconciliation Table */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-black">
                    <Bike className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-slate-900">
                      تسوية وجرد عهدة طياري الدليفري المعلقة
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      متابعة تحصيل قيمة الطلبات المسلمة وتوريدها للخزينة دفعة واحدة
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-black">
                      <th className="p-3">اسم الطيار</th>
                      <th className="p-3">رقم الهاتف</th>
                      <th className="p-3">المركبة</th>
                      <th className="p-3">طلبات مسلمة غير موردة</th>
                      <th className="p-3">المبلغ النقدي المعلق</th>
                      <th className="p-3">الإجراء</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {captains.map((cap) => {
                      const unsettledCount = orders.filter(
                        (o) => o.captainId === cap.id && o.status === "delivered" && !o.isSettled
                      ).length;
                      const hasPending = (cap.pendingBalance || 0) > 0 || unsettledCount > 0;

                      return (
                        <tr key={cap.id} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-900">{cap.name}</td>
                          <td className="p-3 font-mono text-slate-600">{cap.phone}</td>
                          <td className="p-3 text-slate-500">{cap.vehicle}</td>
                          <td className="p-3 font-mono font-bold">
                            <span className={`px-2 py-0.5 rounded-full ${unsettledCount > 0 ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-600"}`}>
                              {unsettledCount} طلبات
                            </span>
                          </td>
                          <td className="p-3 font-mono font-black text-sm">
                            <span className={hasPending ? "text-amber-600" : "text-slate-400"}>
                              {(cap.pendingBalance || 0).toFixed(2)} ج.م
                            </span>
                          </td>
                          <td className="p-3">
                            <button
                              onClick={() => handleSettleCaptain(cap.id)}
                              disabled={!hasPending}
                              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1 transition-all"
                            >
                              <DollarSign className="w-3.5 h-3.5" />
                              <span>توريد للخزينة 💵</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Returns Log (سجل المرتجعات المالية والمخزنية) */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-800 flex items-center justify-center font-black">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-slate-900">
                      سجل المرتجعات المالية وحركات المخزن المسترجعة
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      توثيق كافة مرتجعات المبيعات (من العملاء) ومرتجعات المشتريات (للموردين) وتأثيرها على الخزينة
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-black">
                      <th className="p-3">رقم المرتجع</th>
                      <th className="p-3">النوع</th>
                      <th className="p-3">رقم الفاتورة الأصلية</th>
                      <th className="p-3">اسم العميل / المورد</th>
                      <th className="p-3">الأصناف المرتجعة</th>
                      <th className="p-3">المبلغ المسترد</th>
                      <th className="p-3">السبب</th>
                      <th className="p-3">الموظف المنفذ</th>
                      <th className="p-3">التاريخ والوقت</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {returnsList.map((ret) => {
                      let parsedRetItems: any[] = [];
                      try {
                        parsedRetItems = JSON.parse(ret.items);
                      } catch {}

                      return (
                        <tr key={ret.id} className="hover:bg-slate-50">
                          <td className="p-3 font-mono font-black text-red-600">{ret.returnNumber}</td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                                ret.type === "sales_return"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {ret.type === "sales_return" ? "مرتجع مبيعات عميل" : "مرتجع مشتريات مورد"}
                            </span>
                          </td>
                          <td className="p-3 font-mono font-bold text-slate-700">{ret.referenceNumber}</td>
                          <td className="p-3 font-bold text-slate-900">{ret.customerOrSupplier}</td>
                          <td className="p-3 max-w-xs">
                            <span className="text-[11px] text-slate-600">
                              {parsedRetItems.map((i: any) => `${i.nameAr || "صنف"} (${i.qty})`).join("، ")}
                            </span>
                          </td>
                          <td className="p-3 font-mono font-black text-sm text-red-600">
                            {ret.totalAmount.toFixed(2)} ج.م
                          </td>
                          <td className="p-3 text-slate-500">{ret.reason || "—"}</td>
                          <td className="p-3 text-slate-700">{ret.recordedBy || "كاشير"}</td>
                          <td className="p-3 font-mono text-[11px] text-slate-400">
                            {new Date(ret.createdAt).toLocaleString("ar-EG")}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {returnsList.length === 0 && (
                  <div className="p-8 text-center text-slate-400 font-bold">
                    لا توجد حركات مرتجع مسجلة حالياً
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: PRODUCTS & DYNAMIC CATEGORIES */}
        {/* ======================================================== */}
        {activeTab === "products" && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Package className="w-5 h-5 text-[#004f9f]" />
                  <span>دليل الأصناف والأسعار والأقسام</span>
                </h2>
                <p className="text-xs text-slate-500">
                  إضافة أصناف جديدة، تعديل الأسعار، ربط الأقسام، وفتح كارت الصنف
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingProduct({
                    nameAr: "",
                    brand: "المرواني",
                    category: categories[0]?.nameAr || "ألبان وأجبان",
                    unit: "1 كجم",
                    barcode: "",
                    costPrice: 0,
                    basePrice: 0,
                    originalPrice: 0,
                    stockQty: 100,
                    minStockQty: 15,
                    isOffer: false,
                    isExpress: true,
                    inStock: true,
                  });
                  setShowProductModal(true);
                }}
                className="px-4 py-2 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl text-xs font-black shadow flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة صنف جديد</span>
              </button>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="ابحث بالاسم، الباركود، أو العلامة التجارية..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="w-full bg-transparent text-xs outline-none font-bold text-slate-700"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">القسم:</span>
                <select
                  value={productCatFilter}
                  onChange={(e) => setProductCatFilter(e.target.value)}
                  className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-700 outline-none"
                >
                  <option value="الكل">كافة الأقسام ({products.length})</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.nameAr}>
                      {c.nameAr}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-black">
                    <th className="p-3">الصنف والعلامة</th>
                    <th className="p-3">القسم</th>
                    <th className="p-3">الباركود</th>
                    <th className="p-3">سعر الشراء (التكلفة)</th>
                    <th className="p-3">سعر البيع</th>
                    <th className="p-3">الرصيد بالمخزن</th>
                    <th className="p-3">الحالة والعروض</th>
                    <th className="p-3">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {products
                    .filter((p) =>
                      productCatFilter === "الكل" ? true : p.category === productCatFilter
                    )
                    .filter((p) => {
                      if (!productSearch) return true;
                      const q = productSearch.toLowerCase();
                      return (
                        p.nameAr?.toLowerCase().includes(q) ||
                        p.brand?.toLowerCase().includes(q) ||
                        p.barcode?.includes(q)
                      );
                    })
                    .map((prod) => (
                      <tr key={prod.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={prod.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?w=100"}
                              alt={prod.nameAr}
                              className="w-10 h-10 rounded-lg object-cover border border-slate-200"
                            />
                            <div>
                              <p className="font-black text-slate-900">{prod.nameAr}</p>
                              <p className="text-[10px] text-slate-500 font-semibold">
                                {prod.brand || "المرواني"} • {prod.unit}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 font-bold text-slate-700">{prod.category}</td>
                        <td className="p-3 font-mono text-[11px] text-slate-500">
                          {prod.barcode || "—"}
                        </td>
                        <td className="p-3 font-bold text-slate-600">
                          {prod.costPrice || 0} ج.م
                        </td>
                        <td className="p-3 font-black text-[#004f9f]">
                          {prod.basePrice} ج.م
                        </td>
                        <td className="p-3 font-bold">
                          <span
                            className={`px-2 py-0.5 rounded-lg text-xs font-black ${
                              prod.stockQty <= (prod.minStockQty || 15)
                                ? "bg-red-100 text-red-700"
                                : "bg-emerald-50 text-emerald-700"
                            }`}
                          >
                            {prod.stockQty} {prod.unit}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-1">
                            {prod.isOffer && (
                              <span className="bg-[#e60000] text-white text-[9px] font-black px-1.5 py-0.5 rounded">
                                عرض خاص
                              </span>
                            )}
                            {prod.isExpress && (
                              <span className="bg-blue-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded">
                                60 دقيقة
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => handleOpenStockCard(prod)}
                              className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-[10px] font-black flex items-center gap-1 shadow-2xs"
                              title="عرض كارت الصنف وحركة المخزون"
                            >
                              <FileText className="w-3 h-3" />
                              <span>كارت الصنف</span>
                            </button>

                            <button
                              onClick={() => {
                                setEditingProduct(prod);
                                setShowProductModal(true);
                              }}
                              className="w-7 h-7 bg-slate-100 hover:bg-blue-100 text-[#004f9f] rounded-lg flex items-center justify-center transition-colors"
                              title="تعديل الصنف"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => handleDeleteProduct(prod.id)}
                              className="w-7 h-7 bg-slate-100 hover:bg-red-100 text-red-600 rounded-lg flex items-center justify-center transition-colors"
                              title="حذف الصنف"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: INVENTORY & WAREHOUSES */}
        {/* ======================================================== */}
        {activeTab === "inventory" && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Warehouse className="w-5 h-5 text-[#004f9f]" />
                  <span>المخازن والمستودعات — أرصدة أول المدة والجرد الدوري</span>
                </h2>
                <p className="text-xs text-slate-500">
                  مراقبة الأرصدة، تسجيل التسويات الجردية، وتنبيهات النواقص التلقائية
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl text-xs font-bold text-amber-800">
                  الأصناف تحت حد الأمان:{" "}
                  <span className="font-black text-red-600">{lowStockCount}</span>
                </div>
              </div>
            </div>

            {/* Inventory Valuation Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500 font-bold block">إجمالي تكلفة البضاعة بالمخزن:</span>
                <span className="text-lg font-black text-slate-900">
                  {Math.round(totalInventoryCost).toLocaleString()} ج.م
                </span>
              </div>
              <div>
                <span className="text-slate-500 font-bold block">إجمالي القيمة البيعية المتوقعة:</span>
                <span className="text-lg font-black text-[#004f9f]">
                  {Math.round(totalInventoryRetail).toLocaleString()} ج.م
                </span>
              </div>
              <div>
                <span className="text-slate-500 font-bold block">هامش الربح الإجمالي المتوقع:</span>
                <span className="text-lg font-black text-emerald-600">
                  {Math.round(totalInventoryRetail - totalInventoryCost).toLocaleString()} ج.م (
                  {totalInventoryCost > 0
                    ? Math.round(
                        ((totalInventoryRetail - totalInventoryCost) / totalInventoryCost) * 100
                      )
                    : 0}
                  %)
                </span>
              </div>
            </div>

            {/* Inventory Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-black">
                    <th className="p-3">اسم الصنف</th>
                    <th className="p-3">القسم</th>
                    <th className="p-3">رصيد أول المدة</th>
                    <th className="p-3">الرصيد الحالي</th>
                    <th className="p-3">حد الأمان (الطلب)</th>
                    <th className="p-3">تكلفة الوحدة</th>
                    <th className="p-3">إجمالي القيمة</th>
                    <th className="p-3">الإجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 font-black text-slate-900">{p.nameAr}</td>
                      <td className="p-3 font-bold text-slate-600">{p.category}</td>
                      <td className="p-3 font-mono font-bold text-slate-500">
                        {p.openingStock || p.stockQty} {p.unit}
                      </td>
                      <td className="p-3">
                        <span
                          className={`font-black px-2 py-0.5 rounded-lg ${
                            p.stockQty <= (p.minStockQty || 15)
                              ? "bg-red-100 text-red-700 font-bold animate-pulse"
                              : "bg-emerald-50 text-emerald-700"
                          }`}
                        >
                          {p.stockQty} {p.unit}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-slate-500">{p.minStockQty || 15}</td>
                      <td className="p-3 font-bold text-slate-700">{p.costPrice || 0} ج.م</td>
                      <td className="p-3 font-black text-[#004f9f]">
                        {Math.round((p.stockQty || 0) * (p.costPrice || 0))} ج.م
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setAdjustmentProduct(p);
                              setAdjustQty(p.stockQty);
                              setAdjustReason("");
                              setShowAdjustmentModal(true);
                            }}
                            className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[10px] font-bold"
                          >
                            تسوية جرد
                          </button>

                          <button
                            onClick={() => handleOpenStockCard(p)}
                            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[10px] font-bold"
                          >
                            سجل الحركة
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 4: PURCHASES & SUPPLIER INVOICES */}
        {/* ======================================================== */}
        {activeTab === "purchases" && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#004f9f]" />
                  <span>فواتير المشتريات وتوريد البضاعة</span>
                </h2>
                <p className="text-xs text-slate-500">
                  تسجيل فواتير الشراء من الموردين، زيادة الأرصدة تلقائياً، وإدارة المديونيات
                </p>
              </div>

              <button
                onClick={() => setShowPurchaseModal(true)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black shadow flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>تسجيل فاتورة شراء جديدة</span>
              </button>
            </div>

            {/* Purchases Invoices Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-black">
                    <th className="p-3">رقم الفاتورة</th>
                    <th className="p-3">المورد / الشركة</th>
                    <th className="p-3">تاريخ الفاتورة</th>
                    <th className="p-3">الأصناف المشتراة</th>
                    <th className="p-3">إجمالي الفاتورة</th>
                    <th className="p-3">المدفوع كاش</th>
                    <th className="p-3">المتبقي آجل</th>
                    <th className="p-3">المستلم</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {purchases.map((pur) => {
                    let items: any[] = [];
                    try {
                      items = JSON.parse(pur.items);
                    } catch {}

                    return (
                      <tr key={pur.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 font-mono font-black text-[#004f9f]">
                          {pur.invoiceNumber}
                        </td>
                        <td className="p-3 font-bold text-slate-900">{pur.supplierName}</td>
                        <td className="p-3 text-slate-500 font-mono">{pur.invoiceDate}</td>
                        <td className="p-3 max-w-xs">
                          <span className="font-bold text-slate-700">{items.length} صنف: </span>
                          <span className="text-[11px] text-slate-500 truncate">
                            {items.map((i) => `${i.nameAr} (${i.qty})`).join("، ")}
                          </span>
                        </td>
                        <td className="p-3 font-black text-slate-900">
                          {pur.totalAmount} ج.م
                        </td>
                        <td className="p-3 font-black text-emerald-600">
                          {pur.paidAmount} ج.م
                        </td>
                        <td className="p-3 font-black text-amber-600">
                          {pur.remainingAmount} ج.م
                        </td>
                        <td className="p-3 text-slate-500 font-semibold">{pur.receivedBy}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {purchases.length === 0 && (
                <div className="p-8 text-center text-slate-400 font-bold">
                  لا توجد فواتير مشتريات مسجلة بعد
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 5: SUPPLIERS & LEDGER */}
        {/* ======================================================== */}
        {activeTab === "suppliers" && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#004f9f]" />
                  <span>دليل الموردين والشركات وكشوف الحسابات</span>
                </h2>
                <p className="text-xs text-slate-500">
                  إدارة مستحقات الموردين، سداد الدفعات النقدية، واستخراج كشف حساب تفصيلي
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingSupplier({
                    name: "",
                    contactPerson: "",
                    phone: "",
                    address: "",
                    category: "ألبان وأغذية",
                    openingBalance: 0,
                    notes: "",
                  });
                  setShowSupplierModal(true);
                }}
                className="px-4 py-2 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl text-xs font-black shadow flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة مورد جديد</span>
              </button>
            </div>

            {/* Suppliers Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-black">
                    <th className="p-3">اسم المورد / الشركة</th>
                    <th className="p-3">المندوب والهاتف</th>
                    <th className="p-3">التخصص</th>
                    <th className="p-3">رصيد أول المدة</th>
                    <th className="p-3">المستحق له حالياً</th>
                    <th className="p-3">عدد الفواتير</th>
                    <th className="p-3">الإجراءات والعمليات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {suppliers.map((sup) => (
                    <tr key={sup.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 font-black text-slate-900">{sup.name}</td>
                      <td className="p-3">
                        <p className="font-bold text-slate-800">{sup.contactPerson || "المندوب"}</p>
                        <p className="text-[11px] text-slate-500 font-mono">{sup.phone}</p>
                      </td>
                      <td className="p-3 font-bold text-slate-600">{sup.category}</td>
                      <td className="p-3 font-mono font-bold text-slate-500">
                        {sup.openingBalance || 0} ج.م
                      </td>
                      <td className="p-3">
                        <span className="font-black text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg text-xs">
                          {sup.currentBalance} ج.م
                        </span>
                      </td>
                      <td className="p-3 font-mono font-bold text-slate-600">
                        {sup._count?.purchases || 0} فاتورة
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setPayingSupplier(sup);
                              setPayAmount("");
                              setPayNotes("");
                              setShowSupplierPayModal(true);
                            }}
                            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[10px] font-black shadow-2xs"
                          >
                            سداد دفعة 💵
                          </button>

                          <button
                            onClick={() => handleOpenStatement(sup.id)}
                            className="px-2.5 py-1 bg-[#004f9f] hover:bg-[#003875] text-white rounded-lg text-[10px] font-black shadow-2xs"
                          >
                            كشف حساب 📑
                          </button>

                          <button
                            onClick={() => {
                              setEditingSupplier(sup);
                              setShowSupplierModal(true);
                            }}
                            className="w-7 h-7 bg-slate-100 hover:bg-blue-100 text-[#004f9f] rounded-lg flex items-center justify-center transition-colors"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 6: CUSTOMERS CRM */}
        {/* ======================================================== */}
        {activeTab === "customers" && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#004f9f]" />
                  <span>قاعدة بيانات العملاء وسجل المشتريات</span>
                </h2>
                <p className="text-xs text-slate-500">
                  بيانات عملاء المعادي، إجمالي الطلبات، والقيمة المنفقة
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-black">
                    <th className="p-3">اسم العميل</th>
                    <th className="p-3">رقم الهاتف</th>
                    <th className="p-3">المنطقة بالمعادي</th>
                    <th className="p-3">العنوان بالتفصيل</th>
                    <th className="p-3">عدد الطلبات</th>
                    <th className="p-3">إجمالي الإنفاق</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {customers.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 font-black text-slate-900">{c.name}</td>
                      <td className="p-3 font-mono font-bold text-slate-600">{c.phone}</td>
                      <td className="p-3 font-bold text-[#004f9f]">{c.zone || "المعادي"}</td>
                      <td className="p-3 text-slate-600 max-w-xs truncate">{c.address || "—"}</td>
                      <td className="p-3 font-black text-slate-900">
                        {c.totalOrders || 0} طلب
                      </td>
                      <td className="p-3 font-black text-emerald-600">
                        {c.totalSpend || 0} ج.م
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 7: CAPTAINS & DELIVERY ZONES (DYNAMIC) */}
        {/* ======================================================== */}
        {activeTab === "captains" && (
          <div className="space-y-6">
            {/* Captains Section */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <Bike className="w-5 h-5 text-[#e60000]" />
                    <span>أسطول طياري الدليفري السريع (المعادي ناو)</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    إضافة طيار جديد، تفعيل أو تعطيل، وحذف الطيارين
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingCaptain({
                      name: "",
                      phone: "",
                      vehicle: "سكوتر المرواني السريع",
                      zone: "المعادي",
                      isActive: true,
                    });
                    setShowCaptainModal(true);
                  }}
                  className="px-4 py-2 bg-[#e60000] hover:bg-red-700 text-white rounded-xl text-xs font-black shadow flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>إضافة طيار جديد</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {captains.map((cap) => (
                  <div
                    key={cap.id}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-red-100 text-[#e60000] flex items-center justify-center font-black">
                          🛵
                        </div>
                        <div>
                          <p className="font-black text-sm text-slate-900">{cap.name}</p>
                          <p className="text-xs font-mono text-slate-500">{cap.phone}</p>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                          cap.isActive
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {cap.isActive ? "نشط ومتاح" : "معطل"}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-600 space-y-0.5 pt-1 border-t border-slate-200/60">
                      <p>
                        <span className="font-bold">المركبة:</span> {cap.vehicle}
                      </p>
                      <p>
                        <span className="font-bold">نطاق التغطية:</span> {cap.zone}
                      </p>
                    </div>

                    <div className="flex items-center justify-end gap-1.5 pt-1">
                      <button
                        onClick={() => {
                          setEditingCaptain(cap);
                          setShowCaptainModal(true);
                        }}
                        className="px-2.5 py-1 bg-slate-200 hover:bg-blue-100 text-[#004f9f] rounded-lg text-xs font-bold"
                      >
                        تعديل
                      </button>
                      <button
                        onClick={() => handleDeleteCaptain(cap.id)}
                        className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs font-bold"
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Zones & Fees Section */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#004f9f]" />
                    <span>مناطق التوصيل وأسعار الدليفري بالمعادي</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    تعديل رسوم التوصيل، زمن الوصول المتوقع بالدقائق، وتفعيل/تعطيل المناطق
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingZone({
                      nameAr: "",
                      fee: 20,
                      timeMinutes: 45,
                      minOrder: 100,
                      isActive: true,
                    });
                    setShowZoneModal(true);
                  }}
                  className="px-4 py-2 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl text-xs font-black shadow flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>إضافة منطقة توصيل جديدة</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-black">
                      <th className="p-3">اسم المنطقة</th>
                      <th className="p-3">رسوم التوصيل</th>
                      <th className="p-3">وقت التوصيل التقديري</th>
                      <th className="p-3">الحد الأدنى للطلب</th>
                      <th className="p-3">الحالة</th>
                      <th className="p-3">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {deliveryZones.map((z) => (
                      <tr key={z.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 font-black text-slate-900">{z.nameAr}</td>
                        <td className="p-3 font-black text-[#004f9f]">{z.fee} ج.م</td>
                        <td className="p-3 font-bold text-slate-700">~{z.timeMinutes} دقيقة</td>
                        <td className="p-3 font-bold text-slate-600">{z.minOrder} ج.م</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                              z.isActive
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {z.isActive ? "نشطة" : "معطلة"}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => {
                                setEditingZone(z);
                                setShowZoneModal(true);
                              }}
                              className="px-2.5 py-1 bg-slate-100 hover:bg-blue-100 text-[#004f9f] rounded-lg text-xs font-bold"
                            >
                              تعديل
                            </button>
                            <button
                              onClick={() => handleDeleteZone(z.id)}
                              className="px-2.5 py-1 bg-slate-100 hover:bg-red-100 text-red-600 rounded-lg text-xs font-bold"
                            >
                              حذف
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 8: TREASURY, EXPENSES & CASH FLOW */}
        {/* ======================================================== */}
        {activeTab === "treasury" && (
          <div className="space-y-6">
            {/* Treasury KPI Bar */}
            <div className="bg-gradient-to-r from-[#002d62] via-[#004f9f] to-[#002d62] text-white p-6 rounded-3xl shadow-lg flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-blue-200 font-bold">الخزينة النقدية الرئيسية (Cash on Hand)</p>
                <h1 className="text-3xl font-black text-amber-300 mt-1">
                  {(treasuryData?.balance || 0).toLocaleString()} ج.م
                </h1>
                <p className="text-[11px] text-blue-100 mt-1">
                  إجمالي الوارد المحصل: {(treasuryData?.totalIn || 0).toLocaleString()} ج.م • إجمالي المنصرف:{" "}
                  {(treasuryData?.totalOut || 0).toLocaleString()} ج.م
                </p>
              </div>

              <button
                onClick={() => setShowExpenseModal(true)}
                className="px-5 py-2.5 bg-[#e60000] hover:bg-red-700 text-white rounded-xl text-xs font-black shadow-md flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>تسجيل مصروف تشغيل جديد</span>
              </button>
            </div>

            {/* Expenses List */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-black text-base text-slate-900">سجل المصروفات والنثريات</h3>
                <span className="text-xs font-bold text-slate-500">
                  إجمالي المصروفات:{" "}
                  {expenses.reduce((sum, e) => sum + (e.amount || 0), 0).toLocaleString()} ج.م
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-black">
                      <th className="p-3">البيان والتفاصيل</th>
                      <th className="p-3">التصنيف</th>
                      <th className="p-3">المبلغ</th>
                      <th className="p-3">التاريخ</th>
                      <th className="p-3">المسؤول</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {expenses.map((exp) => (
                      <tr key={exp.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 font-black text-slate-900">{exp.description}</td>
                        <td className="p-3 font-bold text-slate-600">{exp.category}</td>
                        <td className="p-3 font-black text-red-600">{exp.amount} ج.م</td>
                        <td className="p-3 font-mono text-slate-500">{exp.expenseDate}</td>
                        <td className="p-3 text-slate-500">{exp.recordedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Treasury Transactions Stream */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-black text-base text-slate-900 border-b border-slate-100 pb-3">
                سجل حركات الخزينة المتتالية (كشف حركة النقدية)
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-black">
                      <th className="p-3">البيان</th>
                      <th className="p-3">النوع والتصنيف</th>
                      <th className="p-3">المبلغ</th>
                      <th className="p-3">الرصيد بعد الحركة</th>
                      <th className="p-3">التاريخ والوقت</th>
                      <th className="p-3">المسؤول</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {treasuryData?.transactions?.map((tx: any) => (
                      <tr key={tx.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 font-bold text-slate-900">{tx.description}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-lg text-[10px] font-black ${
                              tx.type === "in"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {tx.category}
                          </span>
                        </td>
                        <td
                          className={`p-3 font-black ${
                            tx.type === "in" ? "text-emerald-600" : "text-red-600"
                          }`}
                        >
                          {tx.type === "in" ? `+${tx.amount}` : `-${tx.amount}`} ج.م
                        </td>
                        <td className="p-3 font-black text-[#004f9f]">
                          {tx.balanceAfter} ج.م
                        </td>
                        <td className="p-3 text-slate-500 font-mono text-[11px]">
                          {new Date(tx.createdAt).toLocaleString("ar-EG")}
                        </td>
                        <td className="p-3 text-slate-600 font-semibold">{tx.recordedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 9: STAFF & PIN CODE MANAGEMENT */}
        {/* ======================================================== */}
        {activeTab === "users" && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#004f9f]" />
                  <span>إدارة الموظفين، أكواد الـ PIN والصلاحيات</span>
                </h2>
                <p className="text-xs text-slate-500">
                  تعديل كود الـ PIN المخصص لكل موظف للدخول السريع، تغيير كلمات المرور، والتفعيل
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingUserStaff({
                    name: "",
                    username: "",
                    phone: "",
                    pin: "123456",
                    role: "cashier",
                    password: "",
                  });
                  setShowUserModal(true);
                }}
                className="px-4 py-2 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl text-xs font-black shadow flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة موظف جديد</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-black">
                    <th className="p-3">اسم الموظف</th>
                    <th className="p-3">اسم المستخدم</th>
                    <th className="p-3">الهاتف</th>
                    <th className="p-3">كود الـ PIN السري</th>
                    <th className="p-3">الدور والصلاحية</th>
                    <th className="p-3">حالة الحساب</th>
                    <th className="p-3">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {usersList.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 font-black text-slate-900">{u.name}</td>
                      <td className="p-3 font-mono font-bold text-[#004f9f]">{u.username || "—"}</td>
                      <td className="p-3 font-mono text-slate-600">{u.phone}</td>
                      <td className="p-3">
                        <span className="font-mono font-black text-base bg-amber-50 text-amber-900 px-3 py-1 rounded-xl border border-amber-300">
                          {u.pin || "123456"}
                        </span>
                      </td>
                      <td className="p-3 font-bold text-slate-700">
                        {u.role === "owner"
                          ? "👑 المالك الرئيسي"
                          : u.role === "manager"
                          ? "👔 مدير الفرع"
                          : u.role === "cashier"
                          ? "💳 كاشير"
                          : u.role === "delivery"
                          ? "🛵 طيار دليفري"
                          : "📦 موظف تجهيز"}
                      </td>
                      <td className="p-3">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                            u.isActive
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {u.isActive ? "نشط" : "معطل"}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setEditingUserStaff(u);
                              setShowUserModal(true);
                            }}
                            className="px-2.5 py-1 bg-[#004f9f] hover:bg-[#003875] text-white rounded-lg text-xs font-bold"
                          >
                            تعديل الـ PIN
                          </button>
                          <button
                            onClick={() => handleToggleUserActive(u.id, u.isActive)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                              u.isActive
                                ? "bg-amber-100 text-amber-800 hover:bg-amber-200"
                                : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                            }`}
                          >
                            {u.isActive ? "تعطيل" : "تفعيل"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 10: SETTINGS */}
        {/* ======================================================== */}
        {activeTab === "settings" && settings && (
          <form
            onSubmit={handleSaveSettings}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-6"
          >
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#004f9f]" />
                <span>إعدادات سوبرماركت المرواني والفرع</span>
              </h2>
              <p className="text-xs text-slate-500">
                تعديل أرقام الهواتف، العناوين، حد التوصيل المجاني، والشريط الترويجي
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  اسم السوبرماركت:
                </label>
                <input
                  type="text"
                  value={settings.storeName || ""}
                  onChange={(e) => setSettings({ ...settings, storeName: e.target.value })}
                  className="w-full h-11 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  الفرع الرئيسي:
                </label>
                <input
                  type="text"
                  value={settings.mainBranch || ""}
                  onChange={(e) => setSettings({ ...settings, mainBranch: e.target.value })}
                  className="w-full h-11 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  العنوان بالتفصيل:
                </label>
                <input
                  type="text"
                  value={settings.address || ""}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  className="w-full h-11 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  أرقام الخط الساخن والتواصل:
                </label>
                <input
                  type="text"
                  value={settings.hotlines || ""}
                  onChange={(e) => setSettings({ ...settings, hotlines: e.target.value })}
                  className="w-full h-11 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  حد التوصيل المجاني (بالجنيه):
                </label>
                <input
                  type="number"
                  value={settings.freeDeliveryThreshold || 400}
                  onChange={(e) =>
                    setSettings({ ...settings, freeDeliveryThreshold: parseFloat(e.target.value) })
                  }
                  className="w-full h-11 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  زمن التوصيل السريع (المرواني ناو بالدقائق):
                </label>
                <input
                  type="number"
                  value={settings.expressMinutes || 60}
                  onChange={(e) =>
                    setSettings({ ...settings, expressMinutes: parseInt(e.target.value) })
                  }
                  className="w-full h-11 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  الرقم الضريبي (للإيصال الحراري):
                </label>
                <input
                  type="text"
                  value={settings.taxNumber || "684-219-450"}
                  onChange={(e) => setSettings({ ...settings, taxNumber: e.target.value })}
                  className="w-full h-11 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  رقم السجل التجاري:
                </label>
                <input
                  type="text"
                  value={settings.commercialReg || "148920"}
                  onChange={(e) => setSettings({ ...settings, commercialReg: e.target.value })}
                  className="w-full h-11 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold"
                />
              </div>
            </div>

            {/* Scale Barcode Integration Settings */}
            <div className="p-4 bg-sky-50/60 rounded-2xl border border-sky-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-sky-700" />
                  <h3 className="font-black text-sm text-sky-900">
                    إعدادات موازين الباركود الإلكترونية (CAS / Rongta / Digi)
                  </h3>
                </div>
                <Link
                  href="/scale"
                  className="px-3 py-1 bg-[#004f9f] hover:bg-[#003875] text-white rounded-lg text-xs font-bold flex items-center gap-1"
                >
                  <span>فتح محطة الميزان ⚖️</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-sky-900 mb-1">
                    بادئات باركود الوزن (EAN-13):
                  </label>
                  <input
                    type="text"
                    value={settings.weightPrefixes || "20,21"}
                    onChange={(e) => setSettings({ ...settings, weightPrefixes: e.target.value })}
                    className="w-full h-10 px-3 text-xs bg-white border border-sky-300 rounded-xl font-mono font-bold"
                  />
                  <span className="text-[10px] text-slate-500">مفصولة بفاصلة (مثال: 20,21)</span>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-sky-900 mb-1">
                    بادئات باركود السعر (EAN-13):
                  </label>
                  <input
                    type="text"
                    value={settings.pricePrefixes || "22,23"}
                    onChange={(e) => setSettings({ ...settings, pricePrefixes: e.target.value })}
                    className="w-full h-10 px-3 text-xs bg-white border border-sky-300 rounded-xl font-mono font-bold"
                  />
                  <span className="text-[10px] text-slate-500">مفصولة بفاصلة (مثال: 22,23)</span>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-sky-900 mb-1">
                    عدد خانات كود الصنف (PLU Digits):
                  </label>
                  <input
                    type="number"
                    value={settings.pluDigits || 5}
                    onChange={(e) => setSettings({ ...settings, pluDigits: parseInt(e.target.value) })}
                    className="w-full h-10 px-3 text-xs bg-white border border-sky-300 rounded-xl font-mono font-bold"
                  />
                  <span className="text-[10px] text-slate-500">عادة 5 خانات (00001 إلى 99999)</span>
                </div>
              </div>

              {/* Scale Export Actions */}
              <div className="pt-2 border-t border-sky-200">
                <div className="text-xs font-bold text-sky-900 mb-2">
                  تصدير ملفات الأصناف الوزنية لبرامج الموازين:
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="/api/scale/export?format=rongta"
                    download
                    className="px-3.5 py-2 bg-white hover:bg-slate-50 border border-sky-300 text-sky-900 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-sky-600" />
                    <span>تصدير ملف روجنتا / إكس برينتر (RLS1000)</span>
                  </a>

                  <a
                    href="/api/scale/export?format=cas"
                    download
                    className="px-3.5 py-2 bg-white hover:bg-slate-50 border border-sky-300 text-sky-900 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-sky-600" />
                    <span>تصدير ملف كاس / ديجي (CL-Works)</span>
                  </a>

                  <a
                    href="/api/scale/export?format=standard"
                    download
                    className="px-3.5 py-2 bg-white hover:bg-slate-50 border border-sky-300 text-sky-900 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-600" />
                    <span>تصدير شيت إكسيل القياسي (CSV UTF-8)</span>
                  </a>
                </div>
              </div>

              {/* Live Scale Barcode Tester */}
              <div className="pt-2 border-t border-sky-200">
                <div className="text-xs font-bold text-sky-900 mb-2">
                  أداة فحص واختبار باركود الميزان الحي (Barcode Decoder Tester):
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={barcodeTestInput}
                    onChange={(e) => setBarcodeTestInput(e.target.value)}
                    placeholder="ضع كود باركود الميزان (مثال: 2000002002406)..."
                    className="flex-1 h-10 px-3 text-xs bg-white border border-sky-300 rounded-xl font-mono font-bold"
                  />
                  <button
                    type="button"
                    onClick={handleTestBarcode}
                    className="px-4 bg-sky-700 hover:bg-sky-800 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1"
                  >
                    <Barcode className="w-3.5 h-3.5" />
                    <span>فحص الباركود</span>
                  </button>
                </div>

                {barcodeTestResult && (
                  <div className="mt-3 p-3 bg-white rounded-xl border border-sky-300 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">حالة الباركود:</span>
                      <span className={`font-bold ${barcodeTestResult.isScaleBarcode ? "text-emerald-600" : "text-amber-600"}`}>
                        {barcodeTestResult.isScaleBarcode ? "✅ باركود ميزان إلكتروني معتمد" : "ℹ️ باركود عادي"}
                      </span>
                    </div>
                    {barcodeTestResult.isScaleBarcode && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-slate-500">النمط:</span>
                          <span className="font-bold">{barcodeTestResult.mode === "weight" ? "وزني (بالجرام)" : "سعري"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">كود الصنف المستخرج (PLU):</span>
                          <span className="font-mono font-black text-sky-700">{barcodeTestResult.plu}</span>
                        </div>
                        {barcodeTestResult.weightKg !== undefined && (
                          <div className="flex justify-between">
                            <span className="text-slate-500">الوزن الصافي:</span>
                            <span className="font-mono font-black text-emerald-600">{barcodeTestResult.weightKg} كجم ({barcodeTestResult.weightKg * 1000} جرام)</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-slate-500">الصنف المطابق بالسيستم:</span>
                          <span className="font-bold text-slate-800">
                            {barcodeTestResult.matchedProduct ? `${barcodeTestResult.matchedProduct.nameAr} (${barcodeTestResult.matchedProduct.basePrice} ج.م/كجم)` : "غير مسجل"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">رقم التحقق (Check Digit Modulo 10):</span>
                          <span className={`font-bold ${barcodeTestResult.isValid ? "text-emerald-600" : "text-red-600"}`}>
                            {barcodeTestResult.isValid ? "صحيح وسليم 100%" : "غير مطابق للمعايير الدولية"}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                الشريط الترويجي أعلى المتجر:
              </label>
              <textarea
                rows={2}
                value={settings.bannerNotice || ""}
                onChange={(e) => setSettings({ ...settings, bannerNotice: e.target.value })}
                className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl text-xs font-black shadow flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>حفظ كافة الإعدادات</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* ======================================================== */}
      {/* MODAL 1: STOCK CARD (كارت الصنف) */}
      {/* ======================================================== */}
      {showStockCardModal && selectedStockProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl border-2 border-[#004f9f] space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-[#004f9f]" />
                <div>
                  <h3 className="font-black text-base text-slate-900">
                    كارت الصنف وحركة المخزون: {selectedStockProduct.nameAr}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    باركود: {selectedStockProduct.barcode || "—"} • القسم: {selectedStockProduct.category}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowStockCardModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Product Metrics Grid */}
            <div className="grid grid-cols-4 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-200 text-center text-xs">
              <div>
                <span className="text-slate-400 block font-bold">الرصيد الحالي بالمخزن</span>
                <span className="font-black text-lg text-emerald-600">
                  {selectedStockProduct.stockQty} {selectedStockProduct.unit}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-bold">سعر الشراء (التكلفة)</span>
                <span className="font-black text-lg text-slate-800">
                  {selectedStockProduct.costPrice || 0} ج.م
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-bold">سعر البيع للجمهور</span>
                <span className="font-black text-lg text-[#004f9f]">
                  {selectedStockProduct.basePrice} ج.م
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-bold">هامش الربح للوحدة</span>
                <span className="font-black text-lg text-amber-600">
                  {(selectedStockProduct.basePrice - (selectedStockProduct.costPrice || 0)).toFixed(1)} ج.م
                </span>
              </div>
            </div>

            {/* Movements Ledger */}
            <div className="space-y-2">
              <h4 className="text-xs font-black text-slate-700">سجل الوارد والمنصرف والتسويات:</h4>
              <div className="overflow-x-auto max-h-60 overflow-y-auto border border-slate-200 rounded-xl">
                <table className="w-full text-right text-xs">
                  <thead className="sticky top-0 bg-slate-100 border-b border-slate-200">
                    <tr className="font-black text-slate-600">
                      <th className="p-2.5">التاريخ والوقت</th>
                      <th className="p-2.5">نوع الحركة</th>
                      <th className="p-2.5">الكمية</th>
                      <th className="p-2.5">الرصيد بعد الحركة</th>
                      <th className="p-2.5">المرجع والملاحظات</th>
                      <th className="p-2.5">المسؤول</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {stockMovements.map((m) => (
                      <tr key={m.id} className="hover:bg-slate-50">
                        <td className="p-2.5 font-mono text-[11px] text-slate-500">
                          {new Date(m.createdAt).toLocaleString("ar-EG")}
                        </td>
                        <td className="p-2.5">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-black ${
                              m.movementType === "purchase"
                                ? "bg-emerald-100 text-emerald-800"
                                : m.movementType === "sale"
                                ? "bg-blue-100 text-blue-800"
                                : m.movementType === "opening"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {m.movementType === "purchase"
                              ? "وارد مشتريات (+)"
                              : m.movementType === "sale"
                              ? "منصرف مبيعات (-)"
                              : m.movementType === "opening"
                              ? "رصيد أول المدة"
                              : "تسوية جردية"}
                          </span>
                        </td>
                        <td
                          className={`p-2.5 font-black ${
                            m.quantity > 0 ? "text-emerald-600" : "text-red-600"
                          }`}
                        >
                          {m.quantity > 0 ? `+${m.quantity}` : m.quantity}
                        </td>
                        <td className="p-2.5 font-mono font-bold text-slate-900">
                          {m.balanceAfter}
                        </td>
                        <td className="p-2.5 text-slate-600 text-[11px]">
                          <span className="font-mono font-bold text-[#004f9f]">{m.reference}</span>{" "}
                          - {m.notes}
                        </td>
                        <td className="p-2.5 text-slate-500 font-semibold">{m.performedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {stockMovements.length === 0 && (
                  <div className="p-6 text-center text-slate-400 font-bold">
                    لا توجد حركات مسجلة لهذا الصنف بعد
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: ADD / EDIT PRODUCT */}
      {/* ======================================================== */}
      {showProductModal && editingProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveProduct}
            className="bg-white text-slate-800 rounded-3xl max-w-xl w-full p-6 shadow-2xl border-2 border-[#004f9f] space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="font-black text-base text-slate-900">
                {editingProduct.id ? "تعديل بيانات الصنف" : "إضافة صنف جديد للسوبرماركت"}
              </h3>
              <button
                type="button"
                onClick={() => setShowProductModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">اسم الصنف بالعربي:</label>
                <input
                  type="text"
                  required
                  value={editingProduct.nameAr || ""}
                  onChange={(e) => setEditingProduct({ ...editingProduct, nameAr: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">القسم والتصنيف:</label>
                <select
                  value={editingProduct.category || ""}
                  onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.nameAr}>
                      {c.nameAr}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">العلامة التجارية:</label>
                <input
                  type="text"
                  value={editingProduct.brand || ""}
                  onChange={(e) => setEditingProduct({ ...editingProduct, brand: e.target.value })}
                  placeholder="جهينة، عبور لاند، فيري..."
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">الوحدة:</label>
                <input
                  type="text"
                  value={editingProduct.unit || "1 كجم"}
                  onChange={(e) => setEditingProduct({ ...editingProduct, unit: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">الباركود (EAN-13):</label>
                <input
                  type="text"
                  value={editingProduct.barcode || ""}
                  onChange={(e) => setEditingProduct({ ...editingProduct, barcode: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">سعر الشراء (التكلفة):</label>
                <input
                  type="number"
                  step="0.5"
                  value={editingProduct.costPrice || 0}
                  onChange={(e) => setEditingProduct({ ...editingProduct, costPrice: parseFloat(e.target.value) })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">سعر البيع الحالي:</label>
                <input
                  type="number"
                  step="0.5"
                  required
                  value={editingProduct.basePrice || 0}
                  onChange={(e) => setEditingProduct({ ...editingProduct, basePrice: parseFloat(e.target.value) })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold text-[#004f9f]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">الرصيد بالمخزن:</label>
                <input
                  type="number"
                  value={editingProduct.stockQty || 0}
                  onChange={(e) => setEditingProduct({ ...editingProduct, stockQty: parseInt(e.target.value) })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">حد الأمان (النواقص):</label>
                <input
                  type="number"
                  value={editingProduct.minStockQty || 15}
                  onChange={(e) => setEditingProduct({ ...editingProduct, minStockQty: parseInt(e.target.value) })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">رابط الصورة (URL):</label>
                <input
                  type="text"
                  value={editingProduct.image || ""}
                  onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-600"
                />
              </div>

              <div className="col-span-2 flex items-center gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={editingProduct.isOffer || false}
                    onChange={(e) => setEditingProduct({ ...editingProduct, isOffer: e.target.checked })}
                    className="w-4 h-4 rounded text-red-600"
                  />
                  <span>عرض خاص مخفض</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={editingProduct.isExpress !== false}
                    onChange={(e) => setEditingProduct({ ...editingProduct, isExpress: e.target.checked })}
                    className="w-4 h-4 rounded text-blue-600"
                  />
                  <span>متاح في دليفري 60 دقيقة (المرواني ناو)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={editingProduct.inStock !== false}
                    onChange={(e) => setEditingProduct({ ...editingProduct, inStock: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-600"
                  />
                  <span>متوفر للبيع</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-sky-800">
                  <input
                    type="checkbox"
                    checked={editingProduct.isWeighted || false}
                    onChange={(e) => setEditingProduct({ ...editingProduct, isWeighted: e.target.checked })}
                    className="w-4 h-4 rounded text-sky-600"
                  />
                  <span>صنف وزني بالميزان ⚖️</span>
                </label>
              </div>

              {editingProduct.isWeighted && (
                <div className="col-span-2 grid grid-cols-3 gap-3 p-3 bg-sky-50 rounded-2xl border border-sky-200">
                  <div>
                    <label className="block text-[11px] font-bold text-sky-900 mb-1">كود الميزان (PLU):</label>
                    <input
                      type="text"
                      placeholder="00001"
                      value={editingProduct.scaleItemCode || ""}
                      onChange={(e) => setEditingProduct({ ...editingProduct, scaleItemCode: e.target.value })}
                      className="w-full h-9 px-2 text-xs bg-white border border-sky-300 rounded-lg font-mono font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-sky-900 mb-1">صلاحية الاستيكر (أيام):</label>
                    <input
                      type="number"
                      value={editingProduct.shelfLifeDays || 3}
                      onChange={(e) => setEditingProduct({ ...editingProduct, shelfLifeDays: parseInt(e.target.value) })}
                      className="w-full h-9 px-2 text-xs bg-white border border-sky-300 rounded-lg font-mono font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-sky-900 mb-1">وزن فارغ العبوة (جرام):</label>
                    <input
                      type="number"
                      value={editingProduct.scaleTareWeight || 0}
                      onChange={(e) => setEditingProduct({ ...editingProduct, scaleTareWeight: parseFloat(e.target.value) })}
                      className="w-full h-9 px-2 text-xs bg-white border border-sky-300 rounded-lg font-mono font-bold"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowProductModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-bold"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl text-xs font-black shadow"
              >
                حفظ التعديلات
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 3: STOCK ADJUSTMENT (تسوية جردية) */}
      {/* ======================================================== */}
      {showAdjustmentModal && adjustmentProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveAdjustment}
            className="bg-white text-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-blue-600 space-y-4"
          >
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="font-black text-base text-slate-900">
                تسوية جردية لصنف: {adjustmentProduct.nameAr}
              </h3>
              <button
                type="button"
                onClick={() => setShowAdjustmentModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex justify-between">
                <span>الرصيد الحالي بالسيستم:</span>
                <span className="font-black text-slate-900">{adjustmentProduct.stockQty} {adjustmentProduct.unit}</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  الرصيد الفعلي بعد الجرد بالمخزن:
                </label>
                <input
                  type="number"
                  required
                  value={adjustQty}
                  onChange={(e) => setAdjustQty(parseInt(e.target.value) || 0)}
                  className="w-full h-11 px-3 text-base bg-slate-50 border border-slate-200 rounded-xl font-black text-center text-[#004f9f]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  سبب التسوية الجردية (الملاحظات):
                </label>
                <textarea
                  required
                  rows={2}
                  value={adjustReason}
                  onChange={(e) => setAdjustReason(e.target.value)}
                  placeholder="مثال: جرد دوري، عجز تالف، كسر، هدية مورد..."
                  className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-semibold"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAdjustmentModal(false)}
                className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black shadow"
              >
                تأكيد التسوية الجردية
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 4: CREATE PURCHASE INVOICE */}
      {/* ======================================================== */}
      {showPurchaseModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleSavePurchase}
            className="bg-white text-slate-800 rounded-3xl max-w-3xl w-full p-6 shadow-2xl border-2 border-emerald-600 space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="font-black text-base text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                <span>تسجيل فاتورة مشتريات واردة من مورد</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowPurchaseModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">المورد / الشركة:</label>
                <select
                  required
                  value={purchaseForm.supplierId}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, supplierId: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                >
                  <option value="">-- اختر المورد --</option>
                  {suppliers.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">تاريخ الفاتورة:</label>
                <input
                  type="date"
                  value={purchaseForm.invoiceDate}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, invoiceDate: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">نوع السداد:</label>
                <select
                  value={purchaseForm.paymentType}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, paymentType: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                >
                  <option value="cash">نقدي بالكامل (من الخزينة)</option>
                  <option value="partial">سداد جزئي والباقي آجل</option>
                  <option value="credit">آجل بالكامل على حساب المورد</option>
                </select>
              </div>
            </div>

            {/* Product Lines */}
            <div className="space-y-2 border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-800">بنود وأصناف الفاتورة:</span>
                <button
                  type="button"
                  onClick={handleAddPurchaseItem}
                  className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>إضافة بند صنف</span>
                </button>
              </div>

              <div className="space-y-2">
                {purchaseForm.items.map((item, idx) => (
                  <div key={idx} className="flex flex-wrap sm:flex-nowrap items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <select
                      required
                      value={item.productId}
                      onChange={(e) => handlePurchaseItemChange(idx, "productId", e.target.value)}
                      className="flex-2 h-9 px-2 text-xs bg-slate-50 border border-slate-200 rounded-lg font-bold"
                    >
                      <option value="">-- اختر الصنف --</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.nameAr} ({p.unit})
                        </option>
                      ))}
                    </select>

                    <div className="flex items-center gap-1">
                      <span className="text-[10px] text-slate-400 font-bold">الكمية:</span>
                      <input
                        type="number"
                        min="1"
                        required
                        value={item.qty}
                        onChange={(e) => handlePurchaseItemChange(idx, "qty", e.target.value)}
                        className="w-16 h-9 px-1.5 text-xs text-center bg-slate-50 border border-slate-200 rounded-lg font-bold"
                      />
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="text-[10px] text-slate-400 font-bold">سعر الوحدة:</span>
                      <input
                        type="number"
                        step="0.5"
                        min="0"
                        required
                        value={item.costPrice}
                        onChange={(e) => handlePurchaseItemChange(idx, "costPrice", e.target.value)}
                        className="w-20 h-9 px-1.5 text-xs text-center bg-slate-50 border border-slate-200 rounded-lg font-bold text-emerald-700"
                      />
                    </div>

                    <div className="font-black text-xs text-slate-800 w-24 text-left">
                      {(parseInt(item.qty as any) || 0) * (parseFloat(item.costPrice as any) || 0)} ج.م
                    </div>

                    {purchaseForm.items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemovePurchaseItem(idx)}
                        className="w-7 h-7 text-red-500 hover:bg-red-50 rounded-lg flex items-center justify-center"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Totals & Payments */}
            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500 font-bold block">إجمالي قيمة الفاتورة:</span>
                <span className="text-xl font-black text-slate-900">{calculatePurchaseTotal()} ج.م</span>
              </div>

              <div>
                <label className="block text-slate-500 font-bold mb-1">
                  المبلغ المدفوع كاش الآن (من الخزينة):
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={purchaseForm.paidAmount}
                  onChange={(e) => setPurchaseForm({ ...purchaseForm, paidAmount: e.target.value })}
                  placeholder={calculatePurchaseTotal().toString()}
                  className="w-full h-10 px-3 text-sm bg-white border border-slate-300 rounded-xl font-black text-emerald-600"
                />
                <span className="text-[10px] text-amber-600 font-bold block mt-1">
                  المتبقي آجل على المورد:{" "}
                  {Math.max(
                    0,
                    calculatePurchaseTotal() -
                      (purchaseForm.paidAmount !== ""
                        ? parseFloat(purchaseForm.paidAmount) || 0
                        : calculatePurchaseTotal())
                  )}{" "}
                  ج.م
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">ملاحظات الفاتورة:</label>
              <input
                type="text"
                value={purchaseForm.notes}
                onChange={(e) => setPurchaseForm({ ...purchaseForm, notes: e.target.value })}
                placeholder="رقم إذن الاستلام أو ملاحظات الجودة..."
                className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-semibold"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowPurchaseModal(false)}
                className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black shadow"
              >
                تأكيد وحفظ الفاتورة وتحديث المخزن
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 5: ADD / EDIT SUPPLIER */}
      {/* ======================================================== */}
      {showSupplierModal && editingSupplier && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveSupplier}
            className="bg-white text-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-[#004f9f] space-y-4"
          >
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="font-black text-base text-slate-900">
                {editingSupplier.id ? "تعديل بيانات المورد" : "إضافة مورد / شركة جديدة"}
              </h3>
              <button
                type="button"
                onClick={() => setShowSupplierModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">اسم المورد / الشركة:</label>
                <input
                  type="text"
                  required
                  value={editingSupplier.name || ""}
                  onChange={(e) => setEditingSupplier({ ...editingSupplier, name: e.target.value })}
                  placeholder="شركة جهينة، مزارع الخير..."
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">اسم المندوب:</label>
                <input
                  type="text"
                  value={editingSupplier.contactPerson || ""}
                  onChange={(e) => setEditingSupplier({ ...editingSupplier, contactPerson: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">رقم الهاتف:</label>
                <input
                  type="text"
                  required
                  value={editingSupplier.phone || ""}
                  onChange={(e) => setEditingSupplier({ ...editingSupplier, phone: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">التخصص والتصنيف:</label>
                <input
                  type="text"
                  value={editingSupplier.category || ""}
                  onChange={(e) => setEditingSupplier({ ...editingSupplier, category: e.target.value })}
                  placeholder="ألبان، خضار، بقالة، منظفات..."
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">رصيد أول المدة المستحق له (إن وجد):</label>
                <input
                  type="number"
                  value={editingSupplier.openingBalance || 0}
                  onChange={(e) => setEditingSupplier({ ...editingSupplier, openingBalance: parseFloat(e.target.value) })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold text-amber-600"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowSupplierModal(false)}
                className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl text-xs font-black shadow"
              >
                حفظ بيانات المورد
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 6: PAY SUPPLIER (سداد مستحقات) */}
      {/* ======================================================== */}
      {showSupplierPayModal && payingSupplier && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handlePaySupplier}
            className="bg-white text-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-emerald-600 space-y-4"
          >
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="font-black text-base text-slate-900">
                سداد مستحقات نقدية للمورد: {payingSupplier.name}
              </h3>
              <button
                type="button"
                onClick={() => setShowSupplierPayModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs flex justify-between">
                <span className="font-bold text-amber-900">إجمالي الرصيد المستحق للمورد:</span>
                <span className="font-black text-amber-700">{payingSupplier.currentBalance} ج.م</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  المبلغ المراد سداده نقداً (يخصم من الخزينة):
                </label>
                <input
                  type="number"
                  step="1"
                  required
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  placeholder="مثال: 5000"
                  className="w-full h-11 px-3 text-lg font-black text-center bg-slate-50 border border-slate-200 rounded-xl text-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">بيان وملاحظات السند:</label>
                <input
                  type="text"
                  value={payNotes}
                  onChange={(e) => setPayNotes(e.target.value)}
                  placeholder="دفعة تحت الحساب، تسوية فاتورة..."
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowSupplierPayModal(false)}
                className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black shadow"
              >
                تأكيد وصرف السداد
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 7: SUPPLIER STATEMENT OF ACCOUNT (كشف حساب) */}
      {/* ======================================================== */}
      {showStatementModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-3xl max-w-3xl w-full p-6 shadow-2xl border-2 border-[#004f9f] space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <div className="flex items-center gap-2">
                <Receipt className="w-6 h-6 text-[#004f9f]" />
                <div>
                  <h3 className="font-black text-base text-slate-900">
                    كشف حساب تفصيلي: {statementData?.supplier?.name || "المورد"}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    هاتف: {statementData?.supplier?.phone || "—"} • الرصيد النهائي المستحق:{" "}
                    <span className="font-black text-amber-700">
                      {statementData?.supplier?.currentBalance || 0} ج.م
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowStatementModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl max-h-80 overflow-y-auto">
              <table className="w-full text-right text-xs">
                <thead className="sticky top-0 bg-slate-100 border-b border-slate-200">
                  <tr className="font-black text-slate-600">
                    <th className="p-3">التاريخ</th>
                    <th className="p-3">نوع الحركة والبيان</th>
                    <th className="p-3">المرجع</th>
                    <th className="p-3">له (فاتورة توريد)</th>
                    <th className="p-3">منه (سداد نقدي)</th>
                    <th className="p-3">الرصيد المتبقي</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {statementData?.transactions?.map((t: any, idx: number) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-3 font-mono text-slate-500">{t.date}</td>
                      <td className="p-3 font-bold text-slate-800">
                        {t.typeAr}
                        <span className="block text-[10px] text-slate-400 font-normal">{t.notes}</span>
                      </td>
                      <td className="p-3 font-mono font-bold text-[#004f9f]">{t.reference}</td>
                      <td className="p-3 font-black text-slate-800">
                        {t.credit > 0 ? `${t.credit} ج.م` : "—"}
                      </td>
                      <td className="p-3 font-black text-emerald-600">
                        {t.debit > 0 ? `${t.debit} ج.م` : "—"}
                      </td>
                      <td className="p-3 font-black text-amber-700">{t.runningBalance} ج.م</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold"
              >
                طباعة كشف الحساب
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 8: ADD / EDIT CAPTAIN */}
      {/* ======================================================== */}
      {showCaptainModal && editingCaptain && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveCaptain}
            className="bg-white text-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-[#e60000] space-y-4"
          >
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="font-black text-base text-slate-900">
                {editingCaptain.id ? "تعديل بيانات الطيار" : "إضافة كابتن طيار دليفري جديد"}
              </h3>
              <button
                type="button"
                onClick={() => setShowCaptainModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">اسم الطيار:</label>
                <input
                  type="text"
                  required
                  value={editingCaptain.name || ""}
                  onChange={(e) => setEditingCaptain({ ...editingCaptain, name: e.target.value })}
                  placeholder="محمود طيارة، عمر السريع..."
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">رقم هاتف الطيار:</label>
                <input
                  type="text"
                  required
                  value={editingCaptain.phone || ""}
                  onChange={(e) => setEditingCaptain({ ...editingCaptain, phone: e.target.value })}
                  placeholder="010XXXXXXXX"
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">المركبة:</label>
                <input
                  type="text"
                  value={editingCaptain.vehicle || "سكوتر المرواني السريع"}
                  onChange={(e) => setEditingCaptain({ ...editingCaptain, vehicle: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">نطاق التغطية:</label>
                <input
                  type="text"
                  value={editingCaptain.zone || "المعادي"}
                  onChange={(e) => setEditingCaptain({ ...editingCaptain, zone: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={editingCaptain.isActive !== false}
                    onChange={(e) => setEditingCaptain({ ...editingCaptain, isActive: e.target.checked })}
                    className="w-4 h-4 rounded text-red-600"
                  />
                  <span>نشط ومتاح لاستلام الطلبات</span>
                </label>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowCaptainModal(false)}
                className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#e60000] hover:bg-red-700 text-white rounded-xl text-xs font-black shadow"
              >
                حفظ بيانات الطيار
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 9: ADD / EDIT DELIVERY ZONE */}
      {/* ======================================================== */}
      {showZoneModal && editingZone && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveZone}
            className="bg-white text-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-[#004f9f] space-y-4"
          >
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="font-black text-base text-slate-900">
                {editingZone.id ? "تعديل منطقة التوصيل" : "إضافة منطقة توصيل جديدة"}
              </h3>
              <button
                type="button"
                onClick={() => setShowZoneModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">اسم المنطقة:</label>
                <input
                  type="text"
                  required
                  value={editingZone.nameAr || ""}
                  onChange={(e) => setEditingZone({ ...editingZone, nameAr: e.target.value })}
                  placeholder="المعادي القديمة، سرايات المعادي..."
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">رسوم التوصيل (ج.م):</label>
                <input
                  type="number"
                  step="1"
                  required
                  value={editingZone.fee || 0}
                  onChange={(e) => setEditingZone({ ...editingZone, fee: parseFloat(e.target.value) })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-black text-[#004f9f]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">زمن التوصيل المتوقع (بالدقائق):</label>
                <input
                  type="number"
                  value={editingZone.timeMinutes || 45}
                  onChange={(e) => setEditingZone({ ...editingZone, timeMinutes: parseInt(e.target.value) })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">الحد الأدنى للطلب (ج.م):</label>
                <input
                  type="number"
                  value={editingZone.minOrder || 100}
                  onChange={(e) => setEditingZone({ ...editingZone, minOrder: parseFloat(e.target.value) })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={editingZone.isActive !== false}
                    onChange={(e) => setEditingZone({ ...editingZone, isActive: e.target.checked })}
                    className="w-4 h-4 rounded text-blue-600"
                  />
                  <span>المنطقة نشطة ومتاحة للطلب الآن</span>
                </label>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowZoneModal(false)}
                className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl text-xs font-black shadow"
              >
                حفظ المنطقة
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 10: ADD EXPENSE */}
      {/* ======================================================== */}
      {showExpenseModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveExpense}
            className="bg-white text-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-red-600 space-y-4"
          >
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="font-black text-base text-slate-900">تسجيل مصروف تشغيل جديد</h3>
              <button
                type="button"
                onClick={() => setShowExpenseModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">بيان المصروف:</label>
                <input
                  type="text"
                  required
                  value={expenseForm.description}
                  onChange={(e) => setExpenseForm({ ...expenseForm, description: e.target.value })}
                  placeholder="فاتورة كهرباء، صيانة ثلاجة، بوفيه..."
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">المبلغ (ج.م):</label>
                <input
                  type="number"
                  step="1"
                  required
                  value={expenseForm.amount}
                  onChange={(e) => setExpenseForm({ ...expenseForm, amount: e.target.value })}
                  className="w-full h-11 px-3 text-lg font-black text-center bg-slate-50 border border-slate-200 rounded-xl text-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">التصنيف:</label>
                <select
                  value={expenseForm.category}
                  onChange={(e) => setExpenseForm({ ...expenseForm, category: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                >
                  <option value="تشغيل ونثريات">تشغيل ونثريات</option>
                  <option value="إيجار الفرع">إيجار الفرع</option>
                  <option value="كهرباء ومياه ومرافق">كهرباء ومياه ومرافق</option>
                  <option value="مرتبات وعمالة">مرتبات وعمالة</option>
                  <option value="صيانة ومعدات">صيانة ومعدات</option>
                  <option value="وقود ونقل">وقود ونقل</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">التاريخ:</label>
                <input
                  type="date"
                  value={expenseForm.expenseDate}
                  onChange={(e) => setExpenseForm({ ...expenseForm, expenseDate: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowExpenseModal(false)}
                className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black shadow"
              >
                صرف المصروف من الخزينة
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 11: ADD / EDIT STAFF & PIN CODE */}
      {/* ======================================================== */}
      {showUserModal && editingUserStaff && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveUserStaff}
            className="bg-white text-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-[#004f9f] space-y-4"
          >
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="font-black text-base text-slate-900">
                {editingUserStaff.id ? "تعديل بيانات الموظف والـ PIN" : "إضافة موظف جديد"}
              </h3>
              <button
                type="button"
                onClick={() => setShowUserModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">اسم الموظف:</label>
                <input
                  type="text"
                  required
                  value={editingUserStaff.name || ""}
                  onChange={(e) => setEditingUserStaff({ ...editingUserStaff, name: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">اسم المستخدم (للدخول):</label>
                <input
                  type="text"
                  value={editingUserStaff.username || ""}
                  onChange={(e) => setEditingUserStaff({ ...editingUserStaff, username: e.target.value })}
                  placeholder="cashier1, manager..."
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">رقم الهاتف:</label>
                <input
                  type="text"
                  required
                  value={editingUserStaff.phone || ""}
                  onChange={(e) => setEditingUserStaff({ ...editingUserStaff, phone: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  كود الـ PIN السري المكون من 6 أرقام (للدخول السريع):
                </label>
                <input
                  type="text"
                  maxLength={6}
                  required
                  value={editingUserStaff.pin || ""}
                  onChange={(e) => setEditingUserStaff({ ...editingUserStaff, pin: e.target.value })}
                  placeholder="123456"
                  className="w-full h-11 px-3 text-base text-center bg-amber-50 border-2 border-amber-300 rounded-xl font-mono font-black text-amber-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">الدور والصلاحية:</label>
                <select
                  value={editingUserStaff.role || "cashier"}
                  onChange={(e) => setEditingUserStaff({ ...editingUserStaff, role: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                >
                  <option value="owner">المالك الرئيسي (صلاحيات كاملة)</option>
                  <option value="manager">مدير فرع</option>
                  <option value="cashier">كاشير نقطة بيع POS</option>
                  <option value="delivery">طيار دليفري</option>
                  <option value="picker">مسؤول تجميع طلبيات</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  كلمة المرور (اختياري للتحديث):
                </label>
                <input
                  type="password"
                  value={editingUserStaff.password || ""}
                  onChange={(e) => setEditingUserStaff({ ...editingUserStaff, password: e.target.value })}
                  placeholder="اتركها فارغة إذا لم ترد التغيير"
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowUserModal(false)}
                className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#004f9f] hover:bg-[#003875] text-white rounded-xl text-xs font-black shadow"
              >
                حفظ بيانات الموظف والـ PIN
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 12: CREATE RETURN (تسجيل مرتجع مبيعات / مشتريات) */}
      {/* ======================================================== */}
      {showReturnModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateReturn}
            className="bg-white text-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl border-2 border-red-500 space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <div className="flex items-center gap-2">
                <RotateCcw className="w-6 h-6 text-red-600" />
                <h3 className="font-black text-base text-slate-900">
                  تسجيل مرتجع مالي ومخزني جديد
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowReturnModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Return Type Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() =>
                  setReturnForm({
                    ...returnForm,
                    type: "sales_return",
                    customerOrSupplier: "عميل نقدي",
                  })
                }
                className={`py-2 rounded-lg text-xs font-black transition-all ${
                  returnForm.type === "sales_return"
                    ? "bg-red-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                مرتجع مبيعات (من عميل) 🛒
              </button>
              <button
                type="button"
                onClick={() =>
                  setReturnForm({
                    ...returnForm,
                    type: "purchase_return",
                    customerOrSupplier: suppliers[0]?.name || "المورد",
                    supplierId: suppliers[0]?.id || "",
                  })
                }
                className={`py-2 rounded-lg text-xs font-black transition-all ${
                  returnForm.type === "purchase_return"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                مرتجع مشتريات (لمورد) 🏢
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  رقم الفاتورة الأصلية:
                </label>
                <input
                  type="text"
                  required
                  placeholder={returnForm.type === "sales_return" ? "MRW-1002" : "PUR-1001"}
                  value={returnForm.referenceNumber}
                  onChange={(e) =>
                    setReturnForm({ ...returnForm, referenceNumber: e.target.value })
                  }
                  className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {returnForm.type === "sales_return" ? "اسم العميل:" : "المورد:"}
                </label>
                {returnForm.type === "sales_return" ? (
                  <input
                    type="text"
                    required
                    value={returnForm.customerOrSupplier}
                    onChange={(e) =>
                      setReturnForm({ ...returnForm, customerOrSupplier: e.target.value })
                    }
                    className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  />
                ) : (
                  <select
                    value={returnForm.supplierId}
                    onChange={(e) => {
                      const sup = suppliers.find((s) => s.id === e.target.value);
                      setReturnForm({
                        ...returnForm,
                        supplierId: e.target.value,
                        customerOrSupplier: sup?.name || "",
                      });
                    }}
                    className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  >
                    {suppliers.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            {/* Items Returned */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700">الأصناف المرتجعة:</label>
              {returnForm.items.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-2 items-center bg-slate-50 p-2 rounded-xl">
                  <div className="col-span-6">
                    <select
                      value={item.productId}
                      onChange={(e) => {
                        const prod = products.find((p) => p.id === e.target.value);
                        const updated = [...returnForm.items];
                        const price = returnForm.type === "sales_return" ? (prod?.basePrice || 0) : (prod?.costPrice || 0);
                        updated[idx] = {
                          ...updated[idx],
                          productId: e.target.value,
                          nameAr: prod?.nameAr || "",
                          price,
                          total: price * updated[idx].qty,
                        };
                        const newTotal = updated.reduce((sum, i) => sum + i.total, 0);
                        setReturnForm({ ...returnForm, items: updated, totalAmount: newTotal });
                      }}
                      className="w-full h-9 px-2 text-xs bg-white border border-slate-200 rounded-lg font-bold"
                    >
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.nameAr} ({p.basePrice} ج.م)
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-3">
                    <input
                      type="number"
                      step="any"
                      min="0.1"
                      placeholder="الكمية"
                      value={item.qty}
                      onChange={(e) => {
                        const qty = parseFloat(e.target.value) || 0;
                        const updated = [...returnForm.items];
                        updated[idx].qty = qty;
                        updated[idx].total = qty * updated[idx].price;
                        const newTotal = updated.reduce((sum, i) => sum + i.total, 0);
                        setReturnForm({ ...returnForm, items: updated, totalAmount: newTotal });
                      }}
                      className="w-full h-9 px-2 text-xs bg-white border border-slate-200 rounded-lg font-mono font-bold"
                    />
                  </div>
                  <div className="col-span-3 text-left font-mono font-black text-xs text-red-600">
                    {item.total.toFixed(2)} ج.م
                  </div>
                </div>
              ))}
            </div>

            {/* Total Amount & Reason */}
            <div className="p-3 bg-red-50 rounded-xl border border-red-200 flex justify-between items-center text-xs font-black">
              <span className="text-red-900">إجمالي المبلغ المسترد:</span>
              <span className="text-base text-red-600 font-mono">
                {returnForm.totalAmount.toFixed(2)} ج.م
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">سبب الإرجاع:</label>
              <input
                type="text"
                placeholder="صنف تالف، منتهي الصلاحية، طلب العميل استبدال..."
                value={returnForm.reason}
                onChange={(e) => setReturnForm({ ...returnForm, reason: e.target.value })}
                className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowReturnModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-bold"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black shadow"
              >
                اعتماد المرتجع وإعادة المخزون
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
