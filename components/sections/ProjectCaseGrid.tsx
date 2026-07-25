"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { CaseCard } from "@/components/ui/CaseCard";
import { MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";

export function ProjectCaseGrid() {
  return (
    <MotionSection className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <div className="section-shell">
        <motion.div variants={staggerContainer} className="border-t border-white/15">
          {projects.map((project, index) => (
            <CaseCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
