import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const faqs = [
  {
    question: "What is executive communication coaching?",
    answer:
      "Executive communication coaching helps leaders improve message clarity, authority, delivery, and presence for meetings, presentations, media appearances, and high-stakes conversations.",
  },
  {
    question: "Who benefits from executive communication coaching?",
    answer:
      "CEOs, senior leaders, founders, attorneys, public officials, and rising executives benefit most when they need to influence audiences clearly and confidently under pressure.",
  },
  {
    question: "Do you offer executive communication coaching in Atlanta and virtually?",
    answer:
      "Yes. The Business of Talk is based in Atlanta and provides executive communication coaching both in person and virtually for clients nationwide.",
  },
];

export const metadata: Metadata = {
  title: "Executive Communication Coaching",
  description:
    "Executive communication coaching in Atlanta and nationwide for leaders who need stronger presence, message clarity, and confidence in high-stakes moments.",
  keywords: [
    "executive communication coaching",
    "executive speaking coach",
    "leadership communication coaching",
    "Atlanta executive communication coaching",
  ],
  alternates: { canonical: "/executive-communication-coaching" },
  openGraph: {
    title: `${site.name} | Executive Communication Coaching`,
    description:
      "Executive communication coaching for leaders who need clarity, presence, and authority in high-stakes speaking situations.",
  },
};

export default function ExecutiveCommunicationCoachingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Executive Communication Coaching", path: "/executive-communication-coaching" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <section className="pb-16 pt-3 md:pb-24 md:pt-6">
        <Container>
          <p className="eyebrow">Leadership Coaching</p>
          <h1 className="section-title mt-5">Executive Communication Coaching</h1>

          <p className="lede mt-6">
            Executive communication coaching for leaders who need stronger
            presence, message clarity, and calm authority when the room matters.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  The Business of Talk helps executives communicate with
                  precision in boardrooms, keynote settings, media interviews,
                  investor conversations, and internal leadership moments. The
                  work focuses on both message and delivery so your ideas land
                  with credibility.
                </p>
                <p>
                  Coaching can cover leadership presence, message structure,
                  presentation flow, difficult Q&A, vocal delivery, body
                  language, and how to stay composed when the stakes are high.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Board presentations and leadership meetings",
                  "Investor, employee, and stakeholder communication",
                  "Keynotes, panels, and public speaking",
                  "High-pressure messaging and executive visibility",
                ].map((item) => (
                  <div key={item} className="surface-card rounded-[1.75rem] p-5">
                    <p className="leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary px-6 py-3 text-sm">
                  Book Executive Coaching
                </Link>
                <Link href="/pricing" className="btn-secondary px-6 py-3 text-sm">
                  View Pricing
                </Link>
              </div>
            </div>

            <PlaceholderImage label="Executive Coaching / Presentation Prep" />
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
