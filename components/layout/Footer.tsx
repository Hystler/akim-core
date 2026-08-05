import Link from "next/link";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteEmail } from "@/lib/site-config";

const footerLinks = [
  { href: "/portfolio", label: "Кейсы" },
  { href: "/services", label: "Услуги" },
  { href: "/#process", label: "Процесс" },
  { href: "/about", label: "Обо мне" },
  { href: "/contact", label: "Контакты" },
  { href: "/privacy", label: "Политика конфиденциальности" }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-main bg-main py-12 text-paper sm:py-16">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-paper/20 pb-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-paper/60">
              Обсудить проект
            </p>
            <TrackedLink
              href="https://t.me/loot_digger"
              target="_blank"
              rel="noreferrer"
              goal="telegram_click"
              className="focus-ring mt-5 block w-fit font-serif text-4xl font-medium italic text-paper underline decoration-paper/25 transition hover:decoration-paper sm:text-6xl lg:text-7xl"
            >
              @loot_digger
            </TrackedLink>
            <a
              href={`mailto:${siteEmail}`}
              className="mt-5 block w-fit text-sm text-paper/60 transition hover:text-paper"
            >
              {siteEmail}
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm lg:justify-self-end">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-paper/60 transition hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="font-heading font-bold text-paper">
            AKIM CORE
          </Link>
          <p>© {year} Аким Коваленко</p>
        </div>
      </div>
    </footer>
  );
}
