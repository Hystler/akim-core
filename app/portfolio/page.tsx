import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { PageIntro } from "@/components/sections/PageIntro";
import { PortfolioFilter } from "@/components/sections/PortfolioFilter";
import { portfolioItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Портфолио",
  description:
    "Портфолио Akim Core: презентации, лендинги, брендинг, AI, аналитика и продакшн."
};

function publicFileExists(path: string) {
  return existsSync(join(process.cwd(), "public", path.replace(/^\//, "")));
}

export default function PortfolioPage() {
  const items = portfolioItems.map((item) => ({
    ...item,
    coverAvailable: publicFileExists(item.cover),
    fileAvailable: item.file ? publicFileExists(item.file) : false
  }));

  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Портфолио Akim Core"
        text="Статичная витрина первых работ: презентации, лендинги и проектная упаковка без базы данных и backend-слоя."
      />
      <PortfolioFilter items={items} />
    </>
  );
}
