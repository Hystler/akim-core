import type { Metadata } from "next";
import { AboutStory } from "@/components/sections/AboutStory";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = {
  title: "Обо мне",
  description: "Личная страница Акима Коваленко: чем полезен, как думает и какие задачи закрывает."
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Обо мне: между идеей, структурой и запуском"
        text="Я соединяю digital, AI, бизнес-анализ, project management и production, чтобы быстро превращать неопределённость в понятный рабочий результат."
      />
      <AboutStory />
    </>
  );
}
