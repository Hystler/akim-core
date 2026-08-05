"use client";

import { ArrowUpRight, CheckCircle2, Mail, Send } from "lucide-react";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { trackGoal } from "@/lib/analytics";
import { siteEmail } from "@/lib/site-config";

type SubmitState = "idle" | "submitting" | "success" | "error";

const taskTypes = [
  "Презентация под ключ",
  "Редизайн презентации",
  "Коммерческое предложение",
  "Лендинг",
  "B2B SaaS или интерфейс",
  "Автоматизация",
  "Другое"
];

const telegramBase = "https://t.me/loot_digger";
const contactFormEndpoint =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ??
  `https://formsubmit.co/ajax/${siteEmail}`;
const allowedFileExtensions = new Set([
  "pdf",
  "ppt",
  "pptx",
  "key",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "zip",
  "png",
  "jpg",
  "jpeg"
]);

export function ContactBlocks() {
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmittingRef = useRef(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmittingRef.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const attachment = formData.get("attachment");

    if (attachment instanceof File && attachment.size > 10 * 1024 * 1024) {
      setSubmitState("error");
      setMessage("Файл больше 10 МБ. Добавьте ссылку на материалы или выберите файл меньше.");
      return;
    }

    if (attachment instanceof File && attachment.size > 0) {
      const extension = attachment.name.split(".").pop()?.toLowerCase() ?? "";
      if (!allowedFileExtensions.has(extension)) {
        setSubmitState("error");
        setMessage("Формат файла не поддерживается. Используйте документ, таблицу, ZIP или изображение из списка ниже.");
        return;
      }
    }

    isSubmittingRef.current = true;
    setSubmitState("submitting");
    setMessage("");

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });

      if (!response.ok) throw new Error("Form submission failed");

      const data = (await response.json()) as { success?: boolean | string };
      if (data.success === false || data.success === "false") {
        throw new Error("Form submission rejected");
      }

      setSubmitState("success");
      setMessage("Задача отправлена. Я отвечу по указанному контакту.");
      form.reset();
      trackGoal("contact_form_submit");
    } catch {
      setSubmitState("error");
      setMessage(
        "Не получилось отправить форму. Напишите в Telegram или на email — ссылки находятся рядом."
      );
    } finally {
      isSubmittingRef.current = false;
    }
  }

  function openTelegramDraft() {
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const task = String(data.get("taskType") ?? "");
    const description = String(data.get("description") ?? "");
    const deadline = String(data.get("deadline") ?? "");
    const materials = String(data.get("materialsUrl") ?? "");
    const text = [
      "Здравствуйте! Хочу обсудить проект.",
      `Тип задачи: ${task}`,
      `Задача: ${description}`,
      `Дедлайн: ${deadline}`,
      `Материалы: ${materials}`
    ].join("\n");

    trackGoal("telegram_click", { source: "contact_form" });
    window.open(`${telegramBase}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "focus-ring min-h-12 w-full rounded-md border border-white/20 bg-ink-900 px-4 text-frost placeholder:text-muted/60 transition hover:border-white/30 focus:border-electric-cyan";

  return (
    <section className="pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div className="section-shell grid gap-14 lg:grid-cols-[1.25fr_0.75fr]">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          method="post"
          action={contactFormEndpoint}
          encType="multipart/form-data"
          aria-busy={submitState === "submitting"}
          className="rounded-md border border-white/15 p-5 sm:p-8"
        >
          <input type="hidden" name="_subject" value="Новая заявка с сайта AKIM CORE" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-frost">
              Имя <span className="text-electric-cyan">*</span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className={fieldClass}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-frost">
              Telegram или email <span className="text-electric-cyan">*</span>
              <input
                type="text"
                name="contact"
                required
                autoComplete="email"
                className={fieldClass}
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-medium text-frost">
            Тип задачи <span className="text-electric-cyan">*</span>
            <select name="taskType" required defaultValue="" className={fieldClass}>
              <option value="" disabled className="bg-ink-900">
                Выберите формат
              </option>
              {taskTypes.map((type) => (
                <option key={type} value={type} className="bg-ink-900">
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 grid gap-2 text-sm font-medium text-frost">
            Краткое описание <span className="text-electric-cyan">*</span>
            <textarea
              name="description"
              required
              rows={5}
              placeholder="Что нужно создать, для кого и какой результат ожидаете"
              className={`${fieldClass} min-h-36 py-3`}
            />
          </label>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-frost">
              Дедлайн
              <input
                type="text"
                name="deadline"
                placeholder="Например, 20 августа"
                className={fieldClass}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-frost">
              Ссылка на материалы
              <input
                type="url"
                name="materialsUrl"
                inputMode="url"
                placeholder="https://"
                className={fieldClass}
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-medium text-frost">
            Прикрепить файл
            <input
              type="file"
              name="attachment"
              accept=".pdf,.ppt,.pptx,.key,.doc,.docx,.xls,.xlsx,.zip,.png,.jpg,.jpeg"
              className="focus-ring min-h-14 w-full rounded-md border border-dashed border-white/25 bg-ink-900 p-2 text-sm text-muted"
            />
            <span className="text-xs font-normal leading-5 text-muted">
              PDF, PowerPoint, документы, таблицы, ZIP или изображения — до 10 МБ.
            </span>
          </label>

          <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-muted">
            <input
              type="checkbox"
              name="privacyConsent"
              required
              className="focus-ring mt-1 size-4 shrink-0 accent-electric-blue"
            />
            <span>
              Я согласен с{" "}
              <Link href="/privacy" className="text-frost underline decoration-white/30">
                политикой конфиденциальности
              </Link>
              .
            </span>
          </label>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-frost px-6 text-sm font-semibold text-ink-950 transition hover:bg-electric-cyan disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitState === "submitting" ? "Отправляю…" : "Отправить задачу"}
            </button>
            <button
              type="button"
              onClick={openTelegramDraft}
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-6 text-sm font-semibold text-frost transition hover:border-frost"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Подготовить текст в Telegram
            </button>
          </div>

          {message ? (
            <div
              aria-live="polite"
              role={submitState === "error" ? "alert" : "status"}
              className={`mt-6 flex gap-3 rounded-md border p-4 text-sm leading-6 ${
                submitState === "success"
                  ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100"
                  : "border-red-300/30 bg-red-300/10 text-red-100"
              }`}
            >
              {submitState === "success" ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              ) : null}
              {message}
            </div>
          ) : null}
        </form>

        <aside className="h-fit border-t border-white/15 lg:sticky lg:top-28">
          <p className="py-5 text-xs font-semibold uppercase text-muted">
            Прямой контакт
          </p>
          <a
            href={telegramBase}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackGoal("telegram_click", { source: "contact_page" })}
            className="group grid grid-cols-[36px_1fr_auto] items-center border-t border-white/15 py-6"
          >
            <Send className="h-4 w-4 text-electric-cyan" aria-hidden="true" />
            <span>
              <span className="block text-xs text-muted">Telegram</span>
              <span className="mt-1 block font-heading text-lg font-medium text-frost">
                @loot_digger
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${siteEmail}`}
            className="group grid grid-cols-[36px_1fr_auto] items-center border-y border-white/15 py-6"
          >
            <Mail className="h-4 w-4 text-electric-cyan" aria-hidden="true" />
            <span>
              <span className="block text-xs text-muted">Email</span>
              <span className="mt-1 block break-all font-heading text-base font-medium text-frost">
                {siteEmail}
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <p className="mt-6 text-sm leading-7 text-muted">
            Обычно для старта достаточно краткого описания задачи, примера материалов
            и желаемого срока.
          </p>
        </aside>
      </div>
    </section>
  );
}
