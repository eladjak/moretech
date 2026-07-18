import Image from "next/image";
import { networks, sources } from "@/data/research";
import Reveal from "./Reveal";

const photos = [
  { src: "/img/workshop-ai.png", alt: "סדנת מבוא לבינה מלאכותית בפעולה — משתתפים עובדים עם כלי AI" },
  { src: "/img/workshop-chatgpt.png", alt: "סדנת כתיבה יצירתית עם ChatGPT — מנחה מדגים מול קבוצה" },
  { src: "/img/kids-learning.png", alt: "ילדים לומדים עם AI בקייטנת HiTechKids" },
];

export default function Trust() {
  return (
    <section id="trust" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wide text-grass">ניסיון בשטח</span>
          <h2 className="title-underline mt-3 inline-block text-3xl font-black text-ink sm:text-4xl">
            לא תיאוריה — סדנאות אמיתיות, מורים אמיתיים, תוצרים אמיתיים
          </h2>
          <p className="mt-4 text-lg text-muted">
            כבר העברנו סדנאות AI, כתיבה יצירתית וטכנולוגיה — לתלמידים, מורים וילדים. הנה הצצה
            מהשטח.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={i * 60}>
              <div className="wow-lift overflow-hidden rounded-2xl border border-brand-100 transition-shadow hover:shadow-lg">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={500}
                  height={500}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Networks reachable */}
        <Reveal className="mt-16">
          <h3 className="text-xl font-black text-ink">השוק שאנחנו פונים אליו</h3>
          <p className="mt-1 text-sm text-muted">
            7 רשתות חינוך מובילות מנהלות יחד מאות תיכונים ומאות אלפי תלמידים — כל רשת היא לקוח שיכול
            להגיע לעשרות בתי ספר בבת אחת.
          </p>
        </Reveal>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-brand-100 text-right text-muted">
                <th className="py-2 font-bold">רשת</th>
                <th className="py-2 font-bold">בתי ספר</th>
                <th className="py-2 font-bold">תלמידים</th>
                <th className="py-2 font-bold">מאפיין</th>
              </tr>
            </thead>
            <tbody>
              {networks.map((n) => (
                <tr key={n.name} className="border-b border-brand-50">
                  <td className="py-2.5 font-extrabold text-ink">{n.name}</td>
                  <td className="num py-2.5 text-ink/80">{n.schools}</td>
                  <td className="num py-2.5 text-ink/80">{n.students}</td>
                  <td className="py-2.5 text-muted">{n.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sources — real external links (GEO citations) */}
        <Reveal className="mt-12 rounded-2xl bg-brand-50 p-6">
          <h3 className="text-base font-extrabold text-ink">מבוסס על מקורות רשמיים</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {sources.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wow-press text-sm text-brand underline decoration-brand-100 underline-offset-2 hover:decoration-brand"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
