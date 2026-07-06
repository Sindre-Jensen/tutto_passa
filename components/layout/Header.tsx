"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/rankings", label: "Rankings" },
  { href: "/stories", label: "Journal" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/newsletter", label: "Subscribe", highlight: true },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`z-50 w-full transition-colors duration-300 ${
        isHome
          ? "fixed top-0 border-b border-white/10 bg-black/20 backdrop-blur-md"
          : "sticky top-0 border-b border-soft-beige/80 bg-cream/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className={`font-display text-xl tracking-tight md:text-2xl ${
            isHome ? "text-white" : "text-deep-blue"
          }`}
        >
          Tutto Passa
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-utility text-[10px] transition-colors duration-200 ${
                isHome
                  ? link.highlight
                    ? "text-white underline underline-offset-4"
                    : "text-white/85 hover:text-white"
                  : link.highlight
                    ? "text-deep-blue underline underline-offset-4"
                    : "text-deep-blue hover:text-sage"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <nav className="flex items-center gap-5 lg:hidden">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-utility text-[9px] ${isHome ? "text-white/90" : "text-deep-blue"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
