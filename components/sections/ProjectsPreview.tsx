"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { CaseCard } from "@/components/ui/CaseCard";
import { MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsPreview() {
  return (
    <MotionSection className="relative overflow-hidden bg-ink-900/50 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_20%,rgba(59,130,246,0.11),transparent_34%),radial-gradient(ellipse_at_18%_88%,rgba(139,92,246,0.1),transparent_36%)]" />
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Preview проектов"
            text="Несколько примеров, где результатом становится конкретный артефакт: сайт, AI-сценарий, модель, карта процессов или production-план."
          />
          <Link href="/projects" className="text-sm font-semibold text-electric-cyan transition hover:text-frost">
            Все проекты →
          </Link>
        </div>

        <motion.div variants={staggerContainer} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <CaseCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
