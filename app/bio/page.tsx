import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bio",
  description:
    "Meet Toria Tolley—award-winning journalist, media strategist, speaker, and former CNN News Anchor.",
  alternates: { canonical: "/bio" },
};

export default function BioPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Bio", path: "/bio" },
        ])}
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight">Toria Tolley</h1>

              <p className="mt-4 text-lg text-slate-700">
                Award-winning journalist, media strategist and speaker with more than a decade of
                CNN News Anchor experience. Toria has reported from the scenes of major global stories
                and interviewed hundreds of newsmakers and top leaders.
              </p>

              <p className="mt-4 text-slate-700">
                Today, she brings that on-air discipline and media insight to corporations, organizations,
                and individuals—helping them communicate with clarity, confidence, and credibility,
                especially when the stakes are high.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border p-6">
                  <h2 className="text-xl font-semibold">Career Highlights</h2>
                  <ul className="mt-3 space-y-1 text-slate-700">
                    <li>• Two Emmy Awards for Broadcast Journalism Excellence</li>
                    <li>• National network correspondent covering major stories worldwide</li>
                    <li>• Expertise in reputation management, crisis planning, and media coaching</li>
                    <li>• Taught “The Secrets of Communication” at Georgia Tech</li>
                  </ul>
                </div>

                <div className="rounded-2xl border p-6">
                  <h2 className="text-xl font-semibold">What Clients Get</h2>
                  <p className="mt-2 text-slate-700">
                    A coach who understands the pressure of public scrutiny and trains leaders to stay composed,
                    persuasive, and on-message in interviews, boardrooms, public meetings, and crisis situations.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <PlaceholderImage label="Toria Headshot" />
              <PlaceholderImage label="Toria On-Camera / Speaking Image" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
