"use client";

import { Send } from "lucide-react";
import { usePathname } from "next/navigation";
import { TrackedLink } from "@/components/ui/TrackedLink";

const telegramText = encodeURIComponent(
  "Здравствуйте! Хочу обсудить презентацию.\n\nЗадача: \nДедлайн: \nМатериалы: "
);

export function FloatingTelegram() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <TrackedLink
      href={`https://t.me/loot_digger?text=${telegramText}`}
      target="_blank"
      rel="noreferrer"
      goal="telegram_click"
      aria-label="Написать Акиму в Telegram"
      className={`focus-ring fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 inline-flex min-h-12 items-center justify-center rounded-full border border-ink-950 bg-frost text-sm font-semibold text-ink-950 md:hidden ${
        isContactPage ? "size-12" : "gap-2 px-4"
      }`}
    >
      <Send className="h-4 w-4" aria-hidden="true" />
      <span className={isContactPage ? "sr-only" : undefined}>Telegram</span>
    </TrackedLink>
  );
}
