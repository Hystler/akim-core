"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type PortfolioGalleryProps = {
  images: string[];
  title: string;
};

export function PortfolioGallery({ images, title }: PortfolioGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) return current;
          return current === 0 ? images.length - 1 : current - 1;
        });
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => {
          if (current === null) return current;
          return current === images.length - 1 ? 0 : current + 1;
        });
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  function showPrevious() {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === 0 ? images.length - 1 : current - 1;
    });
  }

  function showNext() {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === images.length - 1 ? 0 : current + 1;
    });
  }

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="focus-ring group relative aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-ink-900 text-left transition duration-300 hover:-translate-y-0.5 hover:border-white/30"
          >
            <Image
              src={image}
              alt={`${title}, изображение ${index + 1}`}
              fill
              sizes="(min-width: 1440px) 660px, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.012] group-hover:opacity-90"
            />
            <span className="absolute bottom-3 left-3 text-xs font-medium text-white drop-shadow">
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${title}: просмотр изображения`}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setActiveIndex(null);
              }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/[0.94] p-4 sm:p-8"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="focus-ring absolute right-4 top-4 z-10 inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-frost transition hover:border-white/50 hover:bg-white/10 sm:right-6 sm:top-6"
              aria-label="Закрыть"
            >
              <X size={20} aria-hidden="true" />
            </button>

            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  className="focus-ring absolute bottom-4 left-4 z-10 inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-frost transition hover:border-white/50 hover:bg-white/10 sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2"
                  aria-label="Предыдущее изображение"
                >
                  <ChevronLeft size={22} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="focus-ring absolute bottom-4 right-4 z-10 inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-frost transition hover:border-white/50 hover:bg-white/10 sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2"
                  aria-label="Следующее изображение"
                >
                  <ChevronRight size={22} aria-hidden="true" />
                </button>
              </>
            ) : null}

            <motion.div
              key={activeImage}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-none relative h-[76vh] w-full max-w-6xl"
            >
              <Image
                src={activeImage}
                alt={`${title}, изображение ${(activeIndex ?? 0) + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            <p className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-frost/65">
              {String((activeIndex ?? 0) + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
