"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ACoreLogo } from "@/components/branding/ACoreLogo";

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
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 120],
    ["rgba(8, 10, 15, 0.58)", "rgba(8, 10, 15, 0.86)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 120],
    ["rgba(255, 255, 255, 0.08)", "rgba(255, 255, 255, 0.16)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 120],
    ["0 10px 40px rgba(0,0,0,0.12)", "0 16px 56px rgba(0,0,0,0.32)"]
  );

  return (
    <motion.header
      style={{ backgroundColor, borderColor, boxShadow }}
      className="sticky top-0 z-50 border-b backdrop-blur-2xl"
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm font-semibold tracking-wide text-frost"
          aria-label="Аким Коваленко — главная"
          onClick={() => setIsOpen(false)}
        >
          <ACoreLogo
            size={48}
            variant="navbar"
            className="transition drop-shadow-[0_0_18px_rgba(34,211,238,0.22)]"
          />
          <span className="hidden sm:inline">Аким Коваленко</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-electric-cyan/30 bg-electric-cyan/10 text-frost shadow-[0_0_24px_rgba(34,211,238,0.14)]"
                    : "border-transparent text-muted hover:bg-white/10 hover:text-frost"
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
            className="hidden rounded-full bg-frost px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-electric-cyan hover:shadow-glow sm:inline-flex"
          >
            Написать
          </Link>
          <button
            type="button"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-frost transition hover:border-electric-cyan/40 hover:bg-white/[0.08] lg:hidden"
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
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/10 bg-ink-950/92 px-5 py-4 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "border-electric-cyan/30 bg-electric-cyan/10 text-frost"
                        : "border-white/10 bg-white/[0.035] text-muted hover:text-frost"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-frost px-4 py-3 text-center text-sm font-semibold text-ink-950 transition hover:bg-electric-cyan"
              >
                Написать
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
