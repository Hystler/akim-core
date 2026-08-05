"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import type { PortfolioGalleryItem } from "@/data/portfolio";

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAoLDAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

type PortfolioGalleryProps = {
  items: PortfolioGalleryItem[];
  title: string;
};

export function PortfolioGallery({ items, title }: PortfolioGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const openedFromIndex = useRef<number | null>(null);
  const isLightboxOpen = activeIndex !== null;
  const activeItem = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (!isLightboxOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? current : current === 0 ? items.length - 1 : current - 1
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : current === items.length - 1 ? 0 : current + 1
        );
      }
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    const previousOverflow = document.body.style.overflow;
    const galleryTriggers = triggerRefs.current;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      const triggerIndex = openedFromIndex.current;
      if (triggerIndex !== null) galleryTriggers[triggerIndex]?.focus();
    };
  }, [isLightboxOpen, items.length]);

  function showPrevious() {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === 0 ? items.length - 1 : current - 1;
    });
  }

  function showNext() {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === items.length - 1 ? 0 : current + 1;
    });
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 48) return;
    if (delta > 0) showPrevious();
    else showNext();
  }

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        {items.map((item, index) => (
          <figure key={item.src}>
            <button
              ref={(element) => {
                triggerRefs.current[index] = element;
              }}
              type="button"
              onClick={() => {
                openedFromIndex.current = index;
                setActiveIndex(index);
              }}
              className={`focus-ring group relative w-full cursor-pointer overflow-hidden border border-main/15 bg-paper p-2 text-left shadow-tactile transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl sm:p-3 ${
                item.aspectRatio === "portrait"
                  ? "aspect-[4/5]"
                  : item.aspectRatio === "standard"
                    ? "aspect-[3/2]"
                    : "aspect-[16/9]"
              }`}
              aria-label={`Открыть на весь экран: ${item.caption}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={blurDataUrl}
                className="object-contain p-2 transition duration-300 group-hover:scale-[1.01] sm:p-3"
              />
              <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full border border-main/25 bg-paper text-burgundy shadow-press">
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
            <figcaption className="mt-4 text-sm font-medium leading-6 text-main/70">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${title}: полноэкранный просмотр`}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setActiveIndex(null);
            }}
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0].clientX;
            }}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-[100] flex touch-pan-y items-center justify-center bg-main/[0.96] p-3 sm:p-8"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveIndex(null)}
              className="focus-ring absolute right-4 top-4 z-10 inline-flex size-11 items-center justify-center rounded-full border border-paper/30 bg-main text-paper transition hover:border-paper/70"
              aria-label="Закрыть галерею"
            >
              <X size={20} aria-hidden="true" />
            </button>

            {items.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  className="focus-ring absolute bottom-4 left-4 z-10 inline-flex size-12 items-center justify-center rounded-full border border-paper/30 bg-main text-paper transition hover:border-paper/70 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2"
                  aria-label="Предыдущий материал"
                >
                  <ChevronLeft size={22} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="focus-ring absolute bottom-4 right-4 z-10 inline-flex size-12 items-center justify-center rounded-full border border-paper/30 bg-main text-paper transition hover:border-paper/70 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2"
                  aria-label="Следующий материал"
                >
                  <ChevronRight size={22} aria-hidden="true" />
                </button>
              </>
            ) : null}

            <motion.figure
              key={activeItem.src}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-none flex h-[80vh] w-full max-w-6xl flex-col items-center justify-center"
            >
              <div className="relative w-full flex-1">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="mt-4 max-w-3xl text-center text-sm text-paper/70">
                {activeItem.caption}
              </figcaption>
            </motion.figure>

            <p className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-paper/55 sm:bottom-6">
              {String((activeIndex ?? 0) + 1).padStart(2, "0")} /{" "}
              {String(items.length).padStart(2, "0")}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
