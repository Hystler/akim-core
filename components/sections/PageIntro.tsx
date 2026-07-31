import { MotionSection } from "@/components/ui/MotionPrimitives";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageIntro({ eyebrow, title, text }: PageIntroProps) {
  return (
    <MotionSection className="border-b border-white/10 pb-12 pt-20 sm:pb-16 sm:pt-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.35fr_1.65fr] lg:items-start">
          <p className="text-xs font-semibold uppercase text-muted">
            {eyebrow}
          </p>
          <div>
            <h1 className="text-balance max-w-6xl font-heading text-4xl font-medium leading-[1.06] text-frost sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="text-pretty mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {text}
            </p>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
