import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 bg-paper py-20 text-ink-950 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.45fr_1.55fr]">
          <div>
            <p className="text-xs font-semibold uppercase text-ink-800/70">
              Процесс
            </p>
            <h2 className="text-balance mt-5 max-w-sm font-heading text-3xl font-medium leading-[1.08] sm:text-5xl">
              Понятный путь от материалов до готового результата
            </h2>
          </div>

          <div className="border-t border-ink-950/20">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="grid gap-4 border-b border-ink-950/20 py-7 sm:grid-cols-[56px_0.65fr_1.35fr] sm:items-start"
              >
                <span className="text-xs font-medium text-ink-800/70">{step.number}</span>
                <h3 className="font-heading text-xl font-medium">{step.title}</h3>
                <p className="text-base leading-7 text-ink-800/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-3xl border-l-2 border-electric-blue pl-5 text-base leading-8 text-ink-800/75">
          Можно прийти без готового технического задания. Достаточно материалов и
          понимания, какой результат нужен.
        </p>
      </div>
    </section>
  );
}
