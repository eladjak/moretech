import { offerings, steps, audiences } from "@/data/offering";
import Reveal from "./Reveal";

export default function Solution() {
  return (
    <section id="solution" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wide text-grass">הפתרון</span>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
            פתרון אחד שלם — מהרצאה בודדת ועד תכנית רשת
          </h2>
          <p className="mt-4 text-lg text-muted">
            לא עוד פלטפורמה שמורים צריכים ללמוד לבד. אנחנו מגיעים, מלמדים, ובונים בבית הספר יכולת
            אמיתית — שש קטגוריות שירות שמכסות כל גיל וכל צורך.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o, i) => {
            const Icon = o.icon;
            return (
              <Reveal as="article" key={o.title} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-brand-100 bg-white p-6 transition-shadow hover:shadow-lg">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-ink">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{o.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* How it works */}
        <div id="how" className="mt-24">
          <Reveal>
            <h2 className="text-center text-3xl font-black text-ink sm:text-4xl">איך זה עובד</h2>
          </Reveal>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 70}>
                <div className="relative h-full rounded-2xl bg-brand-50 p-6">
                  <span className="kpi-value flex size-10 items-center justify-center rounded-full bg-brand text-lg font-black text-white">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* For whom */}
        <div id="for-whom" className="mt-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-black text-ink sm:text-4xl">למי זה מתאים</h2>
            <p className="mt-3 text-lg text-muted">
              החלטה אחת ברמת הרשת מגיעה לעשרות בתי ספר בבת אחת — אבל אנחנו עובדים נהדר גם מול בית ספר
              בודד שרוצה להתחיל.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal as="article" key={a.title} delay={i * 60}>
                <div className="h-full rounded-2xl border-r-4 border-grass bg-grass-50 p-6">
                  <h3 className="text-lg font-extrabold text-ink">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
