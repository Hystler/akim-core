"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { PrimaryLink } from "@/components/ui/PrimaryLink";

const capabilities = ["AI Systems", "Digital Products", "Business Analysis", "Event Production"];

type HomeHeroProps = {
  hasProfileImage?: boolean;
};

export function HomeHero({ hasProfileImage = false }: HomeHeroProps) {
  const [profileImageReady, setProfileImageReady] = useState(hasProfileImage);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate overflow-hidden bg-premium-mesh pt-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_22%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(139,92,246,0.18),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(59,130,246,0.12),transparent_34%)]"
      />

      <div className="section-shell grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm text-muted shadow-glow backdrop-blur">
            <Sparkles className="h-4 w-4 text-electric-cyan" aria-hidden="true" />
            <span>Digital Builder · AI Systems · Business Analysis · Event Production</span>
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-electric-cyan">
            Аким Коваленко
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-frost sm:text-6xl lg:text-7xl">
            Собираю идеи в digital-системы, презентации и запуски
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            Работаю на стыке AI, бизнес-аналитики, сайтов, продакшна и проектного
            управления. Помогаю быстро превратить хаос в структуру, прототип и понятный
            результат.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href="/projects">Смотреть проекты</PrimaryLink>
            <PrimaryLink href="/contact" variant="secondary">
              Связаться
            </PrimaryLink>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {capabilities.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 + index * 0.08, duration: 0.45 }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.78, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
        >
          <div className="hero-visual-border relative overflow-hidden rounded-[1.75rem] bg-ink-900/72 p-2 shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,rgba(15,23,42,0.82),rgba(8,10,15,0.92))]">
              {profileImageReady ? (
                <>
                  <Image
                    src="/images/profile.jpg"
                    alt="Аким Коваленко"
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, (min-width: 640px) 420px, 88vw"
                    className="object-cover"
                    onError={() => setProfileImageReady(false)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/72 via-ink-950/12 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(34,211,238,0.16),transparent_30%)]" />
                </>
              ) : (
                <div className="flex h-full items-center justify-center p-8 text-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-electric-cyan">
                      Photo
                    </p>
                    <p className="mt-4 text-lg font-semibold text-frost">
                      Добавить фото: public/images/profile.jpg
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
