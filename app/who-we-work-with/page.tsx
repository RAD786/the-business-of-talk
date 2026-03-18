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

const audiences = [
  [
    "Politicians and Council Members",
    "Public meetings, press conferences, town halls, and high-visibility messaging.",
  ],
  [
    "Law Firms and Legal Leaders",
    "Clear communication in sensitive situations, public statements, and client-facing messaging.",
  ],
  [
    "CEOs and Executive Teams",
    "Boardroom presence, investor communications, employee messaging, and keynote preparation.",
  ],
  [
    "Religious and Community Leaders",
    "Messages that balance conviction with clarity, compassion, and audience connection.",
  ],
  [
    "High-Risk Company Leaders",
    "Crisis readiness, spokesperson prep, and reputation-sensitive communication during high-stakes incidents.",
  ],
  [
    "Venue Partners",
    "Wineries, cruises, and retreat venues hosting premium training events promoted to their audiences.",
  ],
];

export default function WhoWeWorkWithPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Who We Work With", path: "/who-we-work-with" },
        ])}
      />

      <section className="pb-16 pt-3 md:pb-24 md:pt-6">
        <Container>
          <p className="eyebrow">Clients</p>
          <h1 className="section-title mt-5">Who We Work With</h1>

          <p className="lede mt-6">
            We support leaders and organizations where communication directly
            affects trust, outcomes, reputation, and public perception.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Our clients include politicians, newsmakers, television guests,
            network analysts, CEOs, law firms, and individuals who need to make
            a stronger first impression when the spotlight is on.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {audiences.map(([title, description]) => (
              <div key={title} className="surface-card rounded-[2rem] p-7">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="mt-3 leading-8 text-slate-700">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <div className="glass-panel rounded-[2.25rem] p-5 md:p-6">
              <PlaceholderImage label="Clients / Audience Image" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
