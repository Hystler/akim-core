import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { siteEmail } from "@/lib/site-config";

const telegramUrl = "https://t.me/loot_digger";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark-surface min-h-[340px] border-t border-paper/10 py-16 text-paper sm:min-h-[390px] sm:py-20">
      <div className="section-shell flex min-h-[212px] flex-col sm:min-h-[230px]">
        <div className="grid flex-1 gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <Link
              href="/"
              className="focus-ring font-heading text-lg font-semibold tracking-[0.32em] text-paper sm:text-xl"
            >
              AKIM&nbsp; CORE
            </Link>
            <p className="mt-7 max-w-xs text-[15px] leading-7 text-paper/65">
              Презентации, сайты и&nbsp;сервисы для рабочих задач.
            </p>
          </div>

          <div className="grid gap-4 md:justify-self-end md:pr-8">
            <TrackedLink
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              goal="telegram_click"
              goalParams={{ source: "footer" }}
              className="focus-ring group flex min-h-11 items-center justify-between gap-8 border-b border-paper/25 py-2 text-[15px] text-paper/75 transition-colors hover:text-paper"
            >
              Telegram
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </TrackedLink>
            <a
              href={`mailto:${siteEmail}`}
              className="focus-ring group flex min-h-11 items-center justify-between gap-8 border-b border-paper/25 py-2 text-[15px] text-paper/75 transition-colors hover:text-paper"
            >
              Email
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/15 pt-6 text-[13px] text-paper/55 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Аким Коваленко</p>
          <Link href="/privacy" className="focus-ring w-fit transition-colors hover:text-paper">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
