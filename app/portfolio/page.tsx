import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { PortfolioFilter } from "@/components/sections/PortfolioFilter";
import { publishedPortfolioItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Кейсы",
  description: "Презентации, сайты и рабочие инструменты Акима Коваленко.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Кейсы Акима Коваленко",
    description: "Презентации, сайты и рабочие инструменты.",
    url: "/portfolio"
  }
};

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Кейсы"
        title="Работы с характером."
        text="Атмосфера, цифры, образ, сила и точность."
      />
      <PortfolioFilter items={publishedPortfolioItems} />
    </>
  );
}
