import Link from "next/link";
import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium text-slate-600">
                Communication training for leaders under the spotlight
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Speak with clarity when the moment matters most.
              </h1>

              <p className="mt-4 text-lg text-slate-700">
                The Business of Talk prepares executives, public officials,
                attorneys, faith leaders, and high-risk organizations to
                communicate with confidence—on stage, on camera, and in crisis.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-slate-900 px-5 py-3 text-white font-medium hover:bg-slate-800"
                >
                  Schedule a Consultation
                </Link>

                <Link
                  href="/what-we-do"
                  className="rounded-xl border px-5 py-3 font-medium hover:bg-slate-50"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-700">
                <div className="rounded-2xl border p-4">
                  <p className="font-semibold">Media training</p>
                  <p className="mt-1 text-slate-600">
                    Interviews, soundbites, tough questions, live reps.
                  </p>
                </div>

                <div className="rounded-2xl border p-4">
                  <p className="font-semibold">Crisis messaging</p>
                  <p className="mt-1 text-slate-600">
                    Prepared statements, response plans, PR readiness.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <PlaceholderImage label="Hero Image (Toria / keynote / studio)" />

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl border bg-slate-50 p-4 text-center text-sm">
                  <p className="font-semibold">Presence</p>
                  <p className="text-slate-600">On stage</p>
                </div>

                <div className="rounded-2xl border bg-slate-50 p-4 text-center text-sm">
                  <p className="font-semibold">Control</p>
                  <p className="text-slate-600">On camera</p>
                </div>

                <div className="rounded-2xl border bg-slate-50 p-4 text-center text-sm">
                  <p className="font-semibold">Trust</p>
                  <p className="text-slate-600">In crisis</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 bg-slate-50">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <PlaceholderImage label="Workshop / Coaching Session" />

            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Training that turns pressure into performance.
              </h2>

              <p className="mt-3 text-slate-700">
                We build a repeatable communication system: message architecture,
                delivery, Q&A strategy, and media discipline—so you show up
                prepared every time.
              </p>

              <ul className="mt-5 space-y-2 text-slate-700">
                <li>• Executive and public-speaker coaching</li>
                <li>• Media training and interview practice</li>
                <li>• Crisis communications planning and rehearsal</li>
                <li>• Venue-hosted training events (wineries, cruises, retreats)</li>
              </ul>

              <div className="mt-6">
                <Link
                  href="/how-we-do-it"
                  className="font-medium underline underline-offset-4"
                >
                  See how we do it
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
