import { existsSync } from "node:fs";
import { join } from "node:path";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PaletteDots } from "@/components/ui/PaletteDots";
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
            Сначала смысл.
          </Heading>
          <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-muted">
            <p>
              Я дизайнер презентаций. Нахожу главную мысль, собираю структуру и
              оформляю слайды.
            </p>
            <p>
              Работаю с событиями, брендами, цифрами и продуктами. Быстро вхожу в
              тему и убираю лишнее.
            </p>
          </div>
          {!asPage ? (
            <Link
              href="/about"
              className="focus-ring group mt-8 inline-flex items-center gap-2 rounded-sm border-b border-white/30 pb-1 text-sm font-semibold text-frost transition hover:border-frost"
            >
              Обо мне
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        {hasPortrait && authorPhotoPath ? (
          <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-white/10 bg-ink-950">
            <Image
              src={authorPhotoPath}
              alt="Аким Коваленко, дизайнер презентаций"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              className="object-cover"
            />
          </div>
        ) : (
          <div className="grid gap-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-white/10 bg-ink-950">
              <Image
                src="/portfolio/chess-jazz/chess-jazz-cover.png"
                alt="Фрагмент работы Chess & Jazz"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-contain"
              />
            </div>
            <div className="relative ml-auto aspect-[16/9] w-[88%] overflow-hidden rounded-sm border border-white/10 bg-[#EDE3D4]">
              <Image
                src="/portfolio/velvet-whisper/velvet-whisper-cover.png"
                alt="Фрагмент работы Velvet Whisper"
                fill
                sizes="(min-width: 1024px) 38vw, 88vw"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs text-muted">Атмосфера / образ</span>
              <PaletteDots colors={["#04100D", "#D8B875", "#F1E8D9", "#B89F8B"]} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
