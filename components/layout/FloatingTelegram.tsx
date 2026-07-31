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
      className="focus-ring fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 bg-frost px-4 text-sm font-semibold text-ink-950 shadow-glow md:hidden"
    >
      <Send className="h-4 w-4" aria-hidden="true" />
      Telegram
    </TrackedLink>
  );
}
