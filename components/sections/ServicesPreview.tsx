"use client";

import { motion } from "framer-motion";
import { Bot, CalendarClock, FileStack, GitBranch, Globe2 } from "lucide-react";
import { services } from "@/data/services";
import {
  cardReveal,
  MotionSection,
  staggerContainer
} from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Bot, Globe2, GitBranch, CalendarClock, FileStack];

export function ServicesPreview() {
  return (
    <MotionSection className="bg-paper py-20 text-ink-950 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:max-w-4xl">
          <SectionHeading
            eyebrow="Capabilities"
            index="02"
            tone="light"
            title="От стратегии до собранного результата"
            text="Подключаюсь там, где нужно разобраться в задаче, найти сильную структуру и довести её до конкретного цифрового или физического артефакта."
          />
        </div>

        <motion.div variants={staggerContainer} className="mt-14 border-t border-ink-950/20">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={service.title}
                variants={cardReveal}
                className="group grid gap-5 border-b border-ink-950/20 py-7 transition-colors hover:bg-white/35 sm:grid-cols-[56px_0.8fr_1.2fr] sm:items-center sm:px-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-ink-950/20 text-ink-950">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-medium text-ink-800/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-medium text-ink-950">{service.title}</h3>
                </div>
                <p className="text-sm leading-7 text-ink-800/70">{service.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </MotionSection>
  );
}
