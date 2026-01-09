import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How We Do It",
  description:
    "A practical, rehearsal-based process for confident speaking, media readiness, and crisis communication.",
  alternates: { canonical: "/how-we-do-it" },
};

export default function HowWeDoItPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "How We Do It", path: "/how-we-do-it" },
        ])}
      />

      <section className="py-14 md:py-20">
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight">How We Do It</h1>

          <p className="mt-4 text-lg text-slate-700 max-w-3xl">
            Our approach is designed for real-world pressure: clear messaging, strong delivery,
            smart Q&A strategy, and practice that feels like the moment you’re preparing for.
          </p>

          <div className="mt-10 grid gap-6">
            {[
              [
                "1) Diagnose the moment",
                "We define the audience, stakes, risks, and the outcome you need—so training matches reality.",
              ],
              [
                "2) Build the message",
                "We shape your core narrative, proof points, and soundbites so you stay clear and consistent.",
              ],
              [
                "3) Train delivery",
                "We refine voice, pace, posture, and presence—so your message lands with credibility and confidence.",
              ],
              [
                "4) Pressure-test Q&A",
                "We rehearse tough questions and teach techniques to stay in control and on message.",
              ],
              [
                "5) Make it repeatable",
                "You leave with templates, checklists, and a process you can use before every talk or interview.",
              ],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border p-6">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-2 text-slate-700">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <PlaceholderImage label="Process / Coaching Session Image" />
          </div>
        </Container>
      </section>
    </>
  );
}
