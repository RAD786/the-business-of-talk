"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";

const links = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/how-we-do-it", label: "How We Do It" },
  { href: "/what-sets-us-apart", label: "What Sets Us Apart" },
  { href: "/bio", label: "The Business Of Talk's Toria Tolley" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/8 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-[84px] items-center justify-between gap-4 py-3">
          <Link
            href="/"
            className="-ml-1 flex shrink-0 items-center"
            aria-label="The Business of Talk home"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/images/new-ob-tbot-logo.png"
              alt="The Business of Talk"
              width={851}
              height={440}
              className="h-12 w-auto drop-shadow-[0_10px_20px_rgba(20,33,58,0.18)] md:h-16"
              priority
            />
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-3 md:flex">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-[var(--accent)] hover:text-white active:bg-[var(--accent-deep)] active:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 text-slate-900 hover:border-[var(--accent-deep)] hover:bg-[var(--accent)] hover:text-white active:border-[var(--accent-deep)] active:bg-[var(--accent-deep)] active:text-white md:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="flex w-5 flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>

            <Link href="/contact" className="btn-primary hidden shrink-0 whitespace-nowrap px-5 py-3 text-sm md:inline-flex">
              Contact
            </Link>
          </div>
        </div>

        {isOpen ? (
          <div className="pb-4 md:hidden">
            <div className="glass-panel rounded-[1.75rem] p-3">
              <nav className="grid gap-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-800 hover:bg-[var(--accent)] hover:text-white active:bg-[var(--accent-deep)] active:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="btn-primary mt-2 px-5 py-3 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
