import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Fashion Shows — Fashion Zoom",
  description:
    "Explore Fashion Zoom’s seasonal fashion shows across Kerala with categories for Teen, Miss, Traditional, and Kids — plus winners and highlights.",
};

export default function ShowsPage() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle sectionKey="shows" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Season 8 — Current</h3>
            <p className="text-gray-600 mb-6">Traditional and contemporary fashion with categories for all ages: Teen, Miss, Traditional, and Kids.</p>
            <div className="space-y-2 text-sm text-gray-700">
              <div><span className="inline-block bg-[#F81F2E] text-white rounded px-2 py-0.5 mr-2">Winner</span> Cover Girl: Aditri Gouri</div>
              <div><span className="inline-block bg-[#F81F2E] text-white rounded px-2 py-0.5 mr-2">Location</span> Thrissur, Kerala</div>
              <div><span className="inline-block bg-[#F81F2E] text-white rounded px-2 py-0.5 mr-2">Categories</span> Teen • Miss • Traditional • Kids</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Reveal>
              <Image src="/assets/fashion-show-1.jpg" alt="Fashion Show 1" width={800} height={600} className="rounded-lg shadow-lg w-full h-auto" />
            </Reveal>
            <Reveal delay={0.05}>
              <Image src="/assets/fashion-show-2.jpg" alt="Fashion Show 2" width={800} height={600} className="rounded-lg shadow-lg w-full h-auto" />
            </Reveal>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Season history</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <Reveal className="rounded-lg border p-4">
            <div className="font-medium">Season 8 (2024–2025)</div>
            <ul className="list-disc pl-5 mt-2">
              <li>Winner: Cover Girl — Aditri Gouri</li>
              <li>Categories: Teen • Miss • Traditional • Kids</li>
              <li>Locations: Thrissur and across Kerala</li>
            </ul>
          </Reveal>
          <Reveal className="rounded-lg border p-4" delay={0.05}>
            <div className="font-medium">Season 7 (2023–2024)</div>
            <ul className="list-disc pl-5 mt-2">
              <li>Multiple category winners</li>
              <li>Traditional Fashion Fest highlights</li>
              <li>State‑wide participation</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
