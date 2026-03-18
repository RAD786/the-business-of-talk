import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pricing for workshops, private coaching, crisis consulting, and retainer packages from The Business of Talk.",
  alternates: { canonical: "/pricing" },
};

const halfDayWorkshops = [
  { label: "Up to 4 participants", price: "$2,500" },
  { label: "5 to 10 participants", price: "$4,000" },
  { label: "11 to 20 participants", price: "$6,000", note: "Delivered in 2 groups" },
  { label: "21 to 50 participants", price: "$10,500", note: "Delivered in 2 or more groups" },
  { label: "50+ participants", price: "Custom quote" },
];

const fullDayWorkshops = [
  { label: "Up to 4 participants", price: "$5,000" },
  { label: "5 to 10 participants", price: "$7,500" },
  { label: "11 to 20 participants", price: "$9,000", note: "Delivered in 2 groups" },
  { label: "21 to 50 participants", price: "$10,500", note: "Delivered in 2 or more groups" },
  { label: "50+ participants", price: "Custom quote" },
];

const coachingRates = [
  { label: "Private coaching, leadership role", price: "$300/hour" },
  { label: "Private coaching, secondary leadership or management", price: "$250/hour" },
  { label: "Semi-private leadership coaching for 2 people", price: "$350/hour" },
  { label: "Phone coaching", price: "$100/session" },
  { label: "Virtual coaching via Skype or FaceTime", price: "$200/hour" },
];

const consultingRates = [
  { label: "CEO and management team coaching", price: "$300 to $400/hour" },
  { label: "Emergency plan development and implementation", price: "$150/hour", note: "6-hour minimum" },
];

const retainers = [
  {
    name: "Level One",
    price: "$3,000/month",
    items: [
      "20 hours of communication consulting, presentation coaching, and/or media training each month",
      "Coaching time can be used by up to 3 individuals per month",
      "Includes materials, video recording equipment, local travel, instruction, videotaping, critique, and digital video access",
      "Priority scheduling above non-contract clients",
      "24/7 phone access",
    ],
  },
  {
    name: "Level Two",
    price: "$5,000/month",
    items: [
      "30 hours of communication consulting, presentation coaching, and/or media training each month",
      "Coaching time can be used by up to 5 individuals per month",
      "Includes everything in Level One",
    ],
  },
  {
    name: "Level Three",
    price: "$7,500/month",
    items: [
      "Choose one option: 35 hours of individual coaching; or 20 hours of coaching plus one half-day seminar for 4 people; or 10 hours of coaching plus one half-day seminar for 8 people",
      "Private coaching time can be used by up to 7 individuals",
      "Includes everything in Level One",
    ],
  },
  {
    name: "Top Priority Package",
    price: "$10,000/month",
    note: "Industry non-compete package",
    items: [
      "Choose one option: up to 50 hours of individual coaching; or 25 hours of coaching plus 2 half-day seminars for 4 people each; or 10 hours of coaching plus 3 half-day seminars for 4 people each",
      "Large-group communication training sessions may be substituted for half-day seminars",
      "Exclusive industry non-compete client contract",
      "Top-priority scheduling",
      "Individual coaching can be used by unlimited partners, associates, managers, and employees",
      "Includes materials, video recording equipment, local travel, instruction, videotaping, critique, and digital video access",
      "No cancellation fees, even with same-day notice",
      "24/7 availability for last-minute opportunities, special-circumstance consultation, and speaker preparation by phone or video",
    ],
  },
];

function PriceList({
  items,
}: {
  items: { label: string; price: string; note?: string }[];
}) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="surface-card flex flex-col gap-2 rounded-[1.6rem] p-5 md:flex-row md:items-start md:justify-between"
        >
          <div>
            <p className="font-semibold text-slate-900">{item.label}</p>
            {item.note ? <p className="mt-1 text-sm text-slate-600">{item.note}</p> : null}
          </div>
          <p className="text-lg font-semibold text-[var(--accent-deep)]">{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />

      <section className="pb-16 pt-3 md:pb-24 md:pt-6">
        <Container>
          <p className="eyebrow">Investment</p>
          <h1 className="section-title mt-5">Pricing</h1>

          <p className="lede mt-6">
            Pricing is structured around workshops, private coaching,
            consulting, and long-term retainer support. Larger engagements and
            custom formats can be scoped to fit your team and goals.
          </p>

          <div className="mt-12 grid gap-10">
            <section className="glass-panel rounded-[2.5rem] p-8 md:p-10">
              <h2 className="text-3xl font-semibold tracking-tight">
                Group Workshops and Masterclasses
              </h2>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-slate-900">Half-Day</h3>
                  <PriceList items={halfDayWorkshops} />
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold text-slate-900">Full-Day</h3>
                  <PriceList items={fullDayWorkshops} />
                </div>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="glass-panel rounded-[2.25rem] p-8">
                <h2 className="text-3xl font-semibold tracking-tight">
                  Communication Coaching and Media Appearance Prep
                </h2>
                <div className="mt-6">
                  <PriceList items={coachingRates} />
                </div>
              </div>

              <div className="glass-panel rounded-[2.25rem] p-8">
                <h2 className="text-3xl font-semibold tracking-tight">
                  Corporate Impression Management and Crisis Consulting
                </h2>
                <div className="mt-6">
                  <PriceList items={consultingRates} />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight">
                Monthly Retainer Packages
              </h2>
              <p className="mt-3 text-slate-700">
                Retainer packages require a 12-month minimum commitment.
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {retainers.map((retainer) => (
                  <div key={retainer.name} className="surface-card ring-accent rounded-[2.25rem] p-7">
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold">{retainer.name}</h3>
                        {retainer.note ? (
                          <p className="mt-1 text-sm uppercase tracking-[0.14em] text-[var(--accent-deep)]">
                            {retainer.note}
                          </p>
                        ) : null}
                      </div>
                      <p className="text-lg font-semibold text-[var(--accent-deep)]">{retainer.price}</p>
                    </div>

                    <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700">
                      {retainer.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-panel rounded-[2.25rem] p-8">
              <p className="eyebrow">Custom Scope</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                Need a custom pricing structure?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
                If your organization needs a custom workshop size, ongoing
                spokesperson support, or a mixed training package, we can build
                a pricing structure around your team.
              </p>
              <div className="mt-7">
                <Link href="/contact" className="btn-primary px-6 py-3 text-sm">
                  Request a Consultation
                </Link>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
