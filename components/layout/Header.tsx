"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, Send, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TrackedLink } from "@/components/ui/TrackedLink";

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
    <header className="sticky top-0 z-50 border-b border-main/20 bg-paper">
      <motion.div
        className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-burgundy"
        style={{ scaleX: progress }}
      />
      <nav
        className="section-shell flex h-16 items-center justify-between gap-4 md:h-[72px]"
        aria-label="Основная навигация"
      >
        <Link
          href="/"
          className="focus-ring font-heading text-base font-bold text-main"
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
                  ? "text-burgundy after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-burgundy"
                  : "text-main/70 hover:text-main"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="focus-ring group hidden min-h-11 items-center gap-2 border border-burgundy bg-burgundy px-4 text-sm font-bold text-paper shadow-press transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl sm:inline-flex"
          >
            Обсудить проект
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
          <TrackedLink
            href="https://t.me/loot_digger"
            target="_blank"
            rel="noreferrer"
            goal="telegram_click"
            goalParams={{ source: "mobile_header" }}
            aria-label="Написать в Telegram"
            className="focus-ring grid size-11 place-items-center border border-burgundy bg-burgundy text-paper shadow-press transition-all duration-300 hover:-translate-y-0.5 lg:hidden"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
          </TrackedLink>
          <button
            type="button"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="focus-ring grid size-11 place-items-center border border-main/30 text-main transition-all duration-300 hover:-translate-y-0.5 hover:bg-base lg:hidden"
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
            className="max-h-[calc(100svh-64px)] overflow-y-auto border-t border-main/15 bg-paper px-5 py-5 shadow-tactile md:max-h-[calc(100svh-72px)] lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`min-h-12 border-b border-main/15 px-1 py-4 text-base font-medium transition ${
                    isActive(item.href) ? "text-burgundy" : "text-main/70 hover:text-main"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-5 inline-flex min-h-12 items-center justify-center bg-burgundy px-4 text-sm font-bold text-paper"
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
