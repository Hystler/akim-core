# AKIM CORE

Портфолио Акима Коваленко — дизайнера презентаций и digital-продуктов. Проект собран на Next.js App Router, TypeScript, Tailwind CSS и Framer Motion.

## Локальный запуск

```bash
npm install
npm run dev
```

## Проверка качества

```bash
npm run lint
npm run typecheck
npm run build
```

## Контент кейсов

Все кейсы описаны в `data/portfolio.ts`. Страницы `/portfolio/[id]`, карточки, галереи, sitemap и structured data формируются из одной структуры данных.

Растровые материалы опубликованных кейсов находятся в `public/portfolio/<slug>/`. Кейс публикуется только после добавления реальной обложки и галереи; временные продуктовые mockup-изображения не используются.

Собственная база данных, Prisma, Supabase и API загрузки файлов для портфолио не используются.

## Переменные окружения

Скопируйте значения из `.env.example` в локальный `.env.local` и настройте их в Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_YANDEX_METRIKA_ID=
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formsubmit.co/ajax/hello@example.com
```

`NEXT_PUBLIC_YANDEX_METRIKA_ID` включает счётчик и цели. Без ID аналитический скрипт не загружается.

Форма использует FormSubmit без собственного backend. При первом обращении сервис может отправить на рабочий email письмо для подтверждения адреса.

## Фотография

Чтобы показать портрет в блоке «Обо мне», добавьте реальную фотографию в `public/images/akim-kovalenko.jpg`. Пока файла нет, интерфейс автоматически показывает композицию из работ.
