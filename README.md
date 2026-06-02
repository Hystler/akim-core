# Akim Kovalenko Personal Brand Website

Многостраничный personal brand website на Next.js App Router, TypeScript, Tailwind CSS и Framer Motion.

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт откроется на адресе, который покажет Next.js в терминале.

## Production build

```bash
npm run build
npm run start
```

## Проверка качества

```bash
npm run lint
```

## Деплой на Vercel

1. Создайте репозиторий на GitHub и загрузите проект.
2. В Vercel выберите `Add New Project`.
3. Импортируйте GitHub-репозиторий.
4. Framework Preset: `Next.js`.
5. Build Command: `npm run build`.
6. Install Command: `npm install`.
7. Deploy.

Проект не использует backend, auth, Supabase или базу данных, поэтому дополнительных переменных окружения для базового деплоя не требуется.
