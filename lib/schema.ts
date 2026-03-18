import { site } from "./site";

export type BreadcrumbItem = { name: string; path: string };
export type FaqItem = { question: string; answer: string };

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    areaServed: "US",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    founder: {
      "@type": "Person",
      name: site.founder.name,
    },
    knowsAbout: [
      "Executive communication coaching",
      "Media training",
      "Crisis communications",
      "Spokesperson training",
      "Presentation coaching",
    ],
    sameAs: [
      // add later (LinkedIn company page, etc.)
    ],
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#toria`,
    name: site.founder.name,
    jobTitle: site.founder.title,
    worksFor: { "@id": `${site.url}/#business` },
    sameAs: [
      "https://www.linkedin.com/in/toria-tolley-2a52112/",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.tagline,
    publisher: { "@id": `${site.url}/#business` },
  };
}

// Optional: list services explicitly (helps SEO)
export function servicesJsonLd() {
  const services = [
    "Executive & Public-Speaker Coaching",
    "Media Training",
    "Crisis Communication Planning & Rehearsal",
    "Venue-Hosted Training Events",
  ];

  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service,
    provider: { "@id": `${site.url}/#business` },
    areaServed: "US",
  }));
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
