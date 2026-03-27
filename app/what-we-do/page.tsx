import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Communication coaching, media training, and crisis messaging for leaders who speak to large audiences.",
  alternates: { canonical: "/what-we-do" },
};

const serviceAreas = [
  "Presentation coaching",
  "Impression management for individuals and organizations",
  "Media strategy development and implementation",
  "Corporate leadership speaking skills",
  "Communication style analysis",
  "Executive employment interviews",
  "Reputation management, including crisis planning, training, and implementation",
  "Media training for TV, radio, print interviews, delivering bad news, Q&A, web conferencing, and teleprompter use",
];

const coreServices = [
  {
    title: "Executive and Public-Speaker Coaching",
    description:
      "We help leaders structure messages, tell compelling stories, command attention, and project confidence in any room.",
    href: "/executive-communication-coaching",
    cta: "Executive Communication Coaching",
  },
  {
    title: "Media Training",
    description:
      "Prepare for interviews, tough questions, soundbites, and live coverage with on-camera drills, message discipline, and realistic rehearsal.",
    href: "/media-training",
    cta: "Media Training",
  },
  {
    title: "Crisis Communication",
    description:
      "From incident response to reputation recovery, we prepare organizations to communicate with clarity, control, and credibility.",
    href: "/crisis-communications",
    cta: "Crisis Communications Consulting",
  },
  {
    title: "Workshops and Custom Communication Solutions",
    description:
      "We offer individual coaching, group training, corporate workshops, and tailored communication programs built around your audience, goals, and level of visibility.",
    href: "/pricing",
    cta: "Workshops and Pricing",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "What We Do", path: "/what-we-do" },
        ])}
      />

      <section className="pb-16 pt-3 md:pb-24 md:pt-6">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="eyebrow">Services</p>
              <h1 className="section-title mt-5">What We Do</h1>

              <p className="lede mt-6">
                The Business of Talk delivers practical, high-impact communication
                training for leaders who must speak clearly, confidently, and
                credibly, especially when the stakes are high.
              </p>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
                Our services are designed to strengthen public image, improve
                communication performance, support business outcomes, and build
                corporate, professional, and personal confidence.
              </p>
            </div>

            <div className="ring-accent surface-card relative aspect-[3/2] w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/images/services-training.png"
                alt="Services and training session"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {coreServices.map((service) => (
              <div key={service.title} className="surface-card ring-accent rounded-[2rem] p-7">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="mt-3 leading-8 text-slate-700">{service.description}</p>
                <div className="mt-5">
                  <Link href={service.href} className="btn-secondary px-5 py-3 text-sm">
                    Explore {service.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <div className="glass-panel rounded-[2.25rem] p-8">
              <p className="eyebrow">Expanded Scope</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">Service Areas</h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {serviceAreas.map((service) => (
                  <div key={service} className="surface-card rounded-[1.5rem] p-5">
                    <p className="leading-7 text-slate-700">{service}</p>
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
