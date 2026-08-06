"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { PortfolioCard } from "@/components/sections/PortfolioCard";
import {
  portfolioFilters,
  type PortfolioFilter as PortfolioFilterType,
  type PublishedPortfolioItem
} from "@/data/portfolio";

type PortfolioFilterProps = {
  items: PublishedPortfolioItem[];
};

export function PortfolioFilter({ items }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioFilterType["value"]>("all");
  const shouldReduceMotion = useReducedMotion();

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);
  const availableFilters = useMemo(
    () =>
      portfolioFilters.filter(
        (filter) =>
          filter.value === "all" ||
          items.some((item) => item.category === filter.value)
      ),
    [items]
  );

  return (
    <section id="cases-grid" className="scroll-mt-24 bg-base-texture pb-20 sm:pb-28">
      <div className="section-shell">
        <div className="border-y border-main/20 py-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1" role="group" aria-label="Фильтры кейсов">
            {availableFilters.map((filter) => {
              const isActive = activeCategory === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(filter.value)}
                    className={`focus-ring relative min-h-12 rounded-sm text-sm font-bold transition-colors ${
                    isActive
                      ? "text-burgundy after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-burgundy"
                      : "text-main/70 hover:text-main"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Показано кейсов: {filteredItems.length}
        </p>

        <motion.div layout className="mt-12 grid min-w-0 gap-7 md:grid-cols-2 md:gap-9">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.slug}
                layout
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.22,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="min-w-0"
              >
                <PortfolioCard item={item} priority={index < 2} layoutIndex={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
