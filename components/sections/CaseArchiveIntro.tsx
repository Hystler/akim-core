import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PaletteDots } from "@/components/ui/PaletteDots";

const blurDataUrl =
  "data:image/gif;base64,R0lGODlhAQABAIAAAOjk3gAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

type CaseArchiveIntroProps = {
  asPage?: boolean;
};

export function CaseArchiveIntro({ asPage = false }: CaseArchiveIntroProps) {
  const Heading = asPage ? "h1" : "h2";

  return (
    <section className="bg-base-texture pb-14 pt-20 sm:pb-20 sm:pt-28">
      <div className="section-shell">
        <div className="grid min-w-0 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase text-burgundy">Архив работ</p>
            <Heading className="mt-5 font-heading text-5xl font-bold leading-[0.94] text-main sm:text-7xl lg:text-8xl">
              Кейсы.
            </Heading>
            <p className="mt-2 font-serif text-3xl font-medium italic text-burgundy sm:text-5xl">
              [Projects]
            </p>
            <p className="mt-7 max-w-lg text-pretty text-base font-medium leading-8 text-main/70">
              Презентации, сайты и&nbsp;рабочие сервисы. В&nbsp;каждом кейсе — задача,
              решение и&nbsp;реальные экраны.
            </p>
            <Link
              href={asPage ? "#cases-grid" : "/portfolio"}
              className="focus-ring group mt-8 inline-flex min-h-12 items-center gap-2 rounded-md border border-burgundy bg-burgundy px-6 text-sm font-bold text-paper shadow-press transition-all duration-300 hover:-translate-y-1 hover:shadow-tactile"
            >
              {asPage ? "Смотреть кейсы" : "Все кейсы"}
              {asPage ? (
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              ) : (
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              )}
            </Link>
          </div>

          <div className="relative min-w-0 rounded-[16px] border border-main/15 bg-kraft-texture p-4 shadow-tactile-lg sm:p-7">
            <div className="relative aspect-[16/10] min-w-0">
              <div className="absolute left-[2%] top-[7%] h-[74%] w-[58%] -rotate-[1.3deg] rounded-md border border-main/15 bg-paper p-2 shadow-tactile">
                <div className="relative h-full overflow-hidden rounded-sm border border-main/10 bg-main">
                  <Image
                    src="/portfolio/chess-jazz/chess-jazz-cover.png"
                    alt="Обложка кейса Chess & Jazz"
                    fill
                    sizes="(min-width: 1024px) 440px, 78vw"
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute bottom-[3%] right-[3%] z-20 h-[58%] w-[52%] rotate-[1deg] rounded-md border border-main/15 bg-paper p-2 shadow-tactile">
                <div className="relative h-full overflow-hidden rounded-sm border border-main/10 bg-main">
                  <Image
                    src="/portfolio/northline/cover.webp"
                    alt="Обложка кейса NORTHLINE"
                    fill
                    sizes="(min-width: 1024px) 390px, 70vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute right-[2%] top-[2%] z-10 hidden w-[38%] rotate-[1.8deg] rounded-md bg-burgundy px-5 py-6 text-paper shadow-tactile sm:block">
                <p className="font-heading text-2xl font-bold leading-none">КЕЙСЫ.</p>
                <p className="mt-1 font-serif text-lg italic text-paper/75">[Projects]</p>
                <div className="mt-8 h-px bg-paper/30" />
                <p className="mt-3 text-[9px] font-bold uppercase text-paper/65">AKIM CORE</p>
              </div>

              <div className="absolute bottom-[2%] left-[6%] z-30 rounded-md border border-main/15 bg-paper px-3 py-2 shadow-press">
                <PaletteDots colors={["#6B1A2C", "#B7A99B", "#DCD3CB", "#2A2120"]} darkBorder />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
