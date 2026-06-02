import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { PortfolioCard } from "@/components/sections/PortfolioCard";
import { portfolioItems } from "@/data/portfolio";

const item = portfolioItems.find((portfolioItem) => portfolioItem.id === "tatyana-vesennyaya");

export const metadata: Metadata = {
  title: item?.title ?? "Лендинг",
  description: item?.description
};

function publicFileExists(path: string) {
  return existsSync(join(process.cwd(), "public", path.replace(/^\//, "")));
}

export default function TatyanaVesennyayaPage() {
  if (!item) return null;

  const cardItem = {
    ...item,
    coverAvailable: publicFileExists(item.cover),
    fileAvailable: item.file ? publicFileExists(item.file) : false
  };

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-electric-cyan">
              Landing
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-frost sm:text-6xl">
              {item.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">{item.description}</p>
            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 text-sm">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Client
                </p>
                <p className="mt-2 font-semibold text-frost">
                  {item.client} / {item.year}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Role
                </p>
                <p className="mt-2 font-semibold text-frost">{item.role}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Artifact
                </p>
                <p className="mt-2 font-semibold text-frost">{item.artifact}</p>
              </div>
            </div>
          </div>

          <PortfolioCard item={cardItem} />
        </div>
      </div>
    </section>
  );
}
