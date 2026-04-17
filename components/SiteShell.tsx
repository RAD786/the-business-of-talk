"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return <main className="overflow-x-hidden">{children}</main>;
  }

  return (
    <>
      <Nav />
      <main className="overflow-x-hidden pb-8 pt-[104px]">{children}</main>
      <Footer />
    </>
  );
}
