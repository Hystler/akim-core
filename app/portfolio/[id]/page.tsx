import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStory } from "@/components/sections/CaseStory";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { JsonLd } from "@/components/seo/JsonLd";
import { PaletteDots } from "@/components/ui/PaletteDots";
import { TrackedLink } from "@/components/ui/TrackedLink";
import {
  getNextPortfolioItem,
  getPortfolioItem,
  portfolioCategoryLabels,
  publishedPortfolioItems,
  portfolioStatusLabels
} from "@/data/portfolio";
import { siteUrl } from "@/lib/site-config";
import { getCaseSection, getCaseSectionPlan } from "@/lib/case-sections";
const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAoLDAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

type PortfolioCasePageProps = {
  params: Promise<{ id: string }>;
};

function getImageCountLabel(count: number) {
  if (count % 10 === 1 && count % 100 !== 11) return `${count} изображение`;
  if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
    return `${count} изображения`;
  }
  return `${count} изображений`;
}

export function generateStaticParams() {
  return publishedPortfolioItems.map((item) => ({ id: item.slug }));
}

export async function generateMetadata({
  params
}: PortfolioCasePageProps): Promise<Metadata> {
  const { id } = await params;
  const item = getPortfolioItem(id);

  if (!item) return { title: "Кейс не найден" };

  const canonical = `/portfolio/${item.slug}`;

  return {
    title: item.title,
    description: item.description,
    alternates: { canonical },
    openGraph: {
      title: `${item.title} — кейс`,
      description: item.description,
      type: "article",
      url: canonical,
      images: [{ url: item.coverImage, alt: item.coverAlt }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} — кейс`,
      description: item.description,
      images: [item.coverImage]
    }
  };
}

export default async function PortfolioCasePage({ params }: PortfolioCasePageProps) {
  const { id } = await params;
  const item = getPortfolioItem(id);

  if (!item) notFound();

  const nextItem = getNextPortfolioItem(item.slug);
  const sectionPlan = getCaseSectionPlan(item);
  const gallerySection = getCaseSection(sectionPlan, "gallery");
  const resultSection = getCaseSection(sectionPlan, "result");
  const externalActionLabel =
    item.category === "landing" ? "Открыть сайт" : "Открыть продукт";
  const caseUrl = `${siteUrl}/portfolio/${item.slug}`;
  const absoluteCover = item.coverImage.startsWith("http")
    ? item.coverImage
    : `${siteUrl}${item.coverImage}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    description: item.description,
    url: caseUrl,
    image: absoluteCover,
    dateCreated: item.year,
    genre: portfolioCategoryLabels[item.category],
    creator: {
      "@type": "Person",
      name: "Аким Коваленко",
      url: siteUrl
    },
    about: item.task,
    keywords: item.deliverables.join(", ")
  };

  return (
    <article>
      <JsonLd data={schema} />

      <header className="bg-base-texture pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="section-shell">
          <Link
            href="/portfolio"
            className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-main/70 transition hover:text-burgundy"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Все кейсы
          </Link>

          <div className="mt-9 rounded-[16px] border border-main/15 bg-kraft-texture p-5 shadow-tactile sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-main/70">
              <span className="font-bold text-burgundy">
                {item.focus}
              </span>
              <span aria-hidden="true">·</span>
              <span>{item.projectType}</span>
              <span aria-hidden="true">·</span>
              <span>{portfolioStatusLabels[item.status]}</span>
              <span aria-hidden="true">·</span>
              <span>{item.year}</span>
            </div>

            <div className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <h1 className="max-w-5xl font-heading text-4xl font-bold leading-[1.02] text-main sm:text-6xl xl:text-7xl">
                {item.title}
              </h1>
              <div className="max-w-xl lg:justify-self-end">
                <p className="text-pretty text-lg font-medium leading-8 text-main/70">
                  {item.description}
                </p>
                <div className="mt-5">
                  <PaletteDots colors={item.visualSystem.palette} />
                </div>
              </div>
            </div>

            <dl className="mt-10 grid gap-x-8 gap-y-6 rounded-md border border-main/15 bg-paper/55 p-5 sm:grid-cols-3">
              {[
                ["Проект", item.client],
                ["Роль", item.role],
                ["Объём", item.scope]
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-bold uppercase text-burgundy">{label}</dt>
                  <dd className="mt-2 text-sm font-medium leading-6 text-main/70">{value}</dd>
                </div>
              ))}
            </dl>

            {item.externalUrl ? (
              <TrackedLink
                href={item.externalUrl}
                target="_blank"
                rel="noreferrer"
                goal="external_project_open"
                goalParams={{ case: item.slug }}
                className="focus-ring group mt-7 inline-flex min-h-12 items-center gap-2 rounded-md border border-burgundy bg-burgundy px-5 text-sm font-bold text-paper shadow-press transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-tactile"
              >
                {externalActionLabel}
                <ExternalLink
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </TrackedLink>
            ) : null}
          </div>

          <div className="paper-surface relative mt-10 aspect-[16/9] overflow-hidden rounded-[14px] border border-main/15 p-2 shadow-tactile-lg sm:mt-14 sm:p-3">
            <Image
              src={item.coverImage}
              alt={item.coverAlt}
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              className="object-cover p-2 sm:p-3"
              priority
            />
          </div>
        </div>
      </header>

      <CaseStory item={item} sections={sectionPlan} />

      <section className="bg-base-texture py-20 sm:py-28">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-5 border-b border-main/20 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-burgundy">
                {gallerySection.number} / {gallerySection.label}
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold text-main sm:text-5xl">
                {item.category === "presentation" ? "Слайды." : "Экраны."}
              </h2>
            </div>
            <p className="text-sm font-medium text-main/70">{getImageCountLabel(item.gallery.length)}</p>
          </div>
          <PortfolioGallery items={item.gallery} title={item.title} />
        </div>
      </section>

      <section className="bg-paper py-20 text-main sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">
              {resultSection.number} / {resultSection.label}
            </p>
            <h2 className="mt-5 font-heading text-3xl font-bold sm:text-5xl">
              Готово.
            </h2>
          </div>
          <ul className="border-t border-main/20">
            {item.result.map((result) => (
              <li
                key={result}
                className="flex gap-4 border-b border-main/20 py-6 text-base font-medium leading-7"
              >
                <Check className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                {result}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {nextItem ? (
        <section className="bg-base-texture py-20 sm:py-28">
          <div className="section-shell">
            <p className="text-xs font-bold uppercase text-burgundy">Дальше</p>
            <TrackedLink
              href={`/portfolio/${nextItem.slug}`}
              goal="case_open"
              goalParams={{ case: nextItem.slug, source: "next_case" }}
              className="paper-surface focus-ring group mt-5 grid gap-8 rounded-[14px] border border-main/15 p-5 shadow-tactile transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-tactile-lg sm:p-7 lg:grid-cols-[1fr_0.85fr] lg:items-center"
            >
              <div>
                <span className="text-sm font-medium text-main/70">{nextItem.projectType}</span>
                <h2 className="text-balance mt-3 font-heading text-4xl font-bold text-main sm:text-6xl">
                  {nextItem.title}
                </h2>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-burgundy">
                  Открыть
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-main/15 bg-base">
                <Image
                  src={nextItem.coverImage}
                  alt={nextItem.coverAlt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  className="object-cover transition duration-300 group-hover:scale-[1.012]"
                />
              </div>
            </TrackedLink>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portfolio"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-main/35 px-5 text-sm font-bold text-main transition hover:border-burgundy hover:text-burgundy"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Все работы
              </Link>
              <Link
                href="/contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-burgundy bg-burgundy px-5 text-sm font-bold text-paper transition hover:-translate-y-1 hover:shadow-press"
              >
                Обсудить похожую задачу
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
