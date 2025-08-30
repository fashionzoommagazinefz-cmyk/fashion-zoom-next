"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/app/providers";

export default function SiteHeader() {
  const pathname = usePathname();
  const { L, lang, setLang } = useLocale();
  const [open, setOpen] = useState(false);
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
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));
  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F81F2E] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  return (
    <header role="banner" className="sticky top-0 z-50 border-t-2 border-[#F81F2E]">
      <div className="backdrop-blur-md bg-black/60 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Go to homepage" className="flex items-center gap-3">
            <Image src="/assets/logo-white.png" alt="Fashion Zoom logo" width={120} height={48} />
          </Link>
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${linkBase} ${isActive(item.href) ? "bg-white/10" : "hover:bg-white/10"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "ml" : "en")}
              className="px-2 py-1 rounded-md bg-white text-black hover:bg-gray-100 border text-xs"
              aria-label="Toggle language"
            >
              {lang === "en" ? "മലയാളം" : "English"}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/20 hover:bg-white/10"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/90 text-white backdrop-blur-md border-b border-white/10">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 grid gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`${linkBase} block ${isActive(item.href) ? "bg-white/10" : "hover:bg-white/10"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
