import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { YandexMetrika } from "@/components/analytics/YandexMetrika";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteDescription, siteUrl } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope"
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  style: ["italic"],
  display: "swap",
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Аким Коваленко — дизайнер презентаций",
    template: "%s | AKIM CORE"
  },
  description: siteDescription,
  keywords: [
    "дизайн презентаций",
    "презентация под ключ",
    "редизайн презентации",
    "коммерческое предложение",
    "дизайн сайта",
    "рабочий интерфейс"
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
    title: "Аким Коваленко — дизайнер презентаций",
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
        alt: "AKIM CORE — дизайн презентаций"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Аким Коваленко — дизайнер презентаций",
    description: siteDescription,
    images: ["/opengraph-image"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#DCD3CB"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${manrope.variable} ${playfair.variable} bg-base font-sans text-main antialiased`}
      >
        <a
          href="#content"
          className="focus-ring fixed left-4 top-3 z-[200] -translate-y-20 bg-burgundy px-4 py-3 text-sm font-semibold text-paper transition focus:translate-y-0"
        >
          Перейти к содержанию
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <YandexMetrika />
      </body>
    </html>
  );
}
