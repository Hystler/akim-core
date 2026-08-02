import { existsSync } from "node:fs";
import { join } from "node:path";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { authorPhotoPath } from "@/data/site";

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAoLDAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

export function AboutPreview({ asPage = false }: { asPage?: boolean }) {
  const hasPortrait = Boolean(
    authorPhotoPath && existsSync(join(process.cwd(), "public", authorPhotoPath))
  );
  const Heading = asPage ? "h1" : "h2";

  return (
    <section className={`bg-ink-900 ${asPage ? "pb-20 pt-16 sm:pb-28 sm:pt-24" : "py-20 sm:py-28"}`}>
      <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase text-muted">
            Обо мне
          </p>
          <Heading className={`text-balance mt-5 font-heading font-medium leading-[1.08] text-frost ${asPage ? "text-4xl sm:text-6xl" : "text-3xl sm:text-5xl"}`}>
            Соединяю дизайн, бизнес-логику и технологии
          </Heading>
          <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-muted">
            <p>
              Я занимаюсь презентациями, digital-продуктами и автоматизациями. Мой
              основной навык — быстро находить структуру в сложных материалах и
              превращать её в понятный визуальный продукт.
            </p>
            <p>
              Работал с маркетплейсами, финансовыми моделями, мероприятиями, сайтами и
              внутренними бизнес-инструментами. Поэтому могу погружаться в содержание,
              а не только оформлять внешний слой.
            </p>
          </div>
          {!asPage ? (
            <Link
              href="/about"
              className="focus-ring group mt-8 inline-flex items-center gap-2 rounded-sm border-b border-white/30 pb-1 text-sm font-semibold text-frost transition hover:border-frost"
            >
              Подробнее обо мне
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        {hasPortrait && authorPhotoPath ? (
          <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-white/10 bg-ink-950">
            <Image
              src={authorPhotoPath}
              alt="Аким Коваленко, дизайнер презентаций и digital-продуктов"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              className="object-cover"
            />
          </div>
        ) : (
          <div className="grid aspect-[4/3] grid-cols-2 gap-3">
            <div className="relative overflow-hidden rounded-md border border-white/10">
              <Image
                src="/portfolio/chess-jazz/chess-jazz-cover.png"
                alt="Фрагмент работы Chess & Jazz"
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-10 overflow-hidden rounded-md border border-white/10">
              <Image
                src="/portfolio/velvet-whisper/velvet-whisper-cover.png"
                alt="Фрагмент работы Velvet Whisper"
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
