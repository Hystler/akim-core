"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PortfolioCard } from "@/components/sections/PortfolioCard";
import { cardReveal, MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PortfolioItem } from "@/data/portfolio";

type PortfolioPreviewProps = {
  items: PortfolioItem[];
};

export function PortfolioPreview({ items }: PortfolioPreviewProps) {
  return (
    <MotionSection className="bg-ink-950 py-20 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            index="01"
            title="Работы, которые можно рассмотреть в деталях"
            text="Презентации, лендинг и брендовая упаковка. Каждый кейс открыт целиком, без декоративных мокапов."
          />
          <Link href="/portfolio" className="border-b border-white/25 pb-1 text-sm font-semibold text-frost transition hover:border-frost">
            Все работы
          </Link>
        </div>

        <motion.div variants={staggerContainer} className="mt-12 grid gap-x-5 gap-y-10 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div key={item.id} variants={cardReveal}>
              <PortfolioCard item={item} compact priority={index === 0} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
