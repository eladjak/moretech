import { Check, TrendingDown, TrendingUp, Info } from "lucide-react";
import { priceTiers, priceModifiers, networkPackages } from "@/data/offering";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-brand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wide text-grass">תמחור</span>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">מחירים שקופים, מותאמים לכל היקף</h2>
          <p className="mt-4 text-lg text-muted">
            אלה מחירי בסיס אמיתיים מהקטלוג שלנו — לא מספרים מנופחים. המחיר הסופי נקבע לפי מספר
            המשתתפים, המרחק והפורמט, ויש הנחות אמיתיות להזמנת סדרה, לפריפריה וללקוחות חוזרים.
            כל המחירים סופיים, ללא מע&quot;מ.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {priceTiers.map((t, i) => (
            <Reveal as="article" key={t.category} delay={i * 50}>
              <div className="h-full rounded-2xl border border-brand-100 bg-white p-6">
                <h3 className="text-base font-extrabold text-ink">{t.category}</h3>
                <p className="num mt-2 text-2xl font-black text-brand">
                  מ-{t.range.split("–")[0]}
                  <span className="text-sm font-bold text-muted"> · עד {t.range.split("–")[1]}</span>
                </p>
                <p className="mt-2 text-sm text-muted">{t.detail}</p>
                <p className="mt-2 text-xs font-bold text-grass-700">{t.basis}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <p className="rounded-xl border border-brand-100 bg-white/60 px-4 py-3 text-sm text-muted">
            <span className="font-bold text-ink">איך מתמחרים?</span> רוב הפעילויות מתומחרות לכיתה
            או לקבוצה — לא לתלמיד. ככה בית ספר יודע מראש כמה זה עולה, בלי הפתעות. לרשת שלמה בונים
            תכנית רוחבית עם מחיר מותאם. <span className="font-bold text-ink">מותאם לכל בית ספר — לפרטים בשיחה.</span>
          </p>
        </Reveal>

        {/* Discounts / surcharges */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-grass/30 bg-grass-50 p-6">
              <h3 className="flex items-center gap-2 text-base font-extrabold text-grass-700">
                <TrendingDown size={18} /> הוזלות
              </h3>
              <ul className="mt-3 space-y-2">
                {priceModifiers.discounts.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-ink/80">
                    <Check size={15} className="mt-0.5 shrink-0 text-grass" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="h-full rounded-2xl border border-brand-100 bg-white p-6">
              <h3 className="flex items-center gap-2 text-base font-extrabold text-brand">
                <TrendingUp size={18} /> תוספות
              </h3>
              <ul className="mt-3 space-y-2">
                {priceModifiers.surcharges.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-ink/80">
                    <Info size={15} className="mt-0.5 shrink-0 text-muted" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Network packages — illustrative */}
        <Reveal className="mt-12">
          <h3 className="text-xl font-black text-ink">חבילות לרשתות חינוך</h3>
          <p className="mt-1 text-sm text-muted">
            תכניות רוחביות לרשת שלמה — מותאמות בהתאם למספר בתי הספר ולהיקף.
          </p>
        </Reveal>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {networkPackages.map((p, i) => (
            <Reveal as="article" key={p.name} delay={i * 60}>
              <div className="h-full rounded-2xl border-2 border-brand bg-white p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-extrabold text-ink">{p.name}</h4>
                  <span className="rounded-full bg-lime/20 px-2 py-0.5 text-[10px] font-bold text-lime-600">להמחשה</span>
                </div>
                <p className="mt-1 text-sm font-bold text-brand">{p.price}</p>
                <ul className="mt-3 space-y-2">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex gap-2 text-sm text-ink/80">
                      <Check size={15} className="mt-0.5 shrink-0 text-grass" /> {inc}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-5 inline-block text-sm font-bold text-brand underline">
                  בקשו הצעה מותאמת לרשת ←
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
