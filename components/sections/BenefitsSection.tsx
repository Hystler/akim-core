import { benefits } from "@/data/site";

export function BenefitsSection() {
  return (
    <section className="bg-ink-950 py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase text-muted">
              Почему со мной удобно
            </p>
            <h2 className="text-balance mt-5 max-w-lg font-heading text-3xl font-medium leading-[1.08] text-frost sm:text-5xl">
              Содержание и дизайн собираются в одном процессе
            </h2>
          </div>

          <div className="border-t border-white/15">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[48px_0.8fr_1.2fr]"
              >
                <span className="text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg font-medium text-frost">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-7 text-muted">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
