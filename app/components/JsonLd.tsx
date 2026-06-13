import { SITE } from "@/lib/utils";
import { faqs } from "@/data/offering";

// GEO/AEO #1 RULE: render JSON-LD as a PLAIN <script> in server-rendered HTML.
// Never use next/script <Script> — that hides it in the React payload from AI crawlers.

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "he-IL",
      description: SITE.description,
    },
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE.url}/#org`,
      name: "EduTech",
      alternateName: ["MoreTech", "HiTechKids"],
      url: SITE.url,
      email: SITE.email,
      logo: `${SITE.url}/logos/edutech.png`,
      description:
        "ספק שירותי הכשרת מורים, סדנאות, קורסים וקייטנות בטכנולוגיה ובינה מלאכותית לבתי ספר ולרשתות חינוך בישראל.",
      areaServed: { "@type": "Country", name: "ישראל" },
      knowsAbout: [
        "הכשרת מורים לטכנולוגיה",
        "בינה מלאכותית בחינוך",
        "תכנות לילדים",
        "רובוטיקה חינוכית",
        "אוריינות AI",
        "סייבר ואבטחת מידע",
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE.url}/#service`,
      serviceType: "הכשרת מורים וסדנאות טכנולוגיה ו-AI לבתי ספר",
      provider: { "@id": `${SITE.url}/#org` },
      areaServed: { "@type": "Country", name: "ישראל" },
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "רשתות חינוך, בתי ספר, מורים, רכזי תקשוב",
      },
      description:
        "פתרון B2B מלא: הכשרת מורים, הרצאות, סדנאות AI, קורסים, ימי שיא וקייטנות בטכנולוגיה — בעברית, מותאם לתכנית הלימודים הישראלית.",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
