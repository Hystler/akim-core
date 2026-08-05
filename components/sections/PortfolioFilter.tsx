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
    <section className="bg-base-texture pb-20 sm:pb-28">
      <div className="section-shell">
        <div className="scrollbar-hide -mx-5 overflow-x-auto border-y border-main/20 px-5 sm:mx-0 sm:px-0">
          <div className="flex min-w-max items-center gap-7" role="group" aria-label="Фильтры кейсов">
            {availableFilters.map((filter) => {
              const isActive = activeCategory === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(filter.value)}
                  className={`focus-ring relative min-h-14 text-sm font-bold transition-colors ${
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

        <motion.div layout className="mt-14 flex flex-wrap items-start px-1 md:px-0">
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
                className={`relative w-full origin-center first:mt-0 [&:not(:first-child)]:-mt-5 md:w-[52%] md:[&:not(:first-child)]:mt-10 md:odd:rotate-[0.65deg] md:even:-ml-[4%] md:even:mt-24 md:even:-rotate-[0.75deg] ${
                  index % 4 === 2 ? "md:translate-y-3" : ""
                }`}
                style={{ zIndex: index + 1 }}
              >
                <PortfolioCard item={item} priority={index < 2} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
