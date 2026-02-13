import { GraduationCap } from "lucide-react";

const links = [
  { label: "הבעיה", href: "#problem" },
  { label: "הפתרון", href: "#solution" },
  { label: "תמחור", href: "#pricing" },
  { label: "צור קשר", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-white">מורה טק</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-blue-200 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-blue-300/60">
          &copy; {new Date().getFullYear()} מורה טק. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
