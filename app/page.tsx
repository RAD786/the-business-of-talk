import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Under Construction",
  description:
    "The Business of Talk homepage is temporarily under construction.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <section className="pb-16 pt-3 md:pb-24 md:pt-6">
        <Container>
          <div className="glass-panel mx-auto max-w-3xl rounded-[2.5rem] p-8 text-center md:p-12">
            <p className="eyebrow">Temporary Update</p>
            <h1 className="section-title mt-5">Under Construction</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              The site is being updated and will be back shortly.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
