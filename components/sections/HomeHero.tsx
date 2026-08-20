import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TrackedLink } from "@/components/ui/TrackedLink";

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAOjk3gAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

const heroWorks = [
  {
    src: "/portfolio/chess-jazz/chess-jazz-cover.png",
    alt: "Обложка презентации Chess & Jazz",
    className: "left-[7%] top-[10%] w-[66%] -rotate-[1.5deg]"
  },
  {
    src: "/portfolio/northline/cover.webp",
    alt: "Обложка презентации NORTHLINE",
    className: "bottom-[8%] right-[5%] w-[55%] rotate-[1.2deg]"
  },
  {
    src: "/portfolio/velvet-whisper/velvet-whisper-cover.png",
    alt: "Обложка презентации Velvet Whisper",
    className: "right-[2%] top-[4%] hidden w-[40%] rotate-[2deg] xl:block"
  }
];

export function HomeHero() {
  return (
    <section className="border-b border-main/20 bg-base-texture py-7 sm:py-10 lg:py-12">
      <div className="section-shell">
        <div className="flex items-center justify-between gap-5 border-b border-main/25 pb-4 text-[11px] font-bold uppercase text-main/70 sm:text-xs">
          <span>Аким Коваленко</span>
          <span className="text-right text-burgundy">Дизайн презентаций</span>
        </div>

        <div className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10 lg:py-10 xl:gap-12 min-[1400px]:py-16">
          <div className="relative z-10 min-w-0">
            <p className="text-xs font-bold uppercase text-burgundy sm:text-sm">
              Презентации для бизнеса
            </p>
            <h1 className="mt-5 max-w-[760px] font-heading text-[2.7rem] font-bold leading-[0.98] text-main sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] min-[1400px]:text-[5rem] min-[1536px]:text-[5.25rem]">
              <span className="block">Сложное становится ясным.</span>
              <span className="mt-2 block font-serif text-[1.04em] font-medium italic leading-[0.98] text-burgundy sm:mt-3">
                И&nbsp;начинает убеждать.
              </span>
            </h1>
            <p className="mt-7 max-w-[520px] text-pretty text-base font-medium leading-7 text-main/75 sm:text-lg sm:leading-8 lg:mt-5 xl:mt-7">
              Структура, текст и&nbsp;дизайн презентации под&nbsp;ключ.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row sm:mt-10 lg:mt-7">
              <TrackedLink
                href="/portfolio"
                goal="hero_cases_click"
                className="focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-burgundy bg-burgundy px-6 text-sm font-bold text-paper shadow-press transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-tactile"
              >
                Смотреть кейсы
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </TrackedLink>
              <TrackedLink
                href="/contact"
                goal="hero_contact_click"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-main/40 bg-paper/70 px-6 text-sm font-bold text-main transition-all duration-300 ease-out hover:-translate-y-1 hover:border-burgundy hover:bg-paper hover:shadow-press"
              >
                Обсудить проект
              </TrackedLink>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="editorial-stage relative aspect-[4/3] overflow-hidden rounded-[14px] border border-main/15 shadow-tactile-lg">
              <Image
                src="/images/editorial-desk-hero-v1.jpg"
                alt="Рабочий стол с бумажными листами, книгами, ручкой и палитрами"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                placeholder="blur"
                blurDataURL={blurDataUrl}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-main/[0.1]" aria-hidden="true" />
              <div
                className="absolute inset-[7%] rotate-[1.2deg] rounded-md border border-main/10 bg-paper/55 shadow-press"
                aria-hidden="true"
              />
              {heroWorks.map((work, index) => (
                <div
                  key={work.src}
                  className={`absolute aspect-[16/9] rounded-md border border-main/20 bg-paper p-1.5 shadow-tactile sm:p-2 ${work.className}`}
                  style={{ zIndex: index + 1 }}
                >
                  <div className="relative h-full overflow-hidden rounded-sm border border-main/10 bg-main">
                    <Image
                      src={work.src}
                      alt={work.alt}
                      fill
                      sizes="(min-width: 1280px) 420px, (min-width: 768px) 48vw, 82vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
              <div className="absolute bottom-[4%] left-[5%] z-10 flex items-center gap-3 rounded-sm border border-main/10 bg-paper/95 px-3 py-2 shadow-press">
                <span className="text-[10px] font-bold uppercase text-main/70">Фрагменты работ</span>
                <span className="flex gap-1" aria-hidden="true">
                  {["#6B1A2C", "#B79B64", "#2A2120"].map((color) => (
                    <span key={color} className="size-2 rounded-full border border-main/20" style={{ backgroundColor: color }} />
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
