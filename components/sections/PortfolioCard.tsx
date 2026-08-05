import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { TrackedLink } from "@/components/ui/TrackedLink";
import {
  portfolioStatusLabels,
  type PublishedPortfolioItem
} from "@/data/portfolio";

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAoLDAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

type PortfolioCardProps = {
  item: PublishedPortfolioItem;
  priority?: boolean;
};

export function PortfolioCard({ item, priority = false }: PortfolioCardProps) {
  const href = `/portfolio/${item.slug}`;

  return (
    <article className="group flex h-full flex-col border-b border-white/15 pb-8">
      <TrackedLink
        href={href}
        goal="case_open"
        goalParams={{ case: item.slug, source: "cover" }}
        aria-label={`Смотреть кейс «${item.title}»`}
        className="focus-ring relative block aspect-[16/9] overflow-hidden rounded-md border border-white/10 bg-ink-900"
      >
        <Image
          src={item.coverImage}
          alt={item.coverAlt}
          fill
          sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
          priority={priority}
          placeholder="blur"
          blurDataURL={blurDataUrl}
          className="object-cover transition duration-300 group-hover:scale-[1.012] group-hover:opacity-90"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-white/20 bg-ink-950 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold text-white/75">
              {portfolioStatusLabels[item.status]}
            </span>
            {item.coverLabel ? (
              <span className="rounded-sm border border-white/25 bg-ink-900 px-2 py-1 text-[10px] font-semibold uppercase text-white">
                {item.coverLabel}
              </span>
            ) : null}
          </div>
          <ArrowUpRight
            className="h-5 w-5 text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>
      </TrackedLink>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-center justify-between gap-4 text-xs text-muted">
          <span>{item.projectType}</span>
          <span>{item.year}</span>
        </div>
        <h3 className="mt-3 font-heading text-2xl font-medium leading-tight text-frost sm:text-3xl">
          {item.title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">
          {item.description}
        </p>

        <div className="mt-5 border-t border-white/10 pt-4">
          <p className="text-[11px] font-semibold uppercase text-muted">
            Что сделано
          </p>
          <p className="mt-2 text-sm leading-7 text-frost/80">
            {item.deliverables.slice(0, 3).join(" · ")}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <TrackedLink
            href={href}
            goal="case_open"
            goalParams={{ case: item.slug, source: "button" }}
            className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/20 text-sm font-semibold text-frost transition hover:border-frost hover:bg-white/[0.04] sm:w-fit sm:px-5"
          >
            Смотреть кейс
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </TrackedLink>
          {item.externalUrl ? (
            <TrackedLink
              href={item.externalUrl}
              target="_blank"
              rel="noreferrer"
              goal="external_project_open"
              goalParams={{ case: item.slug, source: "card" }}
              className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-frost px-5 text-sm font-semibold text-ink-950 transition hover:bg-electric-cyan sm:w-fit"
            >
              Открыть сайт
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </TrackedLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
