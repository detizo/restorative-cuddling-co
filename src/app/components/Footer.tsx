import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 text-center text-sm" style={{ borderTop: "1px solid var(--blush)" }}>
      <p
        className="tracking-widest uppercase mb-2"
        style={{ color: "var(--teal-deep)", letterSpacing: "0.12em", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
      >
        Restorative Cuddling Co.
      </p>
      <p className="mb-4" style={{ color: "var(--warm-gray)" }}>
        Professional platonic touch &bull; Salt Lake City, Utah &bull; Application only
      </p>
      <div className="flex justify-center gap-6 text-xs uppercase tracking-widest" style={{ color: "var(--warm-gray)" }}>
        <Link href="/about" className="hover:text-[var(--teal)] transition-colors">About</Link>
        <Link href="/services" className="hover:text-[var(--teal)] transition-colors">Services</Link>
        <Link href="/faq" className="hover:text-[var(--teal)] transition-colors">FAQ</Link>
        <Link href="/apply" className="hover:text-[var(--teal)] transition-colors">Apply</Link>
      </div>
      <p className="mt-8 text-xs" style={{ color: "var(--warm-gray)", opacity: 0.5 }}>
        &copy; {new Date().getFullYear()} Restorative Cuddling Co. All rights reserved.
      </p>
    </footer>
  );
}
