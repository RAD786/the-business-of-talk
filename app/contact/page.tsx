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

export default function ContactPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="py-14 md:py-20">
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>

          <p className="mt-4 text-lg text-slate-700 max-w-2xl">
            Tell us what you’re preparing for—keynote, media appearance, public meeting, or a crisis scenario—
            and we’ll respond promptly.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h2 className="text-xl font-semibold">Direct Contact</h2>

              <div className="mt-4 space-y-2 text-slate-700">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Phone:</span> {site.phone}
                </p>
                <p>
                  <span className="font-medium">Location:</span> {site.city}
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-sm text-slate-700">
                <p className="font-semibold">What to include in your message</p>
                <ul className="mt-2 space-y-1">
                  <li>• Your role and organization</li>
                  <li>• The speaking/media situation</li>
                  <li>• Your deadline</li>
                  <li>• Your biggest challenge</li>
                </ul>
              </div>
            </div>

            <form
              action="https://formspree.io/f/xojjaeww"
              method="POST"
              className="rounded-2xl border p-6"
            >
              <h2 className="text-xl font-semibold">Send a message</h2>

              <div className="mt-5 grid gap-4">
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Name</span>
                  <input
                    name="name"
                    required
                    className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-200"
                  />
                </label>

                <label className="grid gap-1">
                  <span className="text-sm font-medium">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-200"
                  />
                </label>

                <label className="grid gap-1">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-200"
                  />
                </label>

                <button className="rounded-xl bg-slate-900 px-5 py-3 text-white font-medium hover:bg-slate-800">
                  Send
                </button>

                <p className="text-xs text-slate-500">
                  (Replace <span className="font-medium">YOUR_FORM_ID</span> with your Formspree endpoint when ready.)
                </p>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
