import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { presentationPackages, services } from "@/data/services";

export function ServicesDetails() {
  return (
    <>
      <section className="pb-20 pt-14 sm:pb-28 sm:pt-20">
        <div className="section-shell">
          <div className="border-t border-white/15">
            {services.map((service, index) => (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 border-b border-white/15 py-12 sm:py-16"
              >
                <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
                  <div>
                    <span className="text-xs text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-4 font-heading text-3xl font-medium text-frost sm:text-5xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-semibold uppercase text-muted">
                        Что входит
                      </p>
                      <ul className="mt-4 grid gap-3">
                        {service.includes.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-6 text-frost/85">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-electric-cyan" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                      <p className="text-[11px] font-semibold uppercase text-muted">
                        Что получает клиент
                      </p>
                      <p className="mt-4 text-sm leading-7 text-frost/85">
                        {service.clientReceives}
                      </p>
                      <p className="mt-6 text-[11px] font-semibold uppercase text-muted">
                        Срок
                      </p>
                      <p className="mt-3 text-sm leading-7 text-frost/85">{service.timing}</p>
                      {service.caseHref && service.caseLabel ? (
                        <Link
                          href={service.caseHref}
                          className="focus-ring group mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-electric-cyan transition hover:text-frost"
                        >
                          Кейс: {service.caseLabel}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>

                <TrackedLink
                  href="/contact"
                  goal="service_contact_click"
                  goalParams={{ service: service.slug }}
                  className="focus-ring mt-9 inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-semibold text-frost transition hover:border-frost hover:bg-white/[0.04]"
                >
                  Обсудить задачу
                </TrackedLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink-950 sm:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase text-ink-800/70">
              Пакеты презентаций
            </p>
            <h2 className="text-balance mt-5 font-heading text-3xl font-medium leading-[1.08] sm:text-5xl">
              Три формата под разную готовность материалов и срок
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {presentationPackages.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-md border border-ink-950/20 p-6 sm:p-7"
              >
                <h3 className="font-heading text-2xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-800/70">{item.audience}</p>
                <ul className="mt-6 grid gap-3 border-t border-ink-950/15 pt-6">
                  {item.includes.map((included) => (
                    <li key={included} className="flex gap-3 text-sm leading-6">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-ink-800" aria-hidden="true" />
                      {included}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <p className="text-sm font-medium">{item.timing}</p>
                  <p className="mt-2 text-sm leading-6 text-ink-800/65">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
