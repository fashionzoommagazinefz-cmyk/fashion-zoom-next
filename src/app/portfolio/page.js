import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Portfolio — Fashion Zoom",
  description:
    "Editorial portfolio highlights from Fashion Zoom — lookbooks, editorials, and alumni showcases shot across Kerala.",
};

export default function PortfolioPage() {
  const images = [
    "/assets/fashion-show-1.jpg",
    "/assets/fashion-show-2.jpg",
    "/assets/fashion-show-3.jpg",
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle sectionKey="gallery" />
        <p className="text-lg text-gray-700 mb-8">Editorial shoots, lookbooks, and alumni highlights.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <Reveal key={src} className="rounded-lg overflow-hidden border shadow-sm">
              <Image src={src} alt={`Fashion Zoom editorial portfolio ${i + 1}`} width={1000} height={750} className="w-full h-auto" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
