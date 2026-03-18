import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bio",
  description:
    "Meet Toria Tolley, Emmy Award-winning journalist, media strategist, and longtime CNN anchor and correspondent.",
  alternates: { canonical: "/bio" },
};

const highlights = [
  "Emmy Award-winning broadcast journalist",
  "More than 15 years as a CNN anchor and correspondent",
  "A 30-year on-air career covering major national stories",
  "Hundreds of interviews with political and corporate leaders",
];

export default function BioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Bio", path: "/bio" },
        ])}
      />

      <section className="pb-16 pt-3 md:pb-24 md:pt-6">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_0.92fr] md:items-start">
            <div>
              <p className="eyebrow">Founder</p>
              <h1 className="section-title mt-5">Toria Tolley</h1>

              <p className="lede mt-6">
                Toria Tolley is an Emmy Award-winning journalist, media
                strategist, and widely recognized CNN anchor and correspondent
                with more than 15 years at the network and a 30-year on-air
                career.
              </p>

              <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  She was a familiar face on Headline News, CNN.com, CNN Airport
                  Network, CNN International, and CNN in-flight programming for
                  Delta Air Lines. Over the course of her career, she reported
                  live from some of the nation&apos;s biggest news stories and
                  conducted hundreds of in-depth interviews with highly visible
                  political and corporate leaders.
                </p>

                <p>
                  Drawing from more than three decades of on-camera excellence,
                  Toria founded The Business of Talk to help clients develop the
                  presence, discipline, and credibility required in high-stakes
                  communication. In addition to coaching television pundits and
                  newsmakers, she works with leaders outside the industry to
                  strengthen public image, improve communication performance, and
                  build corporate confidence.
                </p>

                <p>
                  Toria also works as a freelance producer with ABC News,
                  &quot;Good Morning America,&quot; and &quot;World News Tonight with David
                  Muir.&quot; In recent years, she has traveled to breaking news
                  locations to secure exclusive, on-the-scene interviews for the
                  network.
                </p>
              </div>

              <div className="mt-10 grid gap-5">
                <div className="surface-card rounded-[2rem] p-7">
                  <h2 className="text-2xl font-semibold">Career Highlights</h2>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                    {highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="surface-card rounded-[2rem] p-7">
                  <h2 className="text-2xl font-semibold">What Clients Get</h2>
                  <p className="mt-3 leading-8 text-slate-700">
                    A coach who understands public scrutiny firsthand and helps
                    leaders communicate with clarity, confidence, composure, and
                    authority when the stakes are high.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="glass-panel rounded-[2.25rem] p-4">
                <PlaceholderImage label="Toria Headshot" />
              </div>
              <div className="glass-panel rounded-[2.25rem] p-4">
                <PlaceholderImage label="Toria On-Camera / Speaking Image" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
