"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/offering";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl font-black text-ink sm:text-4xl">שאלות נפוצות</h2>
        <ul className="mt-8 divide-y divide-brand-100 border-y border-brand-100">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-3 py-4 text-right transition-colors"
                >
                  <span className="text-base font-extrabold text-ink transition-colors group-hover:text-brand">{f.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden text-sm leading-relaxed text-muted">{f.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
