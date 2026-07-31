import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="bg-ink-900 py-20 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Услуги"
            title="Презентации — в центре. Digital-продукты — когда задаче нужен другой формат"
            text="Подключаюсь к структуре, текстам и визуальной системе. Формат выбираем по бизнес-задаче, а не по привычке."
          />
          <Link
            href="/services"
            className="focus-ring w-fit rounded-sm border-b border-white/30 pb-1 text-sm font-semibold text-frost transition hover:border-frost"
          >
            Все услуги
          </Link>
        </div>

        <div className="mt-14 border-t border-white/15">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="grid gap-5 border-b border-white/15 py-7 sm:grid-cols-[52px_0.8fr_1.2fr_auto] sm:items-center"
            >
              <span className="text-xs text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl font-medium text-frost">
                {service.title}
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                {service.description}
              </p>
              <Link
                href={`/services#${service.slug}`}
                aria-label={`Подробнее: ${service.title}`}
                className="focus-ring grid size-11 place-items-center rounded-full border border-white/15 text-frost transition hover:border-frost hover:bg-white/[0.04]"
              >
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
