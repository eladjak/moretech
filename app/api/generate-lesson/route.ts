import { streamText, createTextStreamResponse } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { google } from "@ai-sdk/google";
import { buildLessonPlan, type LessonInput } from "@/lib/lessonTemplate";

export const maxDuration = 60;
export const runtime = "nodejs";

const SYSTEM_PROMPT = `אתה מומחה פדגוגי ישראלי ליצירת מערכי שיעור. אתה כותב בעברית טבעית ומקצועית, מותאם לתכנית הלימודים הישראלית ולשכבת הגיל.

כללים:
- כתוב תמיד בעברית, בפורמט Markdown מסודר עם כותרות.
- כלול: מטרות (ידע/מיומנות/ערך), ידע קודם, חומרים, מהלך שיעור (פתיחה/גוף/סיכום עם זמנים), דיפרנציאציה (מתקשים/מתקדמים/חינוך מיוחד), הערכה מעצבת, הרחבה, והערות למורה.
- היה ספציפי ויישומי — פעילויות קונקרטיות, לא כלליות.`;

function streamText_fromString(text: string): Response {
  // Wrap the deterministic template as a text stream so the client UI is identical.
  const stream = new ReadableStream<string>({
    start(controller) {
      const words = text.split(/(\s+)/);
      let i = 0;
      const push = () => {
        if (i >= words.length) {
          controller.close();
          return;
        }
        controller.enqueue(words[i]);
        i += 1;
        setTimeout(push, 4);
      };
      push();
    },
  });
  return createTextStreamResponse({ textStream: stream });
}

export async function POST(req: Request) {
  let body: LessonInput;
  try {
    body = (await req.json()) as LessonInput;
  } catch {
    return new Response("בקשה לא תקינה", { status: 400 });
  }

  const { subject, gradeLevel, topic } = body;
  if (!subject || !gradeLevel || !topic) {
    return new Response("חסרים שדות חובה: מקצוע, שכבת גיל ונושא", { status: 400 });
  }

  const hasAnthropic = !!process.env.ANTHROPIC_API_KEY;
  const hasGoogle = !!(process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY);

  // Tier 0 — deterministic template, always available, no key required.
  if (!hasAnthropic && !hasGoogle) {
    return streamText_fromString(buildLessonPlan(body));
  }

  // Tier 1 — real AI streaming.
  try {
    if (hasGoogle && !process.env.GOOGLE_GENERATIVE_AI_API_KEY && process.env.GEMINI_API_KEY) {
      process.env.GOOGLE_GENERATIVE_AI_API_KEY = process.env.GEMINI_API_KEY;
    }
    const model = hasAnthropic
      ? anthropic("claude-sonnet-4-20250514")
      : google("gemini-2.0-flash");

    const userPrompt = `צור מערך שיעור מפורט:
- מקצוע: ${subject}
- שכבת גיל: ${gradeLevel}
- נושא: ${topic}
- משך השיעור: ${body.duration || "45 דקות"}
${body.notes ? `- הערות נוספות: ${body.notes}` : ""}

צור מערך שיעור מלא ומפורט בעברית לפי המבנה הפדגוגי.`;

    const result = streamText({ model, system: SYSTEM_PROMPT, prompt: userPrompt });
    return createTextStreamResponse({ textStream: result.textStream });
  } catch {
    // Any failure → graceful fallback to Tier 0.
    return streamText_fromString(buildLessonPlan(body));
  }
}
