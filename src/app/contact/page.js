import { Instagram, Facebook, Youtube, Phone, MapPin } from "lucide-react";
import PageTitle from "@/components/PageTitle";

export const metadata = { title: "Contact — Fashion Zoom" };

export default function ContactPage() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle sectionKey="contact" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="font-semibold mb-2 flex items-center"><Phone className="h-5 w-5 mr-2 text-[#F81F2E]" /> Phone Numbers</h2>
            <p className="text-gray-300">Primary: 8590866865</p>
            <p className="text-gray-300">Secondary: 9961444539</p>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="font-semibold mb-2 flex items-center"><MapPin className="h-5 w-5 mr-2 text-[#F81F2E]" /> Locations</h2>
            <p className="text-gray-300">Trivandrum • Kochi • Calicut • Thrissur • Kottayam</p>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="font-semibold mb-2 flex items-center"><Instagram className="h-5 w-5 mr-2 text-[#F81F2E]" /> Social Media</h2>
            <p className="text-gray-300">@fashion_zoom_magazine</p>
            <p className="text-gray-300">@fashionzoom_modeling_academy</p>
            <div className="flex space-x-4 mt-4">
              <Instagram className="h-6 w-6 hover:text-[#F81F2E] cursor-pointer" />
              <Facebook className="h-6 w-6 hover:text-[#F81F2E] cursor-pointer" />
              <Youtube className="h-6 w-6 hover:text-[#F81F2E] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
