"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/app/providers";

export default function SiteFooter() {
  const { lang, setLang } = useLocale();
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Link href="/" aria-label="Go to homepage">
            <Image src="/assets/logo-white.png" alt="Fashion Zoom logo" width={120} height={48} />
          </Link>
        </div>
        <p className="text-gray-400 mb-2">Kerala’s Premier Fashion Magazine & Modeling Academy Since 2013</p>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Fashion Zoom Magazine. All rights reserved.</p>
        <div className="mt-3 text-xs text-gray-500 flex items-center justify-center gap-4">
          <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link>
          <button onClick={() => setLang(lang === 'en' ? 'ml' : 'en')} className="px-2 py-1 rounded-md bg-white text-black hover:bg-gray-100 border" aria-label="Toggle language">
            {lang === 'en' ? 'മലയാളം' : 'English'}
          </button>
        </div>
      </div>
    </footer>
  );
}
