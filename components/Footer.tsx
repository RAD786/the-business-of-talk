import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <Container>
        <div className="py-10 grid gap-6 md:grid-cols-3">
          <div>
            <p className="font-semibold">{site.name}</p>
            <p className="mt-2 text-sm text-slate-600">{site.tagline}</p>
          </div>

          <div className="text-sm text-slate-600">
            <p className="font-medium text-slate-900">Pages</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/what-we-do">What We Do</Link></li>
              <li><Link href="/how-we-do-it">How We Do It</Link></li>
              <li><Link href="/who-we-work-with">Who We Work With</Link></li>
              <li><Link href="/bio">Bio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="text-sm text-slate-600">
            <p className="font-medium text-slate-900">Contact</p>
            <p className="mt-2">{site.city}</p>
            <p>{site.email}</p>
            <p>{site.phone}</p>
          </div>
        </div>

        <div className="pb-8 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
