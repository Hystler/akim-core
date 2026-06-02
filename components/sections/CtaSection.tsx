import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { MotionSection } from "@/components/ui/MotionPrimitives";

export function CtaSection() {
  return (
    <MotionSection className="pb-20 pt-8 sm:pb-24">
      <div className="section-shell">
        <div className="premium-border overflow-hidden rounded-3xl bg-ink-900 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-electric-cyan">
                Contact
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-frost sm:text-5xl">
                Есть идея, проект или задача, где нужен быстрый порядок?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Можно прийти с хаосом, наброском, таблицей, презентацией или просто
                формулировкой цели.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <PrimaryLink href="/contact">Связаться</PrimaryLink>
              <PrimaryLink href="/projects" variant="secondary">
                Смотреть проекты
              </PrimaryLink>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
