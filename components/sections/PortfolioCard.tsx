import { portfolioCategoryLabels, type PortfolioItem } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

type PortfolioCardProps = {
  item: PortfolioItem;
  compact?: boolean;
};

export function PortfolioCard({ item, compact = false }: PortfolioCardProps) {
  return (
    <article
      data-cursor="hover"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] transition duration-300 hover:-translate-y-1 hover:border-electric-cyan/45 hover:bg-white/[0.065] hover:shadow-glow"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-ink-900">
        <Image
          src={item.cover}
          alt={item.title}
          fill
          sizes={
            compact
              ? "(min-width: 768px) 33vw, 100vw"
              : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          }
          className="object-cover opacity-95 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-electric-cyan/25 bg-electric-cyan/10 px-3 py-1 text-xs font-semibold text-electric-cyan">
            {portfolioCategoryLabels[item.category]}
          </span>
          <span className="text-xs text-muted">
            {item.client} / {item.year}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-frost">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>

        <div className="mt-6 grid gap-4 border-t border-white/10 pt-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Role
            </p>
            <p className="mt-2 text-sm font-semibold text-frost">{item.role}</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Artifact
            </p>
            <p className="mt-2 text-sm font-semibold text-frost">{item.artifact}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-7">
          {item.href ? (
            <Link
              href={item.href}
              className="inline-flex w-full items-center justify-center rounded-full border border-electric-cyan/35 bg-electric-cyan/10 px-4 py-3 text-sm font-semibold text-frost transition hover:border-electric-cyan/70 hover:bg-electric-cyan/15"
            >
              Смотреть кейс
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-muted opacity-70"
            >
              Скоро
            </span>
          )}
          {item.externalUrl ? (
            <Link
              href={item.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-frost transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              Открыть сайт
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
