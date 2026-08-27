import { Check } from "lucide-react";

const experience = [
  "Презентации",
  "Финансовые модели",
  "Сайты",
  "Сервисы для работы",
  "Автоматизации",
  "События"
];

export function AboutStory() {
  return (
    <section className="bg-base-texture pb-20 pt-6 sm:pb-28 sm:pt-10">
      <div className="section-shell grid gap-12 border-t border-main/20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h2 className="font-heading text-3xl font-bold text-main sm:text-5xl">
            В работе
          </h2>
          <div className="mt-7 max-w-3xl space-y-5 text-base font-medium leading-8 text-main/70">
            <p>
              Могу начать с таблиц, заметок или сырого черновика. Сначала выясняю,
              что нужно понять зрителю, затем оставляю только нужное.
            </p>
            <p>
              Умею читать цифры и разбираться в рабочих процессах, поэтому работаю
              не только с оформлением, но и с содержанием.
            </p>
          </div>
        </div>

        <ul className="grid content-start border-t border-main/20 sm:grid-cols-2">
          {experience.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-b border-main/20 py-4 text-sm font-medium leading-7 text-main/75 sm:odd:pr-4 sm:even:border-l sm:even:pl-4"
            >
              <Check
                className="mt-1.5 h-4 w-4 shrink-0 text-burgundy"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
