import type { Metadata } from "next";
import { ContactBlocks } from "@/components/sections/ContactBlocks";

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
  return <ContactBlocks asPage />;
}
