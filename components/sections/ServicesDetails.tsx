import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { presentationPackages, services } from "@/data/services";

export function ServicesDetails() {
  return (
    <section className="bg-base-texture pb-20 pt-10 sm:pb-28 sm:pt-16">
      <div className="section-shell">
        {services.map((service, index) => (
          <article
            key={service.slug}
            id={service.slug}
            className="scroll-mt-28 border-t border-main/25 py-12 first:pt-8 sm:py-16"
          >
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
              <div>
                <span className="text-xs font-bold text-burgundy">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold text-main sm:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-5 max-w-xl text-[16px] font-medium leading-8 text-main/70">
                  {service.description}
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-bold text-main">Что входит</h3>
                  <ul className="mt-4 grid gap-3">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm font-medium leading-6 text-main/75"
                      >
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-burgundy"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-main/15 pt-5 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                  <h3 className="text-sm font-bold text-main">Результат</h3>
                  <p className="mt-4 text-sm font-medium leading-7 text-main/75">
                    {service.clientReceives}
                  </p>
                  <p className="mt-6 text-sm font-bold text-main">Срок</p>
                  <p className="mt-2 text-sm font-medium leading-7 text-main/75">
                    {service.timing}
                  </p>
                  {service.caseHref && service.caseLabel ? (
                    <Link
                      href={service.caseHref}
                      className="focus-ring group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-burgundy transition hover:text-main"
                    >
                      {service.caseLabel}
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>

            {service.slug === "presentations" ? (
              <div className="mt-12 border-t border-main/20 pt-8">
                <h3 className="font-heading text-2xl font-bold text-main sm:text-3xl">
                  Варианты работы
                </h3>
                <div className="mt-7 grid gap-8 md:grid-cols-3">
                  {presentationPackages.map((item) => (
                    <section key={item.title} className="border-t border-main/20 pt-5">
                      <h4 className="font-heading text-xl font-bold text-main">
                        {item.title}
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-main/70">{item.audience}</p>
                      <ul className="mt-5 grid gap-2">
                        {item.includes.map((included) => (
                          <li
                            key={included}
                            className="flex gap-2 text-sm leading-6 text-main/75"
                          >
                            <Check
                              className="mt-1 h-4 w-4 shrink-0 text-burgundy"
                              aria-hidden="true"
                            />
                            {included}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 text-sm font-bold text-main">{item.timing}</p>
                      <p className="mt-2 text-sm leading-6 text-main/65">{item.price}</p>
                    </section>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
