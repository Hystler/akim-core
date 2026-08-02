import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Страница не найдена",
  alternates: { canonical: null },
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center py-16">
      <div className="section-shell">
        <p className="text-xs font-semibold uppercase text-electric-cyan">Ошибка 404</p>
        <h1 className="text-balance mt-5 max-w-4xl font-heading text-5xl font-medium leading-[1.02] text-frost sm:text-7xl">
          Такой страницы нет, но кейсы на месте
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-muted">
          Возможно, адрес изменился или в ссылке есть опечатка. Вернитесь на главную
          или откройте каталог работ.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-frost px-5 text-sm font-semibold text-ink-950 transition hover:bg-electric-cyan"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            На главную
          </Link>
          <Link
            href="/portfolio"
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-semibold text-frost transition hover:border-frost"
          >
            Смотреть кейсы
          </Link>
        </div>
      </div>
    </section>
  );
}
