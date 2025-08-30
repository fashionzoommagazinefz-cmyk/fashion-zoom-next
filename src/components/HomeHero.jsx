"use client";

import Link from "next/link";
import { useLocale } from "@/app/providers";

export default function HomeHero() {
  const { L } = useLocale();
  return (
    <section className="relative bg-gradient-to-r from-black to-gray-800 text-white">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F81F2E]/25 via-transparent to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: L.hero.title }} />
        <p className="text-xl md:text-2xl mb-8 text-gray-300" dangerouslySetInnerHTML={{ __html: L.hero.subtitle }} />
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Discover your fashion potential with professional modeling training, seasonal fashion shows, and magazine features across Kerala.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/admissions" className="h-12 px-8 inline-flex items-center justify-center rounded-md bg-[#F81F2E] hover:bg-[#d11322] text-white font-semibold shadow-md transition-transform duration-200 hover:scale-[1.02]">
            {L.hero.ctaPrimary}
          </Link>
          <Link href="/shows" className="h-12 px-8 inline-flex items-center justify-center rounded-md border border-[#F81F2E] text-[#F81F2E] hover:bg-[#F81F2E] hover:text-white transition-colors transition-transform duration-200 hover:scale-[1.02]">
            {L.hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
