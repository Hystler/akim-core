import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionHeading
              eyebrow="Услуги"
              title="От черновика до готового файла."
              text="Четыре понятных формата работы."
            />
            <p className="mt-3 font-serif text-2xl font-medium italic text-burgundy sm:text-3xl">Один понятный процесс.</p>
          </div>
          <Link
            href="/services"
            className="focus-ring w-fit border-b border-main/35 pb-1 text-sm font-bold text-main transition hover:border-burgundy hover:text-burgundy"
          >
            Все услуги
          </Link>
        </div>

        <div className="mt-10 grid min-w-0 gap-4 md:grid-cols-2 lg:mt-12">
          {services.map((service, index) => (
              <article
                key={service.slug}
                className="paper-surface flex min-h-[230px] min-w-0 flex-col rounded-[10px] border border-main/15 p-6 shadow-press transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-tactile sm:p-7"
              >
                <div className="flex items-center justify-between border-b border-main/20 pb-5 text-xs font-bold uppercase text-main/70">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>Формат</span>
                </div>
                <h3 className="mt-7 font-heading text-2xl font-bold leading-tight text-main sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-md text-base font-medium leading-7 text-main/70">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.slug}`}
                  className="focus-ring group mt-auto inline-flex min-h-11 w-fit items-center gap-2 border-b border-main/35 pt-6 text-sm font-bold text-main transition hover:border-burgundy hover:text-burgundy"
                >
                  Подробнее
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </article>
          ))}
        </div>
      </div>
    </section>
  );
}
