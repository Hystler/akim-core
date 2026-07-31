"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TrackedLink } from "@/components/ui/TrackedLink";

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAoLDAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

const heroVisuals = [
  {
    src: "/portfolio/chess-jazz/chess-jazz-cover.png",
    className:
      "left-[42%] top-[12%] z-20 w-[52%] -rotate-1 lg:left-[48%] lg:w-[46%]",
    priority: true
  },
  {
    src: "/portfolio/velvet-whisper/velvet-whisper-cover.png",
    className:
      "right-[-8%] top-[4%] z-10 hidden w-[30%] rotate-2 sm:block lg:right-[-2%]",
    priority: false
  },
  {
    src: "/case-assets/jk-finance/cover",
    className:
      "bottom-[7%] right-[3%] z-30 w-[42%] rotate-1 lg:bottom-[6%] lg:w-[38%]",
    priority: false
  },
  {
    src: "/portfolio/tatyana-vesennyaya/tatyana-vesennyaya-cover.png",
    className:
      "bottom-[5%] left-[38%] z-10 hidden w-[30%] -rotate-2 md:block lg:left-[43%]",
    priority: false
  }
];

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[calc(88svh-72px)] overflow-hidden border-b border-white/10 bg-ink-950">
      <div className="absolute inset-0 -z-20 opacity-30 sm:opacity-55 lg:opacity-100">
        {heroVisuals.map((visual, index) => (
          <motion.div
            key={visual.src}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 16, scale: 0.985 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.42,
              delay: 0.08 + index * 0.05,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`group absolute aspect-[16/9] overflow-hidden rounded-md border border-white/15 bg-ink-900 shadow-glow ${visual.className}`}
          >
            <Image
              src={visual.src}
              alt=""
              fill
              priority={visual.priority}
              sizes="(min-width: 1024px) 46vw, (min-width: 640px) 55vw, 80vw"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              className="object-cover transition duration-300 group-hover:scale-[1.012]"
            />
          </motion.div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#070809_0%,rgba(7,8,9,0.98)_34%,rgba(7,8,9,0.76)_55%,rgba(7,8,9,0.18)_100%),linear-gradient(0deg,#070809_0%,transparent_38%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-[36%] -z-10 hidden w-px bg-gradient-to-b from-transparent via-electric-cyan/30 to-transparent lg:block"
      />

      <div className="section-shell flex min-h-[calc(88svh-72px)] flex-col justify-between py-6 sm:py-8 lg:py-4">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl pb-8 pt-4 sm:pb-10 sm:pt-6 lg:max-w-[760px] lg:pb-6 lg:pt-4"
        >
          <p className="text-xs font-semibold uppercase text-electric-cyan">
            Дизайн презентаций и digital-продуктов
          </p>
          <h1 className="text-balance mt-5 font-heading text-[2rem] font-medium leading-[1.08] text-frost sm:text-5xl lg:text-[3.25rem] lg:leading-[1.04] 2xl:text-6xl">
            Помогаю бизнесу объяснять сложное, убеждать и продавать через сильную
            визуальную подачу
          </h1>
          <p className="text-pretty mt-5 max-w-2xl text-base leading-7 text-frost/75 sm:text-lg sm:leading-8">
            Создаю презентации, коммерческие предложения, лендинги и интерфейсы —
            от структуры и текстов до готового дизайна.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="/portfolio"
              goal="hero_cta_click"
              goalParams={{ action: "cases" }}
              className="focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-frost bg-frost px-6 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:bg-transparent hover:text-frost"
            >
              Смотреть кейсы
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </TrackedLink>
            <TrackedLink
              href="/contact"
              goal="hero_cta_click"
              goalParams={{ action: "contact" }}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 bg-ink-950/40 px-6 text-sm font-semibold text-frost backdrop-blur transition hover:-translate-y-0.5 hover:border-white/50"
            >
              Обсудить проект
            </TrackedLink>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-frost/75">
            PowerPoint · Figma · Google Slides · Web
          </p>
          <p className="text-xs text-muted">Аким Коваленко · удалённая работа</p>
        </div>
      </div>
    </section>
  );
}
