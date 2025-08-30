import { Users, Camera, Award, MapPin } from "lucide-react";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Why Fashion Zoom",
  description:
    "Why choose Fashion Zoom: industry mentors, editorial portfolio shoots, real fashion shows, and a state‑wide network across Kerala.",
};

export default function WhyPage() {
  const items = [
    { icon: Users, title: "Industry Mentors", text: "Hands‑on runway, posing, grooming and camera presence with experienced coaches." },
    { icon: Camera, title: "Portfolio Shoots", text: "Editorial‑style photos and reels to start pitching to brands and agencies." },
    { icon: Award, title: "Real Shows", text: "Walk seasonal fashion shows across Kerala with categories for every age." },
    { icon: MapPin, title: "State‑wide Network", text: "Multiple city chapters, alumni network, and brand partners to open doors." },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <PageTitle sectionKey="why" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">A complete ecosystem to get show‑ready — guided by mentors, supported by state‑wide events, and backed by a strong alumni network.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} className="text-center rounded-lg border p-6 bg-white shadow-sm transition-transform hover:-translate-y-1" delay={i * 0.05}>
              <Icon className="h-10 w-10 mx-auto text-[#F81F2E] mb-3" />
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
