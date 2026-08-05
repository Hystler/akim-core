import type { Metadata } from "next";
import { ContactBlocks } from "@/components/sections/ContactBlocks";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Обсудить презентацию или сайт с Акимом Коваленко.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Обсудить проект с Акимом Коваленко",
    description: "Материалы, срок и нужный результат. Техническое задание не обязательно.",
    url: "/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Контакты"
        title="Покажите задачу."
        text="Материалы, срок, формат. Остальное разберём."
      />
      <ContactBlocks />
    </>
  );
}
