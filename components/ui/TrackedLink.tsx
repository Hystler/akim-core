"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackGoal, type AnalyticsGoal } from "@/lib/analytics";

type TrackedLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  href: string;
  children: ReactNode;
  goal: AnalyticsGoal;
  goalParams?: Record<string, string>;
};

export function TrackedLink({
  href,
  children,
  goal,
  goalParams,
  ...props
}: TrackedLinkProps) {
  const handleClick = () => trackGoal(goal, goalParams);

  if (href.startsWith("/")) {
    return (
      <Link href={href} onClick={handleClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
