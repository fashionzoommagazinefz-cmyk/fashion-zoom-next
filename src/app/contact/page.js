import Link from "next/link";
import { Instagram, Facebook, Youtube, Phone, MapPin } from "lucide-react";
import PageTitle from "@/components/PageTitle";

export const metadata = {
  title: "Contact — Fashion Zoom",
  description:
    "Contact Fashion Zoom Magazine & Modeling Academy — phone numbers, city locations, and social media links.",
};

export default function ContactPage() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle sectionKey="contact" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="font-semibold mb-2 flex items-center"><Phone className="h-5 w-5 mr-2 text-[#F81F2E]" /> Phone Numbers</h2>
            <p className="text-gray-300">
              Primary: <a className="underline underline-offset-4" href="tel:+918590866865">+91 85908 66865</a>
            </p>
            <p className="text-gray-300">
              Secondary: <a className="underline underline-offset-4" href="tel:+919961444539">+91 99614 44539</a>
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="font-semibold mb-2 flex items-center"><MapPin className="h-5 w-5 mr-2 text-[#F81F2E]" /> Locations</h2>
            <p className="text-gray-300">Trivandrum • Kochi • Calicut • Thrissur • Kottayam</p>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="font-semibold mb-2 flex items-center"><Instagram className="h-5 w-5 mr-2 text-[#F81F2E]" /> Social Media</h2>
            <p className="text-gray-300">
              <a className="underline underline-offset-4" href="https://instagram.com/fashion_zoom_magazine" target="_blank" rel="noopener noreferrer">@fashion_zoom_magazine</a>
            </p>
            <p className="text-gray-300">
              <a className="underline underline-offset-4" href="https://instagram.com/fashionzoom_modeling_academy" target="_blank" rel="noopener noreferrer">@fashionzoom_modeling_academy</a>
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://instagram.com/fashion_zoom_magazine" aria-label="Instagram" target="_blank" className="hover:text-[#F81F2E]">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:text-[#F81F2E]">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:text-[#F81F2E]">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
