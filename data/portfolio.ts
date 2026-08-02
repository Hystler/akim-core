export type PortfolioCategory =
  | "presentation"
  | "landing"
  | "digital-product"
  | "automation";

export type PortfolioStatus = "client" | "internal" | "concept";

export type PortfolioGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  status: PortfolioStatus;
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
  coverLabel?: string;
  gallery: PortfolioGalleryItem[];
  externalUrl?: string;
  featured: boolean;
  sortOrder: number;
  visualSystem: {
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
  { label: "Лендинги", value: "landing" },
  { label: "Digital-продукты", value: "digital-product" },
  { label: "Автоматизации", value: "automation" }
];

export const portfolioCategoryLabels: Record<PortfolioCategory, string> = {
  presentation: "Презентация",
  landing: "Лендинг",
  "digital-product": "Digital-продукт",
  automation: "Автоматизация"
};

export const portfolioStatusLabels: Record<PortfolioStatus, string> = {
  client: "Клиентский проект",
  internal: "Внутренний продукт",
  concept: "Концептуальный кейс"
};

export const portfolioItems: PortfolioItem[] = ([
  {
    slug: "chess-jazz",
    title: "Chess & Jazz",
    category: "presentation",
    status: "concept",
    projectType: "Презентация мероприятия",
    year: "2026",
    client: "Концепт для Chess & Jazz",
    role: "Структура, storytelling и дизайн",
    scope: "10 слайдов",
    description:
      "Презентация фестивального проекта: от логики рассказа до цельной премиальной визуальной системы.",
    task:
      "Собрать презентацию, которая быстро объясняет формат Chess & Jazz, передаёт атмосферу события и последовательно раскрывает его содержание.",
    audience:
      "Партнёры, потенциальные участники и команда, которым нужно понять идею и масштаб проекта без длинного устного пояснения.",
    sourceMaterials:
      "Краткое описание формата, ключевые тезисы о событии и визуальные референсы летнего городского фестиваля.",
    problem:
      "Шахматы, джаз, городская площадка и программа воспринимались как отдельные темы. Без общей драматургии презентация могла превратиться в набор красивых, но несвязанных слайдов.",
    solution:
      "История построена от основной идеи к локации, программе и ценности формата. Тёмная палитра, тёплая фотография и крупная антиква создают камерный вечерний характер и удерживают единый ритм на всех слайдах.",
    deliverables: [
      "Структура презентации",
      "Редактура и сокращение текстов",
      "Storytelling",
      "Визуальная концепция",
      "Дизайн 10 слайдов",
      "Подбор и композиция изображений"
    ],
    result: [
      "Разработана презентация на 10 слайдов",
      "Материалы собраны в последовательную историю",
      "Создана единая визуальная система",
      "Подготовлена цельная презентационная подача проекта"
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
    status: "concept",
    projectType: "Бренд-презентация",
    year: "2026",
    client: "Концепт fashion-бренда",
    role: "Визуальная концепция и дизайн",
    scope: "5 слайдов",
    description:
      "Лаконичная презентация fashion-бренда, в которой продукт, настроение и характер коллекции собраны в единую подачу.",
    task:
      "Создать короткую презентацию бренда одежды, которая передаёт ощущение современной сдержанной роскоши и не перегружает зрителя информацией.",
    audience:
      "Партнёры, байеры и потенциальные клиенты, которым важно быстро считать характер бренда и первой коллекции.",
    sourceMaterials:
      "Название бренда, идея первой коллекции и направление визуального характера — мягкость, точность и современная элегантность.",
    problem:
      "Fashion-презентации легко становятся либо слишком декоративными, либо похожими на каталог. Требовалось сохранить атмосферу и при этом выстроить ясную последовательность.",
    solution:
      "Подача построена на большом количестве воздуха, спокойной молочной палитре и контрасте крупной типографики с портретной фотографией. Каждый слайд выполняет одну функцию и продолжает общий визуальный ритм.",
    deliverables: [
      "Структура короткой презентации",
      "Визуальная концепция",
      "Типографическая система",
      "Композиция изображений",
      "Дизайн 5 слайдов"
    ],
    result: [
      "Создана презентация на 5 слайдов",
      "Сформирована единая визуальная атмосфера бренда",
      "Материал подготовлен в лаконичном презентационном формате"
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
      colors: "Молочный, графитовый, приглушённый серо-бежевый",
      typography: "Редакционная антиква и лёгкий нейтральный гротеск",
      grid: "Асимметричная fashion-сетка с крупными полями",
      principles: [
        "Минимум элементов на экране",
        "Фотография остаётся главным носителем эмоции",
        "Типографика работает как часть образа",
        "Все слайды сохраняют спокойный темп"
      ]
    }
  },
  {
    slug: "jk-finance",
    title: "JK Finance",
    category: "digital-product",
    status: "internal",
    projectType: "Финансовый digital-продукт",
    year: "2026",
    client: "Внутренний продукт · Рабочий MVP",
    role: "Финансовая логика, продуктовая структура и интерфейс",
    scope: "Рабочий опубликованный MVP",
    description:
      "Рабочий интерфейс для финансового моделирования точки и франшизы: от меню и рецептур до сценариев, чувствительности и прогноза продаж.",
    task:
      "Собрать финансовую модель в опубликованный продукт, где можно управлять исходными данными, сравнивать Store Model и Franchise Model и получать связанный прогноз.",
    audience:
      "Команда внутреннего проекта, которой нужен единый инструмент для проверки экономики точки и франшизной модели.",
    sourceMaterials:
      "Меню, рецептуры, ингредиенты, статьи расходов, логика продаж и исходные параметры для нескольких сценариев.",
    problem:
      "Связанные расчёты были распределены между таблицами и ручными действиями. Изменение рецептуры, цены или сценария требовало заново проверять несколько зависимых блоков.",
    solution:
      "Данные разделены на меню, рецептуры, ингредиенты, расходы и модели бизнеса. Store Model и Franchise Model используют общие исходные данные, а сценарии и чувствительность показывают влияние изменений на прогноз.",
    deliverables: [
      "Финансовая модель",
      "Меню, рецептуры и ингредиенты",
      "Store Model и Franchise Model",
      "Сценарии и чувствительность",
      "Расходы и прогноз продаж",
      "Импорт и экспорт данных",
      "Рабочий опубликованный интерфейс"
    ],
    result: [
      "Собран рабочий MVP финансового продукта",
      "Связанные расчёты объединены в одном интерфейсе",
      "Добавлены сценарии, чувствительность, импорт и экспорт данных",
      "Интерфейс опубликован для практической работы с моделью"
    ],
    published: false,
    gallery: [],
    featured: false,
    sortOrder: 5,
    visualSystem: {
      colors: "Графитовый, холодный серый, светлый cyan",
      typography: "Нейтральный гротеск с табличными цифрами",
      grid: "12-колоночная продуктовая сетка",
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
    status: "internal",
    projectType: "Генератор договоров и документов",
    year: "2026",
    client: "Внутренний продукт · Рабочий MVP",
    role: "Продуктовая логика, UX и разработка",
    scope: "Рабочий MVP",
    description:
      "Генератор договоров и документов с каталогом шаблонов, формами переменных, экспортом DOCX/PDF и AI-анализом пользовательских DOCX.",
    task:
      "Создать сервис, в котором пользователь выбирает тип документа, заполняет переменные и получает готовый DOCX или PDF, а также может загрузить собственный шаблон для AI-анализа.",
    audience:
      "Предприниматели и небольшие команды, которым нужно регулярно готовить типовые договоры и документы без ручной сборки каждого файла.",
    sourceMaterials:
      "Каталог типов документов, набор шаблонов и переменных, требования к форматам DOCX/PDF, доступам и обработке пользовательских файлов.",
    problem:
      "Подготовка типового документа требует вручную искать шаблон, заменять переменные и проверять форматирование. Пользовательские DOCX сложно быстро превратить в повторно используемую форму.",
    solution:
      "Продукт построен вокруг каталога шаблонов и пошагового заполнения. После выбора документа пользователь вводит данные в форму и генерирует файл; собственный DOCX можно загрузить для AI-разбора переменных и структуры.",
    deliverables: [
      "Каталог шаблонов и типов документов",
      "Формы заполнения переменных",
      "Генерация DOCX и PDF",
      "Загрузка и AI-анализ пользовательского DOCX",
      "Регистрация и авторизация",
      "Premium-доступ и административная часть",
      "Политика персональных данных и cookie"
    ],
    result: [
      "Собран рабочий MVP генератора документов",
      "Реализованы создание файлов из каталога и загрузка собственных DOCX",
      "Добавлены пользовательские доступы, premium-логика и административная часть",
      "Подготовлены обязательные страницы о персональных данных и cookie"
    ],
    published: false,
    gallery: [],
    featured: false,
    sortOrder: 6,
    visualSystem: {
      colors: "Почти чёрный, холодный белый, cyan для активных состояний",
      typography: "Компактный гротеск с чёткой иерархией документа",
      grid: "Трёхпанельная рабочая область на 12-колоночной сетке",
      principles: [
        "Документ остаётся главным объектом",
        "Риски объясняются текстом, а не только цветом",
        "История действий всегда доступна",
        "Вторичные инструменты не конкурируют с содержанием"
      ]
    }
  },
  {
    slug: "ai-youtube-script-agent",
    title: "AI YouTube Script Agent",
    category: "automation",
    status: "internal",
    projectType: "AI-автоматизация",
    year: "2026",
    client: "Внутренний продукт · Рабочий MVP",
    role: "Продуктовая логика, AI-пайплайн и UX",
    scope: "Рабочий MVP для сценариев 60–90 минут",
    description:
      "Рабочая система для длинных YouTube-сценариев: проекты и выпуски, транскрибация видео, RAG, Style Bible, outline, главы и экспорт Markdown.",
    task:
      "Собрать управляемый процесс подготовки сценариев на 60–90 минут, где материалы и видео превращаются в структуру и главы, а человек подтверждает каждый ключевой этап.",
    audience:
      "Авторы и небольшие редакционные команды, работающие с длинными YouTube-выпусками и большим объёмом исходных материалов.",
    sourceMaterials:
      "YouTube-видео, транскрипты, загруженные материалы проекта, требования к стилю автора и ручной редакционный процесс.",
    problem:
      "Длинный сценарий нельзя надёжно получить одним запросом: теряются источники, стиль и логика глав, а редактирование становится непрозрачным.",
    solution:
      "Работа разделена на проекты и выпуски. Production-worker получает транскрипты YouTube-видео, RAG использует загруженные материалы, Style Bible фиксирует голос автора, затем последовательно создаются outline и отдельные главы с ручным подтверждением.",
    deliverables: [
      "Проекты и выпуски",
      "Загрузка YouTube-видео и получение транскриптов",
      "Production-worker для транскрибации",
      "RAG по материалам проекта",
      "Style Bible",
      "Outline и генерация отдельных глав",
      "Редактор сценария и ручное подтверждение этапов",
      "Экспорт Markdown"
    ],
    result: [
      "Собран рабочий MVP для сценариев продолжительностью 60–90 минут",
      "Материалы, транскрипты, стиль и главы объединены внутри выпуска",
      "Ключевые этапы требуют ручного подтверждения",
      "Готовый сценарий экспортируется в Markdown"
    ],
    published: false,
    gallery: [],
    featured: false,
    sortOrder: 7,
    visualSystem: {
      colors: "Графитовый, молочный, холодный голубой",
      typography: "Нейтральный интерфейсный гротеск",
      grid: "Последовательная workflow-сетка с фиксированным прогрессом",
      principles: [
        "Один этап — одна понятная задача",
        "AI предлагает, человек подтверждает",
        "Источники отделены от чернового текста",
        "Статус процесса виден без дополнительных экранов"
      ]
    }
  },
  {
    slug: "tatyana-vesennyaya",
    title: "Лендинг для Татьяны Весенней",
    category: "landing",
    status: "client",
    projectType: "Персональный лендинг",
    year: "2026",
    client: "Татьяна Весенняя",
    role: "Структура, UX и визуальная концепция",
    scope: "Адаптивный лендинг",
    description:
      "Лендинг для 3D-визуализатора: персональная подача, понятные услуги и визуальный акцент на портфолио.",
    task:
      "Создать персональный сайт, который быстро объясняет специализацию 3D-визуализатора, показывает качество работ и переводит интерес в обращение.",
    audience:
      "Архитекторы, дизайнеры интерьеров и частные заказчики, которым нужен специалист по 3D-визуализации.",
    sourceMaterials:
      "Портфолио визуализаций, описание услуг, профессиональная информация и пожелания к характеру личного бренда.",
    problem:
      "Работы были сильнее их подачи: посетителю требовалось самому собирать представление об услугах, процессе и причинах доверить проект специалисту.",
    solution:
      "Структура ведёт от позиционирования и избранных работ к услугам, процессу и контакту. Тёмный фон и пластичная типографика помогают изображениям оставаться главным доказательством качества.",
    deliverables: [
      "Структура лендинга",
      "Прототип",
      "Редактура текстов",
      "Визуальная концепция",
      "Адаптивный дизайн",
      "Разработка и публикация"
    ],
    result: [
      "Собран и опубликован рабочий лендинг",
      "Портфолио встроено в понятный сценарий знакомства",
      "Услуги и процесс получили единую визуальную подачу",
      "Сайт адаптирован для мобильных устройств"
    ],
    published: true,
    coverImage:
      "/portfolio/tatyana-vesennyaya/tatyana-vesennyaya-cover.png",
    coverAlt:
      "Обложка персонального лендинга 3D-визуализатора Татьяны Весенней",
    coverLabel: "3D Visualizer",
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
    featured: true,
    sortOrder: 4,
    visualSystem: {
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
