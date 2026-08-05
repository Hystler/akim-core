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
    <section className="relative isolate min-h-[calc(100svh-72px)] overflow-hidden border-b border-electric-cyan/25 bg-ink-950">
      <Image
        src="/images/chess-jazz-hero.webp"
        alt="Вечерний сад с камерной джазовой сценой и шахматной партией"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurDataUrl}
        className="-z-30 object-cover object-[68%_50%] lg:object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#02100c]/65 lg:bg-[#02100c]/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[url('/images/matte-paper-texture.webp')] bg-[length:520px_520px] opacity-20 mix-blend-multiply"
      />

      <div className="section-shell flex min-h-[calc(100svh-72px)] flex-col py-6 sm:py-8 lg:py-10">
        <div className="flex items-center justify-between gap-6 border-b border-electric-cyan/30 pb-4 text-[11px] font-semibold uppercase text-frost/65">
          <span>Аким Коваленко</span>
          <span className="text-right text-electric-cyan">Дизайн презентаций</span>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="my-auto max-w-[760px] py-10 sm:py-14 lg:py-16"
        >
          <p className="text-xs font-semibold uppercase text-electric-cyan">
            Презентации для бизнеса
          </p>
          <h1 className="mt-5 text-balance font-heading text-[2.65rem] font-medium leading-[0.98] text-frost sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
            Сложное становится ясным. И начинает убеждать.
          </h1>
          <p className="mt-6 max-w-[620px] text-pretty text-base leading-7 text-frost/80 sm:text-lg sm:leading-8">
            Собираю структуру, редактирую тексты и создаю презентации под
            ключ: от сырых материалов до готового файла.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="/portfolio"
              goal="hero_cases_click"
              className="focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-frost bg-frost px-6 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:border-electric-cyan hover:bg-electric-cyan"
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
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-frost/45 bg-ink-950/70 px-6 text-sm font-semibold text-frost transition hover:-translate-y-0.5 hover:border-electric-cyan hover:text-electric-cyan"
            >
              Обсудить проект
            </TrackedLink>
          </div>
        </motion.div>

        <div className="grid gap-4 border-t border-electric-cyan/30 pt-4 text-xs text-frost/65 sm:grid-cols-[1fr_auto] sm:items-end">
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
