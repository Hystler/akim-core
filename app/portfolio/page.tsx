import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { PortfolioFilter } from "@/components/sections/PortfolioFilter";

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Портфолио по категориям: Sites, AI Systems, Business Analysis, Presentations, Financial Models, Event Production."
};

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Портфолио по типам задач"
        text="Фильтруйте работы по категории: сайты, AI-системы, бизнес-анализ, презентации, финансовые модели и event production."
      />
      <PortfolioFilter />
    </>
  );
}
