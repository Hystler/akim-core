"use client";

import { CheckCircle2, Paperclip } from "lucide-react";
import Link from "next/link";
import {
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent
} from "react";
import { trackGoal } from "@/lib/analytics";
import { siteEmail } from "@/lib/site-config";

type SubmitState = "idle" | "submitting" | "success" | "error";

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
const desktopBindingLoops = Array.from({ length: 9 }, (_, index) => index);
const mobileBindingLoops = Array.from({ length: 11 }, (_, index) => index);

function NotebookRing() {
  return (
    <svg
      className="notebook-ring"
      viewBox="0 0 34 18"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse
        cx="17"
        cy="9"
        rx="14.5"
        ry="6.5"
        fill="none"
        stroke="#241B16"
        strokeWidth="4"
      />
      <ellipse
        cx="17"
        cy="9"
        rx="14.5"
        ry="6.5"
        fill="none"
        stroke="#5E4C39"
        strokeWidth="2.35"
      />
      <path
        d="M4.8 7.4c4.2-5.2 20.2-5.2 24.4 0"
        fill="none"
        stroke="rgba(223, 194, 145, 0.72)"
        strokeLinecap="round"
        strokeWidth="1.05"
      />
    </svg>
  );
}

function NotebookPen() {
  return (
    <svg
      className="notebook-pen"
      viewBox="0 0 34 420"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="notebook-pen-body" x1="0" x2="1">
          <stop offset="0" stopColor="#090706" />
          <stop offset="0.34" stopColor="#49362D" />
          <stop offset="0.68" stopColor="#17110E" />
          <stop offset="1" stopColor="#050404" />
        </linearGradient>
        <linearGradient id="notebook-pen-metal" x1="0" x2="1">
          <stop offset="0" stopColor="#5C4325" />
          <stop offset="0.5" stopColor="#D0AD67" />
          <stop offset="1" stopColor="#604523" />
        </linearGradient>
      </defs>
      <rect x="8" y="25" width="18" height="350" rx="8" fill="url(#notebook-pen-body)" />
      <rect x="7" y="18" width="20" height="42" rx="8" fill="url(#notebook-pen-metal)" />
      <rect x="8" y="56" width="18" height="7" fill="#A7864A" opacity="0.86" />
      <path
        d="M25 40c5 34 5 82-3 116"
        fill="none"
        stroke="#B89555"
        strokeLinecap="round"
        strokeWidth="2.8"
      />
      <path
        d="M11 373h12l-2.2 25L17 416l-3.8-18z"
        fill="url(#notebook-pen-metal)"
        stroke="#3D2C1B"
        strokeWidth="1"
      />
      <path d="M17 398v13" stroke="#3D2C1B" strokeWidth="1" />
      <path d="M11 82v250" stroke="rgba(255,247,226,0.12)" strokeWidth="1.3" />
    </svg>
  );
}

export function ContactBlocks({ asPage = false }: { asPage?: boolean }) {
  const isSubmittingRef = useRef(false);
  const telegramRef = useRef<HTMLInputElement>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [contactError, setContactError] = useState(false);

  function clearContactError() {
    if (!contactError) return;
    setContactError(false);
    setSubmitState("idle");
    setMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmittingRef.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const telegram = String(formData.get("contact") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    if (!telegram && !email) {
      setContactError(true);
      setSubmitState("error");
      setMessage("Оставьте Telegram или email, чтобы я мог ответить.");
      telegramRef.current?.focus();
      return;
    }

    // Keep the existing endpoint contract when email is the preferred contact.
    formData.set("contact", telegram || email);
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
    setContactError(false);
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
      setMessage("Не получилось отправить. Попробуйте ещё раз чуть позже.");
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
    "notebook-field min-h-11 w-full px-3.5 text-main outline-none placeholder:text-main/35 transition-all duration-200 hover:border-main/30 focus:border-burgundy/70 focus:ring-2 focus:ring-burgundy/10";
  const labelClass = "grid gap-1.5 text-[12px] font-semibold text-main/80";
  const Heading = asPage ? "h1" : "h2";

  return (
    <section
      id="contact"
      className="contact-notebook-section dark-surface dark-shadow-d scroll-mt-24 border-t border-paper/10 pb-28 pt-20 sm:pb-36 sm:pt-28"
    >
      <div className="mx-auto w-full max-w-[1320px] px-3 sm:px-8 lg:px-10">
        <div className="notebook-scene">
          <span
            className="notebook-paper-stack notebook-paper-stack-one"
            aria-hidden="true"
          />
          <span
            className="notebook-paper-stack notebook-paper-stack-two"
            aria-hidden="true"
          />
          <span
            className="notebook-paper-stack notebook-paper-stack-three"
            aria-hidden="true"
          />

          <div className="notebook-spread">
            <aside className="notebook-intro-page notebook-page notebook-rules flex-col p-6 pb-4 pl-8 sm:p-9 sm:pb-5 sm:pl-10 min-[900px]:p-11 min-[900px]:pl-12">
              <div>
                <p className="text-[12px] font-semibold tracking-[0.18em] text-main min-[900px]:text-[13px]">
                  AKIM CORE
                </p>
                <Heading className="mt-7 font-serif text-[2rem] font-medium leading-none text-main sm:text-[2.35rem] min-[900px]:mt-16 min-[900px]:text-[3.25rem]">
                  Есть задача?
                </Heading>
                <p className="mt-2 whitespace-nowrap font-serif text-[1.2rem] font-medium italic leading-tight text-burgundy sm:text-[1.65rem] min-[900px]:text-[2.35rem]">
                  Расскажите коротко.
                </p>
              </div>

              <p className="mt-7 hidden max-w-[230px] text-sm font-medium leading-6 text-main/70 min-[900px]:mt-auto min-[900px]:block">
                Презентации, сайты и&nbsp;сервисы для рабочих задач.
              </p>
            </aside>

            <form
              onSubmit={handleSubmit}
              method="post"
              action={contactFormEndpoint}
              encType="multipart/form-data"
              aria-busy={submitState === "submitting"}
              className="notebook-form-page notebook-page p-5 pl-8 sm:p-7 sm:pt-5 sm:pl-10 min-[900px]:p-8 min-[1100px]:p-9"
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

              <div className="grid gap-4 min-[900px]:grid-cols-2">
                <label className={labelClass}>
                  <span>
                    Имя <span aria-hidden="true">*</span>
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className={fieldClass}
                  />
                </label>
                <label className={labelClass}>
                  Telegram
                  <input
                    ref={telegramRef}
                    type="text"
                    name="contact"
                    autoComplete="off"
                    aria-invalid={contactError}
                    aria-describedby="contact-help"
                    onChange={clearContactError}
                    className={fieldClass}
                  />
                </label>
              </div>

              <label className={`${labelClass} mt-4`}>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  aria-invalid={contactError}
                  aria-describedby="contact-help"
                  onChange={clearContactError}
                  className={fieldClass}
                />
              </label>
              <p
                id="contact-help"
                className={`mt-2 text-[11px] leading-5 ${
                  contactError ? "font-semibold text-burgundy" : "text-main/55"
                }`}
              >
                Оставьте Telegram или email.
              </p>

              <label className={`${labelClass} mt-4`}>
                <span>
                  Что нужно сделать? <span aria-hidden="true">*</span>
                </span>
                <textarea
                  name="description"
                  required
                  rows={5}
                  className={`${fieldClass} min-h-[104px] resize-y py-3 min-[900px]:min-h-[112px]`}
                />
              </label>

              <div className="mt-4 grid gap-4 min-[900px]:grid-cols-2">
                <label className={labelClass}>
                  Когда нужно?
                  <input
                    type="text"
                    name="deadline"
                    placeholder="20 сентября"
                    className={fieldClass}
                  />
                </label>
                <label className={labelClass}>
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

              <div className="mt-4 grid gap-1.5 text-[12px] font-semibold text-main/80">
                <span id="attachment-label">Материалы</span>
                <label className="notebook-upload relative flex min-h-[78px] cursor-pointer items-center justify-center gap-3 px-4 text-center transition-all duration-200 hover:border-burgundy/50 focus-within:border-burgundy/70 focus-within:ring-2 focus-within:ring-burgundy/10">
                  <input
                    id="contact-attachment"
                    type="file"
                    name="attachment"
                    accept=".pdf,.ppt,.pptx,.key,.doc,.docx,.xls,.xlsx,.zip,.png,.jpg,.jpeg"
                    aria-describedby="attachment-help"
                    aria-labelledby="attachment-label"
                    onChange={handleFileChange}
                    className="absolute inset-0 size-full cursor-pointer opacity-0"
                  />
                  <Paperclip
                    className="h-4 w-4 shrink-0 text-burgundy"
                    aria-hidden="true"
                  />
                  <span className="max-w-[260px] text-sm font-medium leading-5 text-main/65">
                    {fileName || (
                      <>
                        Перетащите файл или{" "}
                        <br />
                        нажмите для выбора
                      </>
                    )}
                  </span>
                </label>
                <span
                  id="attachment-help"
                  className="text-[11px] font-normal leading-5 text-main/55"
                >
                  Документы, ZIP или изображения. До 10 МБ.
                </span>
              </div>

              <label className="mt-4 flex items-start gap-3 text-[12px] leading-5 text-main/70">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  required
                  aria-label="Я согласен с политикой конфиденциальности"
                  className="focus-ring mt-0.5 size-5 shrink-0 accent-burgundy"
                />
                <span>
                  Я согласен с{"\u00a0"}
                  <Link
                    href="/privacy"
                    className="font-medium text-main underline decoration-main/30"
                  >
                    политикой конфиденциальности
                  </Link>
                </span>
              </label>

              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="notebook-submit focus-ring mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-[3px] border border-burgundy bg-burgundy px-5 text-sm font-bold text-paper shadow-press transition-all duration-200 hover:-translate-y-0.5 hover:shadow-tactile disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitState === "submitting"
                  ? "Отправляю…"
                  : "Отправить заявку"}
              </button>

              {message ? (
                <div
                  aria-live="polite"
                  role={submitState === "error" ? "alert" : "status"}
                  className={
                    "mt-4 flex gap-3 rounded-[5px] border p-3 text-sm leading-6 " +
                    (submitState === "success"
                      ? "border-main/20 bg-paper/60 text-main"
                      : "border-burgundy/35 bg-burgundy/[0.06] text-main")
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

            <div className="notebook-mobile-binding" aria-hidden="true">
              {mobileBindingLoops.map((loop) => (
                <NotebookRing key={loop} />
              ))}
            </div>

            <div className="notebook-desktop-binding" aria-hidden="true">
              {desktopBindingLoops.map((loop) => (
                <NotebookRing key={loop} />
              ))}
            </div>
          </div>

          <NotebookPen />
          <span className="notebook-pen-holder" aria-hidden="true" />
          <span className="notebook-ribbon" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
