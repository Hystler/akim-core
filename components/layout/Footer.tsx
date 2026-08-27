import Link from "next/link";

const footerLinks = [
  { href: "/portfolio", label: "Работы" },
  { href: "/services", label: "Услуги" },
  { href: "/services#process", label: "Процесс" },
  { href: "/about", label: "Обо мне" },
  { href: "/contact", label: "Контакты" },
  { href: "/privacy", label: "Политика конфиденциальности" }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-main bg-main py-10 text-paper sm:py-12">
      <div className="section-shell">
        <div className="grid gap-8 border-b border-paper/20 pb-10 md:grid-cols-[0.6fr_1.4fr] md:items-start">
          <div>
            <Link href="/" className="focus-ring font-heading text-lg font-bold text-paper">
              AKIM CORE
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-paper/55">
              Презентации, сайты и&nbsp;сервисы для рабочих задач.
            </p>
          </div>

          <nav
            aria-label="Навигация в подвале"
            className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3 md:justify-self-end"
          >
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring text-paper/60 transition hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-sm text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Аким Коваленко</p>
          <p>Удалённая работа</p>
        </div>
      </div>
    </footer>
  );
}
