"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, Bot, Sparkles } from "lucide-react";

interface LiveChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function LiveChatWidget({
  isOpen,
  onClose,
  onOpen,
}: LiveChatWidgetProps) {
  const [messages, setMessages] = useState<any[]>([]);
  const [inputText, setInputText] = useState("");
  const [customerName, setCustomerName] = useState("عميل المعادي");
  const [customerPhone, setCustomerPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fetchMessages = async () => {
    try {
      const url = customerPhone
        ? `/api/chat?phone=${encodeURIComponent(customerPhone)}`
        : `/api/chat`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages);
      }
    } catch {
      // Ignore network hiccup
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchMessages();
      const interval = setInterval(fetchMessages, 4000);
      return () => clearInterval(interval);
    }
  }, [isOpen, customerPhone]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || loading) return;

    const messageText = inputText.trim();
    setInputText("");

    // Optimistic addition
    const tempMsg = {
      id: "temp_" + Date.now(),
      senderName: customerName,
      senderRole: "customer",
      text: messageText,
      isStaff: false,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, tempMsg]);

    try {
      setLoading(true);
      await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderName: customerName,
          senderRole: "customer",
          text: messageText,
          customerPhone: customerPhone || null,
          isStaff: false,
        }),
      });
      fetchMessages();
    } catch {
      // Keep optimistic
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-5 left-5 z-40 bg-[#004f9f] hover:bg-[#003875] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 group border-2 border-white"
          title="شات مباشر مع خدمة عملاء سوبرماركت المرواني"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-[#004f9f] rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-[#004f9f] rounded-full" />
          </div>
          <span className="hidden sm:inline text-xs font-bold pl-1">
            شات خدمة العملاء 💬
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-5 left-5 z-50 w-[90vw] sm:w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#004f9f] to-[#002d62] text-white p-3.5 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                🏪
              </div>
              <div>
                <h3 className="font-extrabold text-xs sm:text-sm">
                  خدمة عملاء سوبرماركت المرواني
                </h3>
                <div className="flex items-center gap-1.5 text-[10px] text-blue-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <span>فرع المعادي • متصل ومستعد لمساعدتك</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-slate-50/60">
            {messages.map((m) => {
              const isMe = !m.isStaff;
              return (
                <div
                  key={m.id}
                  className={`flex flex-col ${isMe ? "items-start" : "items-end"}`}
                >
                  <div className="flex items-center gap-1 mb-1 text-[10px] text-slate-400">
                    <span>{m.senderName}</span>
                    <span>•</span>
                    <span>
                      {new Date(m.createdAt).toLocaleTimeString("ar-EG", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-2xs ${
                      isMe
                        ? "bg-[#004f9f] text-white rounded-tr-xs"
                        : "bg-white border border-slate-200 text-slate-800 rounded-tl-xs"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white border-t border-slate-200 space-y-2"
          >
            {/* Optional Phone Tracker */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="رقم هاتفك (اختياري لمتابعة طلبك)"
                className="w-full h-7 px-2.5 text-[11px] bg-slate-50 border border-slate-200 rounded-lg outline-none focus:bg-white focus:border-[#004f9f]"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="اكتب استفسارك هنا..."
                className="flex-1 h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-[#004f9f]"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="h-10 px-3.5 bg-[#004f9f] hover:bg-[#003875] disabled:opacity-50 text-white rounded-xl flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
