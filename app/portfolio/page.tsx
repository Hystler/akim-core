import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { PortfolioFilter } from "@/components/sections/PortfolioFilter";
import { portfolioItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Портфолио",
  description:
    "Портфолио Akim Core: презентации, лендинги, брендинг, AI, аналитика и продакшн."
};

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Портфолио Akim Core"
        text="Статичная витрина первых работ: презентации, лендинги и проектная упаковка без базы данных и backend-слоя."
      />
      <PortfolioFilter items={portfolioItems} />
    </>
  );
}
