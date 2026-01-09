import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Communication coaching, media training, and crisis messaging for leaders who speak to large audiences.",
  alternates: { canonical: "/what-we-do" },
};

export default function WhatWeDoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "What We Do", path: "/what-we-do" },
        ])}
      />

      <section className="py-14 md:py-20">
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight">
            What We Do
          </h1>

          <p className="mt-4 text-lg text-slate-700 max-w-3xl">
            The Business of Talk delivers practical, high-impact communication
            training for leaders who must speak clearly, confidently, and
            credibly—especially when the stakes are high.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h2 className="text-xl font-semibold">
                Executive & Public-Speaker Coaching
              </h2>
              <p className="mt-2 text-slate-700">
                We help leaders structure messages, tell compelling stories,
                command attention, and project confidence in any room.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h2 className="text-xl font-semibold">
                Media Training
              </h2>
              <p className="mt-2 text-slate-700">
                Prepare for interviews, tough questions, soundbites, and live
                coverage with on-camera drills and strategic messaging.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h2 className="text-xl font-semibold">
                Crisis Communication
              </h2>
              <p className="mt-2 text-slate-700">
                From incident response to reputation recovery, we prepare
                organizations to communicate with clarity and control.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h2 className="text-xl font-semibold">
                Venue-Hosted Training Events
              </h2>
              <p className="mt-2 text-slate-700">
                Premium workshops hosted by wineries, cruise lines, and retreat
                venues—marketed directly to their audiences.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <PlaceholderImage label="Services / Training Image" />
          </div>
        </Container>
      </section>
    </>
  );
}
