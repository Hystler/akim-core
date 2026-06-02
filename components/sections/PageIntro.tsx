import { MotionSection } from "@/components/ui/MotionPrimitives";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageIntro({ eyebrow, title, text }: PageIntroProps) {
  return (
    <MotionSection className="relative overflow-hidden pb-12 pt-20 sm:pb-16 sm:pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(139,92,246,0.12),transparent_32%)]" />
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-electric-cyan">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-frost sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{text}</p>
        </div>
      </div>
    </MotionSection>
  );
}
