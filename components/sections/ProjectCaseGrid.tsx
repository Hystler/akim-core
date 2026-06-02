"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { CaseCard } from "@/components/ui/CaseCard";
import { MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";

export function ProjectCaseGrid() {
  return (
    <MotionSection className="pb-20 sm:pb-24">
      <div className="section-shell">
        <motion.div variants={staggerContainer} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <CaseCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
