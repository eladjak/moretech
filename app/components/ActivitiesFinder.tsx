"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Clock, Users, Star, ArrowLeft } from "lucide-react";
import {
  activities,
  themeMeta,
  audienceMeta,
  ageMeta,
  formatMeta,
  allThemes,
  allAges,
  allFormats,
  type Theme,
  type AgeBand,
  type Format,
} from "@/data/activities";

type Filter<T> = T | "all";

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
        active
          ? "bg-brand text-white"
          : "border border-brand-100 bg-white text-ink/70 hover:border-brand hover:text-brand"
      }`}
    >
      {children}
    </button>
  );
}

export default function ActivitiesFinder() {
  const [theme, setTheme] = useState<Filter<Theme>>("all");
  const [age, setAge] = useState<Filter<AgeBand>>("all");
  const [format, setFormat] = useState<Filter<Format>>("all");

  const filtered = useMemo(
    () =>
      activities.filter(
        (a) =>
          (theme === "all" || a.theme === theme) &&
          (age === "all" || a.ageBand.includes(age)) &&
          (format === "all" || a.format === format)
      ),
    [theme, age, format]
  );

  return (
    <section id="activities" className="bg-brand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wide text-grass">קטלוג פעילויות</span>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
            בחרו פעילות לבית הספר — לפי גיל, נושא ופורמט
          </h2>
          <p className="mt-4 text-lg text-muted">
            {activities.length} תכניות מקוריות בטכנולוגיה וב-AI, מותאמות לכל שכבת גיל. סננו, גלו, ובחרו
            את מה שמתאים לכם — ואנחנו נבנה את זה אצלכם.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 space-y-4 rounded-2xl border border-brand-100 bg-white p-5">
          <div>
            <p className="mb-2 text-xs font-bold text-muted">נושא</p>
            <div className="flex flex-wrap gap-2">
              <Chip active={theme === "all"} onClick={() => setTheme("all")}>הכול</Chip>
              {allThemes.map((t) => (
                <Chip key={t} active={theme === t} onClick={() => setTheme(t)}>
                  {themeMeta[t].label}
                </Chip>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-bold text-muted">שכבת גיל</p>
              <div className="flex flex-wrap gap-2">
                <Chip active={age === "all"} onClick={() => setAge("all")}>הכול</Chip>
                {allAges.map((a) => (
                  <Chip key={a} active={age === a} onClick={() => setAge(a)}>
                    {ageMeta[a]}
                  </Chip>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold text-muted">פורמט</p>
              <div className="flex flex-wrap gap-2">
                <Chip active={format === "all"} onClick={() => setFormat("all")}>הכול</Chip>
                {allFormats.map((f) => (
                  <Chip key={f} active={format === f} onClick={() => setFormat(f)}>
                    {formatMeta[f]}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm font-semibold text-brand" aria-live="polite">
            {filtered.length} פעילויות מתאימות
          </p>
        </div>

        {/* Cards */}
        {filtered.length === 0 ? (
          <p className="mt-10 rounded-2xl border border-dashed border-brand-100 bg-white p-10 text-center text-muted">
            לא נמצאו פעילויות בשילוב הזה — נסו לשחרר אחד מהמסננים, או{" "}
            <a href="#contact" className="font-bold text-brand underline">דברו איתנו</a> ונבנה משהו מותאם.
          </p>
        ) : (
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <li key={a.id} className="flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white transition-shadow hover:shadow-lg">
                <div className="flex items-center gap-3 border-b border-brand-50 bg-brand-50/40 p-4">
                  <Image
                    src={themeMeta[a.theme].img}
                    alt={`אייקון ${themeMeta[a.theme].label}`}
                    width={48}
                    height={48}
                    loading="lazy"
                    className="size-12 rounded-lg object-cover"
                  />
                  <div>
                    <span className="text-xs font-bold text-grass">{themeMeta[a.theme].label}</span>
                    <p className="text-[11px] text-muted">
                      {a.ageBand.map((b) => ageMeta[b]).join(" · ")} · {formatMeta[a.format]}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-extrabold leading-snug text-ink">{a.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
                    <span className="inline-flex items-center gap-1"><Clock size={13} /> {a.duration}</span>
                    <span className="inline-flex items-center gap-1">
                      <Users size={13} /> {a.audience.map((au) => audienceMeta[au]).join(", ")}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {a.outcomes.map((o) => (
                      <li key={o} className="flex gap-2 text-sm text-ink/80">
                        <Star size={14} className="mt-0.5 shrink-0 text-lime" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 rounded-lg bg-grass-50 px-3 py-2 text-xs leading-relaxed text-grass-700">
                    {a.special}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-brand-50 pt-3">
                    {a.priceFrom ? (
                      <span className="text-sm text-muted">
                        מ-<span className="num font-bold text-ink">{a.priceFrom.toLocaleString("he-IL")} ₪</span>
                        <span className="text-[10px]"> (להמחשה)</span>
                      </span>
                    ) : (
                      <span className="text-sm text-muted">בהתאמה</span>
                    )}
                    <a
                      href={`#contact?activity=${encodeURIComponent(a.name)}`}
                      className="inline-flex items-center gap-1 rounded-lg bg-brand px-3 py-1.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
                      onClick={() => {
                        try {
                          sessionStorage.setItem("edutech_activity", a.name);
                        } catch {}
                      }}
                    >
                      בקשו פעילות זו
                      <ArrowLeft size={14} className="flip-rtl" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
