import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { JsonLd } from "@/components/seo/JsonLd";
import { TrackedLink } from "@/components/ui/TrackedLink";
import {
  getNextPortfolioItem,
  getPortfolioItem,
  portfolioCategoryLabels,
  publishedPortfolioItems,
  portfolioStatusLabels
} from "@/data/portfolio";
import { siteUrl } from "@/lib/site-config";
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

      <header className="pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="section-shell">
          <Link
            href="/portfolio"
            className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm text-muted transition hover:text-frost"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Все кейсы
          </Link>

          <div className="mt-9 border-t border-white/15 pt-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
              <span className="font-semibold text-electric-cyan">
                {portfolioCategoryLabels[item.category]}
              </span>
              <span aria-hidden="true">·</span>
              <span>{portfolioStatusLabels[item.status]}</span>
              <span aria-hidden="true">·</span>
              <span>{item.year}</span>
            </div>

            <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <h1 className="text-balance font-heading text-5xl font-medium leading-[1.02] text-frost sm:text-7xl xl:text-8xl">
                {item.title}
              </h1>
              <p className="text-pretty max-w-xl text-base leading-8 text-muted lg:justify-self-end">
                {item.description}
              </p>
            </div>

            <dl className="mt-10 grid gap-x-8 gap-y-6 border-y border-white/15 py-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Проект", item.client],
                ["Год", item.year],
                ["Роль", item.role],
                ["Объём", item.scope]
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs text-muted">{label}</dt>
                  <dd className="mt-2 text-sm leading-6 text-frost">{value}</dd>
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
                className="focus-ring group mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-frost px-5 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:bg-electric-cyan"
              >
                {item.slug === "tatyana-vesennyaya"
                  ? "Открыть лендинг"
                  : "Открыть готовый продукт"}
                <ExternalLink
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </TrackedLink>
            ) : null}
          </div>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-md border border-white/10 bg-ink-900 sm:mt-14">
            <Image
              src={item.coverImage}
              alt={item.coverAlt}
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </header>

      <section className="bg-paper py-20 text-ink-950 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_1.55fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-ink-800/70">Задача</p>
              <h2 className="text-balance mt-5 max-w-sm font-heading text-3xl font-medium leading-[1.08] sm:text-5xl">
                Что нужно было создать
              </h2>
            </div>
            <div className="border-t border-ink-950/20">
              <p className="py-7 text-pretty text-xl leading-9 text-ink-950 sm:text-2xl sm:leading-10">
                {item.task}
              </p>
              <div className="grid border-t border-ink-950/20 sm:grid-cols-2">
                <div className="border-b border-ink-950/20 py-6 sm:border-b-0 sm:border-r sm:pr-8">
                  <h3 className="text-sm font-semibold">Для кого</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-800/70">{item.audience}</p>
                </div>
                <div className="py-6 sm:pl-8">
                  <h3 className="text-sm font-semibold">Исходные материалы</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-800/70">
                    {item.sourceMaterials}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="border-t border-white/15 pt-6">
            <p className="text-xs font-semibold uppercase text-muted">Проблема</p>
            <h2 className="mt-5 font-heading text-3xl font-medium text-frost">
              Что мешало ясной подаче
            </h2>
            <p className="mt-6 text-base leading-8 text-muted">{item.problem}</p>
          </div>
          <div className="border-t border-electric-cyan/55 pt-6">
            <p className="text-xs font-semibold uppercase text-electric-cyan">Решение</p>
            <h2 className="mt-5 font-heading text-3xl font-medium text-frost">
              Как была построена логика
            </h2>
            <p className="mt-6 text-base leading-8 text-muted">{item.solution}</p>
          </div>
        </div>
      </section>

      <section className="bg-ink-900 py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-xs font-semibold uppercase text-muted">Что было сделано</p>
            <h2 className="text-balance mt-5 font-heading text-3xl font-medium leading-[1.08] text-frost sm:text-5xl">
              Только фактический объём работы
            </h2>
          </div>
          <ul className="border-t border-white/15">
            {item.deliverables.map((deliverable, index) => (
              <li
                key={deliverable}
                className="grid grid-cols-[36px_1fr] gap-3 border-b border-white/15 py-5 text-base text-frost"
              >
                <span className="text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink-950 sm:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase text-ink-800/70">
              Визуальная система
            </p>
            <h2 className="text-balance mt-5 font-heading text-3xl font-medium leading-[1.08] sm:text-5xl">
              Система, которая удерживает проект целиком
            </h2>
          </div>

          <dl className="mt-12 grid border-t border-ink-950/20 md:grid-cols-3">
            {[
              ["Цвета", item.visualSystem.colors],
              ["Типографика", item.visualSystem.typography],
              ["Сетка", item.visualSystem.grid]
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`border-b border-ink-950/20 py-6 md:px-7 ${
                  index === 0 ? "md:pl-0" : "md:border-l"
                }`}
              >
                <dt className="text-xs font-semibold text-ink-800/70">{label}</dt>
                <dd className="mt-4 text-sm leading-7 text-ink-800/75">{value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {item.visualSystem.principles.map((principle) => (
              <li key={principle} className="flex gap-3 border-t border-ink-950/20 pt-4 text-sm leading-7">
                <Check className="mt-1.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink-950 py-20 sm:py-28">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-5 border-b border-white/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-muted">Галерея</p>
              <h2 className="mt-4 font-heading text-3xl font-medium text-frost sm:text-5xl">
                Проект крупным планом
              </h2>
            </div>
            <p className="text-sm text-muted">{getImageCountLabel(item.gallery.length)}</p>
          </div>
          <PortfolioGallery items={item.gallery} title={item.title} />
        </div>
      </section>

      <section className="bg-paper py-20 text-ink-950 sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="text-xs font-semibold uppercase text-ink-800/70">Результат</p>
            <h2 className="mt-5 font-heading text-3xl font-medium sm:text-5xl">
              Что получилось
            </h2>
          </div>
          <ul className="border-t border-ink-950/20">
            {item.result.map((result) => (
              <li
                key={result}
                className="flex gap-4 border-b border-ink-950/20 py-6 text-base leading-7"
              >
                <Check className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                {result}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {nextItem ? (
        <section className="bg-ink-900 py-20 sm:py-28">
          <div className="section-shell">
            <p className="text-xs font-semibold uppercase text-muted">Следующий кейс</p>
            <TrackedLink
              href={`/portfolio/${nextItem.slug}`}
              goal="case_open"
              goalParams={{ case: nextItem.slug, source: "next_case" }}
              className="focus-ring group mt-5 grid gap-8 rounded-md border border-white/15 p-5 transition hover:border-white/40 sm:p-7 lg:grid-cols-[1fr_0.85fr] lg:items-center"
            >
              <div>
                <span className="text-sm text-muted">{nextItem.projectType}</span>
                <h2 className="text-balance mt-3 font-heading text-4xl font-medium text-frost sm:text-6xl">
                  {nextItem.title}
                </h2>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-electric-cyan">
                  Смотреть кейс
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-white/10">
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
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-5 text-sm font-semibold text-frost transition hover:border-frost"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Назад ко всем работам
              </Link>
              <Link
                href="/contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-frost px-5 text-sm font-semibold text-ink-950 transition hover:bg-electric-cyan"
              >
                Обсудить похожий проект
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
