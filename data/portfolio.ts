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
  images?: string[];
  href?: string;
  externalUrl?: string;
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
    cover: "/portfolio/chess-jazz/chess-jazz-cover.png",
    images: [
      "/portfolio/chess-jazz/chess-jazz-slide-01.png",
      "/portfolio/chess-jazz/chess-jazz-slide-02.png",
      "/portfolio/chess-jazz/chess-jazz-slide-03.png",
      "/portfolio/chess-jazz/chess-jazz-slide-04.png",
      "/portfolio/chess-jazz/chess-jazz-slide-05.png",
      "/portfolio/chess-jazz/chess-jazz-slide-06.png",
      "/portfolio/chess-jazz/chess-jazz-slide-07.png",
      "/portfolio/chess-jazz/chess-jazz-slide-08.png",
      "/portfolio/chess-jazz/chess-jazz-slide-09.png",
      "/portfolio/chess-jazz/chess-jazz-slide-10.png"
    ],
    href: "/portfolio/chess-jazz",
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
    cover: "/portfolio/tatyana-vesennyaya/tatyana-vesennyaya-cover.png",
    images: [
      "/portfolio/tatyana-vesennyaya/tatyana-vesennyaya-screen-01.png",
      "/portfolio/tatyana-vesennyaya/tatyana-vesennyaya-screen-02.png",
      "/portfolio/tatyana-vesennyaya/tatyana-vesennyaya-screen-03.png"
    ],
    href: "/portfolio/tatyana-vesennyaya",
    externalUrl: "https://tatyana-vesennya-land.vercel.app/",
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
    cover: "/portfolio/velvet-whisper/velvet-whisper-cover.png",
    images: [
      "/portfolio/velvet-whisper/velvet-whisper-slide-01.png",
      "/portfolio/velvet-whisper/velvet-whisper-slide-02.png",
      "/portfolio/velvet-whisper/velvet-whisper-slide-03.png",
      "/portfolio/velvet-whisper/velvet-whisper-slide-04.png",
      "/portfolio/velvet-whisper/velvet-whisper-slide-05.png"
    ],
    href: "/portfolio/velvet-whisper",
    tags: ["Fashion", "Presentation", "Brand"]
  }
];
