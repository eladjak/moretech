"use client";

import { useEffect } from "react";

/**
 * CountUp (wow-ui-standard, principle 13) — "the number is the star".
 *
 * Animates every [data-countup] element from 0 up to the SERVER-rendered
 * value, then restores the EXACT server string byte-for-byte. Nothing is
 * hidden in the markup, so no-JS users and crawlers always see the real
 * number.
 *
 * Rules encoded (battle-tested 17.7.2026):
 * - Target parsed from the element's own server text, so currency prefixes
 *   ("מ-1,200 ₪"), percent suffixes ("22%") and Hebrew words all survive —
 *   only the numeric run animates, prefix/suffix are preserved.
 * - On finish, textContent is restored to the ORIGINAL string exactly.
 * - Under prefers-reduced-motion: skipped entirely, the server value stays.
 * - Plays once per element, on first entry to the viewport
 *   (threshold: 0 + rootMargin — the mobile-safe IO settings).
 * - ONE shared IntersectionObserver; no leak, no double-arm.
 * - No IntersectionObserver support -> server values simply stay put.
 *
 * Markup: <span className="num" data-countup>1,200</span>
 * Numbers should sit on font-variant-numeric: tabular-nums (.num / .kpi-value)
 * so columns don't dance while counting.
 */

const DURATION = 1200; // ms — fast

type Parsed = {
  num: number;
  decimals: number;
  prefix: string;
  suffix: string;
  grouped: boolean;
};

function reducedMotion() {
  try {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  } catch {
    return false;
  }
}

function parseValue(text: string): Parsed | null {
  const m = text.match(/-?[\d,  ]*\d(?:\.\d+)?/);
  if (!m || m.index === undefined) return null;
  const raw = m[0];
  const num = parseFloat(raw.replace(/[,  ]/g, ""));
  if (Number.isNaN(num)) return null;
  return {
    num,
    decimals: (raw.split(".")[1] || "").length,
    prefix: text.slice(0, m.index),
    suffix: text.slice(m.index + raw.length),
    grouped: /[,  ]/.test(raw),
  };
}

function fmt(v: number, p: Parsed) {
  return v.toLocaleString("en-US", {
    minimumFractionDigits: p.decimals,
    maximumFractionDigits: p.decimals,
    useGrouping: p.grouped,
  });
}

function animate(el: HTMLElement) {
  if (el.dataset.countupDone) return;
  el.dataset.countupDone = "1";
  const original = el.textContent ?? "";
  const p = parseValue(original);
  if (!p || reducedMotion()) return; // nothing to count / RM: leave as-is
  let t0: number | null = null;
  let lastWritten: string | null = null;
  function frame(t: number) {
    // Staleness guard: if anything else wrote to the node, yield now.
    if (lastWritten !== null && el.textContent !== lastWritten) return;
    if (t0 === null) t0 = t;
    const k = Math.min(1, (t - t0) / DURATION);
    const e = 1 - Math.pow(1 - k, 3); // ease-out cubic
    if (k < 1) {
      lastWritten = p!.prefix + fmt(p!.num * e, p!) + p!.suffix;
      el.textContent = lastWritten;
      requestAnimationFrame(frame);
    } else {
      el.textContent = original; // restore exact server string
    }
  }
  requestAnimationFrame(frame);
}

export default function CountUp() {
  useEffect(() => {
    if (reducedMotion() || typeof IntersectionObserver === "undefined") return;
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-countup]")
    ).filter((el) => !el.dataset.countupArmed && !el.dataset.countupDone);
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            animate(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );

    for (const el of els) {
      el.dataset.countupArmed = "1";
      io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return null;
}
