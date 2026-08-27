export type Service = {
  slug: string;
  title: string;
  description: string;
  includes: string[];
  clientReceives: string;
  timing: string;
  caseHref?: string;
  caseLabel?: string;
};

export type PresentationPackage = {
  title: string;
  audience: string;
  includes: string[];
  timing: string;
  price: string;
};

export const services: Service[] = [
  {
    slug: "presentations",
    title: "Презентации",
    description: "Собираю структуру, редактирую текст и оформляю готовый файл.",
    includes: [
      "Презентации компаний и продуктов",
      "Коммерческие предложения",
      "Отчёты и материалы с цифрами",
      "Презентации мероприятий"
    ],
    clientReceives: "Понятную историю, готовые слайды и редактируемый файл.",
    timing: "От 1 до 7 рабочих дней — зависит от объёма и материалов.",
    caseHref: "/portfolio/chess-jazz",
    caseLabel: "Chess & Jazz"
  },
  {
    slug: "landings",
    title: "Сайты",
    description: "Продумываю страницу, оформляю её и публикую.",
    includes: [
      "Структура страницы",
      "Редактура текста",
      "Дизайн для компьютера и телефона",
      "Сборка и публикация"
    ],
    clientReceives: "Рабочий сайт и исходные материалы.",
    timing: "От 5 до 7 рабочих дней — зависит от содержания.",
    caseHref: "/portfolio/tatyana-vesennyaya",
    caseLabel: "Сайт Татьяны Весенней"
  },
  {
    slug: "digital-products",
    title: "Сервисы для работы",
    description: "Превращаю повторяющуюся задачу в простой рабочий сервис.",
    includes: [
      "Разбор задачи",
      "Порядок действий",
      "Структура экранов",
      "Первая рабочая версия"
    ],
    clientReceives: "Понятный сценарий, ключевые экраны и рабочую основу.",
    timing: "От 3 до 7 рабочих дней — зависит от количества сценариев.",
    caseHref: "/portfolio/jk-finance",
    caseLabel: "JK Finance"
  }
];

export const presentationPackages: PresentationPackage[] = [
  {
    title: "Сделать с нуля",
    audience: "Если есть материалы, таблицы, черновик или только идея.",
    includes: [
      "Разбор задачи",
      "Структура и редактура текста",
      "Визуальное направление",
      "Дизайн всех слайдов",
      "Согласованные правки",
      "Готовый файл"
    ],
    timing: "От 3 до 7 рабочих дней",
    price: "Стоимость — после просмотра материалов"
  },
  {
    title: "Обновить готовую",
    audience: "Если структура и тексты уже есть, но слайды нужно привести в порядок.",
    includes: [
      "Единый стиль",
      "Типографика и композиция",
      "Таблицы и графики",
      "Шаблоны повторяемых слайдов",
      "Готовый файл"
    ],
    timing: "От 1 до 5 рабочих дней",
    price: "Стоимость — после просмотра материалов"
  },
  {
    title: "Срочно",
    audience: "Если задача нужна в короткий срок и объём можно зафиксировать заранее.",
    includes: [
      "Чёткий объём и срок",
      "Ограниченное число правок",
      "Приоритетная работа",
      "Готовый файл"
    ],
    timing: "От 1 до 3 рабочих дней",
    price: "Стоимость — после просмотра материалов"
  }
];
