import type { PublishedPortfolioItem } from "@/data/portfolio";

export type CaseSectionId =
  | "task"
  | "problem"
  | "solution"
  | "deliverables"
  | "visual-system"
  | "gallery"
  | "result";

export type CaseSectionPlanItem = {
  id: CaseSectionId;
  label: string;
  number: string;
};

const sectionDefinitions: Array<{
  id: CaseSectionId;
  label: string;
  isVisible: (item: PublishedPortfolioItem) => boolean;
}> = [
  { id: "task", label: "Задача", isVisible: (item) => Boolean(item.task) },
  { id: "problem", label: "Было", isVisible: (item) => Boolean(item.problem) },
  { id: "solution", label: "Решение", isVisible: (item) => Boolean(item.solution) },
  {
    id: "deliverables",
    label: "Работа",
    isVisible: (item) => item.deliverables.length > 0
  },
  {
    id: "visual-system",
    label: "Система",
    isVisible: (item) => Boolean(item.visualSystem.colors)
  },
  { id: "gallery", label: "Крупно", isVisible: (item) => item.gallery.length > 0 },
  { id: "result", label: "Итог", isVisible: (item) => item.result.length > 0 }
];

export function getCaseSectionPlan(item: PublishedPortfolioItem): CaseSectionPlanItem[] {
  return sectionDefinitions
    .filter((section) => section.isVisible(item))
    .map((section, index) => ({
      id: section.id,
      label: section.label,
      number: String(index + 1).padStart(2, "0")
    }));
}

export function getCaseSection(
  plan: CaseSectionPlanItem[],
  id: CaseSectionId
): CaseSectionPlanItem {
  const section = plan.find((entry) => entry.id === id);
  if (!section) {
    throw new Error(`Case section "${id}" is missing from the rendered plan.`);
  }
  return section;
}
