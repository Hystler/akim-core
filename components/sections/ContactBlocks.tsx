"use client";

import { CheckCircle2, Paperclip, Send } from "lucide-react";
import Link from "next/link";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { trackGoal } from "@/lib/analytics";
import { siteEmail } from "@/lib/site-config";

type SubmitState = "idle" | "submitting" | "success" | "error";

const telegramBase = "https://t.me/loot_digger";
const contactFormEndpoint =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ??
  "https://formsubmit.co/ajax/" + siteEmail;
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
        setMessage(
          "Формат не поддерживается. Выберите документ, таблицу, ZIP или изображение."
        );
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
      setMessage("Заявка отправлена. Я отвечу по указанному контакту.");
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

  const fieldClass =
    "min-h-11 w-full rounded-none border-0 border-b border-main/40 bg-transparent px-0 text-main outline-none placeholder:text-main/40 transition-colors hover:border-main/65 focus:border-burgundy focus:ring-0 focus-visible:border-burgundy";
  const Heading = asPage ? "h1" : "h2";

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-base-texture py-16 sm:py-24"
    >
      <div className="section-shell">
        <div className="notebook-scene relative rounded-[18px] border border-main/15 p-3 shadow-tactile-lg sm:p-6 lg:p-9">
          <div className="relative mx-auto grid max-w-[1080px] min-w-0 rounded-[12px] shadow-tactile-lg lg:grid-cols-[0.82fr_1.18fr]">
            <aside className="notebook-page paper-surface relative flex min-h-[280px] flex-col rounded-t-[10px] border border-main/15 p-7 sm:min-h-[320px] sm:p-10 lg:min-h-[640px] lg:rounded-l-[10px] lg:rounded-tr-none lg:p-12">
              <div>
                <p className="text-[10px] font-bold uppercase text-burgundy">
                  AKIM CORE
                </p>
                <Heading className="mt-8 max-w-sm font-heading text-4xl font-bold leading-[1.02] text-main sm:text-5xl">
                  Есть задача?
                </Heading>
                <p className="mt-3 max-w-sm font-serif text-3xl font-medium italic leading-tight text-burgundy sm:text-4xl">
                  Расскажите коротко.
                </p>
              </div>

              <ul className="mt-10 grid gap-3 border-t border-main/20 pt-6 text-sm font-medium leading-6 text-main/65 lg:mt-auto">
                <li>Можно прислать черновик</li>
                <li>Обычно отвечаю в течение дня</li>
              </ul>
            </aside>

            <div
              className="notebook-mobile-binding flex items-center justify-center gap-2 border-x border-main/15 bg-gold py-2 lg:hidden"
              aria-hidden="true"
            >
              {bindingLoops.slice(0, 7).map((loop) => (
                <span
                  key={loop}
                  className="h-3 w-5 rounded-full border-2 border-gold-dark bg-gold-light"
                />
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              method="post"
              action={contactFormEndpoint}
              encType="multipart/form-data"
              aria-busy={submitState === "submitting"}
              className="notebook-page notebook-rules paper-surface relative rounded-b-[10px] border border-t-0 border-main/15 p-7 sm:p-10 lg:rounded-r-[10px] lg:rounded-bl-none lg:border-l-0 lg:border-t lg:p-11"
            >
              <input
                type="hidden"
                name="_subject"
                value="Новая заявка с сайта AKIM CORE"
              />
              <input type="hidden" name="_template" value="table" />
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-1 text-sm font-bold text-main">
                  Имя <span className="sr-only">обязательное поле</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className={fieldClass}
                  />
                </label>
                <label className="grid gap-1 text-sm font-bold text-main">
                  Telegram / email{" "}
                  <span className="sr-only">обязательное поле</span>
                  <input
                    type="text"
                    name="contact"
                    required
                    autoComplete="email"
                    className={fieldClass}
                  />
                </label>
              </div>

              <label className="mt-7 grid gap-1 text-sm font-bold text-main">
                Что нужно <span className="sr-only">обязательное поле</span>
                <textarea
                  name="description"
                  required
                  rows={5}
                  placeholder="Расскажите о задаче"
                  className={fieldClass + " min-h-36 resize-y py-3"}
                />
              </label>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <label className="grid gap-1 text-sm font-bold text-main">
                  Когда нужно
                  <input
                    type="text"
                    name="deadline"
                    placeholder="Например, 20 августа"
                    className={fieldClass}
                  />
                </label>
                <label className="grid gap-1 text-sm font-bold text-main">
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

              <div className="mt-7 grid gap-2 text-sm font-bold text-main">
                <span className="flex items-center gap-2" id="attachment-label">
                  <Paperclip
                    className="h-4 w-4 text-burgundy"
                    aria-hidden="true"
                  />
                  Материалы / файл
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
                <div className="flex min-w-0 flex-col gap-2 border-b border-main/40 pb-3 peer-focus-visible:ring-2 peer-focus-visible:ring-burgundy peer-focus-visible:ring-offset-2 sm:flex-row sm:items-center">
                  <label
                    htmlFor="contact-attachment"
                    className="inline-flex min-h-11 w-fit cursor-pointer items-center border border-main/30 bg-transparent px-4 text-sm font-bold text-main transition hover:border-burgundy hover:text-burgundy"
                  >
                    Выбрать файл
                  </label>
                  <span className="min-w-0 truncate text-xs font-normal text-main/60">
                    {fileName || "Файл не выбран"}
                  </span>
                </div>
                <span
                  id="attachment-help"
                  className="text-xs font-normal leading-5 text-main/60"
                >
                  Документы, ZIP или изображения. До 10 МБ.
                </span>
              </div>

              <label className="mt-7 flex items-start gap-3 text-sm leading-6 text-main/70">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  required
                  className="focus-ring mt-0.5 size-5 shrink-0 accent-burgundy"
                />
                <span>
                  Согласен с{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-main underline decoration-main/30"
                  >
                    политикой конфиденциальности
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="focus-ring mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-md border border-burgundy bg-burgundy px-5 text-sm font-bold text-paper shadow-press transition-all duration-300 hover:-translate-y-0.5 hover:shadow-tactile disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {submitState === "submitting"
                  ? "Отправляю…"
                  : "Отправить заявку"}
              </button>

              <div className="mt-6 border-t border-main/15 pt-5 text-sm">
                <TrackedLink
                  href={telegramBase}
                  target="_blank"
                  rel="noreferrer"
                  goal="telegram_click"
                  goalParams={{ source: "contact_notebook" }}
                  className="focus-ring inline-flex min-h-11 items-center gap-2 font-bold text-main transition hover:text-burgundy"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Или написать напрямую в Telegram
                </TrackedLink>
                <a
                  href={"mailto:" + siteEmail}
                  className="focus-ring block w-fit break-all py-2 text-xs text-main/55 transition hover:text-main"
                >
                  {siteEmail}
                </a>
              </div>

              {message ? (
                <div
                  aria-live="polite"
                  role={submitState === "error" ? "alert" : "status"}
                  className={
                    "mt-5 flex gap-3 rounded-md border p-4 text-sm leading-6 " +
                    (submitState === "success"
                      ? "border-main/25 bg-paper/75 text-main"
                      : "border-burgundy/40 bg-burgundy/10 text-main")
                  }
                >
                  {submitState === "success" ? (
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-burgundy"
                      aria-hidden="true"
                    />
                  ) : null}
                  {message}
                </div>
              ) : null}
            </form>

            <div
              className="notebook-binding absolute inset-y-8 left-[41%] z-30 hidden -translate-x-1/2 flex-col justify-around lg:flex"
              aria-hidden="true"
            >
              {bindingLoops.map((loop) => (
                <span
                  key={loop}
                  className="block h-4 w-14 rounded-full border-[3px] border-gold-dark bg-gold shadow-press"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
