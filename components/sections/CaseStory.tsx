import { Check } from "lucide-react";
import Image from "next/image";
import { PaletteDots } from "@/components/ui/PaletteDots";
import type { PublishedPortfolioItem } from "@/data/portfolio";
import type { CaseSectionPlanItem } from "@/lib/case-sections";

type CaseStoryProps = {
  item: PublishedPortfolioItem;
  sections: CaseSectionPlanItem[];
};

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAOjk3gAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

const storyIds = new Set(["task", "problem", "solution", "deliverables", "visual-system"]);

export function CaseStory({ item, sections }: CaseStoryProps) {
  const storySections = sections.filter((section) => storyIds.has(section.id));

  return (
    <section className="dark-surface dark-shadow-b py-20 text-paper sm:py-28">
      <div className="section-shell">
        <h2 className="max-w-4xl font-heading text-4xl font-bold leading-[1.02] sm:text-6xl">
          О проекте.
        </h2>

        <div className="mt-14 space-y-10 sm:mt-18 sm:space-y-14">
          {storySections.map((section, index) => (
            <StorySection
              key={section.id}
              item={item}
              section={section}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection({
  item,
  section,
  index
}: {
  item: PublishedPortfolioItem;
  section: CaseSectionPlanItem;
  index: number;
}) {
  const isReversed = index % 2 === 1;
  return (
    <article
      id={`case-${section.id}`}
      className="paper-surface scroll-mt-24 rounded-[14px] border border-paper/15 p-5 text-main shadow-tactile sm:p-8 lg:p-10"
    >
      <SectionMarker section={section} />
      <div className="mt-7 grid min-w-0 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className={`min-w-0 lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}>
          <StoryCopy item={item} section={section} />
        </div>
        <div className={`min-w-0 lg:col-span-7 ${isReversed ? "lg:order-1" : ""}`}>
          <StoryVisual item={item} sectionId={section.id} />
        </div>
      </div>
    </article>
  );
}

function StoryCopy({
  item,
  section
}: {
  item: PublishedPortfolioItem;
  section: CaseSectionPlanItem;
}) {
  if (section.id === "task") {
    return (
      <>
        <h3 className="font-heading text-3xl font-bold leading-tight sm:text-5xl">Задача.</h3>
        <p className="mt-5 text-lg font-medium leading-8 text-main/75">{item.task}</p>
        <dl className="mt-8 grid gap-5 border-t border-main/20 pt-5">
          <div>
            <dt className="text-xs font-bold uppercase text-burgundy">Для кого</dt>
            <dd className="mt-2 text-sm leading-6 text-main/70">{item.audience}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase text-burgundy">На старте</dt>
            <dd className="mt-2 text-sm leading-6 text-main/70">{item.sourceMaterials}</dd>
          </div>
        </dl>
      </>
    );
  }

  if (section.id === "problem") {
    return (
      <>
        <h3 className="font-heading text-3xl font-bold leading-tight sm:text-5xl">До работы.</h3>
        <p className="mt-6 text-xl font-medium leading-9 text-main/70">{item.problem}</p>
      </>
    );
  }

  if (section.id === "solution") {
    return (
      <>
        <h3 className="font-heading text-3xl font-bold leading-tight sm:text-5xl">Решение.</h3>
        <p className="mt-6 text-xl font-medium leading-9 text-main/70">{item.solution}</p>
      </>
    );
  }

  if (section.id === "deliverables") {
    return (
      <>
        <h3 className="font-heading text-3xl font-bold leading-tight sm:text-5xl">Что сделано.</h3>
        <ul className="mt-7 grid gap-0 border-t border-main/20 sm:grid-cols-2">
          {item.deliverables.map((deliverable) => (
            <li
              key={deliverable}
              className="flex gap-3 border-b border-main/20 py-3 text-sm font-medium leading-6 sm:odd:pr-4 sm:even:border-l sm:even:pl-4"
            >
              <Check className="mt-1 h-4 w-4 shrink-0 text-burgundy" aria-hidden="true" />
              {deliverable}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <h3 className="font-heading text-3xl font-bold leading-tight sm:text-5xl">
        Цвет. Шрифт. Ритм.
      </h3>
      <div className="mt-6">
        <PaletteDots colors={item.visualSystem.palette} darkBorder />
      </div>
      <dl className="mt-7 space-y-5 border-t border-main/20 pt-5">
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
    </>
  );
}

function StoryVisual({
  item,
  sectionId
}: {
  item: PublishedPortfolioItem;
  sectionId: CaseSectionPlanItem["id"];
}) {
  const imageIndex = {
    task: null,
    problem: 0,
    solution: 1,
    deliverables: 2,
    "visual-system": 3,
    gallery: 0,
    result: 0
  }[sectionId];
  const galleryItem =
    imageIndex === null ? undefined : item.gallery[imageIndex % item.gallery.length];
  const src = galleryItem?.src ?? item.coverImage;
  const alt = galleryItem?.alt ?? item.coverAlt;

  return (
    <figure className="rounded-[10px] border border-main/15 bg-main p-2 shadow-tactile sm:p-3">
      <div
        className={`relative overflow-hidden rounded-md ${
          galleryItem?.aspectRatio === "portrait" ? "aspect-[4/5]" : "aspect-[16/9]"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 58vw, 100vw"
          placeholder="blur"
          blurDataURL={blurDataUrl}
          className="object-contain"
        />
      </div>
      {galleryItem?.caption ? (
        <figcaption className="px-1 pb-1 pt-3 text-xs leading-5 text-paper/65">
          {galleryItem.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function SectionMarker({ section }: { section: CaseSectionPlanItem }) {
  return (
    <div className="flex items-center justify-between border-b border-main/20 pb-4">
      <span className="text-xs font-bold uppercase text-burgundy">
        {section.number}
      </span>
      <span className="h-2 w-2 rounded-full bg-burgundy" aria-hidden="true" />
    </div>
  );
}
