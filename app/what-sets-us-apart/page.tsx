import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "What Sets Us Apart",
  description:
    "Why The Business of Talk delivers a higher caliber of communication training, hands-on rehearsal, and rapid-response support.",
  alternates: { canonical: "/what-sets-us-apart" },
};

const differentiators = [
  {
    title: "We know the business, so you get a higher caliber of training.",
    description:
      "This is practical coaching built by people who understand real media, public pressure, and the demands placed on visible leaders when the moment matters.",
  },
  {
    title: "No manuals, no tests, just hands-on training.",
    description:
      "We use recorded practice, performance review, and constructive feedback. Then more recorded practice, more review, more feedback, and repeat until the delivery is sharp, natural, and reliable.",
  },
  {
    title: "We are available 24/7 for communication emergencies.",
    description:
      "From corporate speaker coaching in a crisis to last-minute media appearances, we help clients get ready fast. Overnight and early-morning shows often have sudden openings to fill, and we make sure you are prepared.",
  },
];

export default function WhatSetsUsApartPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "What Sets Us Apart", path: "/what-sets-us-apart" },
        ])}
      />

      <section className="pb-16 pt-3 md:pb-24 md:pt-6">
        <Container>
          <div className="max-w-4xl">
            <p className="eyebrow">Difference</p>
            <h1 className="section-title mt-5">What Sets Us Apart</h1>

            <p className="lede mt-6">
              Communication coaching is easy to describe and much harder to do
              well. The Business of Talk is built around real-world experience,
              repetition under pressure, and rapid support when timing matters.
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="surface-card ring-accent rounded-[2rem] p-7">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
