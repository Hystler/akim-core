const chapters = ["Атмосфера", "Цифры", "Образ", "Сила"];

export function TrustStrip() {
  return (
    <section className="border-b border-main/20 bg-paper" aria-label="Главы портфолио">
      <div className="section-shell grid grid-cols-2 py-2 md:grid-cols-4">
        {chapters.map((chapter, index) => (
          <div
            key={chapter}
            className="flex min-h-20 items-center gap-3 border-main/15 px-3 first:pl-0 even:border-l md:min-h-24 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0"
          >
            <span className="grid size-7 place-items-center rounded-full border border-burgundy/35 text-[9px] font-bold text-burgundy">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-heading text-base font-bold text-main sm:text-lg">
              {chapter}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
