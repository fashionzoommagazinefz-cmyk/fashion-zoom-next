import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";

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
              Since 2013, Fashion Zoom has been Kerala’s leading fashion magazine and modeling academy. We help aspiring and experienced talents grow with professional training, editorial portfolios, and real runway opportunities across multiple cities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm" delay={0.05}>
              <h3 className="text-xl font-semibold mb-2">Professional Training</h3>
              <p className="text-gray-600">Structured courses for ages 3–60 led by industry mentors — runway, grooming, camera presence, and more.</p>
            </Reveal>
            <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm" delay={0.1}>
              <h3 className="text-xl font-semibold mb-2">Fashion Shows</h3>
              <p className="text-gray-600">Seasonal shows across Kerala — Teen, Miss, Traditional, and Kids categories with stage experience.</p>
            </Reveal>
            <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm" delay={0.15}>
              <h3 className="text-xl font-semibold mb-2">Magazine & Portfolio</h3>
              <p className="text-gray-600">Editorial features and portfolio shoots to build your profile and start pitching to brands.</p>
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
            {["/assets/fashion-show-1.jpg","/assets/fashion-show-2.jpg","/assets/fashion-show-3.jpg"].map((src, i) => (
              <Reveal key={src} className="rounded-lg overflow-hidden shadow-md">
                <Image src={src} alt={`Fashion Zoom runway highlight ${i+1} in Kerala`} width={800} height={600} className="w-full h-auto" />
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/shows" className="inline-flex items-center underline underline-offset-4 text-[#F81F2E]">Explore shows →</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{n:'2013', l:'Founded'}, {n:'8+', l:'Seasons'}, {n:'5+', l:'Cities'}, {n:'1500+', l:'Alumni & Trainees'}].map((s) => (
            <div key={s.n} className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold font-[var(--font-display)]">{s.n}</div>
              <div className="text-sm text-gray-600 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      {/* CTA band */}
      <section className="py-10 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Ready to start your journey?</h3>
            <p className="text-gray-300">Request a callback — we’ll share batch dates, fees, and next steps.</p>
          </div>
          <Link href="/admissions" className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-[#F81F2E] hover:bg-[#d11322] text-white font-semibold">
            Apply for Admissions
          </Link>
        </div>
      </section>
    </div>
  );
}
