"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/app/providers";

export default function SiteHeader() {
  const { L, lang, setLang } = useLocale();
  const nav = [
    { href: "/", label: L.nav.home },
    { href: "/about", label: L.nav.about },
    { href: "/why", label: L.nav.why },
    { href: "/shows", label: L.nav.shows },
    { href: "/academy", label: L.nav.courses || L.nav.academy || "Academy" },
    { href: "/portfolio", label: L.nav.portfolio },
    { href: "/magazine", label: L.nav.magazine },
    { href: "/admissions", label: L.nav.admissions },
    { href: "/faq", label: L.nav.faq },
    { href: "/contact", label: L.nav.contact },
  ];
  return (
    <header role="banner" className="bg-black text-white sticky top-0 z-50 border-t-2 border-[#F81F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Go to homepage" className="flex items-center gap-3">
          <Image src="/assets/logo-white.png" alt="Fashion Zoom logo" width={120} height={48} />
        </Link>
        <nav className="hidden md:flex items-center gap-5" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F81F2E] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              {item.label}
            </Link>
          ))}
        </nav>
        <button onClick={() => setLang(lang === "en" ? "ml" : "en")} className="px-2 py-1 rounded-md bg-white text-black hover:bg-gray-100 border text-xs" aria-label="Toggle language">
          {lang === "en" ? "മലയാളം" : "English"}
        </button>
      </div>
    </header>
  );
}
