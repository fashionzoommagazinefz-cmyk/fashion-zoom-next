"use client";

import { useLocale } from "@/app/providers";

export default function PageTitle({ sectionKey, className = "", subtitle }) {
  const { L } = useLocale();
  const title = L.sections?.[sectionKey] || "";
  return (
    <div className={className}>
      <h1 className="text-4xl font-bold text-gray-900 mb-3">{title}</h1>
      <div className="h-1 w-16 bg-[#F81F2E] rounded mb-6" />
      {subtitle ? <p className="text-lg text-gray-700">{subtitle}</p> : null}
    </div>
  );
}
