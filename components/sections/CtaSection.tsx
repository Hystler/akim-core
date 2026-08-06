import { ArrowUpRight } from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";

export function CtaSection() {
  return (
    <section className="bg-base-texture py-20 sm:py-28">
      <div className="section-shell">
        <div className="paper-surface grid gap-10 rounded-[14px] border border-main/15 p-7 shadow-tactile sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:p-14">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">
              Новый проект
            </p>
            <h2 className="text-balance mt-5 max-w-4xl font-heading text-4xl font-bold leading-[1.02] text-main sm:text-6xl">
              Покажите черновик.
            </h2>
            <p className="mt-2 font-serif text-3xl font-medium italic text-burgundy sm:text-5xl">
              Соберу историю.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-base leading-8 text-main/70">
              Для старта достаточно материалов, цели и&nbsp;срока.
            </p>
            <TrackedLink
              href="/contact"
              goal="contact_cta_click"
              goalParams={{ source: "footer_cta" }}
              className="focus-ring group mt-7 inline-flex min-h-12 items-center gap-2 border border-burgundy bg-burgundy px-6 text-sm font-bold text-paper shadow-press transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl"
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
