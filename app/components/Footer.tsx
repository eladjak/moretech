import Image from "next/image";
import { SITE } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logos/edutech.png" alt="לוגו EduTech" width={40} height={40} className="size-10 object-contain" />
              <span className="text-lg font-extrabold text-brand">EduTech</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              טכנולוגיה ו-AI לבתי ספר ולרשתות חינוך — הכשרה, סדנאות, קורסים וקייטנות בעברית.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-ink">תתי-מותגים</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><span className="font-bold text-ink">MoreTech</span> — הכשרת מורים B2B</li>
              <li><span className="font-bold text-ink">HiTechKids</span> — סדנאות וקייטנות ילדים</li>
              <li><span className="font-bold text-ink">EduTech Pro</span> — הכשרות מקצועיות</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-ink">ניווט</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#problem" className="wow-press inline-block text-muted hover:text-brand">האתגר</a></li>
              <li><a href="#solution" className="wow-press inline-block text-muted hover:text-brand">מה אנחנו עושים</a></li>
              <li><a href="#activities" className="wow-press inline-block text-muted hover:text-brand">קטלוג פעילויות</a></li>
              <li><a href="#demo" className="wow-press inline-block text-muted hover:text-brand">דמו AI</a></li>
              <li><a href="#pricing" className="wow-press inline-block text-muted hover:text-brand">תמחור</a></li>
              <li><a href="/about" className="wow-press inline-block text-muted hover:text-brand">אודות EduTech</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-ink">יצירת קשר</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><a href={`mailto:${SITE.email}`} className="wow-press inline-block hover:text-brand" dir="ltr">{SITE.email}</a></li>
              <li>ישראל</li>
              <li><a href="#contact" className="wow-press inline-block font-bold text-brand hover:underline">קבעו שיחה ←</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-100 pt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} EduTech · MoreTech · HiTechKids. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
