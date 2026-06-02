import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: {
    default: "Аким Коваленко | Digital Builder & AI Systems",
    template: "%s | Аким Коваленко"
  },
  description:
    "Персональный сайт Акима Коваленко: digital, AI systems, бизнес-анализ, project management и event production.",
  metadataBase: new URL("https://akimkovalenko.com"),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "Аким Коваленко | Digital Builder & AI Systems",
    description:
     "Цифровые решения, AI-инструменты, бизнес-процессы, production-системы и запуск проектов.",
    type: "website",
    locale: "ru_RU",
    siteName: "Аким Коваленко"
  },
  twitter: {
    card: "summary_large_image",
    title: "Аким Коваленко | Digital Builder & AI Systems",
    description:
      "Digital, AI systems, бизнес-анализ, проектное управление и event production."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080A0F"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} bg-ink-950 font-sans text-frost antialiased`}>
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
