import type { Metadata } from "next";
import { CaseArchiveIntro } from "@/components/sections/CaseArchiveIntro";
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
      <CaseArchiveIntro asPage />
      <PortfolioFilter items={publishedPortfolioItems} />
    </>
  );
}
