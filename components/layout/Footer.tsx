import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-950 py-12 sm:py-16">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Начать разговор
            </p>
            <a
              href="mailto:hello@akimkovalenko.ru"
              className="mt-5 block break-all text-3xl font-medium text-frost underline decoration-white/20 transition hover:decoration-frost sm:text-5xl lg:text-6xl"
            >
              hello@akimkovalenko.ru
            </a>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted md:justify-self-end">
            AI-системы, цифровые продукты, бизнес-анализ, презентации и продакшн.
            Работаю с задачами, где нужно соединить стратегию, дизайн и исполнение.
          </p>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="font-semibold text-frost transition hover:text-electric-cyan">
            AKIM CORE
          </Link>
          <p>© {year} / Moscow</p>
        </div>
      </div>
    </footer>
  );
}
