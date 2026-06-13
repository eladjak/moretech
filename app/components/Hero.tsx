"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { heroStats } from "@/data/research";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-grass-50 px-3 py-1 text-sm font-semibold text-grass-700">
            פתרון B2B לרשתות חינוך ובתי ספר
          </span>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
            מביאים את הטכנולוגיה
            <br />
            <span className="text-brand">וה-</span>
            <span className="text-grass">AI</span>
            <span className="text-brand"> אל הכיתה</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">
            הכשרת מורים, סדנאות, קורסים, קייטנות וימי שיא בטכנולוגיה ובינה מלאכותית — מהרצאה
            בודדת ועד תכנית שלמה לרשת חינוך. בעברית, מותאם לתכנית הלימודים הישראלית.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.03]"
            >
              קבעו שיחת היכרות
              <ArrowLeft size={18} className="flip-rtl" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-100 bg-white px-7 py-3.5 text-base font-bold text-brand transition-colors hover:border-brand hover:bg-brand-50"
            >
              <PlayCircle size={18} />
              נסו את מחולל השיעורים
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-3">
            {heroStats.map((s) => (
              <div key={s.label} className="rounded-xl border border-brand-100 bg-white p-3 text-center">
                <dt className="kpi-value text-xl font-black text-brand sm:text-2xl">{s.value}</dt>
                <dd className="mt-1 text-[11px] leading-tight text-muted sm:text-xs">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-xl">
            <Image
              src="/img/hero.jpg"
              alt="כיתה ישראלית מגוונת לומדת טכנולוגיה ובינה מלאכותית — תלמידים עם מחשבים ניידים ומורה מנחה"
              width={1024}
              height={576}
              priority
              className="h-auto w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
