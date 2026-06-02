"use client";

import { roles } from "@/data/roles";
import { motion } from "framer-motion";
import { cardReveal, MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";

const storyBlocks = [
  {
    title: "Кто я",
    text: "Я работаю там, где идея ещё не до конца оформлена, а результат уже нужен быстро. Моя роль — собрать смысл, логику, артефакт и движение к запуску."
  },
  {
    title: "Чем полезен",
    text: "Помогаю превратить набор мыслей, таблиц, задач и вводных в понятную структуру: сайт, презентацию, процесс, AI-сценарий или production-план."
  },
  {
    title: "Как я думаю",
    text: "Сначала ищу цель и ограничения, потом собираю карту решения: кто участвует, что должно получиться, какой артефакт нужен и как его быстрее довести до рабочего состояния."
  },
  {
    title: "Какой опыт соединяю",
    text: "Digital, AI, бизнес-анализ, проектное управление, презентационная упаковка, финансовые модели, coordination и event production."
  }
];

export function AboutStory() {
  return (
    <MotionSection className="pb-20 sm:pb-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <motion.div variants={staggerContainer} className="grid gap-4">
          {storyBlocks.map((block) => (
            <motion.article
              key={block.title}
              variants={cardReveal}
              data-cursor="hover"
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition hover:border-electric-cyan/40 hover:bg-white/[0.07] hover:shadow-glow"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-frost">{block.title}</h2>
              <p className="mt-4 text-base leading-8 text-muted">{block.text}</p>
            </motion.article>
          ))}
        </motion.div>

        <div className="premium-border h-fit rounded-3xl bg-ink-900/70 p-6 lg:sticky lg:top-24">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-electric-cyan">
            Задачи
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-frost">
            Что закрываю
          </h2>
          <div className="mt-6 grid gap-3">
            {roles.map((role) => (
              <div key={role.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <h3 className="font-semibold text-frost">{role.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
