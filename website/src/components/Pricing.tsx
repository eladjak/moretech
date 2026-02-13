"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "בסיסי",
    price: "8,000",
    unit: "\u20AA/מורה/שנה",
    highlighted: false,
    features: [
      "הכשרה 40 שעות",
      "תכניות לימודים מוכנות",
      "תמיכה במייל",
    ],
  },
  {
    name: "מקצועי",
    price: "15,000",
    unit: "\u20AA/מורה/שנה",
    highlighted: true,
    badge: "מומלץ",
    features: [
      "הכשרה 80 שעות",
      "תכניות לימודים + עדכונים שוטפים",
      "ליווי חודשי + מנטור",
      "קהילת מורים",
    ],
  },
  {
    name: "פרימיום",
    price: "22,000",
    unit: "\u20AA/מורה/שנה",
    highlighted: false,
    features: [
      "הכל בחבילה מקצועית +",
      "דאשבורד ניהולי מלא",
      "מנטור אישי צמוד",
      "התאמה מלאה לרשת",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg-alt py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
            תמחור
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-body/80">
            חבילות גמישות שמותאמות לגודל ולצרכים של הרשת שלכם
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "scale-105 border-2 border-accent bg-white shadow-lg"
                  : "border border-gray-200 bg-white shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 right-1/2 translate-x-1/2 rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
                  {plan.badge}
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-bold text-text-heading">
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-black text-primary">
                    {plan.price}
                  </span>
                  <span className="mr-1 text-sm text-text-body/60">
                    {plan.unit}
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm text-text-body">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-bold transition-colors ${
                  plan.highlighted
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "bg-primary/5 text-primary hover:bg-primary/10"
                }`}
              >
                לפרטים נוספים
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-sm text-text-body/60"
        >
          רשת עם 90 מורים x חבילה מקצועית = 1,350,000 {"\u20AA"} לשנה
        </motion.p>
      </div>
    </section>
  );
}
