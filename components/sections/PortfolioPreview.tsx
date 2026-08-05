"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PortfolioCard } from "@/components/sections/PortfolioCard";
import {
  MotionSection,
  staggerContainer
} from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PublishedPortfolioItem } from "@/data/portfolio";

type PortfolioPreviewProps = {
  items: PublishedPortfolioItem[];
};

export function PortfolioPreview({ items }: PortfolioPreviewProps) {
  return (
    <MotionSection className="bg-ink-950 py-20 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Избранные кейсы"
            title="Работы, в которых содержание и визуальная подача решают одну задачу"
            text="Шесть презентационных кейсов: события, спорт, городской продукт, fashion и инвесторская аналитика. Digital-продукты и лендинг доступны в полном каталоге."
          />
          <Link
            href="/portfolio"
            className="focus-ring w-fit rounded-sm border-b border-white/30 pb-1 text-sm font-semibold text-frost transition hover:border-frost"
          >
            Все кейсы
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          className="mt-12 grid gap-x-7 gap-y-14 md:grid-cols-2"
        >
          {items.map((item) => (
            <motion.div key={item.slug} variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
              <PortfolioCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-6 text-sm font-semibold text-frost transition hover:border-frost hover:bg-white/[0.04]"
          >
            Смотреть все кейсы
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
