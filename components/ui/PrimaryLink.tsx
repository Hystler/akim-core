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
    ? "focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-frost bg-frost px-6 py-3 text-sm font-semibold text-ink-950 transition duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-frost"
    : "focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-frost transition duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.04]";

  return (
    <Link href={href} className={className}>
      <span className="relative z-10">{children}</span>
      <ArrowUpRight
        className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}
