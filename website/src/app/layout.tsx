import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "מורה טק | הופכים מורים למורי טכנולוגיה",
  description:
    "פתרון B2B מלא לרשתות חינוך - הכשרת מורים לטכנולוגיה, תכניות לימודים, ליווי מקצועי ודאשבורד ניהולי. הפתרון למשבר המורים הטכנולוגיים בישראל.",
  keywords: [
    "הכשרת מורים",
    "טכנולוגיה בחינוך",
    "EdTech",
    "רשתות חינוך",
    "AI בחינוך",
    "מורה טק",
  ],
  openGraph: {
    title: "מורה טק | הופכים מורים למורי טכנולוגיה",
    description:
      "פתרון B2B מלא לרשתות חינוך - הכשרה, תכניות לימודים, ליווי ודאשבורד",
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
