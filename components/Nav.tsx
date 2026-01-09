import Link from "next/link";
import { Container } from "./Container";

const links = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/how-we-do-it", label: "How We Do It" },
  { href: "/who-we-work-with", label: "Who We Work With" },
  { href: "/bio", label: "Bio" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-semibold tracking-tight text-lg">
            The Business of Talk
          </Link>

          <nav className="hidden gap-6 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-slate-700 hover:text-slate-900">
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Book a Consultation
          </Link>
        </div>
      </Container>
    </header>
  );
}
