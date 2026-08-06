"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CaseArchiveIntro } from "@/components/sections/CaseArchiveIntro";
import { PortfolioCard } from "@/components/sections/PortfolioCard";
import { MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";
import type { PublishedPortfolioItem } from "@/data/portfolio";

type PortfolioPreviewProps = {
  items: PublishedPortfolioItem[];
};

export function PortfolioPreview({ items }: PortfolioPreviewProps) {
  const visibleItems = items.slice(0, 4);

  return (
    <>
      <CaseArchiveIntro />
      <MotionSection className="bg-base-texture pb-20 sm:pb-28">
        <div className="section-shell">
          <motion.div
            variants={staggerContainer}
            className="grid min-w-0 gap-7 md:grid-cols-2 md:gap-9"
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

          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/portfolio"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-burgundy bg-burgundy px-7 text-sm font-bold text-paper shadow-press transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-tactile"
            >
              Смотреть все кейсы
            </Link>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
