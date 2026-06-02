export type Project = {
  title: string;
  description: string;
  role: string;
  artifact: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Personal Digital Portfolio",
    description:
      "Личный сайт-витрина с новой структурой, UX-логикой и визуальной упаковкой под personal brand.",
    role: "Digital product / brand structure",
    artifact: "Сайт + структура подачи",
    tags: ["UX", "Brand", "Next.js"]
  },
  {
    title: "AI-агенты и CLI-системы",
    description:
      "Промты, сценарии и технические задания для AI-ассистентов и CLI-разработки.",
    role: "AI architect / prompt engineer",
    artifact: "Prompt system + prototype logic",
    tags: ["AI", "Automation", "Prompts"]
  },
  {
    title: "Финансовая модель франшизы",
    description:
      "Юнит-экономика, структура расходов, сценарии запуска и презентационная упаковка для fast food проекта.",
    role: "Финансовая структура / упаковка",
    artifact: "Модель + логика презентации",
    tags: ["Finance", "Model", "Strategy"]
  },
  {
    title: "Business Process Architecture",
    description:
      "Разбор процессов, ролей, задач и операционной логики для команды и запуска.",
    role: "Business analyst / process architect",
    artifact: "Карта процессов + регламенты",
    tags: ["BPM", "CJM", "Dashboards"]
  },
  {
    title: "Event Production & Coordination",
    description:
      "Координация production-процессов, площадок, подрядчиков, таймингов и задач.",
    role: "Project / production coordination",
    artifact: "План, тайминг, структура реализации",
    tags: ["Events", "PM", "Timing"]
  },
  {
    title: "Presentations & Commercial Proposals",
    description:
      "Структура проекта, коммерческая логика, storytelling и визуальная подача для презентаций.",
    role: "Business packaging / narrative",
    artifact: "Deck + offer structure",
    tags: ["Decks", "Offer", "Design"]
  }
];
