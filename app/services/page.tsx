import type { Metadata } from "next";
import { GoalOnMount } from "@/components/analytics/GoalOnMount";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageIntro } from "@/components/sections/PageIntro";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesDetails } from "@/components/sections/ServicesDetails";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Презентации под ключ, редизайн, сайты и рабочие инструменты.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Услуги — AKIM CORE",
    description:
      "Презентации под ключ, редизайн, сайты и рабочие инструменты.",
    url: "/services"
  }
};

export default function ServicesPage() {
  return (
    <>
      <GoalOnMount goal="services_view" />
      <PageIntro
        eyebrow="Услуги"
        title="От черновика до готового файла."
        text="Презентации в центре. Остальное по задаче."
      />
      <ServicesDetails />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
