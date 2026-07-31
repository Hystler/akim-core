import { trustPoints } from "@/data/site";

export function TrustStrip() {
  return (
    <section className="border-b border-white/10 bg-ink-900" aria-label="Формат работы">
      <div className="section-shell py-7">
        <p className="font-heading text-lg font-medium text-frost sm:text-xl">
          Структура <span className="text-electric-cyan">·</span> Storytelling{" "}
          <span className="text-electric-cyan">·</span> Дизайн{" "}
          <span className="text-electric-cyan">·</span> Готовый файл
        </p>
        <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 text-sm text-muted sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
