"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            הממשלה מכירה בבעיה. אנחנו מספקים את הפתרון.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm sm:p-12">
            <Quote className="h-10 w-10 text-accent" />
            <blockquote className="mt-6 text-lg leading-relaxed text-blue-100 sm:text-xl">
              &quot;תכנית ישראל ריאלית מציבה יעד של הגדלת מספר תלמידי
              המדעים והטכנולוגיה ב-50% עד 2032. להגיע ליעד הזה בלי מורים
              מוכשרים - זה כמו לבנות בית בלי יסודות.&quot;
            </blockquote>
            <div className="mt-6 text-sm text-blue-200">
              - מתוך תכנית &quot;ישראל ריאלית&quot; של ממשלת ישראל
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-12 flex max-w-md flex-col items-center gap-2 text-center"
        >
          <div className="text-5xl font-black text-white">
            1.485 מיליארד {"\u20AA"}
          </div>
          <div className="text-lg text-blue-200">תקציב STEM ממשלתי</div>
        </motion.div>
      </div>
    </section>
  );
}
