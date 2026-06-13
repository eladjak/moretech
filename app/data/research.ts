// Real, citable market data — sourced from RESEARCH.md (Feb 2026 market research).
// Every figure here traces to a public source. Do NOT add un-cited numbers.

export type Stat = {
  value: string;
  label: string;
  source: string;
  href: string;
};

// Hero headline stats (3) — the most striking, all real.
export const heroStats: Stat[] = [
  {
    value: "22%",
    label: "ירידה במספר המורים החדשים שנכנסו למערכת ב-2025",
    source: "כלכליסט",
    href: "https://www.calcalist.co.il/local_news/article/hjuv4wwtee",
  },
  {
    value: "1.485 מיליארד ₪",
    label: 'תקציב לאומי לרפורמת STEM "ישראל ריאלית" עד 2028',
    source: "החלטת ממשלה / מרכז המחקר של הכנסת",
    href: "https://fs.knesset.gov.il/globaldocs/MMM/09f3dfaf-607c-ed11-8150-005056aac6c3/2_09f3dfaf-607c-ed11-8150-005056aac6c3_11_19858.pdf",
  },
  {
    value: "70,000",
    label: 'מורים שאמורים לעבור הכשרה לשימוש ב-AI בכיתה ("בינה מלאכותית לכל")',
    source: "משרד החינוך",
    href: "https://ai.education.gov.il/",
  },
];

// Problem-section data points (real, with sources).
export const problemStats: Stat[] = [
  {
    value: "216",
    label: "משרות פנויות בהוראת מקצועות הליבה לשנת הלימודים 2025-2026",
    source: "משרד החינוך",
    href: "https://www.mako.co.il/news-education/2025_q2/Article-4794cfbd1627691026.htm",
  },
  {
    value: "40%",
    label: "ירידה במספר הסטודנטים למדעי המחשב באקדמיה — מאגר המורים העתידי מצטמצם",
    source: "כלכליסט",
    href: "https://www.calcalist.co.il/local_news/article/hjuv4wwtee",
  },
  {
    value: "60%",
    label: "מהמורים בעולם כבר משתמשים ב-AI — אך 76% לא קיבלו הכשרה כלשהי",
    source: "Gallup 2025",
    href: "https://www.jpost.com/business-and-innovation/article-839523",
  },
];

// Education networks — each is a "giant customer" (one decision = dozens of schools).
export type Network = {
  name: string;
  schools: string;
  students: string;
  note: string;
};

export const networks: Network[] = [
  { name: "אורט", schools: "~119 תיכונים", students: "~77,000", note: "הרשת הגדולה ביותר, מובילה בטכנולוגיה" },
  { name: 'אמי"ת', schools: "75-98 מוסדות", students: "20,000-34,000", note: "מדורגת ראשונה 7 שנים ברציפות" },
  { name: "עתיד", schools: "~48 תיכונים", students: "~24,000", note: "מגמות טכנולוגיות מגוונות" },
  { name: "עמל", schools: "~37 תיכונים", students: "~24,000", note: "חזקה בחינוך טכנולוגי" },
  { name: "דרכא", schools: "~41 תיכונים", students: "~24,000", note: "פריפריה — פחות תחרות" },
  { name: "בני עקיבא", schools: "~52 מוסדות", students: "~16,000", note: "ציונות דתית, בגרות מצטיינת" },
  { name: "מופת", schools: "~120 מוסדות", students: "~20,000", note: "מצוינות STEM בפריפריה" },
];

// External citation links to embed in main content (GEO: ≥5 real external links).
export const sources = [
  { label: "תכנית 'בינה מלאכותית לכל' — משרד החינוך", href: "https://ai.education.gov.il/" },
  { label: "מנהל חדשנות וטכנולוגיה — משרד החינוך", href: "https://edu-tech.education.gov.il/" },
  { label: "תכנית ממשק מיומנויות STEM", href: "https://edu-tech.education.gov.il/projects/skills-program/" },
  { label: "שולחן מפמ\"ר מדעי המחשב", href: "https://csit.education.gov.il/" },
  { label: 'רפורמת "ישראל ריאלית" — מרכז המחקר של הכנסת', href: "https://fs.knesset.gov.il/globaldocs/MMM/09f3dfaf-607c-ed11-8150-005056aac6c3/2_09f3dfaf-607c-ed11-8150-005056aac6c3_11_19858.pdf" },
  { label: "מחקר מחסור מורים — Calcalist", href: "https://www.calcalist.co.il/local_news/article/hjuv4wwtee" },
];
