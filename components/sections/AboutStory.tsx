import { Check } from "lucide-react";

const experience = [
  "Презентации",
  "Финансовые модели",
  "Сайты",
  "Рабочие интерфейсы",
  "Автоматизации",
  "События"
];

export function AboutStory() {
  return (
    <section className="bg-base-texture pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div className="section-shell grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          <article className="border border-main/15 bg-paper p-7 shadow-tactile sm:p-9 -rotate-[0.2deg]">
            <h2 className="font-heading text-2xl font-bold text-main">Как я работаю</h2>
            <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-main/70">
              Сначала выясняю, что зритель должен понять. Затем собираю структуру,
              показываю стиль и оформляю весь файл.
            </p>
          </article>
          <article className="border border-main/15 bg-paper p-7 shadow-tactile sm:p-9 rotate-[0.2deg]">
            <h2 className="font-heading text-2xl font-bold text-main">
              Что помогает
            </h2>
            <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-main/70">
              Я читаю таблицы, разбираю процессы и задаю вопросы по теме. Поэтому
              могу работать не только с формой, но и с содержанием.
            </p>
          </article>
        </div>

        <aside className="h-fit border border-main/15 bg-paper p-6 shadow-tactile sm:p-7 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase text-burgundy">
            Темы
          </p>
          <ul className="mt-6 grid gap-4">
            {experience.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-medium leading-7 text-main/80">
                <Check className="mt-1.5 h-4 w-4 shrink-0 text-burgundy" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
