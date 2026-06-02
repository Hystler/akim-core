export type PortfolioItem = {
  id: string;
  title: string;
  category:
    | "presentation"
    | "landing"
    | "brand"
    | "ai"
    | "business-analysis"
    | "production";
  client: string;
  year: string;
  description: string;
  role: string;
  artifact: string;
  cover: string;
  href?: string;
  file?: string;
  tags: string[];
};

export type PortfolioCategory = PortfolioItem["category"];

export type PortfolioFilter = {
  label: string;
  value: "all" | PortfolioCategory;
};

export const portfolioFilters: PortfolioFilter[] = [
  {
    label: "Все",
    value: "all"
  },
  {
    label: "Презентации",
    value: "presentation"
  },
  {
    label: "Лендинги",
    value: "landing"
  },
  {
    label: "Брендинг",
    value: "brand"
  },
  {
    label: "AI",
    value: "ai"
  },
  {
    label: "Аналитика",
    value: "business-analysis"
  },
  {
    label: "Продакшн",
    value: "production"
  }
];

export const portfolioCategoryLabels: Record<PortfolioCategory, string> = {
  presentation: "Презентация",
  landing: "Лендинг",
  brand: "Брендинг",
  ai: "AI",
  "business-analysis": "Аналитика",
  production: "Продакшн"
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "chess-jazz",
    title: "Chess & Jazz",
    category: "presentation",
    client: "Chess & Jazz",
    year: "2026",
    description:
      "Презентация на 10 слайдов для проекта Chess & Jazz: структура подачи, визуальная логика и упаковка материала в премиальный формат.",
    role: "Presentation structure / slide design",
    artifact: "10-slide presentation",
    cover: "/portfolio/chess-jazz/cover.png",
    file: "/portfolio/chess-jazz/chess-jazz.pdf",
    tags: ["Presentation", "Deck", "Premium"]
  },
  {
    id: "tatyana-vesennyaya",
    title: "Лендинг для Татьяны Весенней",
    category: "landing",
    client: "Татьяна Весенняя",
    year: "2026",
    description:
      "Лендинг для 3D-визуализатора: персональная подача, структура услуг, визуальный акцент на портфолио и доверие.",
    role: "Landing structure / UX / visual concept",
    artifact: "Personal landing page",
    cover: "/portfolio/tatyana-vesennyaya/cover.png",
    href: "/portfolio/tatyana-vesennyaya",
    tags: ["Landing", "Personal Brand", "3D Visual"]
  },
  {
    id: "velvet-whisper",
    title: "Velvet Whisper",
    category: "presentation",
    client: "Velvet Whisper",
    year: "2026",
    description:
      "Презентация на 5 слайдов для бренда одежды Velvet Whisper: визуальная упаковка, брендовая атмосфера и лаконичная подача.",
    role: "Presentation design / brand packaging",
    artifact: "5-slide presentation",
    cover: "/portfolio/velvet-whisper/cover.png",
    file: "/portfolio/velvet-whisper/velvet-whisper.pdf",
    tags: ["Fashion", "Presentation", "Brand"]
  }
];
