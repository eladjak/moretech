"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
            בואו נדבר
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-body/80">
            פגישת הכרות + סדנה חינמית ל-5 מורים
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 lg:col-span-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-text-heading"
                >
                  שם מלא
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-lg border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-body outline-none transition-colors focus:border-secondary focus:ring-1 focus:ring-secondary"
                  placeholder="ישראל ישראלי"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="mb-1.5 block text-sm font-medium text-text-heading"
                >
                  תפקיד
                </label>
                <input
                  id="role"
                  type="text"
                  className="w-full rounded-lg border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-body outline-none transition-colors focus:border-secondary focus:ring-1 focus:ring-secondary"
                  placeholder='מנכ"ל / מנהל פדגוגי'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="org"
                className="mb-1.5 block text-sm font-medium text-text-heading"
              >
                שם הרשת / בית הספר
              </label>
              <input
                id="org"
                type="text"
                className="w-full rounded-lg border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-body outline-none transition-colors focus:border-secondary focus:ring-1 focus:ring-secondary"
                placeholder="שם הארגון"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-text-heading"
                >
                  טלפון
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-lg border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-body outline-none transition-colors focus:border-secondary focus:ring-1 focus:ring-secondary"
                  placeholder="050-1234567"
                  dir="ltr"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-text-heading"
                >
                  אימייל
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-body outline-none transition-colors focus:border-secondary focus:ring-1 focus:ring-secondary"
                  placeholder="email@example.com"
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="notes"
                className="mb-1.5 block text-sm font-medium text-text-heading"
              >
                הערות
              </label>
              <textarea
                id="notes"
                rows={4}
                className="w-full resize-none rounded-lg border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-body outline-none transition-colors focus:border-secondary focus:ring-1 focus:ring-secondary"
                placeholder="ספרו לנו קצת על הצרכים שלכם..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-accent-hover"
            >
              <Send size={18} />
              שלחו פנייה
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 lg:col-span-2"
          >
            <div>
              <h3 className="text-lg font-bold text-text-heading">
                צרו קשר ישירות
              </h3>
              <p className="mt-2 text-sm text-text-body/70">
                נשמח לשמוע מכם ולענות על כל שאלה
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-text-body/60">טלפון</div>
                  <div className="text-sm font-medium text-text-heading" dir="ltr">
                    +972-XX-XXX-XXXX
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-text-body/60">אימייל</div>
                  <div className="text-sm font-medium text-text-heading">
                    info@moretech.co.il
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-accent/20 bg-accent/5 p-6">
              <div className="text-sm font-bold text-accent">
                סדנה חינמית!
              </div>
              <p className="mt-2 text-sm text-text-body/80">
                תיאמו פגישת הכרות וקבלו סדנת חשיפה חינמית ל-5 מורים מהרשת שלכם.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
