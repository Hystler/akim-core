import { ArrowDownRight } from "lucide-react";
import { processSteps } from "@/data/site";

const stepNotes = [
  "Начинаем с цели.",
  "Выстраиваем ход.",
  "Находим нужный тон.",
  "Передаём готовое."
];

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 overflow-hidden bg-main py-20 text-paper sm:py-28">
      <div className="section-shell">
        <div className="grid gap-7 lg:grid-cols-[0.45fr_1.55fr] lg:items-end">
          <p className="text-xs font-bold uppercase text-paper/55">Процесс</p>
          <div>
            <h2 className="text-balance max-w-4xl font-heading text-4xl font-bold leading-[1.02] sm:text-6xl">
              Четыре шага.
            </h2>
            <p className="mt-2 font-serif text-3xl font-medium italic text-terracotta sm:text-5xl">
              Без лишних кругов.
            </p>
          </div>
        </div>

        <div className="scrollbar-hide -mx-5 mt-12 overflow-x-auto px-5 pb-10 sm:-mx-8 sm:px-8 lg:-mx-10 lg:mt-16 lg:px-10">
          <div className="flex w-max snap-x snap-mandatory gap-5 sm:gap-6">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className={`min-h-[390px] min-w-[85vw] snap-center border border-paper/15 bg-paper p-7 text-main shadow-tactile transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl sm:p-9 md:min-w-[40vw] lg:min-w-[32rem] ${
                  index % 2 === 0 ? "rotate-[0.35deg]" : "-rotate-[0.35deg]"
                }`}
              >
                <div className="flex items-start justify-between border-b border-main/20 pb-5">
                  <span className="text-xs font-bold text-burgundy">{step.number}</span>
                  <ArrowDownRight className="h-5 w-5 text-main/45" aria-hidden="true" />
                </div>
                <h3 className="mt-12 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-md text-base font-medium leading-7 text-main/70">
                  {step.text}
                </p>
                <p className="mt-12 font-serif text-2xl font-medium italic text-burgundy sm:text-3xl">
                  {stepNotes[index]}
                </p>
              </article>
            ))}
          </div>
        </div>

        <p className="max-w-3xl border-l-2 border-burgundy pl-5 text-base font-medium leading-8 text-paper/70">
          Техническое задание не&nbsp;обязательно. Достаточно материалов и&nbsp;цели.
        </p>
      </div>
    </section>
  );
}
