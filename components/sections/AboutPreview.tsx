import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MotionSection } from "@/components/ui/MotionPrimitives";

const principles = [
  ["01", "Структура", "Перевожу разрозненный контекст в ясную карту решения."],
  ["02", "Артефакт", "Собираю прототип, презентацию, модель, сайт или рабочий план."],
  ["03", "Движение", "Удерживаю темп и довожу проект до следующего реального шага."]
];

export function AboutPreview() {
  return (
    <MotionSection className="bg-ink-950 py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-medium text-steel">04</span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              About
            </p>
          </div>
          <h2 className="text-balance text-3xl font-medium leading-[1.08] text-frost sm:text-5xl lg:text-6xl">
            Я работаю в точке, где идея ещё не собрана, а результат уже нужен
          </h2>
          <p className="text-pretty mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Сильная сторона — быстро увидеть структуру в хаосе, назвать главное и
            превратить замысел в решение, которым можно пользоваться.
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 border-b border-white/25 pb-1 text-sm font-semibold text-frost transition hover:border-frost"
          >
            Подробнее обо мне
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="border-t border-white/15">
          {principles.map(([number, title, text]) => (
            <div
              key={number}
              className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[48px_120px_1fr]"
            >
              <span className="text-xs text-muted">{number}</span>
              <h3 className="font-medium text-frost">{title}</h3>
              <p className="text-sm leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
