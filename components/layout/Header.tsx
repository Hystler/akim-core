"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/portfolio", label: "Работы" },
  { href: "/services", label: "Услуги" },
  { href: "/#process", label: "Процесс" },
  { href: "/about", label: "Обо мне" },
  { href: "/contact", label: "Контакты" }
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3
  });

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  function isActive(href: string) {
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-ink-950">
      <motion.div
        className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-electric-cyan"
        style={{ scaleX: progress }}
      />
      <nav
        className="section-shell flex h-16 items-center justify-between gap-4 md:h-[72px]"
        aria-label="Основная навигация"
      >
        <Link
          href="/"
          className="focus-ring rounded-sm font-heading text-base font-semibold text-frost"
          aria-label="AKIM CORE — главная"
          onClick={() => setIsOpen(false)}
        >
          AKIM CORE
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring relative rounded-sm py-2 text-sm transition-colors ${
                isActive(item.href)
                  ? "text-frost after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-frost"
                  : "text-muted hover:text-frost"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="focus-ring group hidden min-h-11 items-center gap-2 rounded-md border border-frost bg-frost px-4 text-sm font-semibold text-ink-950 transition hover:bg-transparent hover:text-frost sm:inline-flex"
          >
            Обсудить проект
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
          <button
            type="button"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="focus-ring grid size-11 place-items-center rounded-md border border-white/15 text-frost transition hover:border-white/40 hover:bg-white/[0.05] lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="max-h-[calc(100svh-64px)] overflow-y-auto border-t border-white/10 bg-ink-950 px-5 py-5 md:max-h-[calc(100svh-72px)] lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`min-h-12 border-b border-white/10 px-1 py-4 text-base font-medium transition ${
                    isActive(item.href) ? "text-frost" : "text-muted hover:text-frost"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-frost px-4 text-sm font-semibold text-ink-950"
              >
                Обсудить проект
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
