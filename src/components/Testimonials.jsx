import Reveal from "@/components/Reveal";

export default function Testimonials() {
  const items = [
    {
      quote:
        "The academy gave me the confidence to walk major runways and build a portfolio that brands notice.",
      name: "Ananya, Kochi",
    },
    {
      quote:
        "Mentors were hands‑on and professional. The reels and editorials helped me start pitching immediately.",
      name: "Rahul, Calicut",
    },
    {
      quote:
        "Real shows, real exposure. I loved the community and the state‑wide opportunities.",
      name: "Nisha, Trivandrum",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">What Our Alumni Say</h2>
          <div className="h-1 w-20 bg-[#F81F2E] rounded mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05} className="rounded-xl border bg-white p-6 shadow-sm">
              <p className="text-gray-800 italic leading-relaxed">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium text-gray-600">— {t.name}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

