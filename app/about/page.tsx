import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { AboutStory } from "@/components/sections/AboutStory";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Обо мне",
  description: "Аким Коваленко — дизайнер презентаций. Структура, текст и слайды.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Об Акиме Коваленко",
    description: "Дизайнер презентаций. Структура, текст и слайды.",
    url: "/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <AboutPreview asPage />
      <AboutStory />
      <CtaSection />
    </>
  );
}
