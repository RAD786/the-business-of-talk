import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const focusAreas = [
  {
    title: "Media training",
    description: "Interviews, soundbites, tough questions, and live-response reps.",
  },
  {
    title: "Crisis messaging",
    description: "Prepared statements, response plans, spokesperson discipline, and PR readiness.",
  },
];

const strengths = [
  { title: "Presence", subtitle: "On stage" },
  { title: "Control", subtitle: "On camera" },
  { title: "Trust", subtitle: "In crisis" },
];

const faqs = [
  {
    question: "Who is executive communication coaching for?",
    answer:
      "Executive communication coaching is designed for leaders, spokespeople, attorneys, public officials, and other high-visibility professionals who need to speak clearly and credibly under pressure.",
  },
  {
    question: "Do you offer media training for interviews and press appearances?",
    answer:
      "Yes. The Business of Talk provides media training for television, radio, podcast, and print interviews, including message discipline, tough-question rehearsal, soundbite development, and on-camera practice.",
  },
  {
    question: "Can you help with crisis communication preparation?",
    answer:
      "Yes. Crisis communication support includes spokesperson preparation, response planning, rehearsal, and communication coaching for high-risk or reputation-sensitive situations.",
  },
  {
    question: "Do you work only in Atlanta?",
    answer:
      "The Business of Talk is based in Atlanta, Georgia, and works with clients in Atlanta and beyond through private coaching, group workshops, and virtual sessions.",
  },
];

export const metadata: Metadata = {
  title: "Executive Communication Coaching, Media Training, and Crisis Messaging",
  description:
    "Executive communication coaching, media training, and crisis messaging for leaders who need clarity, confidence, and control on stage, on camera, and under pressure.",
  keywords: [
    "executive communication coaching",
    "media training Atlanta",
    "crisis communications consulting",
    "spokesperson training",
    "presentation coaching",
    "executive speaking coach",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | Executive Communication Coaching and Media Training`,
    description:
      "Media training, executive communication coaching, and crisis messaging for leaders in Atlanta and nationwide.",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <JsonLd data={faqJsonLd(faqs)} />

      <section className="pb-16 pt-1 md:pb-24 md:pt-3">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
            <div>
              <p className="eyebrow">Communication Training for High-Visibility Leaders</p>

              <h1 className="hero-title mt-5 max-w-4xl">
                Speak with clarity when the moment matters most.
              </h1>

              <p className="lede mt-6">
                The Business of Talk helps leaders deliver information clearly,
                credibly, and with impact. We train not just the message, but
                the messenger, so executives, public officials, attorneys, and
                other high-visibility leaders communicate with confidence on
                stage, on camera, and under pressure.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary px-6 py-4 text-base">
                  Schedule a Consultation
                </Link>

                <Link href="/what-we-do" className="btn-secondary px-6 py-4 text-base">
                  Explore Services
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {focusAreas.map((item) => (
                  <div key={item.title} className="surface-card ring-accent rounded-[2rem] p-6">
                    <p className="text-lg font-semibold text-slate-950">{item.title}</p>
                    <p className="mt-2 leading-7 text-slate-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="glass-panel mx-auto w-full max-w-[24rem] overflow-hidden rounded-[2.25rem] p-0">
                <div className="ring-accent surface-card relative aspect-[983/1382] w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src="/images/toria-tolley-headshot.png"
                    alt="Toria Tolley headshot"
                    fill
                    priority
                    className="object-contain object-center"
                    sizes="(min-width: 768px) 24rem, (min-width: 640px) 80vw, calc(100vw - 3rem)"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {strengths.map((item) => (
                  <div key={item.title} className="surface-card rounded-[1.75rem] px-5 py-6 text-center">
                    <p className="text-xl font-semibold text-slate-950">{item.title}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.16em] text-slate-500">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="glass-panel rounded-[2.5rem] p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-center">
              <div className="ring-accent surface-card relative aspect-[3/2] w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/workshop-coaching-1.png"
                  alt="Workshop or coaching session"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
              <div>
                <p className="eyebrow">How It Works</p>
                <h2 className="section-title mt-5">
                  Training that turns pressure into performance.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                  We build a repeatable communication system around message
                  structure, delivery, Q&A strategy, and media discipline. The
                  goal is simple: make sure your voice, presence, and body
                  language reinforce what you are saying every time you speak.
                </p>

                <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-700">
                  <li>Executive and public-speaker coaching</li>
                  <li>Media training and interview practice</li>
                  <li>Crisis communications planning and rehearsal</li>
                  <li>Venue-hosted training events for premium audiences</li>
                </ul>

                <div className="mt-8">
                  <Link href="/how-we-do-it" className="btn-secondary px-6 py-3 text-sm">
                    See How We Do It
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="glass-panel rounded-[2.5rem] p-8 md:p-10">
            <p className="eyebrow">Common Questions</p>
            <h2 className="section-title mt-5">Frequently Asked Questions</h2>

            <div className="mt-8 grid gap-5">
              {faqs.map((item) => (
                <div key={item.question} className="surface-card rounded-[1.8rem] p-6">
                  <h3 className="text-2xl font-semibold">{item.question}</h3>
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
