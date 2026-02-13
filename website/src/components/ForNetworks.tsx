"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const networks = [
  { name: "אורט", schools: "~100 בתי ספר" },
  { name: "אמי\"ת", schools: "~100 בתי ספר" },
  { name: "עתיד", schools: "~50 בתי ספר" },
  { name: "עמל", schools: "~40 בתי ספר" },
  { name: "דרכא", schools: "~20 בתי ספר" },
  { name: "מופת", schools: "~15 מכללות" },
];

export default function ForNetworks() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
            לרשתות חינוך שרוצות להוביל
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-text-body/80">
            החלטה אחת של מנכ&quot;ל = עשרות בתי ספר
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {networks.map((network, i) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center rounded-xl border border-gray-100 bg-bg-alt p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <div className="mt-4 text-lg font-bold text-text-heading">
                {network.name}
              </div>
              <div className="mt-1 text-xs text-text-body/60">
                {network.schools}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          <div>
            <div className="text-2xl font-bold text-primary">~300</div>
            <div className="text-sm text-text-body/70">תיכונים</div>
          </div>
          <div className="h-8 w-px bg-gray-200" />
          <div>
            <div className="text-2xl font-bold text-primary">200,000+</div>
            <div className="text-sm text-text-body/70">תלמידים</div>
          </div>
          <div className="h-8 w-px bg-gray-200" />
          <div>
            <div className="text-2xl font-bold text-primary">7</div>
            <div className="text-sm text-text-body/70">רשתות מובילות</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
