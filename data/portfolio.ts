export type PortfolioCategory =
  | "presentation"
  | "landing"
  | "digital-product"
  | "automation";

export type PortfolioFocus =
  | "Атмосфера"
  | "Цифры"
  | "Образ"
  | "Сила"
  | "Точность";

export type PortfolioGalleryItem = {
  src: string;
  alt: string;
  caption: string;
  aspectRatio?: "wide" | "standard" | "portrait";
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  focus: PortfolioFocus;
  projectType: string;
  year: string;
  client: string;
  role: string;
  scope: string;
  description: string;
  task: string;
  audience: string;
  sourceMaterials: string;
  problem: string;
  solution: string;
  deliverables: string[];
  result: string[];
  published: boolean;
  coverImage?: string;
  coverAlt?: string;
  gallery: PortfolioGalleryItem[];
  externalUrl?: string;
  featured: boolean;
  sortOrder: number;
  visualSystem: {
    palette: string[];
    colors: string;
    typography: string;
    grid: string;
    principles: string[];
  };
};

export type PublishedPortfolioItem = PortfolioItem & {
  published: true;
  coverImage: string;
  coverAlt: string;
};

export type PortfolioFilter = {
  label: string;
  value: "all" | PortfolioCategory;
};

export const portfolioFilters: PortfolioFilter[] = [
  { label: "Все", value: "all" },
  { label: "Презентации", value: "presentation" },
  { label: "Сайты", value: "landing" },
  { label: "Сервисы", value: "digital-product" },
  { label: "Автоматизации", value: "automation" }
];

export const portfolioCategoryLabels: Record<PortfolioCategory, string> = {
  presentation: "Презентация",
  landing: "Сайт",
  "digital-product": "Сервис",
  automation: "Автоматизация"
};

export const portfolioItems: PortfolioItem[] = ([
  {
    slug: "northline",
    title: "NORTHLINE",
    category: "presentation",
    focus: "Точность",
    projectType: "Логистика",
    year: "2026",
    client: "NORTHLINE",
    role: "Структура, коммерческая история, интерфейс и дизайн",
    scope: "10 слайдов + PDF",
    description:
      "Операционная система холодовой цепи в коммерческой презентации.",
    task:
      "Показать директору по логистике, как NORTHLINE превращает температурное отклонение в управляемое событие и проверяемый пилот.",
    audience:
      "Директора по логистике и качеству, производители продуктов и логистические операторы.",
    sourceMaterials:
      "Материалы WHO, FDA, GS1 и UNEP, рабочие допущения и визуальные материалы.",
    problem:
      "Термологгеры, GPS и ручные отчёты часто объясняют инцидент уже после доставки, когда возможность оперативного вмешательства потеряна.",
    solution:
      "Выстроил историю от точек риска на маршруте к единому контуру действий, интерфейсу, порогу окупаемости и 30-дневному пилоту.",
    deliverables: [
      "План презентации",
      "Исследование и источники",
      "Коммерческая история",
      "Сценарий интерфейса",
      "Модель окупаемости",
      "Визуальные материалы",
      "PPTX и PDF"
    ],
    result: [
      "10 редактируемых слайдов",
      "Один сценарий оперативной реакции",
      "Источники в заметках",
      "PPTX, PDF и WebP-версия"
    ],
    published: true,
    coverImage: "/portfolio/northline/cover.webp",
    coverAlt:
      "Обложка презентации NORTHLINE с рефрижератором у холодного распределительного центра",
    gallery: [
      {
        src: "/portfolio/northline/slide-01.webp",
        alt: "Титульный слайд коммерческой презентации NORTHLINE",
        caption: "Позиционирование операционной системы холодовой цепи"
      },
      {
        src: "/portfolio/northline/slide-02.webp",
        alt: "Слайд NORTHLINE с этапами холодовой цепи и точками риска",
        caption: "Пять зон ответственности и четыре уязвимых стыка"
      },
      {
        src: "/portfolio/northline/slide-03.webp",
        alt: "Слайд NORTHLINE со сравнением логгера и наблюдения в реальном времени",
        caption: "Разница между фиксацией после рейса и действием во время маршрута"
      },
      {
        src: "/portfolio/northline/slide-04.webp",
        alt: "Слайд NORTHLINE с архитектурой системы и температурным датчиком",
        caption: "Четыре слоя продукта поверх существующей инфраструктуры"
      },
      {
        src: "/portfolio/northline/slide-05.webp",
        alt: "Слайд NORTHLINE со сценарием реакции на температурное событие",
        caption: "От сигнала к владельцу задачи и восстановлению режима"
      },
      {
        src: "/portfolio/northline/slide-06.webp",
        alt: "Слайд NORTHLINE с экраном интерфейса мониторинга перевозок",
        caption: "Маршруты, инцидент и следующий шаг в одном экране"
      },
      {
        src: "/portfolio/northline/slide-07.webp",
        alt: "Слайд NORTHLINE с картой повторяющихся причин",
        caption: "Повторяющиеся риски по маршрутам и точкам передачи"
      },
      {
        src: "/portfolio/northline/slide-08.webp",
        alt: "Слайд NORTHLINE с иллюстративной моделью окупаемости",
        caption: "Порог безубыточности через число предотвращённых инцидентов"
      },
      {
        src: "/portfolio/northline/slide-09.webp",
        alt: "Слайд NORTHLINE с планом 30-дневного пилота",
        caption: "Три маршрута, 50 перевозок и критерии решения"
      },
      {
        src: "/portfolio/northline/slide-10.webp",
        alt: "Финальный слайд NORTHLINE с холодным распределительным центром",
        caption: "Конкретный следующий шаг к запуску пилота"
      }
    ],
    featured: true,
    sortOrder: -1,
    visualSystem: {
      palette: ["#071724", "#F4F8FA", "#69D5E8", "#FF6B35"],
      colors:
        "Глубокий ночной синий, ледяной белый, телеметрический голубой и сигнальный оранжевый",
      typography:
        "Плотный операционный гротеск, крупные временные метки и короткие подписи действий",
      grid:
        "Широкая 16:9-сетка с маршрутными линиями, температурными таймлайнами и полноформатными фотографиями",
      principles: [
        "Оранжевый обозначает только отклонение или действие",
        "Данные датчиков связаны с маршрутом и ответственным",
        "Функции показаны через один операционный сценарий",
        "Допущения отделены от внешних фактов"
      ]
    }
  },
  {
    slug: "grid-24",
    title: "GRID/24",
    category: "presentation",
    focus: "Точность",
    projectType: "Энергетика",
    year: "2026",
    client: "GRID/24",
    role: "Стратегия, структура, данные и дизайн",
    scope: "10 слайдов",
    description:
      "Распределённая сеть накопителей в презентации для инвесторов.",
    task:
      "Объяснить системную проблему, устройство продукта, экономику пилота и путь масштабирования GRID/24.",
    audience:
      "Инфраструктурные инвесторы, энергетические операторы и городские партнёры.",
    sourceMaterials:
      "Данные IEA, DOE и NREL, рабочие допущения и визуальные материалы.",
    problem:
      "Сложная энергетическая категория рисковала остаться набором технологий, цифр и обещаний без понятного инвестиционного маршрута.",
    solution:
      "Выстроил историю от глобального спроса на хранение к одному модулю, четырём потокам ценности и проверяемому пилоту на трёх площадках.",
    deliverables: [
      "План презентации",
      "Исследование и источники",
      "История для инвестора",
      "Графики и схемы",
      "Визуальные материалы",
      "10 слайдов"
    ],
    result: [
      "10 редактируемых слайдов",
      "Одна главная мысль для инвестора",
      "Источники в заметках",
      "PPTX и WebP-версия"
    ],
    published: true,
    coverImage: "/portfolio/grid-24/cover.webp",
    coverAlt:
      "Обложка презентации GRID/24 с городским модулем накопления энергии",
    gallery: [
      {
        src: "/portfolio/grid-24/slide-01.webp",
        alt: "Титульный слайд инвестиционной презентации GRID/24",
        caption: "Обложка и позиционирование распределённой сети накопителей"
      },
      {
        src: "/portfolio/grid-24/slide-02.webp",
        alt: "Слайд GRID/24 о мировом росте мощности хранения энергии",
        caption: "Масштаб системного сдвига по данным IEA"
      },
      {
        src: "/portfolio/grid-24/slide-03.webp",
        alt: "Слайд GRID/24 с суточным профилем генерации и спроса",
        caption: "Несовпадение времени генерации и пикового спроса"
      },
      {
        src: "/portfolio/grid-24/slide-04.webp",
        alt: "Слайд GRID/24 со схемой распределённой городской сети накопителей",
        caption: "Локальные модули и единый сетевой контур"
      },
      {
        src: "/portfolio/grid-24/slide-05.webp",
        alt: "Технический слайд GRID/24 с устройством модуля накопления",
        caption: "Целевая конфигурация и четыре слоя готовности продукта"
      },
      {
        src: "/portfolio/grid-24/slide-06.webp",
        alt: "Слайд GRID/24 с четырьмя потоками ценности",
        caption: "Бизнес-модель без зависимости от одного тарифа"
      },
      {
        src: "/portfolio/grid-24/slide-07.webp",
        alt: "Слайд GRID/24 с иллюстративной экономикой пилота",
        caption: "Затраты, валовая ценность и срок окупаемости"
      },
      {
        src: "/portfolio/grid-24/slide-08.webp",
        alt: "Слайд GRID/24 с сегментацией первых площадок и планом запуска",
        caption: "Приоритетные сегменты и маршрут к сетевой модели"
      },
      {
        src: "/portfolio/grid-24/slide-09.webp",
        alt: "Слайд GRID/24 с моделью сетевого эффекта",
        caption: "Данные, эксплуатация и масштабируемое преимущество сети"
      },
      {
        src: "/portfolio/grid-24/slide-10.webp",
        alt: "Финальный слайд GRID/24 с предложением пилотного консорциума",
        caption: "Три площадки и один проверяемый пилот"
      }
    ],
    featured: true,
    sortOrder: 0,
    visualSystem: {
      palette: ["#111310", "#F3F0E8", "#E8FF4F", "#3756FF"],
      colors:
        "Графитовый, тёплый белый, электрический жёлтый и технический синий",
      typography:
        "Плотный гротеск, крупные числовые акценты и короткие инженерные подписи",
      grid:
        "Широкая 16:9-сетка с техническими линиями, крупными графиками и полноформатными рендерами",
      principles: [
        "Один проверяемый тезис на слайд",
        "Факты отделены от модельных допущений",
        "Схемы объясняют устройство и потоки ценности",
        "Электрический жёлтый работает как сигнал системы"
      ]
    }
  },
  {
    slug: "chess-jazz",
    title: "Chess & Jazz",
    category: "presentation",
    focus: "Атмосфера",
    projectType: "Фестиваль",
    year: "2026",
    client: "Chess & Jazz",
    role: "Структура, текст и дизайн",
    scope: "10 слайдов",
    description: "Фестиваль шахмат и джаза в десяти слайдах.",
    task: "Показать Chess & Jazz за 10 слайдов: идея, атмосфера, программа.",
    audience: "Партнёры, участники и команда.",
    sourceMaterials: "Описание проекта, тезисы и визуальные референсы.",
    problem: "Шахматы, джаз и площадка жили отдельно. Истории не было.",
    solution:
      "Связал идею, место и программу. Глубокий зелёный, тёплое золото и крупная антиква задали тон.",
    deliverables: [
      "Структура",
      "Текст",
      "Сценарий",
      "Стиль",
      "10 слайдов",
      "Изображения"
    ],
    result: [
      "10 готовых слайдов",
      "Одна цельная история",
      "Единый стиль"
    ],
    published: true,
    coverImage: "/portfolio/chess-jazz/chess-jazz-cover.png",
    coverAlt:
      "Обложка презентации Chess & Jazz с вечерним садом, сценой и шахматной доской",
    gallery: [
      {
        src: "/portfolio/chess-jazz/chess-jazz-slide-01.png",
        alt: "Титульный слайд презентации Chess & Jazz",
        caption: "Обложка и премиальная тональность проекта"
      },
      {
        src: "/portfolio/chess-jazz/chess-jazz-slide-02.png",
        alt: "Слайд о соединении шахмат, джаза и летней атмосферы",
        caption: "Концепция фестиваля: шахматы, музыка и атмосфера"
      },
      {
        src: "/portfolio/chess-jazz/chess-jazz-slide-03.png",
        alt: "Слайд о площадке фестиваля в саду Эрмитаж",
        caption: "Локация как часть впечатления — сад «Эрмитаж»"
      },
      {
        src: "/portfolio/chess-jazz/chess-jazz-slide-04.png",
        alt: "Разворот презентации Chess & Jazz о формате события",
        caption: "Формат события и сценарий дня"
      },
      {
        src: "/portfolio/chess-jazz/chess-jazz-slide-05.png",
        alt: "Слайд презентации Chess & Jazz о музыкальной программе",
        caption: "Музыкальная программа и вечерний ритм"
      },
      {
        src: "/portfolio/chess-jazz/chess-jazz-slide-06.png",
        alt: "Слайд презентации Chess & Jazz о шахматной программе",
        caption: "Шахматная программа и игровые форматы"
      },
      {
        src: "/portfolio/chess-jazz/chess-jazz-slide-07.png",
        alt: "Слайд презентации Chess & Jazz об аудитории проекта",
        caption: "Аудитория и формат взаимодействия"
      },
      {
        src: "/portfolio/chess-jazz/chess-jazz-slide-08.png",
        alt: "Слайд презентации Chess & Jazz с партнёрскими возможностями",
        caption: "Партнёрские возможности проекта"
      },
      {
        src: "/portfolio/chess-jazz/chess-jazz-slide-09.png",
        alt: "Атмосферный разворот презентации Chess & Jazz",
        caption: "Детали события и визуальный ритм"
      },
      {
        src: "/portfolio/chess-jazz/chess-jazz-slide-10.png",
        alt: "Финальный слайд презентации Chess & Jazz",
        caption: "Финальный слайд и завершение истории"
      }
    ],
    featured: true,
    sortOrder: 1,
    visualSystem: {
      palette: ["#04100D", "#D8B875", "#F4EBDD", "#7B3324"],
      colors: "Глубокий зелёный, графитовый, тёплое золото",
      typography: "Контрастная антиква для заголовков и нейтральный гротеск для текста",
      grid: "Широкая модульная сетка с крупными фотографическими зонами",
      principles: [
        "Один ключевой тезис на слайд",
        "Фотография поддерживает содержание",
        "Тёплые акценты ведут взгляд",
        "Повторяемые элементы связывают историю"
      ]
    }
  },
  {
    slug: "velvet-whisper",
    title: "Velvet Whisper",
    category: "presentation",
    focus: "Образ",
    projectType: "Мода",
    year: "2026",
    client: "Velvet Whisper",
    role: "Визуальная концепция и дизайн",
    scope: "5 слайдов",
    description: "Коллекция одежды в пяти спокойных слайдах.",
    task: "Передать характер бренда в пяти слайдах.",
    audience: "Партнёры, байеры и клиенты.",
    sourceMaterials: "Название, идея коллекции и настроение бренда.",
    problem: "Нужен был образ, а не обычный каталог.",
    solution: "Воздух, молочная палитра, крупный шрифт и портреты.",
    deliverables: [
      "Структура",
      "Стиль",
      "Шрифт",
      "Изображения",
      "5 слайдов"
    ],
    result: [
      "5 готовых слайдов",
      "Единый образ бренда",
      "Лаконичная подача"
    ],
    published: true,
    coverImage: "/portfolio/velvet-whisper/velvet-whisper-cover.png",
    coverAlt:
      "Обложка презентации Velvet Whisper с моделью в светлом костюме",
    gallery: [
      {
        src: "/portfolio/velvet-whisper/velvet-whisper-slide-01.png",
        alt: "Титульный слайд презентации Velvet Whisper",
        caption: "Обложка и первое впечатление от бренда"
      },
      {
        src: "/portfolio/velvet-whisper/velvet-whisper-slide-02.png",
        alt: "Слайд презентации с идеей бренда Velvet Whisper",
        caption: "Идея и характер бренда"
      },
      {
        src: "/portfolio/velvet-whisper/velvet-whisper-slide-03.png",
        alt: "Слайд о первой коллекции Velvet Whisper",
        caption: "Первая коллекция и продуктовый фокус"
      },
      {
        src: "/portfolio/velvet-whisper/velvet-whisper-slide-04.png",
        alt: "Имиджевый разворот презентации Velvet Whisper",
        caption: "Имиджевая подача и детали коллекции"
      },
      {
        src: "/portfolio/velvet-whisper/velvet-whisper-slide-05.png",
        alt: "Финальный слайд презентации Velvet Whisper",
        caption: "Финальный разворот и завершение презентации"
      }
    ],
    featured: true,
    sortOrder: 2,
    visualSystem: {
      palette: ["#F1E8D9", "#B89F8B", "#342923", "#FFFFFF"],
      colors: "Молочный, графитовый, приглушённый серо-бежевый",
      typography: "Редакционная антиква и лёгкий нейтральный гротеск",
      grid: "Асимметричная сетка с крупными полями",
      principles: [
        "Минимум элементов на экране",
        "Фотография остаётся главным носителем эмоции",
        "Типографика работает как часть образа",
        "Все слайды сохраняют спокойный темп"
      ]
    }
  },
  {
    slug: "astra-q1-2026",
    title: "Группа Астра Q1 2026",
    category: "presentation",
    focus: "Цифры",
    projectType: "Отчёт",
    year: "2026",
    client: "Группа Астра",
    role: "Структура, цифры и дизайн",
    scope: "10 слайдов",
    description: "Квартальный отчёт, который читается как история.",
    task: "Собрать квартальный отчёт в ясный вывод.",
    audience: "Инвесторы, аналитики и руководители.",
    sourceMaterials: "Публичный отчёт и показатели Q1 2026.",
    problem: "Цифр много. Главный вывод терялся.",
    solution: "Сначала тезис. Затем причины, графики и сценарий роста.",
    deliverables: [
      "Структура",
      "Ключевые показатели",
      "Логика данных",
      "Графики",
      "Стиль",
      "10 слайдов"
    ],
    result: [
      "10 готовых слайдов",
      "Один аналитический вывод",
      "Цифры переведены в графики",
      "Единая система"
    ],
    published: true,
    coverImage: "/portfolio/astra-q1-2026/cover.webp",
    coverAlt:
      "Обложка инвесторской презентации Группы Астра Q1 2026 с цифровой архитектурной композицией",
    gallery: [
      {
        src: "/portfolio/astra-q1-2026/slide-01.webp",
        alt: "Титульный слайд инвесторского разбора Группы Астра Q1 2026",
        caption: "Обложка: проверка стратегии роста на прочность"
      },
      {
        src: "/portfolio/astra-q1-2026/slide-02.webp",
        alt: "Слайд с главным выводом квартального отчёта Группы Астра",
        caption: "Главный вывод: рост сохраняется при давлении на прибыльность",
        aspectRatio: "standard"
      },
      {
        src: "/portfolio/astra-q1-2026/slide-03.webp",
        alt: "Слайд о позиции и продуктовой экосистеме Группы Астра",
        caption: "Позиция компании и устройство продуктовой экосистемы",
        aspectRatio: "standard"
      },
      {
        src: "/portfolio/astra-q1-2026/slide-04.webp",
        alt: "Слайд с ключевыми финансовыми и операционными показателями Q1 2026",
        caption: "Ключевые показатели квартала в единой системе",
        aspectRatio: "standard"
      },
      {
        src: "/portfolio/astra-q1-2026/slide-05.webp",
        alt: "Слайд об изменении выручки и структуры отгрузок Группы Астра",
        caption: "Временное давление на выручку и структура отгрузок",
        aspectRatio: "standard"
      },
      {
        src: "/portfolio/astra-q1-2026/slide-06.webp",
        alt: "Слайд о контроле расходов Группы Астра",
        caption: "Расходы и операционная эффективность",
        aspectRatio: "standard"
      },
      {
        src: "/portfolio/astra-q1-2026/slide-07.webp",
        alt: "Слайд о динамике операционной прибыли Группы Астра",
        caption: "Операционная прибыль под давлением",
        aspectRatio: "standard"
      },
      {
        src: "/portfolio/astra-q1-2026/slide-08.webp",
        alt: "Слайд об инвестициях в продуктовую экосистему Группы Астра",
        caption: "Инвестиционный цикл и развитие экосистемы",
        aspectRatio: "standard"
      },
      {
        src: "/portfolio/astra-q1-2026/slide-09.webp",
        alt: "Слайд о балансе и финансовой устойчивости Группы Астра",
        caption: "Сильный баланс как опора для роста",
        aspectRatio: "standard"
      },
      {
        src: "/portfolio/astra-q1-2026/slide-10.webp",
        alt: "Финальный слайд с перспективами Группы Астра",
        caption: "Перспективы и условия продолжения роста",
        aspectRatio: "standard"
      }
    ],
    featured: true,
    sortOrder: 3,
    visualSystem: {
      palette: ["#050812", "#9CF54A", "#E5EAF0", "#2388D8"],
      colors: "Глубокий синий, графитовый, яркий зелёный и холодный голубой",
      typography: "Плотный гротеск с выраженной иерархией аналитических тезисов",
      grid: "Модульная сетка для графиков, показателей и пояснений",
      principles: [
        "Каждый слайд начинается с аналитического вывода",
        "График отвечает на конкретный вопрос",
        "Цвет разделяет факты, причины и ожидания",
        "Плотность данных сохраняет читаемую иерархию"
      ]
    }
  },
  {
    slug: "termoland-shchelkovo",
    title: "Termoland Щёлково",
    category: "presentation",
    focus: "Атмосфера",
    projectType: "Курорт",
    year: "2026",
    client: "Termoland Щёлково",
    role: "Структура, тексты и дизайн",
    scope: "11 слайдов",
    description: "Городской курорт как короткий отпуск рядом.",
    task: "Показать Termoland как отпуск рядом с домом.",
    audience: "Семьи, пары и жители города.",
    sourceMaterials: "Факты о комплексе, услугах и форматах посещения.",
    problem: "Список услуг не передавал сам опыт отдыха.",
    solution: "Показал путь от городской усталости к отдыху и восстановлению.",
    deliverables: [
      "Структура",
      "Текст",
      "Сценарий отдыха",
      "Стиль",
      "11 слайдов",
      "Маршруты"
    ],
    result: [
      "11 готовых слайдов",
      "Один сценарий отдыха",
      "Маршруты для разных гостей",
      "Спокойная подача"
    ],
    published: true,
    coverImage: "/portfolio/termoland-shchelkovo/cover.webp",
    coverAlt:
      "Обложка презентации Termoland Щёлково с тёмной фотографией воды",
    gallery: [
      {
        src: "/portfolio/termoland-shchelkovo/slide-01.webp",
        alt: "Титульный слайд презентации Termoland Щёлково",
        caption: "Обложка: отпуск начинается ближе, чем кажется"
      },
      {
        src: "/portfolio/termoland-shchelkovo/slide-02.webp",
        alt: "Слайд о городской усталости в презентации Termoland",
        caption: "Контекст: город, который не выключается"
      },
      {
        src: "/portfolio/termoland-shchelkovo/slide-03.webp",
        alt: "Слайд о курорте как части города",
        caption: "Главная идея: курорт может быть частью города"
      },
      {
        src: "/portfolio/termoland-shchelkovo/slide-04.webp",
        alt: "Слайд о масштабе комплекса Termoland Щёлково",
        caption: "Масштаб комплекса и сценарий полноценного отдыха"
      },
      {
        src: "/portfolio/termoland-shchelkovo/slide-05.webp",
        alt: "Слайд о температурных состояниях отдыха в Termoland",
        caption: "Маршрут состояний: от прогрева к воде и прохладе"
      },
      {
        src: "/portfolio/termoland-shchelkovo/slide-06.webp",
        alt: "Слайд о бассейнах и купелях Termoland",
        caption: "Водные зоны и варианты отдыха"
      },
      {
        src: "/portfolio/termoland-shchelkovo/slide-07.webp",
        alt: "Слайд о ритуалах парения в Termoland",
        caption: "Парение как ритуал и отдельное событие"
      },
      {
        src: "/portfolio/termoland-shchelkovo/slide-08.webp",
        alt: "Слайд со сценариями отдыха для разных гостей",
        caption: "Три сценария: для себя, для двоих и для семьи"
      },
      {
        src: "/portfolio/termoland-shchelkovo/slide-09.webp",
        alt: "Слайд с готовым распорядком дня в Termoland",
        caption: "Готовый маршрут отдыха на целый день"
      },
      {
        src: "/portfolio/termoland-shchelkovo/slide-10.webp",
        alt: "Слайд с форматами посещения Termoland",
        caption: "Форматы посещения: от двух часов до целого дня"
      },
      {
        src: "/portfolio/termoland-shchelkovo/slide-11.webp",
        alt: "Финальный слайд презентации Termoland Щёлково",
        caption: "Финальная мысль и переход к выбору даты"
      }
    ],
    featured: true,
    sortOrder: 4,
    visualSystem: {
      palette: ["#12323A", "#E46C4D", "#EFC87B", "#F3EBDD"],
      colors: "Графитовый, минеральный серо-зелёный, молочный и тёплый песочный",
      typography: "Нейтральный гротеск с крупными короткими заголовками",
      grid: "Широкая 16:9-сетка с чередованием фотографий и светлых смысловых пауз",
      principles: [
        "Сначала состояние гостя, затем перечень возможностей",
        "Один сценарий или вывод на слайд",
        "Фотографии передают температуру и тактильность",
        "Светлые развороты регулируют ритм истории"
      ]
    }
  },
  {
    slug: "bivol-boxing-club",
    title: "Bivol Boxing Club",
    category: "presentation",
    focus: "Сила",
    projectType: "Бокс",
    year: "2026",
    client: "Bivol Boxing Club",
    role: "Структура, тексты и дизайн",
    scope: "11 вертикальных слайдов",
    description: "Клуб, метод и характер в вертикальной презентации.",
    task: "Показать метод клуба для взрослых и детей.",
    audience: "Спортсмены, новички и родители.",
    sourceMaterials: "Методика, программы, пространство и первая тренировка.",
    problem: "Перечень программ не передавал характер клуба.",
    solution: "Связал технику, тренера, дисциплину и прогресс в одну историю.",
    deliverables: [
      "Структура",
      "Текст",
      "Стиль",
      "Вертикальная сетка",
      "11 слайдов",
      "Призыв к записи"
    ],
    result: [
      "11 вертикальных слайдов",
      "Методика собрана в историю",
      "Отдельные программы для взрослых и детей",
      "Экран записи"
    ],
    published: true,
    coverImage: "/portfolio/bivol-boxing-club/cover.webp",
    coverAlt:
      "Обложка презентации Bivol Boxing Club с боксёром на ринге и крупным логотипом",
    gallery: [
      {
        src: "/portfolio/bivol-boxing-club/slide-01.webp",
        alt: "Титульный вертикальный слайд Bivol Boxing Club",
        caption: "Обложка и чемпионский стандарт подготовки",
        aspectRatio: "portrait"
      },
      {
        src: "/portfolio/bivol-boxing-club/slide-02.webp",
        alt: "Слайд о формировании характера в Bivol Boxing Club",
        caption: "Характер формируется в работе",
        aspectRatio: "portrait"
      },
      {
        src: "/portfolio/bivol-boxing-club/slide-03.webp",
        alt: "Слайд о механике удара и работе всего тела",
        caption: "Один удар как связанная работа всего тела",
        aspectRatio: "portrait"
      },
      {
        src: "/portfolio/bivol-boxing-club/slide-04.webp",
        alt: "Слайд о чемпионском стандарте Дмитрия Бивола",
        caption: "Чемпионский стандарт и спортивный ориентир",
        aspectRatio: "portrait"
      },
      {
        src: "/portfolio/bivol-boxing-club/slide-05.webp",
        alt: "Слайд о роли тренера в постановке техники",
        caption: "Тренер замечает ошибку до того, как она становится привычкой",
        aspectRatio: "portrait"
      },
      {
        src: "/portfolio/bivol-boxing-club/slide-06.webp",
        alt: "Слайд о физических качествах, которые развивает бокс",
        caption: "Сила, выносливость и координация",
        aspectRatio: "portrait"
      },
      {
        src: "/portfolio/bivol-boxing-club/slide-07.webp",
        alt: "Слайд о тренировках для детей от пяти лет",
        caption: "Детские тренировки и развитие характера",
        aspectRatio: "portrait"
      },
      {
        src: "/portfolio/bivol-boxing-club/slide-08.webp",
        alt: "Слайд с системой тренировки Bivol Boxing Club",
        caption: "Тренировка как последовательная система",
        aspectRatio: "portrait"
      },
      {
        src: "/portfolio/bivol-boxing-club/slide-09.webp",
        alt: "Слайд о пространстве и атмосфере клуба",
        caption: "Среда, настроенная на работу",
        aspectRatio: "portrait"
      },
      {
        src: "/portfolio/bivol-boxing-club/slide-10.webp",
        alt: "Слайд о результате регулярных занятий боксом",
        caption: "Форма, техника и уверенность",
        aspectRatio: "portrait"
      },
      {
        src: "/portfolio/bivol-boxing-club/slide-11.webp",
        alt: "Финальный слайд с приглашением на первую тренировку",
        caption: "Финальный экран и запись на первую тренировку",
        aspectRatio: "portrait"
      }
    ],
    featured: true,
    sortOrder: 5,
    visualSystem: {
      palette: ["#0C0D0F", "#D64038", "#F3EFE7", "#74797D"],
      colors: "Чёрный, холодный белый и сигнальный красный",
      typography: "Плотный спортивный гротеск и крупные рубленые заголовки",
      grid: "Вертикальная 4:5-сетка с полноформатными фотографиями",
      principles: [
        "Короткие формулы создают темп",
        "Красный отмечает действие и ключевой смысл",
        "Фигура спортсмена удерживает вертикальную композицию",
        "Каждый экран ведёт к следующему этапу истории"
      ]
    }
  },
  {
    slug: "shadow-strike",
    title: "Shadow Strike",
    category: "presentation",
    focus: "Сила",
    projectType: "Бокс",
    year: "2026",
    client: "Shadow Strike",
    role: "Позиционирование, тексты и дизайн",
    scope: "8 слайдов",
    description: "Образ премиального боксёрского клуба.",
    task: "Создать сильный образ клуба и его сообщества.",
    audience: "Люди, для которых бокс стал образом жизни.",
    sourceMaterials: "Идея бренда, программы и преимущества клуба.",
    problem: "Оборудование и тренеры звучали как у всех.",
    solution: "Собрал бренд вокруг силы, фокуса, навыка и сообщества.",
    deliverables: [
      "Позиционирование",
      "Структура",
      "Текст",
      "Стиль",
      "Программы",
      "8 слайдов"
    ],
    result: [
      "8 готовых слайдов",
      "Четыре опоры бренда",
      "Единая подача программ",
      "Свой визуальный язык"
    ],
    published: true,
    coverImage: "/portfolio/shadow-strike/cover.webp",
    coverAlt:
      "Обложка презентации Shadow Strike с боксёром и красно-чёрной айдентикой",
    gallery: [
      {
        src: "/portfolio/shadow-strike/slide-01.webp",
        alt: "Слайд Shadow Strike с результатами и отзывами",
        caption: "Результаты и подтверждение ценности подхода",
        aspectRatio: "standard"
      },
      {
        src: "/portfolio/shadow-strike/slide-02.webp",
        alt: "Слайд о четырёх направлениях подхода Shadow Strike",
        caption: "Физическое развитие, устойчивость, навыки и сообщество",
        aspectRatio: "standard"
      },
      {
        src: "/portfolio/shadow-strike/slide-03.webp",
        alt: "Слайд с программами тренировок Shadow Strike",
        caption: "Программы под разные цели",
        aspectRatio: "standard"
      },
      {
        src: "/portfolio/shadow-strike/slide-04.webp",
        alt: "Слайд о структуре осознанной тренировки",
        caption: "Техника, работа в парах, мешки и восстановление",
        aspectRatio: "standard"
      },
      {
        src: "/portfolio/shadow-strike/slide-05.webp",
        alt: "Слайд о пространстве клуба Shadow Strike",
        caption: "Пространство, созданное для фокуса",
        aspectRatio: "standard"
      },
      {
        src: "/portfolio/shadow-strike/slide-06.webp",
        alt: "Слайд о дисциплине, силе и братстве Shadow Strike",
        caption: "Ценности сообщества: дисциплина, сила и братство"
      },
      {
        src: "/portfolio/shadow-strike/slide-07.webp",
        alt: "Слайд с позиционированием Shadow Strike",
        caption: "Больше, чем боксёрский зал"
      },
      {
        src: "/portfolio/shadow-strike/slide-08.webp",
        alt: "Финальный брендовый слайд Shadow Strike",
        caption: "Финальный брендовый кадр"
      }
    ],
    featured: true,
    sortOrder: 6,
    visualSystem: {
      palette: ["#090A0C", "#D72C28", "#F1F1E8", "#666B70"],
      colors: "Глубокий чёрный, холодный белый и тёмный красный",
      typography: "Узкий акцидентный гротеск и нейтральный текстовый шрифт",
      grid: "Плотная модульная сетка с крупными фотографическими зонами",
      principles: [
        "Контраст поддерживает спортивное напряжение",
        "Красный выделяет действие, а не украшает экран",
        "Типографика работает как часть айдентики",
        "Фотография показывает атмосферу пространства"
      ]
    }
  },
  {
    slug: "jk-finance",
    title: "JK Finance",
    category: "digital-product",
    focus: "Цифры",
    projectType: "Финансовая модель",
    year: "2026",
    client: "JK Finance",
    role: "Расчёты, структура и интерфейс",
    scope: "Опубликованная рабочая версия",
    description: "Финансовая модель точки и франшизы.",
    task: "Объединить меню, расходы и прогноз в одной модели.",
    audience: "Команда проекта.",
    sourceMaterials: "Меню, рецептуры, расходы и сценарии продаж.",
    problem: "Расчёты жили в разных таблицах и требовали ручной проверки.",
    solution: "Связал исходные данные, две модели бизнеса и общий прогноз.",
    deliverables: [
      "Финансовая модель",
      "Меню и рецептуры",
      "Модель точки и франшизы",
      "Сценарии и чувствительность",
      "Расходы и прогноз",
      "Импорт и экспорт",
      "Опубликованный интерфейс"
    ],
    result: [
      "Опубликованная рабочая версия",
      "Все расчёты в одном месте",
      "Сценарии и чувствительность",
      "Опубликованный интерфейс"
    ],
    published: true,
    coverImage: "/portfolio/jk-finance/cover.webp",
    coverAlt:
      "Рабочий интерфейс финансовой модели франшизы с ключевыми показателями экономики",
    gallery: [
      {
        src: "/portfolio/jk-finance/screen-01.webp",
        alt: "Главный экран финансовой модели франшизы",
        caption: "Выручка, прибыль и срок окупаемости"
      },
      {
        src: "/portfolio/jk-finance/screen-02.webp",
        alt: "Экран финансовой модели со структурой расходов и точкой безубыточности",
        caption: "Расходы, точка безубыточности и экономика позиций"
      },
      {
        src: "/portfolio/jk-finance/screen-03.webp",
        alt: "Экран финансовой модели со сценариями и чувствительностью",
        caption: "Сценарии, чувствительность и контроль заполненности модели"
      }
    ],
    featured: false,
    sortOrder: 8,
    visualSystem: {
      palette: ["#101417", "#24B96B", "#E8ECE9", "#68737A"],
      colors: "Графитовый, белый, зелёный и холодный серый",
      typography: "Нейтральный гротеск с табличными цифрами",
      grid: "Модульная сетка для таблиц и расчётов",
      principles: [
        "Сначала решение, затем детализация",
        "Числа сгруппированы по смыслу",
        "Цвет используется только для статусов и сравнения",
        "Интерфейс сохраняет плотность без ощущения таблицы"
      ]
    }
  },
  {
    slug: "contract-architect",
    title: "Contract Architect",
    category: "digital-product",
    focus: "Точность",
    projectType: "Документы",
    year: "2026",
    client: "Contract Architect",
    role: "Логика, интерфейс и разработка",
    scope: "Первая рабочая версия",
    description: "Готовые документы из шаблона за несколько шагов.",
    task: "Собирать DOCX и PDF из шаблона и короткой формы.",
    audience: "Предприниматели и небольшие команды.",
    sourceMaterials: "Шаблоны, переменные и требования к файлам.",
    problem: "Документы собирались вручную. Свои шаблоны было сложно повторно использовать.",
    solution: "Каталог, пошаговая форма и анализ загруженного DOCX.",
    deliverables: [
      "Каталог шаблонов",
      "Формы переменных",
      "Генерация DOCX и PDF",
      "Анализ своего DOCX",
      "Вход и регистрация",
      "Платный доступ и админка",
      "Политика данных и cookie"
    ],
    result: [
      "Первая рабочая версия",
      "Шаблоны и свои DOCX",
      "Доступы и админка",
      "Страницы о данных и cookie"
    ],
    published: true,
    coverImage: "/portfolio/contract-architect/cover.webp",
    coverAlt:
      "Интерфейс Contract Architect с генератором договора и помощником по документам",
    gallery: [
      {
        src: "/portfolio/contract-architect/screen-01.webp",
        alt: "Главный экран Contract Architect с генератором документов по шаблонам",
        caption: "Главный сценарий: документ и акт из одной формы"
      },
      {
        src: "/portfolio/contract-architect/screen-02.webp",
        alt: "Экран Contract Architect с каталогом шаблонов и этапами заполнения",
        caption: "Каталог задач и пошаговая сборка документа"
      },
      {
        src: "/portfolio/contract-architect/screen-03.webp",
        alt: "Рабочая область Contract Architect с документом и помощником",
        caption: "Рабочая область: шаблон, переменные и подсказки"
      },
      {
        src: "/portfolio/contract-architect/screen-04.webp",
        alt: "Экран Contract Architect с проверкой и двумя документами на выходе",
        caption: "Автоматическая проверка и несколько файлов на выходе"
      }
    ],
    featured: false,
    sortOrder: 9,
    visualSystem: {
      palette: ["#F4F0E8", "#1C1B19", "#BE895A", "#7A888A"],
      colors: "Почти чёрный, молочный, тёплый коричневый и серо-голубой",
      typography: "Компактный гротеск с чёткой иерархией документа",
      grid: "Три рабочие зоны: шаблон, поля и готовый документ",
      principles: [
        "Документ остаётся главным объектом",
        "Риски объясняются текстом, а не только цветом",
        "История действий всегда доступна",
        "Вторичные функции не конкурируют с содержанием"
      ]
    }
  },
  {
    slug: "ai-youtube-script-agent",
    title: "AI YouTube Script Agent",
    category: "automation",
    focus: "Точность",
    projectType: "Сценарии",
    year: "2026",
    client: "AI YouTube Script Agent",
    role: "Логика, сценарий и интерфейс",
    scope: "Рабочая версия для сценариев 60–90 минут",
    description: "Длинный сценарий из видео и материалов.",
    task: "Собирать сценарий на 60–90 минут по шагам.",
    audience: "Авторы и редакционные команды.",
    sourceMaterials: "Видео, транскрипты, материалы и стиль автора.",
    problem: "Один запрос терял источники, стиль и логику.",
    solution: "Проекты, выпуски, план и главы. Каждый этап подтверждает человек.",
    deliverables: [
      "Проекты и выпуски",
      "Видео и транскрипты",
      "Фоновая транскрибация",
      "Поиск по материалам",
      "Правила стиля",
      "План и главы",
      "Редактор и подтверждение этапов",
      "Экспорт Markdown"
    ],
    result: [
      "Рабочая версия для сценариев 60–90 минут",
      "Сценарии на 60–90 минут",
      "Ручное подтверждение этапов",
      "Экспорт Markdown"
    ],
    published: true,
    coverImage: "/portfolio/ai-youtube-script-agent/cover.webp",
    coverAlt:
      "Интерфейс AI Script Agent со сценарием подготовки длинного YouTube-выпуска",
    gallery: [
      {
        src: "/portfolio/ai-youtube-script-agent/screen-01.webp",
        alt: "Главный экран AI Script Agent с этапами сценарного процесса",
        caption: "Весь процесс: от материалов и правил стиля до глав и экспорта"
      },
      {
        src: "/portfolio/ai-youtube-script-agent/screen-02.webp",
        alt: "Страница выпуска AI Script Agent со статусами материалов и генерации",
        caption: "Выпуск внутри проекта: материалы, действия и контроль этапов"
      },
      {
        src: "/portfolio/ai-youtube-script-agent/screen-03.webp",
        alt: "Редактор структуры выпуска в AI Script Agent",
        caption: "План выпуска и редактор структуры перед созданием глав"
      }
    ],
    featured: false,
    sortOrder: 10,
    visualSystem: {
      palette: ["#0B0A0F", "#D84B5B", "#F1ECE7", "#5A6172"],
      colors: "Тёмный графит, молочный, приглушённый красный и холодный серый",
      typography: "Нейтральный шрифт для длинного текста",
      grid: "Пошаговая сетка с фиксированным прогрессом",
      principles: [
        "Один этап — одна понятная задача",
        "Система предлагает, человек подтверждает",
        "Источники отделены от чернового текста",
        "Статус процесса виден без дополнительных экранов"
      ]
    }
  },
  {
    slug: "tatyana-vesennyaya",
    title: "Сайт Татьяны Весенней",
    category: "landing",
    focus: "Образ",
    projectType: "Сайт",
    year: "2026",
    client: "Татьяна Весенняя",
    role: "Структура, дизайн и разработка",
    scope: "Адаптивный сайт",
    description: "Сайт, который показывает работы 3D-визуализатора.",
    task: "Показать работы и привести посетителя к обращению.",
    audience: "Архитекторы, дизайнеры и частные заказчики.",
    sourceMaterials: "Портфолио, услуги и информация о специалисте.",
    problem: "Сильные работы терялись без ясной подачи.",
    solution: "Сначала портфолио. Затем услуги, процесс и контакт.",
    deliverables: [
      "Структура",
      "Прототип",
      "Текст",
      "Стиль",
      "Адаптив",
      "Разработка"
    ],
    result: [
      "Опубликованный сайт",
      "Портфолио на первом плане",
      "Единая подача услуг",
      "Мобильная версия"
    ],
    published: true,
    coverImage:
      "/portfolio/tatyana-vesennyaya/tatyana-vesennyaya-cover.png",
    coverAlt:
      "Обложка персонального лендинга 3D-визуализатора Татьяны Весенней",
    gallery: [
      {
        src: "/portfolio/tatyana-vesennyaya/tatyana-vesennyaya-screen-01.png",
        alt: "Первый экран лендинга Татьяны Весенней",
        caption: "Первый экран: позиционирование и визуальный характер"
      },
      {
        src: "/portfolio/tatyana-vesennyaya/tatyana-vesennyaya-screen-02.png",
        alt: "Блок портфолио на лендинге Татьяны Весенней",
        caption: "Портфолио как главное доказательство качества"
      },
      {
        src: "/portfolio/tatyana-vesennyaya/tatyana-vesennyaya-screen-03.png",
        alt: "Блок услуг и контактов на лендинге Татьяны Весенней",
        caption: "Услуги, процесс и переход к обращению"
      }
    ],
    externalUrl: "https://tatyana-vesennya-land.vercel.app/",
    featured: false,
    sortOrder: 7,
    visualSystem: {
      palette: ["#08070B", "#6E2DBD", "#D7C4F1", "#F0E7DA"],
      colors: "Чёрный, холодный белый, приглушённый фиолетовый акцент",
      typography: "Крупный редакционный заголовок и нейтральный текстовый гротеск",
      grid: "Адаптивная сетка с широкими зонами для портфолио",
      principles: [
        "Работы появляются уже на первом экране",
        "Текст поддерживает изображения, а не конкурирует с ними",
        "У каждого блока есть понятный следующий шаг",
        "Мобильная версия сохраняет визуальный характер"
      ]
    }
  }
] satisfies PortfolioItem[]).sort((a, b) => a.sortOrder - b.sortOrder);

export function getPortfolioItem(slug: string) {
  return publishedPortfolioItems.find((item) => item.slug === slug);
}

export function getNextPortfolioItem(slug: string) {
  const index = publishedPortfolioItems.findIndex((item) => item.slug === slug);
  if (index === -1) return undefined;
  return publishedPortfolioItems[(index + 1) % publishedPortfolioItems.length];
}

function isPublishedPortfolioItem(item: PortfolioItem): item is PublishedPortfolioItem {
  return Boolean(
    item.published && item.coverImage && item.coverAlt && item.gallery.length > 0
  );
}

export const publishedPortfolioItems = portfolioItems.filter(
  isPublishedPortfolioItem
);
