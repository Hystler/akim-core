"use client";

import { Send } from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";

const telegramText = encodeURIComponent(
  "Здравствуйте! Хочу обсудить презентацию.\n\nЗадача: \nДедлайн: \nМатериалы: "
);

export function FloatingTelegram() {
  return (
    <TrackedLink
      href={`https://t.me/loot_digger?text=${telegramText}`}
      target="_blank"
      rel="noreferrer"
      goal="telegram_click"
      aria-label="Написать Акиму в Telegram"
      className="focus-ring fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 inline-flex size-[52px] items-center justify-center rounded-full border border-burgundy bg-burgundy text-paper shadow-tactile transition-all duration-300 active:scale-95 md:hidden"
    >
      <Send className="h-5 w-5" aria-hidden="true" />
      <span className="sr-only">Telegram</span>
    </TrackedLink>
  );
}
