import type { Metadata } from "next";
import { GoalOnMount } from "@/components/analytics/GoalOnMount";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageIntro } from "@/components/sections/PageIntro";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesDetails } from "@/components/sections/ServicesDetails";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Презентации под ключ, редизайн слайдов, лендинги, B2B SaaS и автоматизации для бизнеса.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Услуги — AKIM CORE",
    description:
      "Структура, тексты и дизайн презентаций под ключ, а также лендинги и продуктовые интерфейсы.",
    url: "/services"
  }
};

export default function ServicesPage() {
  return (
    <>
      <GoalOnMount goal="services_view" />
      <PageIntro
        eyebrow="Услуги"
        title="Собираю презентации под ключ — от сырых материалов до готового файла"
        text="Основной формат работы — презентации. Для задач, которым нужен сайт, интерфейс или автоматизация, подключаю продуктовый подход и разработку."
      />
      <ServicesDetails />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
