import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE } from "../lib/utils";

export const metadata: Metadata = {
  title: "אודות EduTech",
  description:
    "EduTech — ספק שירותי הכשרת מורים, סדנאות, קורסים וקייטנות בטכנולוגיה ובינה מלאכותית לבתי ספר ולרשתות חינוך בישראל.",
  alternates: { canonical: `${SITE.url}/about` },
};

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Link href="/" className="wow-press inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
        <ArrowLeft size={16} className="flip-rtl" /> חזרה לדף הבית
      </Link>
      <h1 className="mt-6 text-4xl font-black text-ink">אודות EduTech</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
        <p>
          <strong className="text-ink">EduTech</strong> נולדה מתוך אמונה פשוטה: כל בית ספר בישראל צריך
          לדעת ללמד טכנולוגיה ובינה מלאכותית — לא מתישהו בעתיד, אלא כבר השנה. אנחנו מגשרים על הפער בין
          ההכרזות הגדולות על &quot;שנת ה-AI&quot; לבין מה שקורה בפועל בכיתה.
        </p>
        <p>
          אנחנו מספקים לבתי ספר ולרשתות חינוך פתרון שלם: הכשרת מורים קיימים להפוך למורי טכנולוגיה
          (<strong className="text-ink">MoreTech</strong>), סדנאות AI ותכנות לתלמידים, קורסים, ימי שיא,
          וקייטנות (<strong className="text-ink">HiTechKids</strong>). הכול בעברית, מותאם לתכנית הלימודים
          הישראלית ולשכבות הגיל.
        </p>
        <p>
          הגישה שלנו מעשית: אנחנו מגיעים, מלמדים, ומשאירים אחרינו ערך אמיתי — כל משתתף יוצא עם תוצר,
          וכל בית ספר בונה יכולת פנימית שנשארת. לא עוד פלטפורמה שמורים צריכים ללמוד לבד, אלא ליווי
          אנושי שמביא תוצאות.
        </p>
      </div>

      <Link
        href="/#contact"
        className="wow-press mt-10 inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-base font-bold text-white hover:scale-[1.03]"
      >
        קבעו שיחת היכרות
        <ArrowLeft size={18} className="flip-rtl" />
      </Link>
    </main>
  );
}
