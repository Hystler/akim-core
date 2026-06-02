export type Service = {
  title: string;
  description: string;
  accent: "blue" | "violet" | "cyan";
};

export const services: Service[] = [
  {
    title: "AI & Automation",
    description: "AI-агенты, промты, CLI-задачи, автоматизация процессов.",
    accent: "cyan"
  },
  {
    title: "Sites & Digital Products",
    description: "Лендинги, сайты-визитки, MVP, digital-системы.",
    accent: "blue"
  },
  {
    title: "Business Analysis & Processes",
    description: "Бизнес-анализ, структура процессов, регламенты, CJM, dashboards.",
    accent: "violet"
  },
  {
    title: "Event Production & Project Management",
    description:
      "Продюсирование мероприятий, координация проектов, площадки, подрядчики, тайминги.",
    accent: "cyan"
  },
  {
    title: "Business Packaging",
    description: "Презентации, КП, финансовые модели, структура оффера.",
    accent: "blue"
  }
];
