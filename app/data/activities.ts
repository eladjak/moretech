// Activities catalog — original, age-banded tech + AI programs for schools.
// Grounded in EduTech's real experience catalog (business-docs pricing matrix);
// expanded with original programs for full thematic coverage.
// Voice: warm, practical, educator (Elad). No AI-tells.

export type Theme = "ai" | "coding" | "robotics" | "creative" | "ethics" | "entrepreneurship";
export type Audience = "students" | "teachers" | "whole-school" | "parents";
export type AgeBand = "k-4" | "5-8" | "7-12";
export type Format = "session" | "program" | "event";

export type Activity = {
  id: string;
  name: string;
  theme: Theme;
  audience: Audience[];
  ageBand: AgeBand[];
  format: Format;
  duration: string;
  outcomes: string[];
  special: string;
  /** real = base price from EduTech catalog (mark "להמחשה"); none = quote-only */
  priceFrom?: number;
};

export const themeMeta: Record<Theme, { label: string; img: string }> = {
  ai: { label: "בינה מלאכותית", img: "/img/theme-ai.jpg" },
  coding: { label: "תכנות", img: "/img/theme-coding.jpg" },
  robotics: { label: "רובוטיקה", img: "/img/theme-robotics.jpg" },
  creative: { label: "יצירה דיגיטלית", img: "/img/theme-creative.jpg" },
  ethics: { label: "אתיקה ואזרחות דיגיטלית", img: "/img/theme-ethics.jpg" },
  entrepreneurship: { label: "יזמות וחדשנות", img: "/img/theme-entrepreneurship.jpg" },
};

export const audienceMeta: Record<Audience, string> = {
  students: "תלמידים",
  teachers: "מורים וצוות",
  "whole-school": "כלל בית-ספרי",
  parents: "ערב הורים",
};

export const ageMeta: Record<AgeBand, string> = {
  "k-4": "גן–ד׳",
  "5-8": "ה׳–ח׳",
  "7-12": "ז׳–י״ב",
};

export const formatMeta: Record<Format, string> = {
  session: "מפגש בודד",
  program: "תכנית רב-שבועית",
  event: "אירוע / יום שיא",
};

export const activities: Activity[] = [
  // ── AI ─────────────────────────────────────────────
  {
    id: "ai-literacy",
    name: "מה זה בכלל AI? אוריינות בינה מלאכותית",
    theme: "ai",
    audience: ["students"],
    ageBand: ["5-8", "7-12"],
    format: "session",
    duration: "שעה וחצי",
    outcomes: [
      "מבינים איך מודל לומד, מנחש וטועה — בלי מושגים מפחידים",
      "מזהים היכן AI כבר נמצא בחיים שלהם",
      "יודעים מתי לסמוך על תשובה של מכונה ומתי לעצור ולשאול",
    ],
    special: "מתחילים מהיומיום של התלמידים, לא מהאלגוריתם. בלי קוד, רק הבנה אמיתית.",
    priceFrom: 2500,
  },
  {
    id: "prompt-kids",
    name: "אמני הפרומפט — לדבר עם AI בצורה חכמה",
    theme: "ai",
    audience: ["students"],
    ageBand: ["5-8", "7-12"],
    format: "session",
    duration: "שעתיים",
    outcomes: [
      "כותבים הנחיות ברורות שמביאות תוצאה טובה",
      "לומדים לתקן ולשפר במקום להתייאש מתשובה ראשונה",
      "מבינים שהאיכות של מה שיוצא תלויה במה שמכניסים",
    ],
    special: "Prompt engineering מתורגם לשפה של ילדים — תרגול חי על משימות אמיתיות.",
    priceFrom: 3200,
  },
  {
    id: "build-chatbot",
    name: "יום בניית צ׳אטבוט — מרעיון לבוט שמדבר",
    theme: "ai",
    audience: ["students"],
    ageBand: ["7-12"],
    format: "session",
    duration: "4 שעות",
    outcomes: [
      "מאפיינים ובונים צ׳אטבוט חכם למטרה אמיתית",
      "מעצבים לבוט אופי, בסיס ידע וגבולות",
      "מסיימים עם בוט עובד שאפשר להמשיך לפתח",
    ],
    special: "כל תלמיד יוצא עם מוצר שלם משלו — לא תרגיל, פרויקט אמיתי.",
    priceFrom: 4500,
  },
  {
    id: "no-code-ml",
    name: "מאמנים מכונה — ML בלי שורת קוד אחת",
    theme: "ai",
    audience: ["students"],
    ageBand: ["5-8", "7-12"],
    format: "session",
    duration: "שעתיים וחצי",
    outcomes: [
      "מאמנים מודל זיהוי תמונות או קול בכלים ויזואליים",
      "רואים מקרוב מה זה דאטה, אימון, ולמה מודל מתבלבל",
      "חווים את כל מעגל ה-ML מבלי מחסום טכני",
    ],
    special: "למידת מכונה הופכת למוחשית — מאמנים, בודקים ומשפרים בזמן אמת.",
    priceFrom: 3600,
  },
  // ── Coding ─────────────────────────────────────────
  {
    id: "first-code",
    name: "צעד ראשון בקוד — תכנות ויזואלי לקטנטנים",
    theme: "coding",
    audience: ["students"],
    ageBand: ["k-4"],
    format: "session",
    duration: "שעתיים",
    outcomes: [
      "מכירים לולאות, תנאים ומשתנים דרך משחק",
      "בונים אנימציה או משחק קטן ב-Scratch",
      "מפתחים חשיבה אלגוריתמית בלי תסכול",
    ],
    special: "כל ילד עובד בקצב שלו עם ליווי צמוד, ולוקח הביתה את מה שיצר.",
    priceFrom: 2600,
  },
  {
    id: "computational-unplugged",
    name: "חשיבה חישובית בלי מחשב (Unplugged)",
    theme: "coding",
    audience: ["students", "teachers"],
    ageBand: ["k-4", "5-8"],
    format: "session",
    duration: "שעה וחצי",
    outcomes: [
      "מפרקים בעיה לצעדים — הבסיס של כל תכנות",
      "מתרגלים אלגוריתמים דרך תנועה, קלפים ומשחקי גוף",
      "בונים שפה משותפת להמשך לימודי המחשב",
    ],
    special: "מושלם לבית ספר בלי מעבדת מחשבים — לומדים לחשוב כמו מתכנת בלי מסך.",
    priceFrom: 2500,
  },
  {
    id: "app-course",
    name: "מפתחים אפליקציה — קורס ליווי מלא",
    theme: "coding",
    audience: ["students"],
    ageBand: ["7-12"],
    format: "program",
    duration: "10 מפגשים × שעתיים",
    outcomes: [
      "עוברים את כל המסע: אפיון, עיצוב, פיתוח ופרסום",
      "בונים אפליקציה אישית שנכנסת לתיק העבודות",
      "מקבלים תעודת סיום ומנטור צמוד לאורך הדרך",
    ],
    special: "לא הרצאה חד-פעמית — קורס שמשאיר אחריו מוצר, ביטחון ויכולת אמיתית.",
    priceFrom: 9500,
  },
  // ── Robotics ───────────────────────────────────────
  {
    id: "robotics-young",
    name: "רובוטים ראשונים — רובוטיקה לגיל הרך",
    theme: "robotics",
    audience: ["students"],
    ageBand: ["k-4"],
    format: "session",
    duration: "שעתיים",
    outcomes: [
      "בונים ומפעילים רובוט פשוט בערכות ידידותיות",
      "מבינים תנועה, חיישנים ופקודות דרך משחק",
      "מתרגלים שיתוף פעולה ופתרון בעיות בצוות",
    ],
    special: "מפגש ראשון עם רובוטיקה שנשאר בזיכרון — בונים, מתכנתים ומפעילים.",
    priceFrom: 2800,
  },
  {
    id: "iot-ai",
    name: "בית חכם — פרויקט IoT עם בינה מלאכותית",
    theme: "robotics",
    audience: ["students"],
    ageBand: ["7-12"],
    format: "session",
    duration: "5 שעות",
    outcomes: [
      "מחברים חיישנים ומעבד זעיר לפרויקט חכם",
      "משלבים AI לעיבוד הנתונים והחלטות",
      "בונים אב-טיפוס עובד — מתחנת מזג אוויר ועד בית חכם זעיר",
    ],
    special: "מחברים עולם פיזי וקוד — התלמידים רואים את הטכנולוגיה קמה לחיים.",
    priceFrom: 5500,
  },
  // ── Creative ───────────────────────────────────────
  {
    id: "creative-ai",
    name: "יוצרים עם AI — תמונה, מוזיקה וסיפור",
    theme: "creative",
    audience: ["students"],
    ageBand: ["5-8", "7-12"],
    format: "session",
    duration: "שעתיים וחצי",
    outcomes: [
      "יוצרים תמונות, מוזיקה וטקסט עם כלי AI מובילים",
      "לומדים שהנחיה טובה היא חצי מהיצירה",
      "דנים בהשפעת ה-AI על עולם האמנות והיצירה",
    ],
    special: "כל משתתף יוצא עם אוסף יצירות אישי — סיפור מאויר, פוסטר או קליפ קצר.",
    priceFrom: 3200,
  },
  {
    id: "game-design",
    name: "מעצבים משחק — מרעיון למשחק שמשחקים בו",
    theme: "creative",
    audience: ["students"],
    ageBand: ["5-8", "7-12"],
    format: "program",
    duration: "12 מפגשים × שעתיים",
    outcomes: [
      "לומדים עיצוב משחק: מכניקה, שלבים ודמויות",
      "מפתחים משחק מלא בסביבה ידידותית",
      "מציגים את היצירה ומקבלים קישור להמשך פיתוח בבית",
    ],
    special: "משלב יצירתיות, קוד וחשיבה — מלווה במפתחי משחקים אמיתיים.",
    priceFrom: 11000,
  },
  // ── Ethics & digital citizenship ──────────────────
  {
    id: "ai-ethics",
    name: "AI, אמת ושיקול דעת — חשיבה ביקורתית בעידן הבינה",
    theme: "ethics",
    audience: ["students"],
    ageBand: ["5-8", "7-12"],
    format: "session",
    duration: "שעה וחצי",
    outcomes: [
      "מזהים הטיות, הזיות ומידע שגוי של מודלים",
      "לומדים לאמת מקורות במקום לסמוך על תשובה ראשונה",
      "מגבשים עמדה אישית על שימוש הוגן ב-AI",
    ],
    special: "הכישור הכי חשוב לעידן ה-AI — לא להפעיל, אלא לדעת מתי לא להאמין.",
    priceFrom: 2500,
  },
  {
    id: "digital-citizenship",
    name: "אזרחות דיגיטלית ובטיחות ברשת",
    theme: "ethics",
    audience: ["students", "parents"],
    ageBand: ["5-8", "7-12"],
    format: "session",
    duration: "שעה וחצי",
    outcomes: [
      "מזהים מצבי סיכון, פישינג ובריונות ברשת",
      "מקבלים כלים מעשיים לפרטיות וגלישה בטוחה",
      "בונים שפה משותפת בין תלמידים, מורים והורים",
    ],
    special: "מבוסס סיפורי מקרה אמיתיים, מותאם לגיל — ופתוח גם להורים בערב משותף.",
    priceFrom: 2200,
  },
  // ── Entrepreneurship ──────────────────────────────
  {
    id: "tech-entrepreneurship",
    name: "מרעיון למיזם — יזמות טכנולוגית לנוער",
    theme: "entrepreneurship",
    audience: ["students"],
    ageBand: ["7-12"],
    format: "program",
    duration: "תכנית שבועית / 5 ימים",
    outcomes: [
      "עוברים את כל המסע היזמי — מזיהוי בעיה לפתרון",
      "בונים אב-טיפוס ומכינים מצגת משקיעים",
      "מציגים ב-Demo Day מול פאנל אנשי הייטק",
    ],
    special: "משלב טכנולוגיה, חשיבה עסקית וביטחון עצמי — עם מנטורים מהשטח.",
    priceFrom: 19000,
  },
  {
    id: "career-exposure",
    name: "AI בעולם האמיתי — חשיפה למקצועות העתיד",
    theme: "entrepreneurship",
    audience: ["students", "parents"],
    ageBand: ["7-12"],
    format: "event",
    duration: "4–5 שעות",
    outcomes: [
      "מכירים מסלולי קריירה אמיתיים בהייטק ובטכנולוגיה",
      "פוגשים אנשי מקצוע ושומעים סיפורי דרך",
      "מבינים אילו מיומנויות באמת נדרשות — טכניות ורכות",
    ],
    special: 'מתחם "Speed Mentoring" ופאנל מקצועי — חשיפה שמשנה תפיסה על העתיד.',
    priceFrom: 9000,
  },
  // ── Whole-school events ───────────────────────────
  {
    id: "tech-day",
    name: "יום טכנולוגיה בית-ספרי",
    theme: "robotics",
    audience: ["whole-school"],
    ageBand: ["k-4", "5-8"],
    format: "event",
    duration: "4–6 שעות",
    outcomes: [
      "כל בית הספר חווה תחנות אינטראקטיביות מותאמות גיל",
      "רובוטיקה, תכנות, יצירה דיגיטלית ומציאות רבודה ביום אחד",
      "אפשר להתאים את התחנות לנושא שנתי או לתכנית הלימודים",
    ],
    special: "יום שיא שמכניס את כל בית הספר לעולם הטכנולוגיה — בלי מורה אחד שנשאר מאחור.",
    priceFrom: 7500,
  },
  {
    id: "youth-hackathon",
    name: "האקתון נוער — פותרים אתגר אמיתי ביום אחד",
    theme: "entrepreneurship",
    audience: ["whole-school", "students"],
    ageBand: ["7-12"],
    format: "event",
    duration: "8–10 שעות",
    outcomes: [
      "צוותים מפתחים פתרון טכנולוגי לאתגר חברתי",
      "סדנאות בזק בתכנות, עיצוב ופרזנטציה לאורך היום",
      "הצגה מול פאנל שופטים — עם פרסים לצוותים מצטיינים",
    ],
    special: "אנרגיה, עבודת צוות ולחץ זמן בריא — היום שתלמידים זוכרים שנים אחרי.",
    priceFrom: 12000,
  },
  // ── Teacher co-learning ───────────────────────────
  {
    id: "teacher-student-colearn",
    name: "לומדים יחד — מורה ותלמיד בצוות AI אחד",
    theme: "ai",
    audience: ["teachers", "students"],
    ageBand: ["5-8", "7-12"],
    format: "session",
    duration: "3 שעות",
    outcomes: [
      "מורים ותלמידים חוקרים כלי AI יחד, כשווים",
      "המורה לומד להנחות שימוש אחראי בכיתה",
      "נוצרת דינמיקה חדשה של למידה הדדית",
    ],
    special: "שובר את ההיררכיה הרגילה — המורה לא חייב לדעת הכול, רק להוביל את החקירה.",
    priceFrom: 4200,
  },
];

// Quick lookups for filters
export const allThemes = Object.keys(themeMeta) as Theme[];
export const allAges = Object.keys(ageMeta) as AgeBand[];
export const allFormats = Object.keys(formatMeta) as Format[];
