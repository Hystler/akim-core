"use client";

import { services } from "@/data/services";
import { Bot, CalendarClock, FileStack, GitBranch, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import { cardReveal, MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Bot, Globe2, GitBranch, CalendarClock, FileStack];

export function ServicesPreview() {
  return (
    <MotionSection className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 h-80 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_62%)]" />
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:max-w-3xl">
          <SectionHeading
            eyebrow="Directions"
            title="Где я включаюсь"
            text="Короткая карта направлений: от AI-сценариев и сайтов до процессов, презентаций и production-координации."
          />
        </div>

        <motion.div variants={staggerContainer} className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={service.title}
                variants={cardReveal}
                whileHover={{ y: -8 }}
                data-cursor="hover"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-electric-cyan/45 hover:bg-white/[0.07] hover:shadow-glow"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electric-cyan via-electric-blue to-transparent" />
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-ink-950/70 text-electric-cyan">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-frost">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </MotionSection>
  );
}
