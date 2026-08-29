"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TrackedLink } from "@/components/ui/TrackedLink";

const navItems = [
  { href: "/portfolio", label: "Работы" },
  { href: "/services", label: "Услуги" },
  { href: "/services#process", label: "Процесс" },
  { href: "/about", label: "Обо мне" },
  { href: "/contact", label: "Контакты" }
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
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
    if (href.includes("#")) return false;
    return pathname.startsWith(href);
  }

  return (
    <header
      className="site-header sticky top-0 z-50 border-b border-main/10"
      data-scrolled={isScrolled}
    >
      <div
        className="absolute inset-x-0 bottom-[-1px] h-px bg-main/[0.08]"
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-gradient-to-r from-[#761127] to-[#8d1a36]"
        style={{ scaleX: progress }}
      />
      <nav
        className="section-shell flex h-16 items-center justify-between gap-3 md:h-20 md:gap-5"
        aria-label="Основная навигация"
      >
        <Link
          href="/"
          className="focus-ring whitespace-nowrap font-heading text-[14px] font-semibold tracking-[0.3em] text-main sm:text-[15px] lg:text-[16px]"
          aria-label="AKIM CORE — главная"
          onClick={() => setIsOpen(false)}
        >
          AKIM&nbsp; CORE
        </Link>

        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring relative py-3 text-[14px] font-medium tracking-[0.04em] transition-colors ${
                isActive(item.href)
                  ? "text-burgundy after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-burgundy"
                  : "text-main/70 hover:text-main"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <TrackedLink
            href="/contact"
            goal="hero_contact_click"
            goalParams={{ source: "header" }}
            className="focus-ring group inline-flex min-h-11 items-center gap-1.5 border border-burgundy bg-burgundy px-3 text-xs font-bold text-paper shadow-press transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-tactile sm:gap-2 sm:px-5 sm:text-sm"
          >
            <span className="hidden min-[390px]:inline">Обсудить проект</span>
            <span className="min-[390px]:hidden">Обсудить</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-4 sm:w-4"
              aria-hidden="true"
            />
          </TrackedLink>
          <button
            type="button"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="focus-ring grid size-11 place-items-center border border-main/25 text-main transition-all duration-200 hover:-translate-y-0.5 hover:border-main/45 lg:hidden"
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
            className="max-h-[calc(100svh-64px)] overflow-y-auto border-t border-main/10 bg-paper px-5 py-5 shadow-tactile md:max-h-[calc(100svh-80px)] lg:hidden"
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
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
