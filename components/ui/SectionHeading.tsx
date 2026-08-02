type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  index?: string;
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  index,
  tone = "dark"
}: SectionHeadingProps) {
  const centered = align === "center";
  const titleColor = tone === "light" ? "text-ink-950" : "text-frost";
  const mutedColor = tone === "light" ? "text-ink-800/65" : "text-muted";
  const indexColor = tone === "light" ? "text-ink-800/70" : "text-steel";

  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <div
        className={`mb-5 flex items-center gap-3 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        {index ? <span className={`text-xs font-medium ${indexColor}`}>{index}</span> : null}
        <p className={`text-xs font-semibold uppercase ${mutedColor}`}>
          {eyebrow}
        </p>
      </div>
      <h2 className={`text-balance font-heading text-3xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl ${titleColor}`}>
        {title}
      </h2>
      {text ? (
        <p className={`text-pretty mt-6 max-w-2xl text-base leading-8 sm:text-lg ${mutedColor}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
