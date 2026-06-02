import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type PrimaryLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function PrimaryLink({ href, children, variant = "primary" }: PrimaryLinkProps) {
  const isPrimary = variant === "primary";
  const className = isPrimary
    ? "shine-cta group inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-electric-blue px-6 py-3 text-sm font-semibold text-white shadow-glow-blue transition hover:-translate-y-0.5 hover:bg-electric-cyan hover:text-ink-950"
    : "group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.045] px-6 py-3 text-sm font-semibold text-frost transition hover:-translate-y-0.5 hover:border-electric-cyan/60 hover:bg-white/[0.08]";

  return (
    <Link href={href} className={className}>
      <span className="relative z-10">{children}</span>
      <ArrowUpRight
        className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        aria-hidden="true"
      />
    </Link>
  );
}
