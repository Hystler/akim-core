import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика обработки данных на сайте AKIM CORE.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Политика конфиденциальности AKIM CORE",
    description: "Какие данные получает сайт AKIM CORE и для чего они используются.",
    url: "/privacy"
  }
};

const sections = [
  {
    title: "Какие данные получает сайт",
    text: "При отправке формы могут передаваться имя, контакт в Telegram или email, описание задачи, дедлайн, ссылка на материалы и выбранное вложение."
  },
  {
    title: "Для чего используются данные",
    text: "Только для ответа на обращение, уточнения задачи, оценки проекта и дальнейшей рабочей коммуникации. Данные не продаются и не используются для рекламных рассылок."
  },
  {
    title: "Как отправляется форма",
    text: "Форма передаёт сообщение через сервис FormSubmit на рабочий email. Собственная база данных для заявок на сайте не используется. Вложения передаются вместе с обращением."
  },
  {
    title: "Аналитика",
    text: "После подключения счётчика сайт может использовать Яндекс Метрику для обезличенной оценки посещаемости и действий на страницах. Вебвизор в текущей конфигурации отключён."
  },
  {
    title: "Сторонние ссылки",
    text: "На сайте есть переходы в Telegram и на опубликованные проекты. Правила обработки данных на этих площадках определяются их собственными политиками."
  },
  {
    title: "Как задать вопрос или удалить обращение",
    text: "Напишите на hello@akimkovalenko.ru с адреса, указанного при обращении, и опишите запрос."
  }
];

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Документы"
        title="Политика конфиденциальности"
        text="Коротко и без юридического тумана: какие данные получает сайт и зачем они нужны."
      />
      <section className="pb-20 pt-14 sm:pb-28 sm:pt-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.45fr_1.55fr]">
          <div>
            <p className="text-sm text-muted">Редакция от 31 июля 2026 года</p>
            <Link
              href="/contact"
              className="focus-ring mt-5 inline-block rounded-sm border-b border-white/30 pb-1 text-sm font-semibold text-frost"
            >
              Связаться
            </Link>
          </div>
          <div className="border-t border-white/15">
            {sections.map((section) => (
              <section key={section.title} className="border-b border-white/15 py-7">
                <h2 className="font-heading text-xl font-medium text-frost">
                  {section.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
                  {section.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
