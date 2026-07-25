"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  portfolioFilters,
  type PortfolioFilter as PortfolioFilterType,
  type PortfolioItem
} from "@/data/portfolio";
import { PortfolioCard } from "@/components/sections/PortfolioCard";
import {
  cardReveal,
  MotionSection,
  staggerContainer
} from "@/components/ui/MotionPrimitives";

type PortfolioFilterProps = {
  items: PortfolioItem[];
};

export function PortfolioFilter({ items }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioFilterType["value"]>("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <MotionSection className="pb-20 sm:pb-28">
      <div className="section-shell">
        <div className="-mx-5 overflow-x-auto border-y border-white/10 px-5 sm:mx-0 sm:px-0">
          <div className="flex min-w-max items-center gap-7">
            {portfolioFilters.map((filter) => {
              const isActive = activeCategory === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(filter.value)}
                  className={`focus-ring relative rounded-sm py-5 text-sm transition-colors ${
                    isActive
                      ? "text-frost after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-frost"
                      : "text-muted hover:text-frost"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          variants={staggerContainer}
          className="mt-12 grid gap-x-5 gap-y-12 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                variants={cardReveal}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 8, transition: { duration: 0.16 } }}
              >
                <PortfolioCard item={item} priority={index < 3} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 ? (
          <div className="mt-10 border-t border-white/10 py-10 text-sm text-muted">
            В этом направлении кейсы скоро появятся.
          </div>
        ) : null}
      </div>
    </MotionSection>
  );
}
