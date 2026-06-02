import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { ProjectCaseGrid } from "@/components/sections/ProjectCaseGrid";

export const metadata: Metadata = {
  title: "Проекты",
  description: "Мини-кейсы Акима Коваленко: digital, AI, бизнес-анализ, презентации и production."
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Проекты как мини-кейсы"
        text="Здесь собраны задачи, где важен не только красивый результат, но и роль, логика, артефакт и путь к запуску."
      />
      <ProjectCaseGrid />
    </>
  );
}
