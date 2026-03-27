import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How We Do It",
  description:
    "A practical, rehearsal-based process for confident speaking, media readiness, and crisis communication.",
  alternates: { canonical: "/how-we-do-it" },
};

const steps = [
  [
    "Diagnose the moment",
    "We define the audience, stakes, risks, and the outcome you need so training matches reality.",
  ],
  [
    "Build the message",
    "We shape your core narrative, proof points, and soundbites so you stay clear and consistent.",
  ],
  [
    "Train delivery",
    "We refine voice, pace, posture, presence, and nonverbal communication so your message lands with credibility and confidence.",
  ],
  [
    "Pressure-test Q&A",
    "We rehearse tough questions and teach techniques to stay in control and on message.",
  ],
  [
    "Make it repeatable",
    "You leave with templates, checklists, and a process you can use before every talk or interview.",
  ],
];

const differentiators = [
  {
    title: "Real Media and Performance Experience",
    description:
      "Many communication coaches have never worked in media or performed under real public pressure. Our team brings national and international television network experience, both in front of the camera and behind it, so clients train with people who understand how strong communicators actually operate.",
  },
  {
    title: "Hands-On, Rehearsal-Based Learning",
    description:
      "Our programs are active, not book-based. Instead of relying on papers or written tests, clients practice on camera, review performance, and receive direct professional feedback that helps new techniques stick quickly.",
  },
];

export default function HowWeDoItPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "How We Do It", path: "/how-we-do-it" },
        ])}
      />

      <section className="pb-16 pt-3 md:pb-24 md:pt-6">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="ring-accent surface-card relative aspect-[3/2] w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/images/process-coaching-session.png"
                alt="Process and coaching session"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>

            <div>
              <p className="eyebrow">Method</p>
              <h1 className="section-title mt-5">How We Do It</h1>

              <p className="lede mt-6">
                Our approach is built for real-world pressure: clear messaging,
                strong delivery, smart Q&A strategy, and practice that feels like
                the moment you are preparing for.
              </p>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
                We focus on the messenger as much as the message. That means
                coaching body language, facial expression, voice, pace, and
                gestures so every part of your communication supports the point you
                need to make.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5">
            {steps.map(([title, description], index) => (
              <div key={title} className="surface-card rounded-[2rem] p-7 md:grid md:grid-cols-[auto_1fr] md:gap-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(199,102,53,0.14)] text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-deep)]">
                    0{index + 1}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <p className="mt-3 leading-8 text-slate-700">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="glass-panel rounded-[2.5rem] p-8">
              <p className="eyebrow">Why It Works</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">What Sets Us Apart</h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-700">
                Communication training is a growing investment for leaders and
                organizations, but not all coaching is built the same. The
                Business of Talk stands apart through real media experience and
                a hands-on training model built for measurable improvement.
              </p>

              <div className="mt-8 grid gap-5">
                {differentiators.map((item) => (
                  <div key={item.title} className="surface-card rounded-[1.75rem] p-6">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-8 text-slate-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
