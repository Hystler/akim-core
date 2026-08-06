"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
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
    src: "/portfolio/astra-q1-2026/cover.webp",
    alt: "Обложка презентации Группа Астра Q1 2026",
    className: "bottom-[9%] right-[6%] w-[54%] rotate-[1.2deg]"
  },
  {
    src: "/portfolio/velvet-whisper/velvet-whisper-cover.png",
    alt: "Обложка презентации Velvet Whisper",
    className: "right-[2%] top-[4%] hidden w-[40%] rotate-[2deg] xl:block"
  }
];

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-main/20 bg-base-texture py-7 sm:py-10 lg:py-12">
      <div className="section-shell">
        <div className="flex items-center justify-between gap-5 border-b border-main/25 pb-4 text-[11px] font-bold uppercase text-main/70 sm:text-xs">
          <span>Аким Коваленко</span>
          <span className="text-right text-burgundy">Дизайн презентаций</span>
        </div>

        <div className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:py-16">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 min-w-0"
          >
            <p className="text-xs font-bold uppercase text-burgundy sm:text-sm">
              Презентации для бизнеса
            </p>
            <h1 className="mt-5 max-w-[760px] font-heading text-[2.7rem] font-bold leading-[0.98] text-main sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              <span className="block">Сложное становится ясным.</span>
              <span className="mt-2 block font-serif text-[1.04em] font-medium italic leading-[0.98] text-burgundy sm:mt-3">
                И&nbsp;начинает убеждать.
              </span>
            </h1>
            <p className="mt-7 max-w-[520px] text-pretty text-base font-medium leading-7 text-main/75 sm:text-lg sm:leading-8">
              Структура, текст и&nbsp;дизайн презентации под&nbsp;ключ.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row sm:mt-10">
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
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-w-0"
          >
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
              <div className="absolute inset-0 bg-main/[0.08]" aria-hidden="true" />
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
              <div className="absolute bottom-[4%] left-[5%] z-10 rounded-sm bg-paper/95 px-3 py-2 shadow-press">
                <span className="text-[10px] font-bold uppercase text-main/70">
                  Реальные работы
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-3 border-t border-main/25 pt-4 text-xs font-medium text-main/70 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="flex items-center gap-3">
            <ArrowDownRight className="h-4 w-4 text-burgundy" aria-hidden="true" />
            <span>PowerPoint · Figma · Google Slides</span>
          </div>
          <span className="sm:text-right">Срок: от&nbsp;1 до&nbsp;7 дней</span>
        </div>
      </div>
    </section>
  );
}
