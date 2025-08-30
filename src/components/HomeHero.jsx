"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/app/providers";

export default function HomeHero() {
  const { L } = useLocale();
  return (
    <section className="relative isolate overflow-hidden text-white">
      <Image
        src="/assets/fashion-show-2.jpg"
        alt="Fashion Zoom runway at Kerala event"
        fill
        priority
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-black/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#F81F2E]/25 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 text-center">
        <div className="inline-flex items-center gap-2 mb-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F81F2E]" /> Since 2013 • Kerala
        </div>
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          dangerouslySetInnerHTML={{ __html: L.hero.title }}
        />
        <p
          className="text-xl md:text-2xl mb-8 text-gray-200"
          dangerouslySetInnerHTML={{ __html: L.hero.subtitle }}
        />
        <p className="text-lg mb-10 max-w-3xl mx-auto text-gray-200">
          Build confidence, stage presence, and a professional portfolio with guided training and real opportunities — from runway shows to editorial features across Kerala.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/admissions"
            className="h-12 px-8 inline-flex items-center justify-center rounded-md bg-[#F81F2E] hover:bg-[#d11322] text-white font-semibold shadow-md transition-transform duration-200 hover:scale-[1.02]"
          >
            {L.hero.ctaPrimary}
          </Link>
          <Link
            href="/shows"
            className="h-12 px-8 inline-flex items-center justify-center rounded-md border border-white/30 text-white hover:bg-white hover:text-black transition-colors transition-transform duration-200 hover:scale-[1.02]"
          >
            {L.hero.ctaSecondary}
          </Link>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="animate-bounce text-xs text-gray-300">Scroll</div>
        </div>
      </div>
    </section>
  );
}
