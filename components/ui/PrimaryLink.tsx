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
    ? "focus-ring group inline-flex min-h-12 items-center justify-center gap-2 border border-burgundy bg-burgundy px-6 py-3 text-sm font-bold text-paper shadow-press transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl"
    : "focus-ring group inline-flex min-h-12 items-center justify-center gap-2 border border-main/35 bg-transparent px-6 py-3 text-sm font-bold text-main transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:bg-paper hover:shadow-2xl";

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
