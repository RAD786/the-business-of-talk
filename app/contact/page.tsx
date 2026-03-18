import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book communication training, media coaching, or crisis readiness support with The Business of Talk.",
  alternates: { canonical: "/contact" },
};

const messageChecklist = [
  "Your role and organization",
  "The speaking or media situation",
  "Your timeline or deadline",
  "Your biggest communication challenge",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="pb-16 pt-3 md:pb-24 md:pt-6">
        <Container>
          <p className="eyebrow">Start the Conversation</p>
          <h1 className="section-title mt-5">Contact</h1>

          <p className="lede mt-6 max-w-3xl">
            Tell us what you are preparing for, whether it is a keynote, media
            appearance, public meeting, or crisis scenario, and we will respond
            promptly.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-panel rounded-[2.25rem] p-8">
              <h2 className="text-2xl font-semibold">Direct Contact</h2>

              <div className="mt-5 space-y-3 text-lg leading-8 text-slate-700">
                <p>
                  <span className="font-semibold text-slate-950">Email:</span>{" "}
                  <a className="underline decoration-[var(--accent)] underline-offset-4" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-950">Phone:</span> {site.phone}
                </p>
                <p>
                  <span className="font-semibold text-slate-950">Location:</span> {site.city}
                </p>
              </div>

              <div className="surface-card mt-8 rounded-[1.8rem] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-deep)]">
                  What to include
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                  {messageChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <form
              action="https://formspree.io/f/xojjaeww"
              method="POST"
              className="glass-panel rounded-[2.25rem] p-8"
            >
              <h2 className="text-2xl font-semibold">Send a message</h2>

              <div className="mt-6 grid gap-5">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Name</span>
                  <input
                    name="name"
                    required
                    className="rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[rgba(199,102,53,0.16)]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[rgba(199,102,53,0.16)]"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="rounded-2xl border border-slate-900/10 bg-white/80 px-4 py-3 outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[rgba(199,102,53,0.16)]"
                  />
                </label>

                <button className="btn-primary mt-2 w-fit px-6 py-3 text-sm">
                  Send
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
