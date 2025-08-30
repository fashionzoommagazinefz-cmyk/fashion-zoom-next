import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Magazine — Fashion Zoom" };

export default function MagazinePage() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle sectionKey="magazine" />
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">Editorials</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Kerala Couture — Monsoon Edit</li>
              <li>Traditional Elegance — Onam Special</li>
              <li>Street to Studio — Calicut</li>
            </ul>
          </Reveal>
          <Reveal className="rounded-lg border p-5" delay={0.05}>
            <h3 className="font-semibold mb-2">Covers</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Season 8 — Cover Girl Aditri</li>
              <li>Teens Edition — Kochi</li>
              <li>Festival Issue — Thrissur</li>
            </ul>
          </Reveal>
          <Reveal className="rounded-lg border p-5" delay={0.1}>
            <h3 className="font-semibold mb-2">Press</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Local Daily: Fashion Zoom Season 8</li>
              <li>Channel Feature: Modeling Careers</li>
              <li>Photo Expo: Alumni Showcase</li>
            </ul>
          </Reveal>
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-600">For press and editorial submissions, contact us via the Contact page.</p>
        </div>
      </div>
    </section>
  );
}
