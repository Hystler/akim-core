"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TrackedLink } from "@/components/ui/TrackedLink";

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAoLDAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden border-b border-white/15 bg-ink-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/images/matte-paper-texture.webp')] bg-[length:520px_520px] opacity-45 mix-blend-soft-light"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/30"
      />

      <div className="section-shell relative min-h-[calc(88svh-72px)] lg:grid lg:grid-cols-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col justify-between py-7 sm:py-10 lg:col-span-7 lg:min-h-[calc(88svh-72px)] lg:pr-12 lg:py-12 xl:pr-20"
        >
          <div className="flex items-center justify-between gap-6 border-b border-white/20 pb-4 text-[11px] font-semibold uppercase text-frost/60">
            <span>Презентации для бизнеса</span>
            <span className="hidden sm:inline">Москва · удалённо</span>
          </div>

          <div className="py-7 sm:py-12 lg:py-8">
            <p className="text-xs font-semibold uppercase text-electric-cyan">
              Аким Коваленко · дизайнер презентаций
            </p>
            <h1 className="mt-6 max-w-[820px] font-heading text-[2.35rem] font-medium leading-[0.98] text-frost sm:text-6xl lg:text-[4rem] xl:text-[4.8rem]">
              Презентации, в которых мысль становится видимой
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-frost/[0.72] sm:text-lg sm:leading-8">
              Структура, аргументация и дизайн — от сырых материалов до
              готового файла.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/portfolio"
                goal="hero_cases_click"
                className="focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-frost bg-frost px-6 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:bg-electric-cyan"
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
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-white/30 bg-ink-950 px-6 text-sm font-semibold text-frost transition hover:-translate-y-0.5 hover:border-frost"
              >
                Обсудить проект
              </TrackedLink>
            </div>
          </div>

          <div className="hidden grid-cols-[1fr_auto] items-end gap-6 border-t border-white/20 pt-5 lg:grid">
            <div>
              <p className="text-xs uppercase text-frost/45">От материала до файла</p>
              <p className="mt-2 text-sm text-frost/80">
                Структура · Storytelling · Дизайн
              </p>
            </div>
            <ArrowDownRight className="h-5 w-5 text-electric-cyan" aria-hidden="true" />
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative -mx-5 border-t border-white/15 sm:-mx-8 lg:col-span-5 lg:mx-0 lg:border-l lg:border-t-0"
        >
          <TrackedLink
            href="/portfolio/chess-jazz"
            goal="case_open"
            goalParams={{ case: "chess-jazz", source: "hero_feature" }}
            className="focus-ring group relative block aspect-[2/1] min-h-full overflow-hidden bg-ink-900 md:aspect-[7/2] lg:aspect-auto"
          >
            <Image
              src="/portfolio/chess-jazz/chess-jazz-slide-05.png"
              alt="Фрагмент презентации Chess & Jazz с вечерней фестивальной сценой"
              fill
              priority
              sizes="(min-width: 1280px) 520px, (min-width: 1024px) 40vw, 100vw"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              className="object-cover object-[73%_50%] saturate-[0.72] contrast-[0.94] transition duration-300 group-hover:saturate-[0.82]"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-black/25" />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/matte-paper-texture.webp')] bg-[length:460px_460px] opacity-30 mix-blend-multiply"
            />

            <span className="absolute inset-x-0 bottom-0 grid grid-cols-[1fr_auto] items-end gap-5 border-t border-white/25 bg-ink-950 px-5 py-4 sm:px-6">
              <span>
                <span className="block text-[10px] font-semibold uppercase text-electric-cyan">
                  Избранный кейс · 01
                </span>
                <span className="mt-1 block font-heading text-lg font-medium text-frost">
                  Chess & Jazz
                </span>
              </span>
              <span className="text-xs text-frost/55">10 слайдов · 2026</span>
            </span>
          </TrackedLink>
        </motion.div>
      </div>
    </section>
  );
}
