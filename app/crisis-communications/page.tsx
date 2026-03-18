import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const faqs = [
  {
    question: "What is crisis communication coaching?",
    answer:
      "Crisis communication coaching helps leaders prepare for high-risk public situations with stronger messaging, spokesperson readiness, response planning, and rehearsal before or during reputation-sensitive events.",
  },
  {
    question: "Do you help organizations prepare before a crisis happens?",
    answer:
      "Yes. Crisis communications support can include message frameworks, response planning, spokesperson preparation, and rehearsal so teams are more prepared before an incident occurs.",
  },
  {
    question: "Can crisis communication support include media preparation?",
    answer:
      "Yes. Crisis communication work often overlaps with media training, especially when a leader or spokesperson must answer difficult public questions under pressure.",
  },
];

export const metadata: Metadata = {
  title: "Crisis Communications Consulting",
  description:
    "Crisis communications consulting and spokesperson preparation for leaders and organizations facing high-stakes, reputation-sensitive situations.",
  keywords: [
    "crisis communications consulting",
    "crisis communication coaching",
    "spokesperson preparation",
    "reputation management consulting",
    "Atlanta crisis communications",
  ],
  alternates: { canonical: "/crisis-communications" },
  openGraph: {
    title: `${site.name} | Crisis Communications Consulting`,
    description:
      "Crisis communications consulting, message planning, and spokesperson preparation for high-stakes situations.",
  },
};

export default function CrisisCommunicationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Crisis Communications", path: "/crisis-communications" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <section className="pb-16 pt-3 md:pb-24 md:pt-6">
        <Container>
          <p className="eyebrow">High-Stakes Response</p>
          <h1 className="section-title mt-5">Crisis Communications Consulting</h1>

          <p className="lede mt-6">
            Crisis communications support for leaders and organizations that
            need message control, spokesperson readiness, and public trust when
            the stakes are high.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  In a crisis, unclear communication can make a difficult
                  situation worse. The Business of Talk helps leaders prepare
                  for high-pressure communication with message planning,
                  rehearsal, and coaching that supports clarity, calm, and
                  credibility.
                </p>
                <p>
                  Engagements can include response messaging, statement prep,
                  spokesperson coaching, mock questioning, internal alignment,
                  and communication strategy for sensitive public moments.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Spokesperson coaching and public response prep",
                  "Crisis messaging and leadership alignment",
                  "Rehearsal for difficult questions and press pressure",
                  "Communication planning for reputation-sensitive incidents",
                ].map((item) => (
                  <div key={item} className="surface-card rounded-[1.75rem] p-5">
                    <p className="leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary px-6 py-3 text-sm">
                  Discuss Crisis Support
                </Link>
                <Link href="/pricing" className="btn-secondary px-6 py-3 text-sm">
                  View Pricing
                </Link>
              </div>
            </div>

            <PlaceholderImage label="Crisis Messaging / Spokesperson Prep" />
          </div>

          <div className="mt-14 glass-panel rounded-[2.25rem] p-8">
            <p className="eyebrow">FAQ</p>
            <div className="mt-6 grid gap-5">
              {faqs.map((item) => (
                <div key={item.question} className="surface-card rounded-[1.75rem] p-6">
                  <h2 className="text-2xl font-semibold">{item.question}</h2>
                  <p className="mt-3 leading-8 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
