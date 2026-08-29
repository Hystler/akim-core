import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { PaletteDots } from "@/components/ui/PaletteDots";
import { TrackedLink } from "@/components/ui/TrackedLink";
import type { PublishedPortfolioItem } from "@/data/portfolio";

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAOjk3gAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

type PortfolioCardProps = {
  item: PublishedPortfolioItem;
  priority?: boolean;
  layoutIndex?: number;
};

const mediaAspects = ["aspect-[16/11]", "aspect-[4/3]", "aspect-[3/2]"];

export function PortfolioCard({
  item,
  priority = false,
  layoutIndex = 0
}: PortfolioCardProps) {
  const href = `/portfolio/${item.slug}`;
  const mediaAspect = mediaAspects[layoutIndex % mediaAspects.length];

  return (
    <article className="paper-surface group relative flex h-full min-w-0 flex-col rounded-[10px] border border-main/15 p-3 shadow-tactile transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-tactile-lg sm:p-4">
      <div
        className={`relative overflow-hidden rounded-md border border-main/15 bg-base ${mediaAspect}`}
      >
        <Image
          src={item.coverImage}
          alt={item.coverAlt}
          fill
          sizes="(min-width: 1280px) 720px, (min-width: 768px) 48vw, 94vw"
          priority={priority}
          placeholder="blur"
          blurDataURL={blurDataUrl}
          className="object-contain p-2 transition duration-300 ease-out group-hover:scale-[1.01] sm:p-3"
        />
        <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-main/15 bg-paper/90 shadow-press">
          <ArrowUpRight
            className="h-4 w-4 text-burgundy transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>

      <div className="pointer-events-none relative z-20 flex min-w-0 flex-1 flex-col px-1 pb-1 pt-5">
        <div className="flex items-center justify-between gap-4 text-[11px] font-bold uppercase text-main/70">
          <span className="text-burgundy">{item.focus}</span>
          <span>{item.year}</span>
        </div>
        <h3 className="mt-3 font-heading text-2xl font-bold leading-tight text-main sm:text-[1.75rem]">
          {item.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-main/70 sm:text-[16px] sm:leading-7">
          {item.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-main/15 pt-4">
          <span className="text-xs font-medium text-main/65">{item.projectType}</span>
          <PaletteDots colors={item.visualSystem.palette} darkBorder />
        </div>

        {item.externalUrl ? (
          <TrackedLink
            href={item.externalUrl}
            target="_blank"
            rel="noreferrer"
            goal="external_project_open"
            goalParams={{ case: item.slug, source: "card" }}
            className="focus-ring pointer-events-auto relative z-30 mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-md border border-main/30 bg-paper/70 px-4 text-sm font-bold text-main transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-burgundy hover:shadow-press"
          >
            Открыть сайт
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </TrackedLink>
        ) : null}
      </div>

      <TrackedLink
        href={href}
        goal="case_open"
        goalParams={{ case: item.slug, source: "card" }}
        aria-label={`Открыть работу «${item.title}»`}
        className="focus-ring absolute inset-0 z-10 rounded-[10px]"
      >
        <span className="sr-only">Открыть работу «{item.title}»</span>
      </TrackedLink>
    </article>
  );
}
