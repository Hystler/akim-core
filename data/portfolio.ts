export type PortfolioCategory =
  | "Sites"
  | "AI Systems"
  | "Business Analysis"
  | "Presentations"
  | "Financial Models"
  | "Event Production";

export type PortfolioCategoryInfo = {
  name: PortfolioCategory;
  detail: string;
};

export type PortfolioItem = {
  title: string;
  category: PortfolioCategory;
  description: string;
  artifact: string;
  tags: string[];
};

export const portfolioCategories: PortfolioCategoryInfo[] = [
  {
    name: "Sites",
    detail: "Персональные сайты, лендинги, MVP и интерфейсы для запуска идей."
  },
  {
    name: "AI Systems",
    detail: "AI-ассистенты, промт-системы, CLI-сценарии и автоматизация задач."
  },
  {
    name: "Business Analysis",
    detail: "Процессы, регламенты, CJM, dashboard-логика и проектная структура."
  },
  {
    name: "Event Production",
    detail: "Production-планы, координация команд, подрядчиков, площадок и таймингов."
  },
  {
    name: "Presentations",
    detail: "Презентации, коммерческие предложения, проектная упаковка и storytelling."
  },
  {
    name: "Financial Models",
    detail: "Сценарии, юнит-экономика, финансовая логика и понятная подача чисел."
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Personal Digital Portfolio",
    category: "Sites",
    description:
      "Сайт-витрина для личного бренда с премиальной dark-подачей, структурой страниц и clear user journey.",
    artifact: "Next.js сайт + структура контента",
    tags: ["Next.js", "Brand", "UX"]
  },
  {
    title: "AI-агенты и CLI-системы",
    category: "AI Systems",
    description:
      "Промт-системы, сценарии и постановки задач для AI-ассистентов, CLI-разработки и автоматизации.",
    artifact: "Prompt system + prototype logic",
    tags: ["AI", "CLI", "Prompts"]
  },
  {
    title: "Business Process Architecture",
    category: "Business Analysis",
    description:
      "Разбор ролей, процессов, зон ответственности и логики работы команды в понятную операционную схему.",
    artifact: "Карта процессов + регламенты",
    tags: ["BPM", "CJM", "Operations"]
  },
  {
    title: "Presentations & Commercial Proposals",
    category: "Presentations",
    description:
      "Структура презентаций, коммерческих предложений и проектных материалов с ясной логикой и визуальной подачей.",
    artifact: "Deck + offer structure",
    tags: ["Decks", "Storytelling", "Offer"]
  },
  {
    title: "Финансовая модель франшизы",
    category: "Financial Models",
    description:
      "Юнит-экономика, расходы, сценарии запуска и презентационная логика для финансовой модели проекта.",
    artifact: "Модель + логика презентации",
    tags: ["Finance", "Model", "Scenarios"]
  },
  {
    title: "Event Production & Coordination",
    category: "Event Production",
    description:
      "Координация production-процессов, площадок, подрядчиков, таймингов и задач для реализации мероприятия.",
    artifact: "План, тайминг, структура реализации",
    tags: ["Events", "Production", "Timing"]
  }
];
