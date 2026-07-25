"use client";

import { motion } from "framer-motion";
import { roles } from "@/data/roles";
import {
  cardReveal,
  MotionSection,
  staggerContainer
} from "@/components/ui/MotionPrimitives";

const storyBlocks = [
  {
    title: "Кто я",
    text: "Работаю там, где идея ещё не до конца оформлена, а результат уже нужен быстро. Моя роль — собрать смысл, логику, артефакт и движение к запуску."
  },
  {
    title: "Чем полезен",
    text: "Превращаю набор мыслей, таблиц, задач и вводных в понятную структуру: сайт, презентацию, процесс, AI-сценарий или production-план."
  },
  {
    title: "Как я думаю",
    text: "Сначала нахожу цель и ограничения. Затем собираю карту решения: кто участвует, что должно получиться и как быстрее довести результат до рабочего состояния."
  },
  {
    title: "Какой опыт соединяю",
    text: "Digital, AI, бизнес-анализ, проектное управление, презентационная упаковка, финансовые модели, coordination и event production."
  }
];

export function AboutStory() {
  return (
    <MotionSection className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <div className="section-shell grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={staggerContainer} className="border-t border-white/15">
          {storyBlocks.map((block, index) => (
            <motion.article
              key={block.title}
              variants={cardReveal}
              className="grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[56px_180px_1fr]"
            >
              <span className="text-xs text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-xl font-medium text-frost">{block.title}</h2>
              <p className="text-base leading-8 text-muted">{block.text}</p>
            </motion.article>
          ))}
        </motion.div>

        <aside className="h-fit border-t border-white/15 lg:sticky lg:top-28">
          <p className="py-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            What I cover
          </p>
          {roles.map((role) => (
            <div key={role.title} className="border-t border-white/15 py-5">
              <h3 className="font-medium text-frost">{role.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{role.description}</p>
            </div>
          ))}
        </aside>
      </div>
    </MotionSection>
  );
}
