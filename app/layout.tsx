import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { SITE } from "./lib/utils";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "EduTech | טכנולוגיה ו-AI לבתי ספר ולרשתות חינוך",
    template: "%s | EduTech",
  },
  description: SITE.description,
  keywords: [
    "הכשרת מורים",
    "AI בחינוך",
    "סדנאות טכנולוגיה לבתי ספר",
    "רובוטיקה לילדים",
    "קייטנות הייטק",
    "רשתות חינוך",
    "MoreTech",
    "HiTechKids",
    "EduTech",
  ],
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE.url,
    siteName: SITE.name,
    title: "EduTech | טכנולוגיה ו-AI לבתי ספר ולרשתות חינוך",
    description: SITE.description,
    images: [{ url: "/img/hero.jpg", width: 1024, height: 576, alt: "כיתה ישראלית לומדת טכנולוגיה ובינה מלאכותית עם EduTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduTech | טכנולוגיה ו-AI לבתי ספר",
    description: SITE.description,
    images: ["/img/hero.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logos/edutech.png" },
};

export const viewport: Viewport = {
  themeColor: "#1b4d8e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <head>
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
