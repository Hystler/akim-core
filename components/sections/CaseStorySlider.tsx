import { ArrowDownRight, Check } from "lucide-react";
import { PaletteDots } from "@/components/ui/PaletteDots";
import type { PublishedPortfolioItem } from "@/data/portfolio";

type CaseStorySliderProps = {
  item: PublishedPortfolioItem;
};

export function CaseStorySlider({ item }: CaseStorySliderProps) {
  return (
    <section className="overflow-hidden bg-main py-20 text-paper sm:py-28">
      <div className="section-shell">
        <div className="grid gap-7 lg:grid-cols-[0.45fr_1.55fr] lg:items-end">
          <p className="text-xs font-bold uppercase text-paper/55">История проекта</p>
          <div>
            <h2 className="text-balance max-w-4xl font-heading text-4xl font-bold leading-[1.02] sm:text-6xl">
              Как собирался кейс.
            </h2>
            <p className="mt-2 font-serif text-3xl font-medium italic text-terracotta sm:text-5xl">
              От задачи к форме.
            </p>
          </div>
        </div>

        <div className="scrollbar-hide -mx-5 mt-12 overflow-x-auto px-5 pb-12 sm:-mx-8 sm:px-8 lg:-mx-10 lg:mt-16 lg:px-10">
          <div className="flex w-max snap-x snap-mandatory gap-5 sm:gap-6">
            <article className="min-h-[480px] min-w-[85vw] snap-center border border-paper/15 bg-paper p-7 text-main shadow-tactile sm:p-9 md:min-w-[40vw] lg:min-w-[34rem]">
              <StoryHeader index="01" label="Задача" />
              <h3 className="mt-10 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Что нужно было сделать.
              </h3>
              <p className="mt-6 text-lg font-medium leading-8 text-main/75">
                {item.task}
              </p>
              <dl className="mt-10 grid gap-6 border-t border-main/20 pt-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase text-burgundy">Для кого</dt>
                  <dd className="mt-2 text-sm leading-6 text-main/70">{item.audience}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase text-burgundy">На старте</dt>
                  <dd className="mt-2 text-sm leading-6 text-main/70">{item.sourceMaterials}</dd>
                </div>
              </dl>
            </article>

            <article className="min-h-[480px] min-w-[85vw] snap-center border border-paper/15 bg-base p-7 text-main shadow-tactile -rotate-[0.3deg] sm:p-9 md:min-w-[40vw] lg:min-w-[34rem]">
              <StoryHeader index="02" label="Было" />
              <h3 className="mt-10 max-w-md font-heading text-4xl font-bold leading-tight sm:text-5xl">
                Где терялся смысл.
              </h3>
              <p className="mt-8 max-w-lg text-xl font-medium leading-9 text-main/70">
                {item.problem}
              </p>
              <p className="mt-14 font-serif text-3xl font-medium italic text-burgundy">
                Сначала убираем шум.
              </p>
            </article>

            <article className="min-h-[480px] min-w-[85vw] snap-center border border-paper/15 bg-paper p-7 text-main shadow-tactile rotate-[0.25deg] sm:p-9 md:min-w-[40vw] lg:min-w-[34rem]">
              <StoryHeader index="03" label="Стало" />
              <h3 className="mt-10 max-w-md font-heading text-4xl font-bold leading-tight sm:text-5xl">
                Решение.
              </h3>
              <p className="mt-8 max-w-lg text-xl font-medium leading-9 text-main/70">
                {item.solution}
              </p>
              <p className="mt-14 font-serif text-3xl font-medium italic text-burgundy">
                Затем выстраиваем ход.
              </p>
            </article>

            <article className="min-h-[480px] min-w-[85vw] snap-center border border-paper/15 bg-base p-7 text-main shadow-tactile -rotate-[0.2deg] sm:p-9 md:min-w-[40vw] lg:min-w-[34rem]">
              <StoryHeader index="04" label="Работа" />
              <h3 className="mt-10 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Что вошло.
              </h3>
              <ul className="mt-8 grid gap-0 border-t border-main/20">
                {item.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="flex gap-3 border-b border-main/20 py-3 text-sm font-medium leading-6"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-burgundy" aria-hidden="true" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </article>

            <article className="min-h-[480px] min-w-[85vw] snap-center border border-paper/15 bg-paper p-7 text-main shadow-tactile rotate-[0.3deg] sm:p-9 md:min-w-[40vw] lg:min-w-[34rem]">
              <StoryHeader index="05" label="Образ" />
              <h3 className="mt-10 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Цвет. Шрифт. Ритм.
              </h3>
              <div className="mt-7">
                <PaletteDots colors={item.visualSystem.palette} darkBorder />
              </div>
              <dl className="mt-8 space-y-5 border-t border-main/20 pt-6">
                {[
                  ["Цвет", item.visualSystem.colors],
                  ["Шрифт", item.visualSystem.typography],
                  ["Сетка", item.visualSystem.grid]
                ].map(([label, value]) => (
                  <div key={label} className="grid gap-2 sm:grid-cols-[70px_1fr]">
                    <dt className="text-xs font-bold uppercase text-burgundy">{label}</dt>
                    <dd className="text-sm leading-6 text-main/70">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-start justify-between border-b border-main/20 pb-5">
      <span className="text-xs font-bold text-burgundy">{index} / {label}</span>
      <ArrowDownRight className="h-5 w-5 text-main/45" aria-hidden="true" />
    </div>
  );
}
