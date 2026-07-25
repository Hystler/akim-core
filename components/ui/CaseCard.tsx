"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { cardReveal } from "./MotionPrimitives";

type CaseCardProps = {
  project: Project;
  index: number;
};

export function CaseCard({ project, index }: CaseCardProps) {
  return (
    <motion.article
      variants={cardReveal}
      className="group grid gap-6 border-b border-white/15 py-8 transition-colors hover:bg-white/[0.025] sm:px-3 lg:grid-cols-[64px_0.72fr_1fr_0.7fr] lg:items-start"
    >
      <span className="text-xs font-medium text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <h3 className="text-2xl font-medium text-frost">{project.title}</h3>
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <p className="max-w-xl text-sm leading-7 text-muted">{project.description}</p>

      <div className="grid gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-muted">Role</p>
          <p className="mt-2 text-sm text-frost">{project.role}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-muted">Artifact</p>
          <p className="mt-2 text-sm text-frost">{project.artifact}</p>
        </div>
        <Link
          href="/contact"
          className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-frost"
        >
          Обсудить задачу
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  );
}
