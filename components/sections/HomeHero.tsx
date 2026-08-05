"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TrackedLink } from "@/components/ui/TrackedLink";

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAOjk3gAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[720px] overflow-hidden border-b border-main/20 bg-base sm:min-h-[760px] lg:min-h-[calc(100svh-72px)]">
      <Image
        src="/images/editorial-desk-hero-v1.jpg"
        alt="Рабочий стол дизайнера с открытым бумажным разворотом, книгами и палитрами"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurDataUrl}
        className="-z-30 object-cover object-[52%_50%] sm:object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-base via-base/90 to-base/10 sm:via-base/75 lg:via-base/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-base/90 via-transparent to-base/30 lg:from-base/30"
      />

      <div className="section-shell flex min-h-[720px] flex-col py-7 sm:min-h-[760px] sm:py-9 lg:min-h-[calc(100svh-72px)] lg:py-10">
        <div className="flex items-center justify-between gap-6 border-b border-main/25 pb-4 text-[11px] font-bold uppercase text-main/70 sm:text-xs">
          <span>Аким Коваленко</span>
          <span className="text-right text-burgundy">Дизайн презентаций</span>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="my-auto max-w-[880px] py-12 sm:py-16 lg:py-20"
        >
          <p className="text-xs font-bold uppercase text-burgundy sm:text-sm">
            Презентации для бизнеса
          </p>
          <h1 className="mt-5 max-w-[880px] text-balance font-heading text-[2.7rem] font-bold leading-[0.98] text-main sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem]">
            <span className="block">Сложное становится ясным.</span>
            <span className="mt-2 block font-serif text-[1.08em] font-medium italic leading-[0.98] text-burgundy sm:mt-3">
              И&nbsp;начинает убеждать.
            </span>
          </h1>
          <p className="mt-7 max-w-[560px] text-pretty text-base font-medium leading-7 text-main/75 sm:text-lg sm:leading-8">
            Собираю структуру, редактирую текст и&nbsp;создаю презентации
            под&nbsp;ключ.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row sm:mt-10">
            <TrackedLink
              href="/portfolio"
              goal="hero_cases_click"
              className="focus-ring group inline-flex min-h-12 items-center justify-center gap-2 border border-burgundy bg-burgundy px-6 text-sm font-bold text-paper shadow-press transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl"
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
              className="focus-ring inline-flex min-h-12 items-center justify-center border border-main/45 bg-paper/35 px-6 text-sm font-bold text-main transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:bg-paper hover:shadow-2xl"
            >
              Обсудить проект
            </TrackedLink>
          </div>
        </motion.div>

        <div className="grid gap-3 border-t border-main/25 pr-2 pt-4 text-xs font-medium text-main/70 sm:grid-cols-[1fr_auto] sm:items-end sm:pr-0">
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
