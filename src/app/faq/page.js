import PageTitle from "@/components/PageTitle";
export const metadata = { title: "FAQ — Fashion Zoom" };

export default function FaqPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle sectionKey="faq" />
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <details className="rounded-lg border p-4"><summary className="font-semibold cursor-pointer">Who can join the academy?</summary><p className="mt-2 text-sm">We welcome beginners and experienced aspirants across ages 3–60. Batches are tailored by age group and goals.</p></details>
          <details className="rounded-lg border p-4"><summary className="font-semibold cursor-pointer">Do I need prior experience?</summary><p className="mt-2 text-sm">No. Our curriculum starts with fundamentals — posture, walk, grooming — and progresses to advanced runway and camera work.</p></details>
          <details className="rounded-lg border p-4"><summary className="font-semibold cursor-pointer">Will I get a portfolio?</summary><p className="mt-2 text-sm">Yes. Programs include editorial‑style photos and short reels to start pitching for assignments.</p></details>
          <details className="rounded-lg border p-4"><summary className="font-semibold cursor-pointer">Are there shows or events?</summary><p className="mt-2 text-sm">Yes. We organize seasonal shows across Kerala. Students get opportunities to participate by category.</p></details>
        </div>
      </div>
    </section>
  );
}
