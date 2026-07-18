"use client";

import { useEffect, useRef } from "react";

/**
 * Bidirectional scroll-reveal (wow-ui-standard, principle 3).
 *
 * Upgrades the original one-shot reveal:
 * - threshold: 0 + rootMargin (never 0.15 — a tall mobile section could
 *   otherwise never reach the visibility ratio and stay hidden forever).
 * - Server HTML ships VISIBLE. The hidden state (.armed) is added only at
 *   runtime, so no-JS users and crawlers see everything.
 * - Bidirectional: fades back out when it leaves through the top, resets
 *   when it leaves through the bottom — but ONLY when reduced-motion is off.
 * - ONE shared IntersectionObserver for the whole page (no per-element
 *   observer); reduced-motion is gated in JS as well as in CSS.
 * Animates opacity/transform only.
 */

let sharedObserver: IntersectionObserver | null = null;

function reducedMotion() {
  try {
    return !!(
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  } catch {
    return false;
  }
}

function getObserver() {
  if (sharedObserver) return sharedObserver;
  if (typeof IntersectionObserver === "undefined") return null;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("in");
          el.classList.remove("out-up");
        } else {
          const rootTop = entry.rootBounds ? entry.rootBounds.top : 0;
          if (entry.boundingClientRect.top < rootTop) {
            // Left through the TOP -> fade upward.
            el.classList.remove("in");
            el.classList.add("out-up");
          } else {
            // Left through the BOTTOM -> reset to pre-entrance state.
            el.classList.remove("in", "out-up");
          }
        }
      }
    },
    { threshold: 0, rootMargin: "0px 0px -10% 0px", root: null }
  );
  return sharedObserver;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return; // RM: server-visible markup stays, nothing armed
    const obs = getObserver();
    if (!obs) return; // no IO -> everything stays visible
    // Only NOW hide it — the server shipped it visible (no-JS / crawler safe).
    el.classList.add("armed");
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref as never}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Comp>
  );
}
