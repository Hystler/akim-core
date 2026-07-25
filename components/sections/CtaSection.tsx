import Link from "next/link";
import { MotionSection } from "@/components/ui/MotionPrimitives";

export function CtaSection() {
  return (
    <MotionSection className="bg-paper py-20 text-ink-950 sm:py-28">
      <div className="section-shell">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-800/60">
          Start a project
        </p>
        <div className="mt-6 grid gap-10 border-t border-ink-950/20 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="text-balance max-w-5xl text-4xl font-medium leading-[1.04] text-ink-950 sm:text-6xl lg:text-7xl">
            Есть сложная идея? Сделаем её понятной и работающей.
          </h2>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-base leading-8 text-ink-800/70">
              Можно прийти с хаосом, наброском, таблицей или одной формулировкой цели.
            </p>
            <Link
              href="/contact"
              className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-ink-950 px-6 py-3 text-sm font-semibold text-frost transition hover:-translate-y-0.5 hover:bg-ink-800"
            >
              Обсудить задачу
            </Link>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
