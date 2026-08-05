import { benefits } from "@/data/site";

export function BenefitsSection() {
  return (
    <section className="overflow-hidden bg-base-texture py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">
              Почему со мной удобно
            </p>
            <h2 className="text-balance mt-5 max-w-lg font-heading text-3xl font-bold leading-[1.04] text-main sm:text-5xl">
              Вникаю. Сокращаю. Собираю.
            </h2>
            <p className="mt-3 font-serif text-2xl font-medium italic text-burgundy sm:text-3xl">
              В правильном порядке.
            </p>
          </div>

          <div className="space-y-0 px-1 sm:px-4">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className={`relative grid gap-4 border border-main/15 bg-paper p-6 shadow-tactile transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl sm:grid-cols-[48px_0.8fr_1.2fr] sm:p-7 ${
                  index === 0 ? "" : "-mt-2 sm:-mt-3"
                } ${index % 2 === 0 ? "rotate-[0.2deg]" : "-rotate-[0.2deg]"}`}
                style={{ zIndex: index + 1 }}
              >
                <span className="text-xs font-bold text-burgundy">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg font-bold text-main">
                  {benefit.title}
                </h3>
                <p className="text-sm font-medium leading-7 text-main/70">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
