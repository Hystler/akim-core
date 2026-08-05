"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TrackedLink } from "@/components/ui/TrackedLink";

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAMQDQAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden border-b border-electric-cyan/25 bg-ink-950 md:min-h-[calc(100svh-72px)]">
      <div className="absolute inset-x-0 top-0 -z-30 h-[260px] overflow-hidden min-[375px]:h-[292px] sm:h-[340px] md:inset-0 md:h-auto">
        <Image
          src="/images/chess-jazz-hero-v2.jpg"
          alt="Вечерний сад с камерной джазовой сценой и шахматной партией"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataUrl}
          className="object-cover object-[76%_58%] saturate-[0.88] md:object-[62%_50%] lg:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#02100c]/5 via-transparent via-[72%] to-ink-950 md:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-gradient-to-r from-ink-950 via-ink-950/55 via-[38%] to-transparent md:block"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[url('/images/matte-paper-texture.webp')] bg-[length:520px_520px] opacity-10 mix-blend-multiply"
      />

      <div className="section-shell relative flex flex-col pb-7 pt-[228px] min-[375px]:pt-[260px] sm:pt-[304px] md:min-h-[calc(100svh-72px)] md:py-8 lg:py-10">
        <div className="hidden items-center justify-between gap-6 border-b border-electric-cyan/30 pb-4 text-[11px] font-semibold uppercase text-frost/65 md:flex">
          <span>Аким Коваленко</span>
          <span className="text-right text-electric-cyan">Срок от 1 до 7 дней</span>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[760px] pb-7 pt-5 md:my-auto md:py-14 lg:py-16"
        >
          <p className="text-[11px] font-semibold uppercase text-electric-cyan md:text-xs">
            Дизайн презентаций
          </p>
          <h1 className="mt-3 max-w-[760px] font-heading text-[2rem] font-medium leading-[1.03] text-frost min-[375px]:text-[2.125rem] sm:text-[2.5rem] md:mt-5 md:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
            <span className="block">Слайды, которые</span>
            {" "}
            <span className="block">держат внимание.</span>
          </h1>
          <p className="mt-4 max-w-[620px] text-pretty text-base leading-6 text-frost/75 md:mt-6 md:text-lg md:leading-8 md:text-frost/80">
            Структура. Текст. Дизайн. Готовый файл.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-2 min-[360px]:grid-cols-2 md:mt-8 md:flex md:flex-row md:gap-3">
            <TrackedLink
              href="/portfolio"
              goal="hero_cases_click"
              className="focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-frost bg-frost px-4 text-[13px] font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:border-electric-cyan hover:bg-electric-cyan min-[375px]:text-sm md:px-6"
            >
              Работы
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </TrackedLink>
            <TrackedLink
              href="/contact"
              goal="hero_contact_click"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-frost/35 bg-ink-950 px-4 text-[13px] font-semibold text-frost transition hover:-translate-y-0.5 hover:border-electric-cyan hover:text-electric-cyan min-[375px]:text-sm md:bg-ink-950/70 md:px-6"
            >
              Обсудить проект
            </TrackedLink>
          </div>
        </motion.div>

        <div className="grid gap-4 border-t border-electric-cyan/30 pt-4 text-[11px] text-frost/60 sm:grid-cols-[1fr_auto] sm:items-end md:text-xs md:text-frost/65">
          <div className="flex items-center gap-3">
            <ArrowDownRight className="h-4 w-4 text-electric-cyan" aria-hidden="true" />
            <span>PowerPoint · Figma · Google Slides</span>
          </div>
          <TrackedLink
            href="/portfolio/chess-jazz"
            goal="case_open"
            goalParams={{ case: "chess-jazz", source: "hero_feature" }}
            className="focus-ring group hidden min-h-11 items-center gap-2 rounded-sm font-semibold text-frost transition hover:text-electric-cyan sm:inline-flex sm:justify-self-end"
          >
            <span className="text-electric-cyan">01</span>
            Chess & Jazz
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
