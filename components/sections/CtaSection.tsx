import { ArrowUpRight } from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";

export function CtaSection() {
  return (
    <section className="bg-ink-950 py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-10 border-y border-white/15 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase text-muted">
              Новый проект
            </p>
            <h2 className="text-balance mt-5 max-w-4xl font-heading text-4xl font-medium leading-[1.04] text-frost sm:text-6xl">
              Покажите материалы — я помогу найти структуру и сильную подачу
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-base leading-8 text-muted">
              Можно начать с таблиц, черновика, переписки или одной формулировки задачи.
            </p>
            <TrackedLink
              href="/contact"
              goal="hero_cta_click"
              goalParams={{ action: "footer_cta" }}
              className="focus-ring group mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-frost px-6 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:bg-electric-cyan"
            >
              Обсудить проект
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
