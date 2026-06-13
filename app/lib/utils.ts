import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "EduTech",
  tagline: "טכנולוגיה ו-AI לבתי ספר — מהרצאה בודדת ועד תכנית רשת שלמה",
  description:
    "EduTech מספקת לבתי ספר ולרשתות חינוך הכשרת מורים, סדנאות AI, קורסים, קייטנות וימי שיא בטכנולוגיה — פתרון B2B מלא בעברית.",
  url: "https://edutech-inky.vercel.app",
  email: "info@edutech.co.il",
  phone: "",
};
