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
    <section className="bg-base-texture flex min-h-[70svh] items-center py-16">
      <div className="section-shell">
        <p className="text-xs font-bold uppercase text-burgundy">Ошибка 404</p>
        <h1 className="text-balance mt-5 max-w-4xl font-heading text-5xl font-bold leading-[1.02] text-main sm:text-7xl">
          Такой страницы нет, но работы на месте
        </h1>
        <p className="mt-6 max-w-xl text-[16px] font-medium leading-8 text-main/70">
          Возможно, адрес изменился или в ссылке есть опечатка. Вернитесь на главную
          или откройте каталог работ.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 bg-burgundy px-5 text-sm font-bold text-paper transition hover:-translate-y-1 hover:shadow-press"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            На главную
          </Link>
          <Link
            href="/portfolio"
            className="focus-ring inline-flex min-h-12 items-center justify-center border border-main/35 px-5 text-sm font-bold text-main transition hover:border-burgundy hover:text-burgundy"
          >
            Смотреть работы
          </Link>
        </div>
      </div>
    </section>
  );
}
