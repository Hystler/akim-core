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
    <section className="pb-20 pt-16 sm:pb-24 sm:pt-20">
      <div className="section-shell">
        <Link
          href="/portfolio"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-electric-cyan transition hover:text-frost"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Портфолио
        </Link>

        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-electric-cyan/25 bg-electric-cyan/10 px-3 py-1 text-xs font-semibold text-electric-cyan">
                {portfolioCategoryLabels[item.category]}
              </span>
              <span className="text-sm text-muted">
                {item.client} / {item.year}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-frost sm:text-6xl">
              {item.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">{item.description}</p>

            <div className="mt-8 grid gap-5 border-t border-white/10 pt-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Client
                </p>
                <p className="mt-2 text-sm font-semibold text-frost">{item.client}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Year
                </p>
                <p className="mt-2 text-sm font-semibold text-frost">{item.year}</p>
              </div>
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

            <div className="mt-7 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {item.externalUrl ? (
              <Link
                href={item.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-electric-cyan/35 bg-electric-cyan/10 px-5 py-3 text-sm font-semibold text-frost transition hover:border-electric-cyan/70 hover:bg-electric-cyan/15"
              >
                Открыть лендинг
                <ExternalLink size={16} aria-hidden="true" />
              </Link>
            ) : null}
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-glow">
            <Image
              src={item.cover}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {item.images?.length ? (
          <div className="mt-16 sm:mt-20">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-electric-cyan">
                  Gallery
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-frost">
                  Материалы кейса
                </h2>
              </div>
              <p className="text-sm text-muted">{item.images.length} изображений</p>
            </div>
            <PortfolioGallery images={item.images} title={item.title} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
