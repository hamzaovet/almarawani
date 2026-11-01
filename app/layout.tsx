import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#004f9f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "سوبرماركت المرواني | فرع المعادي — تسوق البقالة والطازج بأسعار الجملة",
  description: "سلسلة سوبرماركت المرواني — خدمة التوصيل السريع للمنازل خلال 60 دقيقة في المعادي وضواحيها. تسوق الألبان، الجبن، الخضروات، اللحوم، البقالة والمنظفات بأفضل الأسعار.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen bg-[#f8fafc] text-slate-800 antialiased font-['Cairo',sans-serif]"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
