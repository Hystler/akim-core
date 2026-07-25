"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { CaseCard } from "@/components/ui/CaseCard";
import { MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsPreview() {
  return (
    <MotionSection className="bg-ink-900 py-20 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projects"
            index="03"
            title="Задачи, где важна не форма, а работающая система"
            text="От AI-сценария до production-плана: разбираю контекст, проектирую логику и оставляю после себя понятный артефакт."
          />
          <Link href="/projects" className="border-b border-white/25 pb-1 text-sm font-semibold text-frost transition hover:border-frost">
            Все проекты
          </Link>
        </div>

        <motion.div variants={staggerContainer} className="mt-12 border-t border-white/15">
          {projects.slice(0, 3).map((project, index) => (
            <CaseCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
