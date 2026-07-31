import { Check } from "lucide-react";

const experience = [
  "Презентации и коммерческие предложения",
  "Финансовые модели и продуктовая логика",
  "Лендинги и персональные сайты",
  "B2B-интерфейсы и внутренние инструменты",
  "AI-сценарии и автоматизации",
  "Маркетплейсы, мероприятия и координация проектов"
];

export function AboutStory() {
  return (
    <section className="pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div className="section-shell grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="border-t border-white/15">
          <article className="border-b border-white/15 py-8">
            <h2 className="font-heading text-2xl font-medium text-frost">Как я работаю</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
              Начинаю не со стилистики, а с вопроса: что аудитория должна понять,
              почувствовать и сделать после просмотра. Затем собираю структуру,
              уточняю тексты, показываю визуальное направление и только после
              согласования разворачиваю его на весь проект.
            </p>
          </article>
          <article className="border-b border-white/15 py-8">
            <h2 className="font-heading text-2xl font-medium text-frost">
              Где помогает широкий опыт
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
              Опыт в аналитике, digital и production помогает быстрее разбираться в
              содержании. Я могу читать таблицы, восстанавливать логику процесса и
              задавать вопросы по продукту — это особенно важно в презентациях со
              сложными исходными материалами.
            </p>
          </article>
        </div>

        <aside className="h-fit rounded-md border border-white/15 p-6 sm:p-7 lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase text-muted">
            Опыт и контекст
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
