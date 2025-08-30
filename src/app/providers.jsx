"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { locales } from "@/i18n";

const LocaleContext = createContext({ lang: "en", setLang: () => {}, L: locales.en });

export function LocaleProvider({ children }) {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("fz-lang") : null;
    if (saved === "en" || saved === "ml") setLang(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("fz-lang", lang);
  }, [lang]);
  const L = useMemo(() => locales[lang] || locales.en, [lang]);
  const value = useMemo(() => ({ lang, setLang, L }), [lang, L]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
