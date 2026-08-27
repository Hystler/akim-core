import type { Metadata } from "next";
import { GoalOnMount } from "@/components/analytics/GoalOnMount";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesDetails } from "@/components/sections/ServicesDetails";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Презентации, сайты и сервисы для рабочих задач.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Услуги — AKIM CORE",
    description:
      "Презентации, сайты и сервисы для рабочих задач.",
    url: "/services"
  }
};

export default function ServicesPage() {
  return (
    <>
      <GoalOnMount goal="services_view" />
      <section className="border-b border-main/20 bg-base-texture pb-10 pt-16 sm:pb-14 sm:pt-24">
        <div className="section-shell">
          <h1 className="font-heading text-4xl font-bold leading-[1.02] text-main sm:text-6xl lg:text-7xl">
            Что можно сделать
          </h1>
        </div>
      </section>
      <ServicesDetails />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
