"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, Send, Check } from "lucide-react";
import { SITE } from "@/lib/utils";

export default function Contact() {
  const [activity, setActivity] = useState("");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", message: "" });

  useEffect(() => {
    try {
      const a = sessionStorage.getItem("edutech_activity");
      if (a) {
        setActivity(a);
        setForm((f) => ({ ...f, message: `אשמח לשמוע על הפעילות: ${a}` }));
      }
    } catch {}
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // No backend wired yet — open the user's mail client with a prefilled message.
    const subject = activity ? `פנייה מאתר EduTech — ${activity}` : "פנייה מאתר EduTech";
    const lines = [
      `שם: ${form.name}`,
      `מוסד / רשת: ${form.org}`,
      `אימייל: ${form.email}`,
      `טלפון: ${form.phone}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-bold uppercase tracking-wide text-lime">בואו נדבר</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">קבעו שיחת היכרות</h2>
          <p className="mt-4 max-w-md text-lg text-white/80">
            ספרו לנו על בית הספר או הרשת — נשמע, נבין את הצרכים, ונבנה יחד תכנית מותאמת. בלי
            התחייבות, בלי לחץ.
          </p>
          {activity && (
            <p className="mt-4 rounded-lg bg-white/10 px-4 py-3 text-sm">
              הפעילות שביקשתם: <span className="font-bold text-lime">{activity}</span>
            </p>
          )}
          <div className="mt-8 space-y-3 text-white/80">
            <a href={`mailto:${SITE.email}`} className="wow-press inline-flex items-center gap-3 hover:text-lime">
              <Mail size={18} /> {SITE.email}
            </a>
            <p className="flex items-center gap-3 text-white/60">
              <Phone size={18} /> ניצור קשר טלפוני לאחר הפנייה
            </p>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-2xl bg-white p-6 text-ink">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-bold">שם מלא</span>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-brand-100 px-3 py-2.5 text-sm" />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-bold">בית ספר / רשת</span>
              <input value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })}
                className="w-full rounded-lg border border-brand-100 px-3 py-2.5 text-sm" />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-bold">אימייל</span>
              <input required type="email" dir="ltr" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-brand-100 px-3 py-2.5 text-sm" />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-bold">טלפון</span>
              <input dir="ltr" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-brand-100 px-3 py-2.5 text-sm" />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-1 block text-sm font-bold">מה תרצו?</span>
            <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-brand-100 px-3 py-2.5 text-sm" />
          </label>
          <button type="submit"
            className="wow-press mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-base font-bold text-white hover:scale-[1.02]">
            {sent ? <><Check size={18} /> נפתח חלון המייל</> : <><Send size={18} className="flip-rtl" /> שליחת פנייה</>}
          </button>
          <p className="mt-3 text-center text-xs text-muted">הפנייה נפתחת בתוכנת המייל שלכם ונשלחת ל-{SITE.email}</p>
        </form>
      </div>
    </section>
  );
}
