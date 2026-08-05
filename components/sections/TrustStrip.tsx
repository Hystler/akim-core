const chapters = ["Атмосфера", "Цифры", "Образ", "Сила"];

export function TrustStrip() {
  return (
    <section className="border-b border-white/10 bg-ink-900" aria-label="Главы портфолио">
      <div className="section-shell grid grid-cols-2 py-2 md:grid-cols-4">
        {chapters.map((chapter, index) => (
          <div
            key={chapter}
            className="flex min-h-20 items-center gap-3 border-white/10 px-3 first:pl-0 even:border-l md:min-h-24 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0"
          >
            <span className="text-[10px] text-electric-cyan">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-heading text-base font-medium text-frost sm:text-lg">
              {chapter}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
