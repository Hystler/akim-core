"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PortfolioCard } from "@/components/sections/PortfolioCard";
import { MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";
import type { PublishedPortfolioItem } from "@/data/portfolio";

type PortfolioPreviewProps = {
  items: PublishedPortfolioItem[];
};

export function PortfolioPreview({ items }: PortfolioPreviewProps) {
  const visibleItems = items.slice(0, 4);

  return (
    <MotionSection className="bg-base-texture py-20 sm:py-28">
      <div className="section-shell">
        <h2 className="font-heading text-4xl font-bold leading-tight text-main sm:text-6xl">
          Выбранные работы
        </h2>

        <motion.div
          variants={staggerContainer}
          className="mt-10 grid min-w-0 gap-7 md:grid-cols-2 md:gap-9 sm:mt-14"
        >
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.slug}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0 }
              }}
              className="min-w-0"
            >
              <PortfolioCard item={item} priority={index < 2} layoutIndex={index} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 border-t border-main/20 pt-6 sm:mt-14">
          <Link
            href="/portfolio"
            className="focus-ring group inline-flex min-h-11 items-center gap-2 text-sm font-bold text-main transition hover:text-burgundy"
          >
            Все работы
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
