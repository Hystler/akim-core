import { faqItems } from "@/data/site";

export function FaqSection({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? faqItems.slice(0, limit) : faqItems;
  return (
    <section className="bg-paper py-20 text-main sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">
            Вопросы
          </p>
          <h2 className="mt-5 font-heading text-3xl font-bold sm:text-5xl">FAQ</h2>
          <p className="mt-2 font-serif text-2xl font-medium italic text-burgundy sm:text-3xl">
            Коротко и по делу.
          </p>
        </div>

        <div className="border-t border-main/20">
          {items.map((item) => (
            <details key={item.question} className="group border-b border-main/20">
              <summary className="focus-ring flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 font-heading text-lg font-bold marker:hidden">
                {item.question}
                <span
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-main/25 text-lg font-normal text-burgundy transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-base font-medium leading-8 text-main/70">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
