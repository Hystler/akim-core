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
  const titleColor = "text-main";
  const mutedColor = tone === "light" ? "text-main/70" : "text-main/70";
  const indexColor = "text-burgundy";

  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <div
        className={`mb-5 flex items-center gap-3 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        {index ? <span className={`text-xs font-medium ${indexColor}`}>{index}</span> : null}
        <p className="text-xs font-bold uppercase text-burgundy">
          {eyebrow}
        </p>
      </div>
      <h2 className={`text-balance font-heading text-3xl font-bold leading-[1.03] sm:text-5xl lg:text-6xl ${titleColor}`}>
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
