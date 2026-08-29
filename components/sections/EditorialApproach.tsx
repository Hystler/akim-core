import Image from "next/image";
import { PaletteDots } from "@/components/ui/PaletteDots";

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAOjk3gAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

const principles = [
  {
    marker: "01 / Структура",
    title: "Чёткая структура.",
    accent: "Основа убеждения.",
    text: "Сначала выстраиваю ход: что показать, в каком порядке и к какому выводу привести.",
    image: "/portfolio/chess-jazz/chess-jazz-slide-04.png",
    alt: "Слайд Chess & Jazz с последовательной структурой проекта",
    palette: ["#6B1A2C", "#8D725D", "#D2B996"],
    theme: "kraft",
    wireframe: true
  },
  {
    marker: "02 / Точность",
    title: "Точность.",
    accent: "Цифры, которые говорят.",
    text: "Данные превращаю в выводы: сравнения, сценарии и графики без лишнего шума.",
    image: "/portfolio/jk-finance/screen-01.webp",
    alt: "Экран JK Finance с показателями финансовой модели",
    palette: ["#2A2120", "#B79B64", "#EAE5DE"],
    theme: "paper",
    wireframe: false
  },
  {
    marker: "03 / Образ",
    title: "Образ.",
    accent: "Форма, полная смысла.",
    text: "Типографика, цвет и изображение поддерживают идею, а не спорят с ней.",
    image: "/portfolio/velvet-whisper/velvet-whisper-slide-02.png",
    alt: "Редакционный слайд Velvet Whisper с типографикой и фотографией",
    palette: ["#2A2120", "#EAE5DE", "#6B1A2C"],
    theme: "linen",
    wireframe: false
  }
] as const;

export function EditorialApproach() {
  return (
    <section className="dark-surface py-20 text-paper sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase text-terracotta">Подход</p>
          <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.02] sm:text-6xl">
            Сначала мысль.
          </h2>
          <p className="mt-2 font-serif text-3xl font-medium italic text-terracotta sm:text-5xl">
            Затем её форма.
          </p>
        </div>

        <div className="mt-14 space-y-10 sm:mt-18 sm:space-y-14">
          {principles.map((principle, index) => (
            <article
              key={principle.marker}
              className={`editorial-composition grid min-w-0 gap-8 rounded-[16px] border border-paper/15 p-5 shadow-tactile-lg sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-10 ${
                principle.theme === "kraft"
                  ? "bg-kraft-texture"
                  : principle.theme === "linen"
                    ? "bg-linen-texture"
                    : "bg-paper"
              }`}
            >
              <div className={`min-w-0 lg:col-span-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <p className="text-xs font-bold uppercase text-burgundy">
                  {principle.marker}
                </p>
                <h3 className="mt-5 font-heading text-3xl font-bold leading-tight text-main sm:text-5xl">
                  {principle.title}
                </h3>
                <p className="mt-2 font-serif text-2xl font-medium italic leading-snug text-burgundy sm:text-3xl">
                  {principle.accent}
                </p>
                <p className="mt-6 max-w-md text-base font-medium leading-7 text-main/70">
                  {principle.text}
                </p>
                <div className="mt-7">
                  <PaletteDots colors={[...principle.palette]} darkBorder />
                </div>
              </div>

              <div className={`relative min-w-0 lg:col-span-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] border border-main/15 bg-main p-2 shadow-tactile sm:p-3">
                  <Image
                    src={principle.image}
                    alt={principle.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 62vw, 100vw"
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    className="object-contain p-2 sm:p-3"
                  />
                </div>
                {principle.wireframe ? (
                  <div className="absolute bottom-3 right-3 hidden w-40 rotate-[1deg] rounded-md border border-main/20 bg-paper p-3 shadow-press sm:block">
                    <div className="grid grid-cols-3 gap-1" aria-hidden="true">
                      <span className="col-span-2 h-5 border border-main/25" />
                      <span className="h-5 border border-main/25" />
                      <span className="h-10 border border-main/25" />
                      <span className="col-span-2 h-10 border border-main/25" />
                    </div>
                    <p className="mt-2 text-[9px] font-bold uppercase text-main/55">Черновая сетка</p>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
