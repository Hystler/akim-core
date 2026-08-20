"use client";

import { ArrowUpRight, CheckCircle2, Mail, Paperclip, Send } from "lucide-react";
import Link from "next/link";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { trackGoal } from "@/lib/analytics";
import { siteEmail } from "@/lib/site-config";

type SubmitState = "idle" | "submitting" | "success" | "error";

const taskTypes = [
  "Презентация под ключ",
  "Редизайн",
  "Коммерческое предложение",
  "Сайт",
  "Рабочий инструмент",
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

const bindingLoops = Array.from({ length: 9 }, (_, index) => index);

export function ContactBlocks({ asPage = false }: { asPage?: boolean }) {
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmittingRef = useRef(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmittingRef.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const attachment = formData.get("attachment");

    if (attachment instanceof File && attachment.size > 10 * 1024 * 1024) {
      setSubmitState("error");
      setMessage("Файл больше 10 МБ. Добавьте ссылку или выберите файл меньше.");
      return;
    }

    if (attachment instanceof File && attachment.size > 0) {
      const extension = attachment.name.split(".").pop()?.toLowerCase() ?? "";
      if (!allowedFileExtensions.has(extension)) {
        setSubmitState("error");
        setMessage("Формат не поддерживается. Выберите документ, таблицу, ZIP или изображение.");
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
      setFileName("");
      trackGoal("contact_form_submit");
    } catch {
      setSubmitState("error");
      setMessage("Не получилось отправить. Напишите в Telegram или на email.");
    } finally {
      isSubmittingRef.current = false;
    }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    setFileName(file?.name ?? "");
    setSubmitState("idle");
    setMessage("");
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
    "min-h-11 w-full rounded-none border-0 border-b border-main/35 bg-transparent px-0 text-main outline-none placeholder:text-main/40 transition-colors hover:border-main/60 focus:border-burgundy focus:ring-0 focus-visible:border-burgundy";
  const Heading = asPage ? "h1" : "h2";

  return (
    <section id="contact" className="scroll-mt-24 bg-base-texture py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.45fr_1.55fr] lg:items-end sm:mb-14">
          <p className="text-xs font-bold uppercase text-burgundy">Контакт</p>
          <div>
            <Heading className="font-heading text-4xl font-bold leading-[1.02] text-main sm:text-6xl">
              Расскажите о задаче.
            </Heading>
            <p className="mt-2 font-serif text-3xl font-medium italic text-burgundy sm:text-5xl">
              Начнём с материалов.
            </p>
          </div>
        </div>

        <div className="notebook-scene relative overflow-hidden rounded-[18px] border border-main/15 p-3 shadow-tactile-lg sm:p-7 lg:px-12 lg:py-10">
          <div className="absolute -left-10 top-8 h-64 w-40 -rotate-6 rounded-md border border-main/15 bg-burgundy/80 shadow-tactile" aria-hidden="true" />
          <div className="absolute -right-10 bottom-8 h-52 w-36 rotate-6 rounded-md border border-main/20 bg-main/80 shadow-tactile" aria-hidden="true" />
          <div className="absolute bottom-5 left-7 hidden items-center gap-2 rounded-sm border border-main/15 bg-paper/80 p-2 shadow-press sm:flex" aria-hidden="true">
            {["#6B1A2C", "#B79B64", "#B7A99B", "#2A2120"].map((color) => (
              <span key={color} className="size-4 rounded-full border border-main/20" style={{ backgroundColor: color }} />
            ))}
          </div>

          <div className="relative z-10 mx-auto grid max-w-[1080px] min-w-0 rounded-[12px] shadow-tactile-lg lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="notebook-page paper-surface relative flex min-h-[280px] flex-col justify-between rounded-t-[10px] border border-main/15 p-7 sm:min-h-[340px] sm:p-10 lg:min-h-[620px] lg:rounded-l-[10px] lg:rounded-tr-none lg:p-12">
              <div>
                <span className="font-serif text-7xl font-medium italic leading-none text-burgundy sm:text-8xl" aria-hidden="true">
                  A
                </span>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold leading-[0.94] text-main sm:text-5xl lg:text-6xl">
                  ОБСУДИТЬ<br />ПРОЕКТ.
                </p>
                <p className="mt-4 font-serif text-2xl font-medium italic text-burgundy sm:text-4xl">
                  [CONTACT]
                </p>
              </div>
              <p className="text-[10px] font-bold uppercase text-main/50">AKIM CORE / 2026</p>
            </aside>

            <div className="notebook-mobile-binding flex items-center justify-center gap-2 border-x border-main/15 bg-gold py-2 lg:hidden" aria-hidden="true">
              {bindingLoops.slice(0, 7).map((loop) => (
                <span key={loop} className="h-3 w-5 rounded-full border-2 border-gold-dark bg-gold-light" />
              ))}
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              method="post"
              action={contactFormEndpoint}
              encType="multipart/form-data"
              aria-busy={submitState === "submitting"}
              className="notebook-page notebook-rules paper-surface relative rounded-b-[10px] border border-t-0 border-main/15 p-7 sm:p-10 lg:rounded-r-[10px] lg:rounded-bl-none lg:border-l-0 lg:border-t lg:p-11"
            >
              <input type="hidden" name="_subject" value="Новая заявка с сайта AKIM CORE" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

              <p className="mb-7 text-xs font-bold uppercase text-burgundy">Заявка</p>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-1 text-sm font-bold text-main">
                  Имя <span className="sr-only">обязательное поле</span>
                  <input type="text" name="name" required autoComplete="name" className={fieldClass} />
                </label>
                <label className="grid gap-1 text-sm font-bold text-main">
                  Email или Telegram <span className="sr-only">обязательное поле</span>
                  <input type="text" name="contact" required autoComplete="email" className={fieldClass} />
                </label>
              </div>

              <label className="mt-6 grid gap-1 text-sm font-bold text-main">
                Тема проекта <span className="sr-only">обязательное поле</span>
                <select name="taskType" required defaultValue="" className={fieldClass}>
                  <option value="" disabled className="bg-paper">Выберите формат</option>
                  {taskTypes.map((type) => (
                    <option key={type} value={type} className="bg-paper">{type}</option>
                  ))}
                </select>
              </label>

              <label className="mt-6 grid gap-1 text-sm font-bold text-main">
                Сообщение <span className="sr-only">обязательное поле</span>
                <textarea
                  name="description"
                  required
                  rows={4}
                  placeholder="Что нужно сделать?"
                  className={`${fieldClass} min-h-28 resize-y py-3`}
                />
              </label>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <label className="grid gap-1 text-sm font-bold text-main">
                  Дедлайн
                  <input type="text" name="deadline" placeholder="Например, 20 августа" className={fieldClass} />
                </label>
                <label className="grid gap-1 text-sm font-bold text-main">
                  Материалы
                  <input type="url" name="materialsUrl" inputMode="url" placeholder="https://" className={fieldClass} />
                </label>
              </div>

              <div className="mt-6 grid gap-2 text-sm font-bold text-main">
                <span className="flex items-center gap-2" id="attachment-label">
                  <Paperclip className="h-4 w-4 text-burgundy" aria-hidden="true" />
                  Прикрепить файл
                </span>
                <input
                  id="contact-attachment"
                  type="file"
                  name="attachment"
                  accept=".pdf,.ppt,.pptx,.key,.doc,.docx,.xls,.xlsx,.zip,.png,.jpg,.jpeg"
                  aria-describedby="attachment-help"
                  aria-labelledby="attachment-label"
                  onChange={handleFileChange}
                  className="peer sr-only"
                />
                <div className="flex min-w-0 flex-col gap-2 border-b border-main/35 pb-3 peer-focus-visible:ring-2 peer-focus-visible:ring-burgundy peer-focus-visible:ring-offset-2 sm:flex-row sm:items-center">
                  <label
                    htmlFor="contact-attachment"
                    className="inline-flex min-h-11 w-fit cursor-pointer items-center rounded-md border border-main/30 bg-paper/65 px-4 text-sm font-bold text-main transition hover:border-burgundy hover:text-burgundy"
                  >
                    Выбрать файл
                  </label>
                  <span className="min-w-0 truncate text-xs font-normal text-main/60">
                    {fileName || "Файл не выбран"}
                  </span>
                </div>
                <span id="attachment-help" className="text-xs font-normal leading-5 text-main/60">
                  Документы, ZIP или изображения. До 10 МБ.
                </span>
              </div>

              <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-main/70">
                <input type="checkbox" name="privacyConsent" required className="focus-ring mt-0.5 size-5 shrink-0 accent-burgundy" />
                <span>
                  Согласен с{" "}
                  <Link href="/privacy" className="font-medium text-main underline decoration-main/30">
                    политикой конфиденциальности
                  </Link>
                  .
                </span>
              </label>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-burgundy bg-burgundy px-5 text-sm font-bold text-paper shadow-press transition-all duration-300 hover:-translate-y-0.5 hover:shadow-tactile disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitState === "submitting" ? "Отправляю…" : "Отправить задачу"}
                </button>
                <button
                  type="button"
                  onClick={openTelegramDraft}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-main/35 bg-paper/50 px-4 text-sm font-bold text-main transition-all duration-300 hover:-translate-y-0.5 hover:border-burgundy hover:shadow-press"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Подготовить текст
                </button>
              </div>

              {message ? (
                <div
                  aria-live="polite"
                  role={submitState === "error" ? "alert" : "status"}
                  className={`mt-5 flex gap-3 rounded-md border p-4 text-sm leading-6 ${
                    submitState === "success"
                      ? "border-main/25 bg-paper/75 text-main"
                      : "border-burgundy/40 bg-burgundy/10 text-main"
                  }`}
                >
                  {submitState === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-burgundy" aria-hidden="true" />
                  ) : null}
                  {message}
                </div>
              ) : null}
            </form>

            <div className="notebook-binding absolute inset-y-8 left-[39%] z-30 hidden -translate-x-1/2 flex-col justify-around lg:flex" aria-hidden="true">
              {bindingLoops.map((loop) => (
                <span key={loop} className="block h-4 w-14 rounded-full border-[3px] border-gold-dark bg-gold shadow-press" />
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-6 grid max-w-5xl gap-3 rounded-md border border-main/15 bg-paper/90 p-4 text-sm shadow-press sm:grid-cols-2 sm:items-center">
            <a
              href={telegramBase}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackGoal("telegram_click", { source: "contact_page" })}
              className="focus-ring group flex min-h-11 items-center justify-between gap-3 rounded-sm px-2 font-bold text-main"
            >
              <span className="flex items-center gap-3"><Send className="h-4 w-4 text-burgundy" aria-hidden="true" />@loot_digger</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${siteEmail}`}
              className="focus-ring group flex min-h-11 min-w-0 items-center justify-between gap-3 rounded-sm px-2 font-bold text-main"
            >
              <span className="flex min-w-0 items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-burgundy" aria-hidden="true" /><span className="break-all">{siteEmail}</span></span>
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
