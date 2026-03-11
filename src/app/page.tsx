import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--cream)" }}>
      <Nav />

      {/* Hero — split layout */}
      <section className="min-h-screen grid md:grid-cols-2">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-8 md:px-16 pt-32 pb-16 md:pt-0" style={{ background: "var(--cream)" }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--gold)" }}>
            Salt Lake City &bull; Application Only
          </p>
          <h1
            className="text-5xl md:text-6xl leading-tight mb-7"
            style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
          >
            You deserve<br />
            to be{" "}
            <em style={{ color: "var(--teal)" }}>held.</em>
          </h1>
          <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: "var(--warm-gray)", fontWeight: 300 }}>
            Safe, professional, deeply nourishing platonic touch for your nervous system.
            No agenda. No performance. Just warmth, presence, and rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/apply"
              className="px-10 py-4 text-xs tracking-widest uppercase text-center transition-all hover:opacity-90"
              style={{ background: "var(--teal)", color: "var(--cream)", letterSpacing: "0.15em" }}
            >
              Apply for a Session
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 text-xs tracking-widest uppercase text-center transition-all hover:opacity-70"
              style={{ border: "1px solid var(--teal-light)", color: "var(--teal-deep)", letterSpacing: "0.15em" }}
            >
              See What&apos;s Offered
            </Link>
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative min-h-[50vh] md:min-h-screen">
          <Image
            src="/images/together.jpg"
            alt="Two people sitting together in a warm, restful embrace"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Touch is not a luxury */}
      <section className="py-24 px-6" style={{ background: "var(--blush)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/images/genuine-hug.jpg"
                alt="A warm, genuine embrace"
                fill
                className="object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div>
              <h2
                className="text-4xl md:text-5xl mb-8 leading-snug"
                style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
              >
                Touch is not<br />a luxury.
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--foreground)", fontWeight: 300 }}>
                Before a newborn knows hunger, before it knows language or light — it knows arms. It knows warmth. It knows the feeling of another body saying{" "}
                <em>you are here, you are safe, you are not alone.</em>
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--foreground)", fontWeight: 300 }}>
                That need does not go away when we grow up. It just goes unmet.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)", fontWeight: 300 }}>
                Co-regulation — two nervous systems finding harmony together — is one of the most quietly powerful things a human being can experience. That is what a session offers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What a session feels like */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2
              className="text-4xl md:text-5xl text-center mb-16"
              style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
            >
              What a session feels like
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                label: "You are met.",
                body: "Every session begins with a real conversation — not a checklist. How are you arriving today? What does your body need? You are heard before anything else happens.",
              },
              {
                label: "You are held.",
                body: "Restorative platonic touch in a quiet, thoughtfully prepared space. Warm lighting, a healing soundscape, soft blankets, and unhurried time.",
              },
              {
                label: "You are nourished.",
                body: "You leave with your nervous system genuinely reset — grounded, softer, less alone in the world. That feeling is the whole point.",
              },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="flex justify-center mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="2.5" fill="var(--gold)" opacity="0.7" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                      <line key={a} x1="24" y1="24" x2={24 + 20 * Math.cos((a * Math.PI) / 180)} y2={24 + 20 * Math.sin((a * Math.PI) / 180)} stroke="var(--gold)" strokeWidth={a % 90 === 0 ? "1" : "0.5"} opacity={a % 90 === 0 ? "0.6" : "0.35"} />
                    ))}
                    {[0, 90, 180, 270].map((a) => (
                      <circle key={a} cx={24 + 8 * Math.cos((a * Math.PI) / 180)} cy={24 + 8 * Math.sin((a * Math.PI) / 180)} r="1.5" fill="var(--gold)" opacity="0.4" />
                    ))}
                  </svg>
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{ color: "var(--teal)", fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}
                >
                  {item.label}
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--warm-gray)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cozy image divider */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <Image
          src="/images/cozy-blanket.jpg"
          alt="Two pairs of feet resting on a soft blanket"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "rgba(45,78,76,0.18)" }} />
      </div>

      {/* Safety */}
      <section className="py-20 px-6" style={{ background: "var(--teal-deep)", color: "var(--cream)" }}>
        <Reveal>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
          >
            Your safety is the foundation.
          </h2>
          <p className="text-lg leading-relaxed mb-5" style={{ fontWeight: 300, opacity: 0.88 }}>
            Every session begins with a warm consent conversation — not a legal disclaimer, but a real exchange about what feels right for you. Nothing happens without a clear, enthusiastic yes.
          </p>
          <p className="text-lg leading-relaxed" style={{ fontWeight: 300, opacity: 0.88 }}>
            Sessions are application-only. A free 15-minute consultation call always comes first — no pressure, just a conversation to make sure it feels like a good fit.
          </p>
        </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center" style={{ background: "var(--cream)" }}>
        <Reveal>
        <div className="max-w-xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "var(--gold)" }}>
            Ready when you are
          </p>
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
          >
            The first step is just<br />a conversation.
          </h2>
          <p className="mb-10 text-lg" style={{ color: "var(--warm-gray)", fontWeight: 300 }}>
            Apply and we&apos;ll schedule a free 15-minute call. No obligation. No weirdness. Just two humans talking.
          </p>
          <Link
            href="/apply"
            className="inline-block px-12 py-4 text-xs tracking-widest uppercase transition-all hover:opacity-90"
            style={{ background: "var(--teal)", color: "var(--cream)", letterSpacing: "0.15em" }}
          >
            Apply Now
          </Link>
        </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
