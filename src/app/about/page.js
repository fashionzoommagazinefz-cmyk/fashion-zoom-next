import { Users, Camera, Award } from "lucide-react";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About — Fashion Zoom",
  description:
    "Learn about Fashion Zoom — Kerala’s premier fashion magazine and modeling academy shaping talent with professional training, editorial portfolios, and seasonal fashion shows since 2013.",
};

export default function AboutPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <PageTitle sectionKey="about" />
        </div>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-12 text-center">
          Since 2013, Fashion Zoom has been Kerala’s leading fashion magazine and modeling academy — nurturing talent with expert mentorship, editorial portfolio shoots, and seasonal fashion shows across multiple cities.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm transition-transform hover:-translate-y-1">
            <Users className="h-10 w-10 mx-auto text-[#F81F2E] mb-3" />
            <h3 className="text-xl font-semibold mb-1">Professional Training</h3>
            <p className="text-gray-600">Comprehensive courses for ages 3–60 led by industry mentors.</p>
          </Reveal>
          <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm transition-transform hover:-translate-y-1" delay={0.05}>
            <Camera className="h-10 w-10 mx-auto text-[#F81F2E] mb-3" />
            <h3 className="text-xl font-semibold mb-1">Editorial Portfolio</h3>
            <p className="text-gray-600">Photoshoots and reels to help you start pitching to brands.</p>
          </Reveal>
          <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm transition-transform hover:-translate-y-1" delay={0.1}>
            <Award className="h-10 w-10 mx-auto text-[#F81F2E] mb-3" />
            <h3 className="text-xl font-semibold mb-1">Real Shows</h3>
            <p className="text-gray-600">Walk seasonal fashion shows across Kerala with multiple categories.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
