"use client";

import { ArrowUpRight, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { cardReveal, MotionSection, staggerContainer } from "@/components/ui/MotionPrimitives";

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

const briefOptions = ["Сайт", "Презентация", "AI-система", "Бизнес-процесс", "Мероприятие / production"];

const requestTopics = [
  "Нужно быстро упаковать идею в понятный артефакт",
  "Нужен сайт, презентация или MVP-логика",
  "Нужно разложить процессы, роли и задачи",
  "Нужен AI-сценарий, промт-система или CLI-задача",
  "Нужно спланировать production или мероприятие"
];

export function ContactBlocks() {
  return (
    <MotionSection className="pb-20 sm:pb-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="premium-border relative overflow-hidden rounded-3xl bg-ink-900 p-6 sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_20%,rgba(34,211,238,0.14),transparent_34%),radial-gradient(ellipse_at_90%_80%,rgba(139,92,246,0.16),transparent_36%)]" />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-frost">Mini brief</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Можно написать коротко: что есть сейчас, что нужно собрать и какой результат нужен.
            </p>
            <p className="mt-8 text-sm font-semibold text-frost">Что нужно собрать?</p>
            <motion.div variants={staggerContainer} className="mt-4 flex flex-wrap gap-2">
              {briefOptions.map((option) => (
                <motion.span
                  key={option}
                  variants={cardReveal}
                  className="rounded-full border border-white/10 bg-ink-950/58 px-4 py-2 text-sm text-muted"
                >
                  {option}
                </motion.span>
              ))}
            </motion.div>

            <a
              href="https://t.me/akimkovalenko"
              className="shine-cta group mt-8 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-frost px-6 py-4 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:bg-electric-cyan hover:shadow-glow"
            >
              <span className="relative z-10">Написать в Telegram</span>
              <ArrowUpRight
                className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.label}
                href={contact.href}
                data-cursor="hover"
                className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-electric-cyan/50 hover:bg-white/[0.07] hover:shadow-glow"
              >
                <span className="flex items-center gap-2 text-sm text-muted">
                  <Icon className="h-4 w-4 text-electric-cyan" aria-hidden="true" />
                  {contact.label}
                </span>
                <span className="mt-2 flex items-center justify-between gap-4 text-lg font-semibold text-frost">
                  {contact.value}
                  <ArrowUpRight
                    className="h-4 w-4 text-electric-cyan transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </span>
              </a>
            );
          })}

          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
            <h2 className="text-xl font-semibold text-frost">С чем можно обратиться</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted">
              {requestTopics.map((topic) => (
                <li key={topic} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-cyan" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
