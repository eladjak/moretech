"use client";

import { motion } from "framer-motion";
import { Search, Wrench, Target, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    period: "חודש 1-2",
    title: "אבחון צרכים והתאמת תכנית",
    description:
      "מיפוי המורים הקיימים, זיהוי פערים, בניית תכנית הכשרה מותאמת אישית לרשת.",
  },
  {
    icon: Wrench,
    period: "חודש 3-8",
    title: "הכשרה מעשית + יישום בכיתות",
    description:
      "סדנאות מעשיות, הטמעת כלים בכיתות, ליווי צמוד ופידבק שוטף.",
  },
  {
    icon: Target,
    period: "חודש 9-12",
    title: "העמקה ומדידת תוצאות",
    description:
      "העמקת ההכשרה, מדידת KPIs, דוחות התקדמות למנהלים, שיפור מתמיד.",
  },
  {
    icon: Rocket,
    period: "שנה 2+",
    title: "חידוש, הרחבה ושדרוג",
    description:
      "עדכון תכניות, הכשרת מורים נוספים, הרחבה לנושאים חדשים, שדרוג מתמיד.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-bg-alt py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
            איך זה עובד
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-body/80">
            תהליך מובנה שמביא תוצאות מוכחות
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 right-1/2 hidden w-0.5 -translate-x-1/2 bg-secondary/20 lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.period}
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col items-center gap-6 lg:flex-row ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 lg:text-center">
                    <div
                      className={`rounded-2xl bg-white p-8 shadow-sm ${
                        isEven ? "lg:ml-12" : "lg:mr-12"
                      }`}
                    >
                      <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-bold text-secondary">
                        {step.period}
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-text-heading">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-body/80">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-white shadow-md">
                    <Icon size={20} />
                  </div>

                  <div className="hidden flex-1 lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
