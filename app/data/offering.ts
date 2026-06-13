// Core offering (teacher-training + service lines) and REAL pricing tiers.
// Price ranges are sourced from the real EduTech experience-and-pricing catalog
// (business-docs/טבלת חוויות ותמחור.docx). Network "packages" are marked להמחשה.

import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Presentation,
  Wrench,
  Users,
  Sparkles,
  Tent,
} from "lucide-react";

export type Offering = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

// What EduTech delivers — the 6 service lines (all real categories from the catalog).
export const offerings: Offering[] = [
  {
    icon: GraduationCap,
    title: "הכשרת מורים (MoreTech)",
    desc: "הופכים מורים קיימים למורי טכנולוגיה — השתלמויות, הסבה והטמעה, כולל גמול השתלמות והתאמה למדיניות משרד החינוך.",
  },
  {
    icon: Presentation,
    title: "הרצאות והעשרה",
    desc: "מהפכת ה-AI בחינוך, בטיחות ברשת, מקצועות העתיד וגידול ילדים בעידן דיגיטלי — לתלמידים, מורים והורים.",
  },
  {
    icon: Wrench,
    title: "סדנאות מעשיות",
    desc: "סדנאות AI, תכנות, רובוטיקה ויצירה דיגיטלית — חוויה מעשית שמשאירה אחריה תוצר אמיתי בידי כל משתתף.",
  },
  {
    icon: Users,
    title: "קורסים וסמינרים",
    desc: "תכניות ליווי רב-מפגשיות — פיתוח אפליקציות, סייבר, AI ופיתוח משחקים — עם מנטורים ותעודת סיום.",
  },
  {
    icon: Sparkles,
    title: "ימי שיא והפנינגים",
    desc: "ימי טכנולוגיה בית-ספריים, האקתונים, ירידי מדע ואירועי חשיפה להייטק — אירוע שכל בית הספר חי.",
  },
  {
    icon: Tent,
    title: "קייטנות (HiTechKids)",
    desc: "קייטנות רובוטיקה, מפתחי העתיד, סייבר ויזמות — חופשה שמחברת ילדים לטכנולוגיה דרך חוויה.",
  },
];

// Real pricing ranges by category (base price, before discounts/surcharges).
export type PriceTier = {
  category: string;
  range: string;
  detail: string;
};

export const priceTiers: PriceTier[] = [
  { category: "הרצאות", range: "2,200–3,000 ₪", detail: "שעה–שעתיים, 20–200 משתתפים" },
  { category: "סדנאות AI / טכנולוגיה", range: "2,500–8,500 ₪", detail: "מפגש מעשי, 10–30 משתתפים" },
  { category: "קורסים וסמינרים", range: "6,800–12,000 ₪", detail: "תכנית רב-מפגשית עם ליווי" },
  { category: "ימי שיא והפנינגים", range: "6,500–15,000 ₪", detail: "אירוע בית-ספרי, 50–500 משתתפים" },
  { category: "פיתוח מקצועי למורים", range: "6,000–25,000 ₪", detail: "השתלמויות 30–60 שעות, מוכר לגמול" },
  { category: "קייטנות", range: "15,000–35,000 ₪", detail: "שבוע–שבועיים, כולל מדריכים והסעדה" },
];

// Real discount / surcharge mechanics (from the pricing policy in the catalog).
export const priceModifiers = {
  discounts: [
    "הזמנת סדרת פעילויות — 10% (3+) ועד 15% (5+)",
    "מוסדות בפריפריה — 5%–10%",
    "לקוחות חוזרים — 5%–10%",
    "קבוצות גדולות במיוחד — 5%–15%",
  ],
  surcharges: [
    "פעילות בימי שישי / חג — תוספת 25%",
    "שעות ערב (אחרי 18:00) — תוספת 15%",
    "ציוד מיוחד / יקר — לפי עלות הציוד",
    "התאמות תוכן מיוחדות — 10%–20%",
  ],
};

// Network "packages" — clearly marked illustrative (NOT in the real catalog).
export type NetworkPackage = {
  name: string;
  price: string;
  includes: string[];
  illustrative: true;
};

export const networkPackages: NetworkPackage[] = [
  {
    name: "חבילת רשת — בסיס",
    price: "מותאם לרשת",
    includes: [
      "סדרת סדנאות והרצאות לבתי הספר ברשת",
      "השתלמות צוות מורים מרכזית",
      "ליווי ותיאום מול רכז הרשת",
    ],
    illustrative: true,
  },
  {
    name: "חבילת רשת — מורחבת",
    price: "מותאם לרשת",
    includes: [
      "כל מה שבבסיס + ימי שיא בית-ספריים",
      "תכנית הכשרת מורים שנתית",
      "מנטורינג שוטף ודוח השפעה לרשת",
    ],
    illustrative: true,
  },
];

// How-it-works steps
export const steps = [
  { n: "1", title: "שיחת היכרות", desc: "מבינים את הצרכים של בית הספר או הרשת, את הגילאים ואת המטרות." },
  { n: "2", title: "התאמת תכנית", desc: "בוחרים יחד מהקטלוג — פעילויות, סדנאות או תכנית הכשרה — ומתאימים לתקציב." },
  { n: "3", title: "מעבירים בשטח", desc: "מגיעים, מלמדים ומספקים ערך אמיתי. כל משתתף יוצא עם תוצר ועם חוויה." },
  { n: "4", title: "ליווי והמשך", desc: "משוב, מדידת השפעה, והרחבה לתכנית רחבה יותר אם זה עובד." },
];

// For-whom audiences
export const audiences = [
  { title: "רשתות חינוך", desc: "החלטה אחת של מנכ\"ל רשת = עשרות בתי ספר. אנחנו בונים תכנית רוחבית לכל הרשת." },
  { title: "מנהלי בתי ספר", desc: "תכנית טכנולוגיה ו-AI שלמה לבית הספר — בלי להמתין למורה מומחה שלא נמצא." },
  { title: "רכזי תקשוב", desc: "ליווי, הכשרה וכלים שמאפשרים לכם להוביל חדשנות בלי לעשות הכול לבד." },
  { title: "רשויות ומתנ\"סים", desc: "קייטנות, חוגים ואירועי קהילה בטכנולוגיה — חוויה לכל הגילאים." },
];

// FAQ (for FAQPage schema + section)
export const faqs = [
  {
    q: "למי מיועד השירות של EduTech?",
    a: "לרשתות חינוך, בתי ספר, רכזי תקשוב, רשויות ומתנ\"סים. אנחנו עובדים גם מול בית ספר בודד וגם מול רשת שלמה — מהגן ועד י\"ב.",
  },
  {
    q: "מה ההבדל בין EduTech, MoreTech ו-HiTechKids?",
    a: "EduTech הוא מותג הגג. MoreTech הוא קו הכשרת המורים B2B, ו-HiTechKids הוא קו הסדנאות והקייטנות לילדים. כולם תחת אותה גג מקצועי.",
  },
  {
    q: "האם הפעילויות מותאמות לתכנית הלימודים הישראלית?",
    a: "כן. כל הפעילויות בעברית, מותאמות לשכבות הגיל ולמדיניות משרד החינוך. ההשתלמויות למורים מוכרות לגמול השתלמות.",
  },
  {
    q: "כמה זה עולה?",
    a: "המחיר תלוי בסוג הפעילות, מספר המשתתפים, המרחק והפורמט. הרצאות מתחילות מ-2,200 ₪, סדנאות מ-2,500 ₪. יש הנחות להזמנת סדרה, לפריפריה וללקוחות חוזרים. נשמח לבנות הצעה מותאמת בשיחה.",
  },
  {
    q: "אפשר להזמין פעילות בודדת או רק תכנית שלמה?",
    a: "אפשר להתחיל בפעילות בודדת — הרצאה, סדנה או יום שיא — ולהרחיב משם. הרבה בתי ספר מתחילים בקטן ובונים תכנית שנתית בהדרגה.",
  },
  {
    q: "מה מקבלים המורים בהכשרה?",
    a: "כלים מעשיים לשילוב AI וטכנולוגיה בכיתה, מערכי שיעור מוכנים, ליווי אישי וקהילתי, ותעודה. המטרה היא שהמורה יחזור לכיתה ויוכל ליישם כבר למחרת.",
  },
];
