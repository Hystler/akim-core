import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolioCategoryLabels, type PortfolioItem } from "@/data/portfolio";

type PortfolioCardProps = {
  item: PortfolioItem;
  compact?: boolean;
  priority?: boolean;
};

export function PortfolioCard({
  item,
  compact = false,
  priority = false
}: PortfolioCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        href={item.href ?? "/portfolio"}
        aria-label={`Смотреть кейс: ${item.title}`}
        className="focus-ring relative block aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-ink-900"
      >
        <Image
          src={item.cover}
          alt={item.title}
          fill
          sizes={
            compact
              ? "(min-width: 768px) 33vw, 100vw"
              : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          }
          priority={priority}
          className="object-cover transition duration-500 group-hover:scale-[1.018] group-hover:opacity-90"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/75 to-transparent p-4 pt-14">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
            {portfolioCategoryLabels[item.category]}
          </span>
          <ArrowUpRight
            className="h-5 w-5 text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-center justify-between gap-4 text-xs text-muted">
          <span>{item.client}</span>
          <span>{item.year}</span>
        </div>
        <h3 className="mt-3 text-2xl font-medium leading-tight text-frost">{item.title}</h3>

        {!compact ? (
          <>
            <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>

            <dl className="mt-6 grid gap-4 border-y border-white/10 py-5 sm:grid-cols-2">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.16em] text-muted">Role</dt>
                <dd className="mt-2 text-sm text-frost">{item.role}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.16em] text-muted">
                  Artifact
                </dt>
                <dd className="mt-2 text-sm text-frost">{item.artifact}</dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </>
        ) : null}

        <div className="mt-auto flex flex-wrap gap-4 pt-6">
          {item.href ? (
            <Link
              href={item.href}
              className="focus-ring inline-flex items-center gap-2 rounded-sm border-b border-white/30 pb-1 text-sm font-semibold text-frost transition hover:border-frost"
            >
              Смотреть кейс
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : (
            <span aria-disabled="true" className="text-sm font-semibold text-muted">
              Скоро
            </span>
          )}
          {item.externalUrl ? (
            <Link
              href={item.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-muted transition hover:text-frost"
            >
              Открыть сайт
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
