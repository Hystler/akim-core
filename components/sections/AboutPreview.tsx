import { existsSync } from "node:fs";
import { join } from "node:path";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PaletteDots } from "@/components/ui/PaletteDots";
import { authorPhotoPaths } from "@/data/site";

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAoLDAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

export function AboutPreview({ asPage = false }: { asPage?: boolean }) {
  const configuredPhotos = Object.entries(authorPhotoPaths).flatMap(([kind, path]) => {
    if (!path || !existsSync(join(process.cwd(), "public", path))) return [];
    return [{ kind, path }];
  });
  const hasAuthorPhotos = configuredPhotos.length > 0;
  const Heading = asPage ? "h1" : "h2";

  return (
    <section className={`light-atmosphere light-shadow-c bg-paper ${asPage ? "pb-20 pt-16 sm:pb-28 sm:pt-24" : "py-20 sm:py-28"}`}>
      <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Heading className={`text-balance font-heading font-bold leading-[1.04] text-main ${asPage ? "text-4xl sm:text-6xl" : "text-3xl sm:text-5xl"}`}>
            Аким Коваленко.
          </Heading>
          <div className="mt-7 max-w-2xl space-y-5 text-[16px] font-medium leading-8 text-main/70">
            <p>
              Я дизайнер презентаций. Разбираюсь в материале, нахожу главную мысль
              и собираю ясную визуальную историю.
            </p>
            <p>
              Работаю с событиями, цифрами, сайтами и сервисами для работы.
            </p>
          </div>
          {!asPage ? (
            <Link
              href="/about"
              className="focus-ring group mt-8 inline-flex items-center gap-2 border-b border-main/35 pb-1 text-sm font-bold text-main transition hover:border-burgundy hover:text-burgundy"
            >
              Подробнее
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        {hasAuthorPhotos ? (
          <div className={`grid gap-4 ${configuredPhotos.length > 1 ? "grid-cols-2" : ""}`}>
            {configuredPhotos.map((photo, index) => (
              <div
                key={photo.kind}
                className={`relative overflow-hidden rounded-[12px] border border-main/15 bg-base shadow-tactile ${
                  configuredPhotos.length > 1 && index === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={photo.path}
                  alt={photo.kind === "portrait" ? "Аким Коваленко, дизайнер презентаций" : "Аким Коваленко за работой"}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid px-2 sm:px-6">
            <div className="relative z-10 aspect-[16/9] overflow-hidden rounded-[10px] border border-main/15 bg-base p-3 shadow-tactile -rotate-[1deg]">
              <Image
                src="/portfolio/chess-jazz/chess-jazz-cover.png"
                alt="Фрагмент работы Chess & Jazz"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-contain p-3"
              />
            </div>
            <div className="relative z-20 -mt-4 ml-auto aspect-[16/9] w-[88%] overflow-hidden rounded-[10px] border border-main/15 bg-paper p-3 shadow-tactile rotate-[1deg] sm:-mt-8">
              <Image
                src="/portfolio/velvet-whisper/velvet-whisper-cover.png"
                alt="Фрагмент работы Velvet Whisper"
                fill
                sizes="(min-width: 1024px) 38vw, 88vw"
                className="object-contain p-3"
              />
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-main/15 pt-4">
              <span className="text-xs font-bold uppercase text-main/70">Атмосфера / образ</span>
              <PaletteDots colors={["#2B211F", "#7F102B", "#EFE4D5", "#8D7D72"]} darkBorder />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
