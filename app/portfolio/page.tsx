import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { PortfolioFilter } from "@/components/sections/PortfolioFilter";
import { portfolioItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Кейсы",
  description:
    "Кейсы Акима Коваленко: презентации, лендинги, digital-продукты и автоматизации для бизнеса.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Кейсы Акима Коваленко",
    description:
      "Презентации, лендинги, digital-продукты и автоматизации с понятной логикой и сильной визуальной подачей.",
    url: "/portfolio"
  }
};

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Кейсы"
        title="Работы, где структура помогает понять идею, а дизайн — поверить в неё"
        text="Презентации — основное направление. Лендинги, digital-продукты и автоматизации показывают широту задач, в которых тот же подход работает на бизнес-результат."
      />
      <PortfolioFilter items={portfolioItems} />
    </>
  );
}
