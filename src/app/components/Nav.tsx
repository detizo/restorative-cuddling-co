"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/apply", label: "Apply" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 px-6 py-5"
      style={{ background: "rgba(250,247,242,0.93)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(237,228,220,0.6)" }}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl md:text-2xl"
          style={{ fontFamily: "Cormorant Garamond, serif", color: "var(--teal-deep)", letterSpacing: "0.1em" }}
        >
          Restorative Cuddling Co.
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-xs" style={{ color: "var(--warm-gray)", letterSpacing: "0.15em" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="uppercase tracking-widest transition-colors hover:text-[var(--teal)]"
              style={{ color: pathname === l.href ? "var(--teal)" : undefined }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px transition-all" style={{ background: "var(--teal-deep)", transform: open ? "rotate(45deg) translate(2px, 2px)" : undefined }} />
          <span className="block w-6 h-px transition-all" style={{ background: "var(--teal-deep)", opacity: open ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all" style={{ background: "var(--teal-deep)", transform: open ? "rotate(-45deg) translate(2px, -2px)" : undefined }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden pt-4 pb-6 px-6 flex flex-col gap-5" style={{ borderTop: "1px solid var(--blush)", marginTop: "1rem" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest"
              style={{ color: pathname === l.href ? "var(--teal)" : "var(--warm-gray)" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
