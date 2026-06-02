export type RolePanel = {
  title: string;
  description: string;
  accent: "blue" | "violet" | "cyan";
};

export const roles: RolePanel[] = [
  {
    title: "AI-сборщик",
    description:
      "Создаю промты, сценарии, CLI-задачи и прототипы AI-инструментов.",
    accent: "cyan"
  },
  {
    title: "Бизнес-аналитик",
    description:
      "Раскладываю процессы, роли, задачи, регламенты и операционную логику.",
    accent: "blue"
  },
  {
    title: "Digital-продюсер",
    description: "Собираю сайт, презентацию, упаковку и структуру запуска.",
    accent: "violet"
  },
  {
    title: "Production / event manager",
    description:
      "Координирую людей, площадки, подрядчиков, тайминги и реализацию.",
    accent: "cyan"
  }
];
