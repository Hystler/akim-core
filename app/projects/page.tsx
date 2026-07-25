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
        title="Systems before spectacle"
        text="Задачи, где результат держится на ясной логике, точной роли и артефакте, который помогает проекту двигаться дальше."
      />
      <ProjectCaseGrid />
    </>
  );
}
