"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#problem", label: "האתגר" },
  { href: "#solution", label: "מה אנחנו עושים" },
  { href: "#activities", label: "קטלוג פעילויות" },
  { href: "#demo", label: "דמו AI" },
  { href: "#pricing", label: "תמחור" },
  { href: "#faq", label: "שאלות" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="EduTech — לדף הבית">
          <Image src="/logos/edutech.png" alt="לוגו EduTech" width={44} height={44} className="size-11 object-contain" priority />
          <span className={`text-lg font-extrabold ${scrolled ? "text-brand" : "text-brand"}`}>EduTech</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="wow-press rounded-lg px-3 py-2 text-sm font-medium text-ink/80 hover:bg-brand-50 hover:text-brand"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="wow-press mr-1 rounded-lg bg-brand px-4 py-2 text-sm font-bold text-white hover:scale-[1.03]"
            >
              קבעו שיחה
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="wow-press rounded-lg p-2 text-brand md:hidden"
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-100 bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="wow-press block rounded-lg px-3 py-2.5 text-base font-medium text-ink/80 hover:bg-brand-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="wow-press mt-1 block rounded-lg bg-brand px-3 py-2.5 text-center text-base font-bold text-white"
              >
                קבעו שיחה
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
