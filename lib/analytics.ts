export type AnalyticsGoal =
  | "hero_cases_click"
  | "hero_contact_click"
  | "case_open"
  | "telegram_click"
  | "contact_form_submit"
  | "external_project_open"
  | "service_contact_click"
  | "contact_cta_click"
  | "services_view"
  | "presentation_download";

type YandexWindow = Window & {
  ym?: (
    counterId: number,
    method: "reachGoal",
    goal: AnalyticsGoal,
    params?: Record<string, string>
  ) => void;
};

export function trackGoal(goal: AnalyticsGoal, params?: Record<string, string>) {
  if (typeof window === "undefined") return;

  const counterId = Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID);
  if (!counterId) return;

  (window as YandexWindow).ym?.(counterId, "reachGoal", goal, params);
}
