import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionHeading
              eyebrow="Услуги"
              title="От черновика до готового файла."
              text="Четыре понятных формата работы."
            />
            <p className="mt-3 font-serif text-2xl font-medium italic text-burgundy sm:text-3xl">
              Всё в одних руках.
            </p>
          </div>
          <Link
            href="/services"
            className="focus-ring w-fit border-b border-main/35 pb-1 text-sm font-bold text-main transition hover:border-burgundy hover:text-burgundy"
          >
            Все услуги
          </Link>
        </div>

        <div className="mt-12 grid min-w-0 gap-5 md:grid-cols-2 lg:mt-16 lg:gap-6">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="bg-kraft-texture flex min-h-[320px] min-w-0 flex-col rounded-[10px] border border-main/15 p-7 shadow-tactile transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-tactile-lg sm:p-9"
              >
                <div className="flex items-center justify-between border-b border-main/20 pb-5 text-xs font-bold uppercase text-main/70">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>Формат</span>
                </div>
                <h3 className="mt-10 font-heading text-3xl font-bold leading-tight text-main sm:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-md text-base font-medium leading-7 text-main/70">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.slug}`}
                  className="focus-ring group mt-auto inline-flex min-h-11 w-fit items-center gap-2 border-b border-main/35 pt-8 text-sm font-bold text-main transition hover:border-burgundy hover:text-burgundy"
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
