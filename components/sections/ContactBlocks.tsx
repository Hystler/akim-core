"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import {
  cardReveal,
  MotionSection,
  staggerContainer
} from "@/components/ui/MotionPrimitives";

const contacts = [
  {
    label: "Telegram",
    value: "@akimkovalenko",
    href: "https://t.me/akimkovalenko",
    icon: Send
  },
  {
    label: "Email",
    value: "hello@akimkovalenko.ru",
    href: "mailto:hello@akimkovalenko.ru",
    icon: Mail
  }
];

const briefOptions = [
  "Сайт",
  "Презентация",
  "AI-система",
  "Бизнес-процесс",
  "Мероприятие / production"
];

const requestTopics = [
  "Что есть сейчас",
  "Какой результат нужен",
  "Для кого собираем",
  "Есть ли срок или запуск",
  "Какие материалы уже готовы"
];

export function ContactBlocks() {
  return (
    <MotionSection className="bg-paper py-16 text-ink-950 sm:py-24">
      <div className="section-shell grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-800/55">
            Direct contact
          </p>
          <motion.div variants={staggerContainer} className="mt-6 border-t border-ink-950/20">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <motion.a
                  key={contact.label}
                  variants={cardReveal}
                  href={contact.href}
                  className="group grid gap-5 border-b border-ink-950/20 py-7 transition-colors hover:bg-white/35 sm:grid-cols-[44px_120px_1fr_auto] sm:items-center sm:px-3"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm text-ink-800/60">{contact.label}</span>
                  <span className="break-all text-lg font-medium text-ink-950 sm:text-xl">
                    {contact.value}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </motion.a>
              );
            })}
          </motion.div>

          <a
            href="https://t.me/akimkovalenko"
            className="focus-ring group mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-ink-950 px-6 py-3 text-sm font-semibold text-frost transition hover:-translate-y-0.5 hover:bg-ink-800"
          >
            Написать в Telegram
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="border-t border-ink-950/20 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-800/55">
            Mini brief
          </p>
          <h2 className="mt-5 text-3xl font-medium leading-tight text-ink-950">
            Достаточно нескольких строк
          </h2>
          <p className="mt-4 max-w-lg text-base leading-8 text-ink-800/70">
            Не нужно готовить идеальное ТЗ. Напишите свободно, а структуру соберём в
            разговоре.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {briefOptions.map((option) => (
              <span
                key={option}
                className="rounded-full border border-ink-950/20 px-3 py-1.5 text-xs text-ink-800/70"
              >
                {option}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-ink-950/20">
            {requestTopics.map((topic, index) => (
              <div
                key={topic}
                className="grid grid-cols-[36px_1fr] border-b border-ink-950/20 py-4 text-sm"
              >
                <span className="text-ink-800/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
