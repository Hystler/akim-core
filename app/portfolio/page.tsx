import type { Metadata } from "next";
import { CaseArchiveIntro } from "@/components/sections/CaseArchiveIntro";
import { PortfolioFilter } from "@/components/sections/PortfolioFilter";
import { publishedPortfolioItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Работы",
  description: "Презентации, сайты и рабочие сервисы Акима Коваленко.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Работы Акима Коваленко",
    description: "Презентации, сайты и рабочие сервисы.",
    url: "/portfolio"
  }
};

export default function PortfolioPage() {
  return (
    <>
      <CaseArchiveIntro />
      <PortfolioFilter items={publishedPortfolioItems} />
    </>
  );
}
