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
    <MotionSection className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Первые работы"
            text="Три стартовых кейса Akim Core: презентации, лендинг и визуальная упаковка проектов."
          />
          <Link href="/portfolio" className="text-sm font-semibold text-electric-cyan transition hover:text-frost">
            Смотреть портфолио →
          </Link>
        </div>

        <motion.div variants={staggerContainer} className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <motion.div key={item.id} variants={cardReveal}>
              <PortfolioCard item={item} compact />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
