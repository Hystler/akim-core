import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { YandexMetrika } from "@/components/analytics/YandexMetrika";
import { FloatingTelegram } from "@/components/layout/FloatingTelegram";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteDescription, siteUrl } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter"
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Аким Коваленко — дизайнер презентаций и digital-продуктов",
    template: "%s | AKIM CORE"
  },
  description: siteDescription,
  keywords: [
    "дизайн презентаций",
    "презентация под ключ",
    "редизайн презентации",
    "коммерческое предложение",
    "дизайн лендинга",
    "B2B интерфейс"
  ],
  authors: [{ name: "Аким Коваленко", url: siteUrl }],
  creator: "Аким Коваленко",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "Аким Коваленко — дизайнер презентаций и digital-продуктов",
    description: siteDescription,
    type: "website",
    locale: "ru_RU",
    siteName: "AKIM CORE",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AKIM CORE — дизайн презентаций и digital-продуктов"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Аким Коваленко — дизайнер презентаций и digital-продуктов",
    description: siteDescription,
    images: ["/opengraph-image"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070809"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${manrope.variable} bg-ink-950 font-sans text-frost antialiased`}
      >
        <a
          href="#content"
          className="focus-ring fixed left-4 top-3 z-[200] -translate-y-20 rounded-md bg-frost px-4 py-3 text-sm font-semibold text-ink-950 transition focus:translate-y-0"
        >
          Перейти к содержанию
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <FloatingTelegram />
        <YandexMetrika />
      </body>
    </html>
  );
}
