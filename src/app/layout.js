import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";
import { LocaleProvider } from "@/app/providers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageTransition from "@/components/PageTransition";

const siteName = "Fashion Zoom Magazine";
const siteDescription = "Kerala’s premier fashion magazine and modeling academy offering professional training, seasonal fashion shows, and editorial portfolio features since 2013.";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fontDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: {
    default: `${siteName} — Kerala’s Premier Fashion Magazine & Modeling Academy`,
    template: "%s — Fashion Zoom",
  },
  description: siteDescription,
  openGraph: {
    title: siteName,
    siteName,
    description: siteDescription,
    url: "/",
    images: ["/og-image.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Fashion Zoom",
    "Kerala fashion magazine",
    "modeling academy Kerala",
    "fashion shows Kerala",
    "model courses",
    "portfolio shoots",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fashion Zoom Magazine",
    url: "/",
    logo: "/assets/logo.png",
    sameAs: [
      "https://www.instagram.com/fashion_zoom_magazine",
      "https://www.instagram.com/fashionzoom_modeling_academy",
    ],
  };

  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="antialiased min-h-screen bg-white text-foreground font-sans">
        <LocaleProvider>
          <SiteHeader />
          <main id="main" role="main">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </LocaleProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
