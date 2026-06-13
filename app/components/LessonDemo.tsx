"use client";

import { useState } from "react";
import { Sparkles, Copy, Check, Loader2, RotateCcw } from "lucide-react";

const SUBJECTS = [
  "מדעי המחשב",
  "בינה מלאכותית",
  "מתמטיקה",
  "מדעים",
  "אנגלית",
  "עברית ולשון",
  "היסטוריה",
  "אזרחות",
  "גיאוגרפיה",
  "אמנות ועיצוב",
  "מוזיקה",
  "חינוך חברתי",
  "רובוטיקה",
  "סייבר ואבטחת מידע",
  "יזמות וחדשנות",
];

const GRADES = [
  "כיתות א׳–ב׳",
  "כיתות ג׳–ד׳",
  "כיתות ה׳–ו׳",
  "כיתות ז׳–ח׳",
  "כיתות ט׳–י׳",
  "כיתות י״א–י״ב",
];

// Minimal, safe markdown → React (headings, bold, bullets). No dangerouslySetInnerHTML.
function renderPlan(text: string) {
  return text.split("\n").map((line, idx) => {
    const key = `${idx}`;
    if (line.startsWith("# ")) return <h3 key={key} className="mt-1 text-xl font-black text-brand">{line.slice(2)}</h3>;
    if (line.startsWith("## ")) return <h4 key={key} className="mt-4 text-base font-extrabold text-ink">{line.slice(3)}</h4>;
    if (line.startsWith("### ")) return <p key={key} className="mt-3 font-bold text-grass-700">{line.slice(4)}</p>;
    if (line.trim() === "---") return <hr key={key} className="my-3 border-brand-100" />;
    if (line.trim() === "") return <div key={key} className="h-2" />;
    // inline bold
    const parts = line.split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
      p.startsWith("**") && p.endsWith("**") ? (
        <strong key={i} className="text-brand">{p.slice(2, -2)}</strong>
      ) : (
        <span key={i}>{p}</span>
      )
    );
    return <p key={key} className="text-sm leading-relaxed text-ink/85">{parts}</p>;
  });
}

export default function LessonDemo() {
  const [subject, setSubject] = useState(SUBJECTS[1]);
  const [grade, setGrade] = useState(GRADES[3]);
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState("45 דקות");
  const [notes, setNotes] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  async function generate(e: React.FormEvent) {
    e.preventDefault();
    if (!topic.trim()) {
      setError("כתבו נושא לשיעור — למשל: צ׳אטבוטים, אלגוריתמים, או בטיחות ברשת.");
      return;
    }
    setError("");
    setLoading(true);
    setOutput("");
    setCopied(false);
    try {
      const res = await fetch("/api/generate-lesson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, gradeLevel: grade, topic, duration, notes }),
      });
      if (!res.ok || !res.body) throw new Error("שגיאת שרת");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setOutput(acc);
      }
    } catch {
      setError("הייתה תקלה בהפקת המערך. נסו שוב — ואם זה חוזר, דברו איתנו.");
    } finally {
      setLoading(false);
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  function reset() {
    setOutput("");
    setError("");
    setTopic("");
  }

  return (
    <section id="demo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-grass">
            <Sparkles size={16} /> דמו חי
          </span>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
            נסו בעצמכם: מחולל מערכי שיעור ב-AI
          </h2>
          <p className="mt-4 text-lg text-muted">
            זו דוגמה לכלים שאנחנו מלמדים מורים להשתמש בהם. הזינו מקצוע, שכבת גיל ונושא — וקבלו מערך
            שיעור פדגוגי מלא, בעברית, תוך שניות. בלי הרשמה.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={generate} className="rounded-2xl border border-brand-100 bg-brand-50/40 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-bold text-ink">מקצוע</span>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-lg border border-brand-100 bg-white px-3 py-2.5 text-sm"
                >
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-bold text-ink">שכבת גיל</span>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full rounded-lg border border-brand-100 bg-white px-3 py-2.5 text-sm"
                >
                  {GRADES.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-1 block text-sm font-bold text-ink">נושא השיעור</span>
              <input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="למשל: איך עובד צ׳אטבוט, חשיבה ביקורתית מול AI, אלגוריתם חיפוש…"
                className="w-full rounded-lg border border-brand-100 bg-white px-3 py-2.5 text-sm"
              />
            </label>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-bold text-ink">משך</span>
                <input
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full rounded-lg border border-brand-100 bg-white px-3 py-2.5 text-sm"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-bold text-ink">הערות (אופציונלי)</span>
                <input
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="כיתה הטרוגנית, דגש על עבודת צוות…"
                  className="w-full rounded-lg border border-brand-100 bg-white px-3 py-2.5 text-sm"
                />
              </label>
            </div>

            {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-base font-bold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> מפיק מערך…
                </>
              ) : (
                <>
                  <Sparkles size={18} /> צרו מערך שיעור
                </>
              )}
            </button>
          </form>

          {/* Output */}
          <div className="flex min-h-[360px] flex-col rounded-2xl border border-brand-100 bg-white p-6">
            {output ? (
              <>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-grass-700">מערך השיעור שלכם</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={copy}
                      className="inline-flex items-center gap-1 rounded-lg border border-brand-100 px-2.5 py-1.5 text-xs font-semibold text-brand hover:bg-brand-50"
                    >
                      {copied ? <><Check size={13} /> הועתק</> : <><Copy size={13} /> העתקה</>}
                    </button>
                    <button
                      type="button"
                      onClick={reset}
                      aria-label="ניקוי"
                      className="inline-flex items-center gap-1 rounded-lg border border-brand-100 px-2.5 py-1.5 text-xs font-semibold text-muted hover:bg-brand-50"
                    >
                      <RotateCcw size={13} /> חדש
                    </button>
                  </div>
                </div>
                <div className="max-h-[520px] overflow-y-auto pe-1">{renderPlan(output)}</div>
              </>
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center text-center text-muted">
                <Sparkles size={40} className="text-brand-100" />
                <p className="mt-3 max-w-xs text-sm">
                  מלאו את הטופס ולחצו &quot;צרו מערך שיעור&quot; — המערך המלא יופיע כאן, מוכן להעתקה.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
