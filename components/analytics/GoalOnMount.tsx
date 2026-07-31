"use client";

import { useEffect } from "react";
import { trackGoal, type AnalyticsGoal } from "@/lib/analytics";

export function GoalOnMount({ goal }: { goal: AnalyticsGoal }) {
  useEffect(() => {
    trackGoal(goal);
  }, [goal]);

  return null;
}
