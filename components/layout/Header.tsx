"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/projects", label: "Проекты" },
  { href: "/portfolio", label: "Портфолио" },
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/88 backdrop-blur-xl">
      <motion.div
        className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-electric-cyan"
        style={{ scaleX: progress }}
      />
      <nav className="section-shell flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="focus-ring flex items-baseline gap-3 rounded-sm text-sm font-semibold text-frost"
          aria-label="Аким Коваленко — главная"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-base">AKIM CORE</span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted sm:inline">
            Digital Builder
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring relative rounded-sm py-2 text-sm transition-colors ${
                  isActive
                    ? "text-frost after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-frost"
                    : "text-muted hover:text-frost"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="focus-ring group hidden items-center gap-2 rounded-md border border-frost bg-frost px-4 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-transparent hover:text-frost sm:inline-flex"
          >
            Написать
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-white/15 text-frost transition hover:border-white/40 hover:bg-white/[0.05] lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/10 bg-ink-950 px-5 py-5 lg:hidden"
          >
            <div className="mx-auto grid max-w-[1440px]">
              {navItems.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`border-b border-white/10 px-1 py-4 text-base font-medium transition ${
                      isActive
                        ? "text-frost"
                        : "text-muted hover:text-frost"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-5 rounded-md bg-frost px-4 py-3 text-center text-sm font-semibold text-ink-950"
              >
                Написать
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
