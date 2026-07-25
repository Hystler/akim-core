import type { Metadata } from "next";
import { ContactBlocks } from "@/components/sections/ContactBlocks";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связаться с Акимом Коваленко: Telegram, email и mini brief для проекта."
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let’s make it real"
        text="Расскажите, что нужно собрать: сайт, презентацию, AI-систему, бизнес-процесс или production-план."
      />
      <ContactBlocks />
    </>
  );
}
