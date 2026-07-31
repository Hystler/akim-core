import type { Metadata } from "next";
import { ContactBlocks } from "@/components/sections/ContactBlocks";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Обсудить презентацию, лендинг или digital-продукт с Акимом Коваленко. Короткий бриф, Telegram и email.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Обсудить проект с Акимом Коваленко",
    description:
      "Короткий бриф для презентации, лендинга или digital-продукта. Можно начать без готового технического задания.",
    url: "/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Контакты"
        title="Расскажите о задаче — начнём со структуры и ожидаемого результата"
        text="Для первого разговора достаточно короткого описания, желаемого срока и ссылки на материалы. Готовое техническое задание не обязательно."
      />
      <ContactBlocks />
    </>
  );
}
