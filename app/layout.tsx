import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, personJsonLd, servicesJsonLd, websiteJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | High-Stakes Communication Training`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "executive communication coaching",
    "media training",
    "crisis communications consulting",
    "spokesperson training",
    "presentation coaching",
    "Atlanta media training",
    "executive speaking coach",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | High-Stakes Communication Training`,
    description: site.tagline,
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} Open Graph` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | High-Stakes Communication Training`,
    description: site.tagline,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const services = servicesJsonLd();

  return (
    <html lang="en">
      <body>
        {/* Site-wide schema */}
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={personJsonLd()} />
        {services.map((s, i) => (
          <JsonLd key={i} data={s} />
        ))}

        <Nav />
        <main className="overflow-x-hidden pb-8 pt-[104px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
