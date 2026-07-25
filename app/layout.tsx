import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
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
    default: "Akim Core",
    template: "%s | Akim Core"
  },
  description:
    "Digital Builder / AI Systems / Business Analysis / Event Production",
  metadataBase: new URL("https://akimkovalenko.com"),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "Akim Core",
    description:
      "Digital Builder / AI Systems / Business Analysis / Event Production",
    type: "website",
    locale: "ru_RU",
    siteName: "Akim Core"
  },
  twitter: {
    card: "summary_large_image",
    title: "Akim Core",
    description:
      "Digital Builder / AI Systems / Business Analysis / Event Production"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050607"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} bg-ink-950 font-sans text-frost antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
