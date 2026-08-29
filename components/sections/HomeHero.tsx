import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TrackedLink } from "@/components/ui/TrackedLink";

const heroWorks = [
  {
    src: "/images/hero-chess-jazz.avif",
    alt: "Обложка презентации Chess & Jazz",
    className: "hero-print-primary"
  },
  {
    src: "/images/hero-velvet-whisper.avif",
    alt: "Обложка презентации Velvet Whisper",
    className: "hero-print-secondary"
  }
] as const;

export function HomeHero() {
  return (
    <section className="hero-editorial light-atmosphere border-b border-main/10 bg-base-texture">
      <div className="section-shell grid min-h-[680px] items-center gap-8 py-14 sm:min-h-[720px] sm:py-16 lg:min-h-[calc(100svh-80px)] lg:grid-cols-[0.86fr_1.14fr] lg:gap-12 lg:py-12 xl:gap-16">
          <div className="relative z-10 min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-burgundy sm:text-xs">
              Аким Коваленко · дизайн презентаций
            </p>
            <h1 className="mt-5 max-w-[600px] font-heading text-[2.75rem] font-bold leading-[0.98] text-main sm:text-[3.6rem] lg:text-[3.75rem] xl:text-[4.25rem]">
              <span className="block">Сложное становится ясным.</span>
              <span className="mt-2 block font-serif text-[1.02em] font-medium italic leading-[0.98] text-burgundy sm:mt-3">
                И&nbsp;начинает убеждать.
              </span>
            </h1>
            <p className="mt-7 max-w-[460px] text-pretty text-[15px] font-medium leading-7 text-main/70 sm:text-[16px] sm:leading-7">
              Структура, текст и&nbsp;дизайн презентации под&nbsp;ключ.
            </p>

            <div className="mt-8 sm:mt-9">
              <TrackedLink
                href="/portfolio"
                goal="hero_cases_click"
                className="focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-[2px] border border-burgundy bg-burgundy px-6 text-sm font-bold text-paper shadow-press transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-tactile"
              >
                Смотреть работы
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </TrackedLink>
            </div>
          </div>

          <div className="hero-work-stage relative mx-auto aspect-[5/4] w-full max-w-[680px] min-w-0" aria-label="Фрагменты работ">
            <span className="hero-stage-sheet" aria-hidden="true" />
            {heroWorks.map((work, index) => (
              <figure
                key={work.src}
                className={`hero-print absolute aspect-[16/9] bg-paper p-2 sm:p-2.5 ${work.className}`}
                style={{ zIndex: index + 1 }}
              >
                <div className="relative h-full overflow-hidden border border-main/12 bg-main">
                  <Image
                    src={work.src}
                    alt={work.alt}
                    width={1600}
                    height={900}
                    priority={index === 0}
                    unoptimized
                    sizes="(min-width: 1280px) 420px, (min-width: 768px) 48vw, 82vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              </figure>
            ))}
            <div className="hero-stage-meta absolute bottom-[2%] left-[9%] z-10 flex items-center gap-3 px-2 py-1.5">
              <span className="text-[9px] font-bold uppercase tracking-[0.06em] text-main/60 sm:text-[10px]">Атмосфера / образ</span>
              <span className="flex gap-1" aria-hidden="true">
                {["#7F102B", "#A88952", "#2B211F"].map((color) => (
                  <span key={color} className="size-2 rounded-full border border-main/20" style={{ backgroundColor: color }} />
                ))}
              </span>
            </div>
          </div>
      </div>
    </section>
  );
}
