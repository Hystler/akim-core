"use client";

import { portfolioCategories } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { cardReveal, MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PortfolioPreview() {
  return (
    <MotionSection className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Портфолио по типам задач"
            text="На главной — только быстрый обзор категорий. Полная страница позволяет отфильтровать работы по направлению."
          />
          <Link href="/portfolio" className="text-sm font-semibold text-electric-cyan transition hover:text-frost">
            Смотреть портфолио →
          </Link>
        </div>

        <motion.div variants={staggerContainer} className="mt-12 grid gap-4 md:grid-cols-3">
          {portfolioCategories.slice(0, 3).map((item) => (
            <motion.article
              key={item.name}
              variants={cardReveal}
              whileHover={{ y: -6 }}
              data-cursor="hover"
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition hover:border-electric-blue/50 hover:bg-white/[0.07] hover:shadow-glow"
            >
              <h3 className="text-xl font-semibold text-frost">{item.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
