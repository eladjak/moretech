import { ExternalLink } from "lucide-react";
import { problemStats } from "@/data/research";
import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section id="problem" className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wide text-lime">האתגר</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            ישראל מצהירה על &quot;שנת הבינה המלאכותית&quot; — אבל אין מספיק מורים שיודעים ללמד אותה
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            הממשלה הקצתה תקציבי ענק ל-STEM ול-AI, אבל בשטח הפער בין ההכרזות לביצוע רק גדל: מחסור
            חריף במורים טכנולוגיים, ירידה במאגר העתידי, ומורים שכבר משתמשים ב-AI — בלי שום הכשרה.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {problemStats.map((s, i) => (
            <Reveal as="article" key={s.label} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="kpi-value text-4xl font-black text-lime">{s.value}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/85">{s.label}</p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white/60 hover:text-lime"
                >
                  מקור: {s.source}
                  <ExternalLink size={12} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-base text-white/70">
            התוצאה: רשתות חינוך מחפשות ספק חיצוני שיביא ביצוע אמיתי — תכנים, הכשרה ופעילויות — במקום
            עוד הכרזה. <span className="font-bold text-white">זה בדיוק מה ש-EduTech עושה.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
