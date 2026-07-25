"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { PrimaryLink } from "@/components/ui/PrimaryLink";

const capabilities = ["AI Systems", "Digital Products", "Business Analysis", "Event Production"];

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative isolate min-h-[calc(92svh-72px)] overflow-hidden border-b border-white/10 bg-ink-950"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src="/portfolio/chess-jazz/chess-jazz-cover.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,6,7,0.96)_0%,rgba(5,6,7,0.8)_42%,rgba(5,6,7,0.2)_78%),linear-gradient(0deg,rgba(5,6,7,0.9)_0%,transparent_46%,rgba(5,6,7,0.2)_100%)]"
      />

      <div className="section-shell flex min-h-[calc(92svh-72px)] flex-col justify-between py-8 sm:py-10">
        <div className="flex items-center justify-between gap-6 text-[11px] font-medium uppercase tracking-[0.16em] text-frost/70">
          <span>Digital Builder / Moscow</span>
          <span className="hidden sm:block">Independent Practice / 2026</span>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl py-14 sm:py-20"
        >
          <h1 className="text-balance text-6xl font-medium leading-[0.9] text-frost sm:text-8xl lg:text-9xl">
            AKIM CORE
          </h1>
          <p className="text-pretty mt-7 max-w-2xl text-lg leading-8 text-frost/80 sm:text-xl">
            Собираю AI-системы, цифровые продукты, презентации и запуски: от неясной
            идеи до работающего артефакта.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href="/portfolio">Смотреть работы</PrimaryLink>
            <PrimaryLink href="/contact" variant="secondary">
              Обсудить задачу
            </PrimaryLink>
          </div>
        </motion.div>

        <div className="grid gap-5 border-t border-white/20 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-8">
            {capabilities.map((item) => (
              <span key={item} className="text-xs font-medium text-frost/65">
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs text-frost/60">
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
            <span>Selected work / Chess &amp; Jazz</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
