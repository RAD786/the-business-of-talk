import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Who We Work With",
  description:
    "Communication coaching and media training for leaders, organizations, and venues where messaging impacts trust and reputation.",
  alternates: { canonical: "/who-we-work-with" },
};

export default function WhoWeWorkWithPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Who We Work With", path: "/who-we-work-with" },
        ])}
      />

      <section className="py-14 md:py-20">
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight">Who We Work With</h1>

          <p className="mt-4 text-lg text-slate-700 max-w-3xl">
            We support leaders and organizations where communication directly affects trust, safety,
            outcomes, and public perception.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              [
                "Politicians & Council Members",
                "Public meetings, press conferences, town halls, and high-visibility messaging.",
              ],
              [
                "Law Firms & Legal Leaders",
                "Clear communication in sensitive situations, public statements, and client-facing messaging.",
              ],
              [
                "CEOs & Executive Teams",
                "Boardroom presence, investor communications, employee messaging, and keynote preparation.",
              ],
              [
                "Religious & Community Leaders",
                "Messages that balance conviction with clarity, compassion, and audience connection.",
              ],
              [
                "High-Risk Company Leaders",
                "Crisis readiness, spokesperson prep, and positive PR during high-stakes incidents.",
              ],
              [
                "Venue Partners",
                "Wineries, cruises, and retreat venues hosting premium training events promoted to their audiences.",
              ],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border p-6">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-2 text-slate-700">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <PlaceholderImage label="Clients / Audience Image" />
          </div>
        </Container>
      </section>
    </>
  );
}
