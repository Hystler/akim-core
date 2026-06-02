"use client";

import type { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cardReveal } from "./MotionPrimitives";

type CaseCardProps = {
  project: Project;
  index: number;
};

export function CaseCard({ project, index }: CaseCardProps) {
  return (
    <motion.article
      variants={cardReveal}
      whileHover={{ y: -8 }}
      data-cursor="hover"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-950/76 p-6 transition-colors duration-300 hover:border-electric-cyan/45 hover:bg-ink-950/92 hover:shadow-glow"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-electric-cyan via-electric-blue to-electric-violet opacity-80" />
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-semibold text-muted">
          Case {String(index + 1).padStart(2, "0")}
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-electric-cyan transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-7 text-2xl font-semibold tracking-tight text-frost">{project.title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>

      <div className="mt-7 grid gap-3 border-y border-white/10 py-5">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Role</p>
          <p className="mt-2 text-sm font-semibold text-frost">{project.role}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Artifact</p>
          <p className="mt-2 text-sm font-semibold text-frost">{project.artifact}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href="/contact"
        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-electric-cyan transition hover:text-frost"
      >
        Смотреть
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </motion.article>
  );
}
