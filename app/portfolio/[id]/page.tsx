import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { portfolioCategoryLabels, portfolioItems } from "@/data/portfolio";

type PortfolioCasePageProps = {
  params: Promise<{
    id: string;
  }>;
};

function getPortfolioItem(id: string) {
  return portfolioItems.find((item) => item.id === id);
}

function getImageCountLabel(count: number) {
  if (count % 10 === 1 && count % 100 !== 11) return `${count} изображение`;
  if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
    return `${count} изображения`;
  }
  return `${count} изображений`;
}

export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: item.id
  }));
}

export async function generateMetadata({
  params
}: PortfolioCasePageProps): Promise<Metadata> {
  const { id } = await params;
  const item = getPortfolioItem(id);

  if (!item) {
    return {
      title: "Кейс"
    };
  }

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [item.cover]
    }
  };
}

export default async function PortfolioCasePage({ params }: PortfolioCasePageProps) {
  const { id } = await params;
  const item = getPortfolioItem(id);

  if (!item) {
    notFound();
  }

  return (
    <article className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <div className="section-shell">
        <Link
          href="/portfolio"
          className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm text-muted transition hover:text-frost"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Все работы
        </Link>

        <header className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-muted">
            <span>{portfolioCategoryLabels[item.category]}</span>
            <span>{item.year}</span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <h1 className="text-balance text-5xl font-medium leading-[0.95] text-frost sm:text-7xl lg:text-8xl">
              {item.title}
            </h1>
            <p className="text-pretty text-base leading-8 text-muted lg:pb-1">
              {item.description}
            </p>
          </div>

          <dl className="mt-10 grid gap-6 border-y border-white/10 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Client", item.client],
              ["Year", item.year],
              ["Role", item.role],
              ["Artifact", item.artifact]
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[10px] uppercase tracking-[0.16em] text-muted">
                  {label}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-frost">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {item.externalUrl ? (
              <Link
                href={item.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring group inline-flex min-h-12 items-center gap-2 rounded-md border border-frost bg-frost px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-transparent hover:text-frost"
              >
                Открыть лендинг
                <ExternalLink
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            ) : null}
          </div>
        </header>

        <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-ink-900">
          <Image
            src={item.cover}
            alt={item.title}
            fill
            sizes="(min-width: 1440px) 1344px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {item.images?.length ? (
          <section className="mt-20 sm:mt-28">
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-white/10 pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Gallery
                </p>
                <h2 className="mt-4 text-3xl font-medium text-frost sm:text-4xl">
                  Материалы кейса
                </h2>
              </div>
              <p className="text-sm text-muted">{getImageCountLabel(item.images.length)}</p>
            </div>
            <PortfolioGallery images={item.images} title={item.title} />
          </section>
        ) : null}
      </div>
    </article>
  );
}
