"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";

const stats = [
  { value: "22%", label: "ירידה במורים חדשים" },
  { value: "1.485", label: "מיליארד \u20AA תקציב STEM" },
  { value: "70,000", label: "מורים להכשרת AI" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary via-primary/95 to-white pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            הופכים מורים
            <br />
            <span className="text-accent">למורי טכנולוגיה</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 sm:text-xl">
            פתרון B2B מלא לרשתות חינוך - הכשרה, תכניות לימודים, ליווי ודאשבורד
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#solution"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-bold text-primary transition-transform hover:scale-105"
            >
              גלו איך
              <ArrowLeft size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <Calendar size={18} />
              קבעו פגישה
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white/10 px-6 py-4 text-center backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-blue-200">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
