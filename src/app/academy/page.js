import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Modeling Academy — Fashion Zoom",
  description:
    "Professional modeling courses in Kerala covering runway, grooming, camera presence, portfolio shoots, and industry readiness — with direct entry, no auditions required.",
};

export default function AcademyPage() {
  const modules = [
    { title: "Runway Basics", text: "Posture, balance, turns, and walk variations." },
    { title: "Grooming", text: "Skin, hair, and styling for editorial & runway." },
    { title: "Camera Presence", text: "Posing for photo, framing, angles, movement." },
    { title: "Confidence & Voice", text: "Presence, poise, and on‑stage communication." },
    { title: "Industry Readiness", text: "Etiquette, casting, brand communication." },
    { title: "Portfolio & Reels", text: "Editorial shoots and short reels to pitch." },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle sectionKey="academy" />
        <p className="text-lg text-gray-700 mb-8">Professional training with direct entry — no auditions required.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {modules.map((m, i) => (
            <Reveal key={m.title} className="rounded-lg border p-5 bg-white shadow-sm" delay={i * 0.05}>
              <h3 className="font-semibold mb-2">{m.title}</h3>
              <p className="text-gray-600 text-sm">{m.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="text-center">
          <Link href="/admissions" className="inline-flex h-11 px-6 rounded-md bg-[#F81F2E] text-white hover:bg-[#d11322]">Apply for Admissions</Link>
        </div>
      </div>
    </section>
  );
}
