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
    <section className="pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div className="section-shell grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="border-t border-white/15">
          <article className="border-b border-white/15 py-8">
            <h2 className="font-heading text-2xl font-medium text-frost">Как я работаю</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
              Сначала выясняю, что зритель должен понять. Затем собираю структуру,
              показываю стиль и оформляю весь файл.
            </p>
          </article>
          <article className="border-b border-white/15 py-8">
            <h2 className="font-heading text-2xl font-medium text-frost">
              Что помогает
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
              Я читаю таблицы, разбираю процессы и задаю вопросы по теме. Поэтому
              могу работать не только с формой, но и с содержанием.
            </p>
          </article>
        </div>

        <aside className="h-fit rounded-md border border-white/15 p-6 sm:p-7 lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase text-muted">
            Темы
          </p>
          <ul className="mt-6 grid gap-4">
            {experience.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-frost/85">
                <Check className="mt-1.5 h-4 w-4 shrink-0 text-electric-cyan" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
