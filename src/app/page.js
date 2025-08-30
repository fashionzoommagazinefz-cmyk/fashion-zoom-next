import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <HomeHero />

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">About Fashion Zoom</h2>
            <div className="h-1 w-20 bg-[#F81F2E] rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Since 2013, Fashion Zoom has been Kerala’s leading fashion magazine and modeling academy, nurturing talent and celebrating fashion across multiple cities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm" delay={0.05}>
              <h3 className="text-xl font-semibold mb-2">Professional Training</h3>
              <p className="text-gray-600">Comprehensive modeling courses for ages 3–60 with expert mentors.</p>
            </Reveal>
            <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm" delay={0.1}>
              <h3 className="text-xl font-semibold mb-2">Fashion Shows</h3>
              <p className="text-gray-600">Walk seasonal fashion shows across Kerala with categories for every age.</p>
            </Reveal>
            <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm" delay={0.15}>
              <h3 className="text-xl font-semibold mb-2">Magazine & Portfolio</h3>
              <p className="text-gray-600">Editorial features and portfolio shoots to kickstart your journey.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Shows preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Fashion Shows</h2>
            <div className="h-1 w-20 bg-[#F81F2E] rounded mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["/assets/fashion-show-1.jpg","/assets/fashion-show-2.jpg","/assets/fashion-show-3.jpg"].map((src) => (
              <Reveal key={src} className="rounded-lg overflow-hidden shadow-md">
                <Image src={src} alt="Fashion show" width={800} height={600} className="w-full h-auto" />
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/shows" className="inline-flex items-center underline underline-offset-4 text-[#F81F2E]">Explore shows →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
