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
    <footer className="border-t border-white/10 bg-ink-950 py-12 sm:py-16">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_0.6fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase text-muted">
              Обсудить проект
            </p>
            <TrackedLink
              href="https://t.me/loot_digger"
              target="_blank"
              rel="noreferrer"
              goal="telegram_click"
              className="focus-ring mt-5 block w-fit rounded-sm font-heading text-3xl font-medium text-frost underline decoration-white/20 transition hover:decoration-frost sm:text-5xl lg:text-6xl"
            >
              @loot_digger
            </TrackedLink>
            <a
              href={`mailto:${siteEmail}`}
              className="mt-5 block w-fit text-sm text-muted transition hover:text-frost"
            >
              {siteEmail}
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:justify-self-end">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted transition hover:text-frost"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="font-heading font-semibold text-frost">
            AKIM CORE
          </Link>
          <p>© {year} Аким Коваленко</p>
        </div>
      </div>
    </footer>
  );
}
