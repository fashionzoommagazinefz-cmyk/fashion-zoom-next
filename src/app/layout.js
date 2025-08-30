import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { LocaleProvider } from "@/app/providers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Fashion Zoom Magazine — Kerala’s Premier Fashion Magazine & Modeling Academy",
  description: "Professional modeling academy, seasonal fashion shows, and magazine features across Kerala since 2013.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Fashion Zoom Magazine",
    description: "Kerala's premier fashion magazine & modeling academy since 2013",
    images: ["/og-image.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-white text-foreground">
        <LocaleProvider>
          <SiteHeader />
          <main id="main" role="main">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
