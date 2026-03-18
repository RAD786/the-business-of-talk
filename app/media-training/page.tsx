import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const faqs = [
  {
    question: "What does media training include?",
    answer:
      "Media training includes message development, interview rehearsal, tough-question handling, soundbite practice, on-camera feedback, and delivery coaching for television, radio, podcast, and print interviews.",
  },
  {
    question: "Who needs media training?",
    answer:
      "Media training is valuable for executives, spokespeople, attorneys, public officials, authors, and experts who may be interviewed by journalists or appear in public-facing media situations.",
  },
  {
    question: "Do you help with difficult interviews and crisis media appearances?",
    answer:
      "Yes. Media training can be tailored for difficult interviews, hostile questioning, breaking-news situations, and high-pressure spokesperson appearances.",
  },
];

export const metadata: Metadata = {
  title: "Media Training",
  description:
    "Media training in Atlanta and nationwide for leaders, spokespeople, and experts preparing for interviews, tough questions, and on-camera appearances.",
  keywords: [
    "media training",
    "spokesperson training",
    "interview coaching",
    "Atlanta media training",
    "on camera coaching",
  ],
  alternates: { canonical: "/media-training" },
  openGraph: {
    title: `${site.name} | Media Training`,
    description:
      "Media training for interviews, soundbites, tough questions, and on-camera confidence.",
  },
};

export default function MediaTrainingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Media Training", path: "/media-training" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <section className="pb-16 pt-3 md:pb-24 md:pt-6">
        <Container>
          <p className="eyebrow">Interviews and Press Prep</p>
          <h1 className="section-title mt-5">Media Training</h1>

          <p className="lede mt-6">
            Media training for leaders and spokespeople who need to handle
            interviews, cameras, and tough questions with control.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  Strong interviews are not improvised. They are prepared,
                  disciplined, and practiced. The Business of Talk helps clients
                  develop clear messages, deliver confident soundbites, and stay
                  in control when questions get difficult.
                </p>
                <p>
                  Sessions can include mock interviews, on-camera playback,
                  message refinement, bridging techniques, hostile-question
                  rehearsal, and coaching on tone, pacing, posture, and
                  credibility.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Television, radio, podcast, and print interviews",
                  "Soundbite development and message discipline",
                  "Tough-question rehearsal and live-response practice",
                  "On-camera confidence and spokesperson delivery",
                ].map((item) => (
                  <div key={item} className="surface-card rounded-[1.75rem] p-5">
                    <p className="leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary px-6 py-3 text-sm">
                  Book Media Training
                </Link>
                <Link href="/pricing" className="btn-secondary px-6 py-3 text-sm">
                  View Pricing
                </Link>
              </div>
            </div>

            <PlaceholderImage label="Interview Prep / On-Camera Training" />
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
