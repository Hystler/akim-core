import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="section-shell">
        <h2 className="font-heading text-4xl font-bold leading-tight text-main sm:text-6xl">
          Что можно сделать
        </h2>

        <div className="mt-10 grid min-w-0 border-t border-main/20 md:grid-cols-3 sm:mt-14">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={"/services#" + service.slug}
              className="focus-ring group flex min-h-[210px] min-w-0 flex-col border-b border-main/20 py-7 transition-colors hover:text-burgundy md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <h3 className="font-heading text-2xl font-bold leading-tight text-main transition-colors group-hover:text-burgundy sm:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm font-medium leading-7 text-main/70">
                {service.description}
              </p>
              <ArrowUpRight
                className="mt-auto h-5 w-5 text-burgundy transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
