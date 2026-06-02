"use client";

import {
  portfolioFilters,
  type PortfolioItem,
  type PortfolioFilter as PortfolioFilterType
} from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PortfolioCard } from "@/components/sections/PortfolioCard";
import { cardReveal, MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";

type PortfolioFilterProps = {
  items: PortfolioItem[];
};

export function PortfolioFilter({ items }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioFilterType["value"]>("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <MotionSection className="pb-20 sm:pb-24">
      <div className="section-shell">
        <div className="flex flex-wrap gap-2">
          {portfolioFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveCategory(filter.value)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeCategory === filter.value
                  ? "border-electric-cyan/40 bg-electric-cyan/10 text-frost shadow-glow"
                  : "border-white/10 bg-white/[0.04] text-muted hover:border-white/20 hover:text-frost"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div layout variants={staggerContainer} className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={cardReveal}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 10, transition: { duration: 0.18 } }}
              >
                <PortfolioCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-sm text-muted">
            В этом направлении кейсы скоро появятся.
          </div>
        ) : null}
      </div>
    </MotionSection>
  );
}
