import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { PaletteDots } from "@/components/ui/PaletteDots";
import {
  portfolioStatusLabels,
  type PublishedPortfolioItem
} from "@/data/portfolio";

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAOjk3gAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

type PortfolioCardProps = {
  item: PublishedPortfolioItem;
  priority?: boolean;
};

export function PortfolioCard({ item, priority = false }: PortfolioCardProps) {
  const href = `/portfolio/${item.slug}`;

  return (
    <article className="group flex h-full flex-col border border-main/15 bg-paper p-3 shadow-tactile transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl sm:p-4">
      <TrackedLink
        href={href}
        goal="case_open"
        goalParams={{ case: item.slug, source: "cover" }}
        aria-label={`Смотреть кейс «${item.title}»`}
        className="focus-ring relative block aspect-[16/9] overflow-hidden border border-main/15 bg-base"
      >
        <Image
          src={item.coverImage}
          alt={item.coverAlt}
          fill
          sizes="(min-width: 1280px) 520px, (min-width: 768px) 48vw, 94vw"
          priority={priority}
          placeholder="blur"
          blurDataURL={blurDataUrl}
          className="object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-main/20 bg-paper/95 px-3 py-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase text-main/70">
              {portfolioStatusLabels[item.status]}
            </span>
            {item.coverLabel ? (
              <span className="border border-main/25 px-1.5 py-0.5 text-[9px] font-bold uppercase text-main">
                {item.coverLabel}
              </span>
            ) : null}
          </div>
          <ArrowUpRight
            className="h-4 w-4 text-burgundy transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>
      </TrackedLink>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <div className="flex items-center justify-between gap-4 text-[11px] font-bold uppercase text-main/70">
          <span className="text-burgundy">{item.focus}</span>
          <span>{item.year}</span>
        </div>
        <h3 className="mt-3 font-heading text-2xl font-bold leading-tight text-main sm:text-[1.75rem]">
          {item.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-main/70 sm:text-base sm:leading-7">
          {item.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-main/15 pt-4">
          <span className="text-xs font-medium text-main/70">{item.projectType}</span>
          <PaletteDots colors={item.visualSystem.palette} darkBorder />
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <TrackedLink
            href={href}
            goal="case_open"
            goalParams={{ case: item.slug, source: "button" }}
            className="focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 border border-main/35 px-4 text-sm font-bold text-main transition-all duration-300 ease-out hover:-translate-y-1 hover:border-burgundy hover:bg-burgundy hover:text-paper hover:shadow-press sm:w-fit"
          >
            Открыть
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </TrackedLink>
          {item.externalUrl ? (
            <TrackedLink
              href={item.externalUrl}
              target="_blank"
              rel="noreferrer"
              goal="external_project_open"
              goalParams={{ case: item.slug, source: "card" }}
              className="focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 bg-burgundy px-4 text-sm font-bold text-paper transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-press sm:w-fit"
            >
              Сайт
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </TrackedLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
