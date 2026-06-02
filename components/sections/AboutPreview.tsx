import Link from "next/link";
import { MotionSection } from "@/components/ui/MotionPrimitives";

export function AboutPreview() {
  return (
    <MotionSection className="relative overflow-hidden bg-ink-900/50 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,rgba(34,211,238,0.045),transparent)]" />
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-electric-cyan">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-frost sm:text-4xl lg:text-5xl">
            Работаю в точке, где идея ещё мягкая, а результат уже нужен
          </h2>
        </div>

        <div className="premium-border rounded-3xl bg-white/[0.045] p-6 sm:p-8">
          <div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
            <p>
              Моя сильная сторона — разложить хаос на понятную структуру: определить
              цель, собрать логику проекта, описать процессы и подготовить рабочий
              digital-артефакт.
            </p>
            <p>
              В опыте — сайты, AI-инструменты, презентации, финансовые модели,
              координация проектов, продакшн и организация мероприятий.
            </p>
            <p className="rounded-2xl border border-electric-cyan/20 bg-electric-cyan/[0.06] px-5 py-4 text-frost">
              Мой подход: быстро разобрать хаос, собрать структуру и довести её до
              понятного артефакта.
            </p>
          </div>
          <Link href="/about" className="mt-7 inline-flex text-sm font-semibold text-electric-cyan transition hover:text-frost">
            Подробнее обо мне →
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
