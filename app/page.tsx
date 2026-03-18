import Link from "next/link";
import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

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

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />

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

            <div className="space-y-5 md:-mt-8">
              <div className="glass-panel rounded-[2.25rem] p-4 md:p-5">
                <PlaceholderImage label="Hero Image (Toria / keynote / studio)" />
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
              <PlaceholderImage label="Workshop / Coaching Session" />

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
    </>
  );
}
