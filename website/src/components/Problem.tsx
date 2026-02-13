"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingDown, Users, Brain } from "lucide-react";

function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: TrendingDown,
    value: 22,
    suffix: "%",
    label: "ירידה במורים חדשים",
    description: "ירידה דרמטית במספר הנכנסים להוראת מדעי המחשב",
  },
  {
    icon: Users,
    value: 40,
    suffix: "%",
    label: "ירידה בסטודנטים למדעי המחשב",
    description: "פחות סטודנטים בוחרים במסלולי הכשרה להוראת טכנולוגיה",
  },
  {
    icon: Brain,
    value: 70000,
    suffix: "",
    label: "מורים צריכים הכשרת AI",
    description: "מורים בישראל שנדרשים להכשרה בבינה מלאכותית",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-bg-alt py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
            משבר המורים הטכנולוגיים
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-body/80">
            הממשלה משקיעה 1.485 מיליארד {"\u20AA"} בתכנית &quot;ישראל
            ריאלית&quot;, אבל מי מכשיר את המורים?
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                  <Icon className="h-7 w-7 text-red-500" />
                </div>
                <div className="mt-6 text-4xl font-black text-primary sm:text-5xl">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="mt-2 text-lg font-bold text-text-heading">
                  {stat.label}
                </div>
                <p className="mt-2 text-sm text-text-body/70">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
