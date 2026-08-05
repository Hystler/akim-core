"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PortfolioCard } from "@/components/sections/PortfolioCard";
import { MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PublishedPortfolioItem } from "@/data/portfolio";

type PortfolioPreviewProps = {
  items: PublishedPortfolioItem[];
};

const cardTilts = [
  "-rotate-[0.35deg] md:-rotate-[1.25deg]",
  "rotate-[0.25deg] md:rotate-[1deg]",
  "-rotate-[0.2deg] md:-rotate-[0.6deg]",
  "rotate-[0.25deg] md:rotate-[0.75deg]",
  "-rotate-[0.3deg] md:-rotate-[1deg]",
  "rotate-[0.2deg] md:rotate-[0.55deg]"
];

export function PortfolioPreview({ items }: PortfolioPreviewProps) {
  const rows = [items.slice(0, 3), items.slice(3, 6)].filter(
    (row) => row.length > 0
  );

  return (
    <MotionSection className="bg-base-texture overflow-hidden py-20 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionHeading
              eyebrow="The Archive"
              title="Работы, которые хочется открыть."
              text="Атмосфера, цифры, образ и сила."
            />
            <p className="mt-3 font-serif text-2xl font-medium italic text-burgundy sm:text-3xl">
              Шесть разных историй.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="focus-ring w-fit border-b border-main/35 pb-1 text-sm font-bold text-main transition hover:border-burgundy hover:text-burgundy"
          >
            Все кейсы
          </Link>
        </div>

        <motion.div variants={staggerContainer} className="mt-14 sm:mt-20">
          {rows.map((row, rowIndex) => (
            <div
              key={row[0].slug}
              className={`flex flex-col items-stretch px-1 md:flex-row md:items-start md:justify-center md:px-0 ${
                rowIndex === 0 ? "" : "-mt-6 md:-mt-10"
              }`}
            >
              {row.map((item, itemIndex) => {
                const absoluteIndex = rowIndex * 3 + itemIndex;

                return (
                  <motion.div
                    key={item.slug}
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    style={{ zIndex: absoluteIndex + 1 }}
                    className={`relative w-full origin-center first:mt-0 [&:not(:first-child)]:-mt-6 md:w-[36%] md:[&:not(:first-child)]:-ml-8 md:[&:not(:first-child)]:mt-8 ${
                      cardTilts[absoluteIndex] ?? ""
                    }`}
                  >
                    <PortfolioCard item={item} priority={absoluteIndex < 2} />
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center sm:mt-20">
          <Link
            href="/portfolio"
            className="focus-ring inline-flex min-h-12 items-center justify-center border border-burgundy bg-burgundy px-7 text-sm font-bold text-paper shadow-press transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl"
          >
            Смотреть весь архив
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
