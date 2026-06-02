"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const interactiveSelector = 'a, button, [role="button"], [data-cursor="hover"]';

export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dotX = useSpring(x, { stiffness: 900, damping: 48, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 900, damping: 48, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 250, damping: 32, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 250, damping: 32, mass: 0.5 });

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const widthQuery = window.matchMedia("(min-width: 768px)");

    function syncEnabled() {
      const enabled = pointerQuery.matches && widthQuery.matches;
      setIsEnabled(enabled);
      document.documentElement.classList.toggle("custom-cursor-enabled", enabled);
    }

    syncEnabled();
    pointerQuery.addEventListener("change", syncEnabled);
    widthQuery.addEventListener("change", syncEnabled);

    return () => {
      pointerQuery.removeEventListener("change", syncEnabled);
      widthQuery.removeEventListener("change", syncEnabled);
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    let frame = 0;

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      const target = event.target instanceof Element ? event.target : null;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        x.set(event.clientX);
        y.set(event.clientY);
        setHasMoved(true);
        setIsActive(Boolean(target?.closest(interactiveSelector)));
      });
    }

    function handlePointerLeave() {
      setHasMoved(false);
      setIsActive(false);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [isEnabled, x, y]);

  if (!isEnabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[100] hidden mix-blend-screen transition-opacity duration-300 md:block ${
        hasMoved ? "opacity-100" : "opacity-0"
      }`}
    >
      <motion.div
        className="fixed left-0 top-0 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-electric-cyan shadow-[0_0_18px_rgba(34,211,238,0.8)]"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-electric-cyan/45 bg-electric-cyan/10 blur-[0.2px] shadow-[0_0_32px_rgba(34,211,238,0.24)]"
        animate={{
          width: isActive ? 58 : 34,
          height: isActive ? 58 : 34,
          marginLeft: isActive ? -29 : -17,
          marginTop: isActive ? -29 : -17,
          opacity: isActive ? 0.9 : 0.68
        }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        style={{ x: ringX, y: ringY }}
      />
    </div>
  );
}
