"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Handshake, BarChart3 } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "הכשרת מורים",
    description:
      "80 שעות הכשרה שנתית ב-AI, תכנות ואוריינות דיגיטלית. סדנאות מעשיות עם כלים שניתן ליישם מיד בכיתה.",
  },
  {
    icon: BookOpen,
    title: "תכניות לימודים",
    description:
      "30 מערכי שיעור מוכנים, מעודכנים, מותאמים לדרישות משרד החינוך. חומרים מוכנים שחוסכים זמן הכנה.",
  },
  {
    icon: Handshake,
    title: "ליווי חודשי",
    description:
      "מנטור צמוד, קהילת מורים, תמיכה שוטפת. כי הכשרה בלי ליווי - לא עובדת.",
  },
  {
    icon: BarChart3,
    title: "דאשבורד ניהולי",
    description:
      "מעקב התקדמות, דוחות לרגולציה, KPIs לימודיים. כל המידע שמנהלי רשת צריכים - במקום אחד.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
            חבילת מורה טק - הכל כלול
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-body/80">
            פתרון מקצה לקצה שהופך מורים קיימים למורי טכנולוגיה מוסמכים
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-gray-100 p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <Icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-text-heading">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-body/80">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
