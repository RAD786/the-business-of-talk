import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-900/8 bg-white">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div className="surface-card ring-accent rounded-[2rem] p-7">
            <p className="eyebrow">The Business of Talk</p>
            <p className="mt-4 max-w-md text-lg leading-8 text-slate-700">{site.tagline}</p>
          </div>

          <div className="surface-card rounded-[2rem] p-7 text-sm text-slate-700">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Pages</p>
            <ul className="mt-4 space-y-3">
              <li><Link href="/what-we-do" className="hover:text-slate-950">What We Do</Link></li>
              <li><Link href="/pricing" className="hover:text-slate-950">Pricing</Link></li>
              <li><Link href="/how-we-do-it" className="hover:text-slate-950">How We Do It</Link></li>
              <li><Link href="/who-we-work-with" className="hover:text-slate-950">Who We Work With</Link></li>
              <li><Link href="/bio" className="hover:text-slate-950">Bio</Link></li>
              <li><Link href="/contact" className="hover:text-slate-950">Contact</Link></li>
            </ul>
          </div>

          <div className="surface-card rounded-[2rem] p-7 text-sm text-slate-700">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Contact</p>
            <div className="mt-4 space-y-3">
              <p>{site.city}</p>
              <p>{site.email}</p>
              <p>{site.phone}</p>
            </div>
          </div>
        </div>

        <div className="pb-10 text-xs uppercase tracking-[0.12em] text-slate-500">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
