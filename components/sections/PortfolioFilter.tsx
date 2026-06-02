"use client";

import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategory
} from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cardReveal, MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";

const allLabel = "All";

export function PortfolioFilter() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | typeof allLabel>(allLabel);

  const filteredItems = useMemo(() => {
    if (activeCategory === allLabel) return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <MotionSection className="pb-20 sm:pb-24">
      <div className="section-shell">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(allLabel)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeCategory === allLabel
                ? "border-electric-cyan/40 bg-electric-cyan/10 text-frost shadow-glow"
                : "border-white/10 bg-white/[0.04] text-muted hover:text-frost"
            }`}
          >
            All
          </button>
          {portfolioCategories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => setActiveCategory(category.name)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeCategory === category.name
                  ? "border-electric-cyan/40 bg-electric-cyan/10 text-frost shadow-glow"
                  : "border-white/10 bg-white/[0.04] text-muted hover:text-frost"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div layout variants={staggerContainer} className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                key={item.title}
                layout
                variants={cardReveal}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 10, transition: { duration: 0.22 } }}
                whileHover={{ y: -7 }}
                data-cursor="hover"
                className="group rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition hover:border-electric-cyan/45 hover:bg-white/[0.07] hover:shadow-glow"
              >
                <span className="rounded-full border border-white/10 bg-ink-950/60 px-3 py-1 text-xs font-semibold text-electric-cyan">
                  {item.category}
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-frost">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Artifact</p>
                  <p className="mt-2 text-sm font-semibold text-frost">{item.artifact}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </MotionSection>
  );
}
