import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

/* Compass starburst ornament — matches homepage & about page */
function StepStar() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="2.5" fill="var(--gold)" opacity="0.7" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line key={a} x1="24" y1="24" x2={24 + 20 * Math.cos((a * Math.PI) / 180)} y2={24 + 20 * Math.sin((a * Math.PI) / 180)} stroke="var(--gold)" strokeWidth={a % 90 === 0 ? "1" : "0.5"} opacity={a % 90 === 0 ? "0.6" : "0.35"} />
      ))}
      {[0, 90, 180, 270].map((a) => (
        <circle key={a} cx={24 + 8 * Math.cos((a * Math.PI) / 180)} cy={24 + 8 * Math.sin((a * Math.PI) / 180)} r="1.5" fill="var(--gold)" opacity="0.4" />
      ))}
    </svg>
  );
}

export default function Services() {
  return (
    <main style={{ background: "var(--cream)" }}>
      <Nav />

      {/* Header */}
      <section className="pt-36 pb-16 px-6 text-center" style={{ background: "var(--cream)" }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "var(--gold)" }}>
          What&apos;s Offered
        </p>
        <h1
          className="text-5xl md:text-6xl leading-tight mb-6 max-w-2xl mx-auto"
          style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
        >
          Sessions designed<br />to restore you.
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--warm-gray)", fontWeight: 300 }}>
          Every session is application-only and begins with a free consultation call.
          This work is personal — so the process of getting here should be, too.
        </p>
      </section>

      {/* How it works */}
      <section className="py-6 px-6 pb-16">
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { svg: <StepStar />, label: "Apply", body: "Fill out a short form so I can learn a bit about you and what you&apos;re looking for." },
            { svg: <StepStar />, label: "Free consultation call", body: "A 15\u201330 minute video or phone call \u2014 no pressure, just a real conversation to see if it feels like a fit." },
            { svg: <StepStar />, label: "Book your session", body: "Once we both feel good, we schedule your session and I prepare everything for you." },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-center mb-4">{item.svg}</div>
              <h3
                className="text-xl mb-3"
                style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif" }}
              >
                {item.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)", fontWeight: 300 }}
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Divider image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src="/images/embrace-sofa.jpg"
          alt="Two people in a warm, restful embrace on a sofa"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "rgba(45,78,76,0.2)" }} />
      </div>

      {/* Side-by-side session tiers */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2
              className="text-4xl md:text-5xl text-center mb-16"
              style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
            >
              Choose your experience
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tier 1 */}
            <Reveal delay={1}>
            <div className="p-8 md:p-10 flex flex-col h-full" style={{ background: "var(--blush)" }}>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>Tier 1</p>
              <h3
                className="text-3xl mb-2"
                style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
              >
                Restorative Session
              </h3>
              <p className="text-xl mb-6" style={{ color: "var(--teal)", fontFamily: "Cormorant Garamond, serif" }}>
                $150 &mdash; 60 minutes
              </p>
              <p className="leading-relaxed mb-8" style={{ color: "var(--foreground)", fontWeight: 300 }}>
                The core experience. You will be met, heard, held, and nourished — from the first moment to the last. Thoughtfully paced so nothing feels rushed, and everything feels intentional.
              </p>
              <div className="space-y-4 mb-8 flex-1">
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>~15 min</p>
                  <p className="text-sm font-medium mb-1" style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif" }}>Arrival &amp; Opening</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)", fontWeight: 300 }}>
                    A real check-in, gentle breathwork, and a warm consent conversation.
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>~40 min</p>
                  <p className="text-sm font-medium mb-1" style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif" }}>The Session</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)", fontWeight: 300 }}>
                    Restorative platonic touch in a carefully prepared space — curated soundscape, soft lighting, weighted or soft blanket available.
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>~5 min</p>
                  <p className="text-sm font-medium mb-1" style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif" }}>Closing</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)", fontWeight: 300 }}>
                    A gentle transition. Feet on the floor, a glass of water, a few breaths together, and a brief verbal check-out.
                  </p>
                </div>
              </div>
              <Link
                href="/apply"
                className="block text-center px-8 py-4 text-xs tracking-widest uppercase transition-all hover:opacity-90"
                style={{ background: "var(--teal)", color: "var(--cream)", letterSpacing: "0.15em" }}
              >
                Apply Now
              </Link>
            </div>
            </Reveal>

            {/* Tier 2 */}
            <Reveal delay={2}>
            <div className="p-8 md:p-10 flex flex-col h-full" style={{ background: "var(--teal-deep)", color: "var(--cream)" }}>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>Tier 2 — Returning Clients Only</p>
              <h3
                className="text-3xl mb-2"
                style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
              >
                Deep Restorative Experience
              </h3>
              <p className="text-xl mb-6" style={{ color: "var(--teal-light)", fontFamily: "Cormorant Garamond, serif" }}>
                $300 &mdash; 120 minutes
              </p>
              <p className="leading-relaxed mb-8" style={{ opacity: 0.88, fontWeight: 300 }}>
                A complete recalibration. Not a longer version of the first session — a full journey with a beginning, middle, and end. More space to arrive, more time to go deep, more room to integrate.
              </p>
              <div className="space-y-4 mb-8 flex-1">
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>~25 min</p>
                  <p className="text-sm font-medium mb-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>Arrival &amp; Opening the Space</p>
                  <p className="text-sm leading-relaxed" style={{ opacity: 0.78, fontWeight: 300 }}>
                    Extended heart-to-heart check-in, ceremonial cacao or tea, and a warm consent conversation to set the tone for everything that follows.
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>~70 min</p>
                  <p className="text-sm font-medium mb-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>Restorative Touch Journey</p>
                  <p className="text-sm leading-relaxed" style={{ opacity: 0.78, fontWeight: 300 }}>
                    An intentional arc of restorative touch. Music, lighting, blankets, touch — every detail is curated around you and what your body needs. This is a deeper, more personalized session with room to truly settle in.
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>~10 min</p>
                  <p className="text-sm font-medium mb-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>Integration &amp; Closing</p>
                  <p className="text-sm leading-relaxed" style={{ opacity: 0.78, fontWeight: 300 }}>
                    Slow transition, grounding snack, reflective check-out, a meaningful take-home token, and an optional next-day follow-up note.
                  </p>
                </div>
              </div>
              <Link
                href="/apply"
                className="block text-center px-8 py-4 text-xs tracking-widest uppercase transition-all hover:opacity-90"
                style={{ background: "var(--cream)", color: "var(--teal-deep)", letterSpacing: "0.15em" }}
              >
                Apply Now
              </Link>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-6" style={{ background: "var(--blush)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
          >
            Where sessions are held
          </h2>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--foreground)", fontWeight: 300 }}>
            Every session takes place in your space or mine — whichever feels right. I bring the full experience to you: the soundscape, the lighting, the blankets, all of it. Your home becomes the healing room.
          </p>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--foreground)", fontWeight: 300 }}>
            If you prefer, sessions can also be held in a private, thoughtfully prepared space in the Salt Lake City area — clean, quiet, and set with intention.
          </p>
          <p className="text-sm" style={{ color: "var(--warm-gray)", fontWeight: 300 }}>
            No additional travel fee within the Salt Lake Valley. A $30 travel fee applies for locations outside the Salt Lake Valley, up to 45 miles away. In-home sessions are paid in advance.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--teal-deep)" }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="text-4xl mb-5"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, color: "var(--cream)" }}
          >
            Ready to begin?
          </h2>
          <p className="text-lg mb-10" style={{ color: "var(--cream)", opacity: 0.85, fontWeight: 300 }}>
            Applications are reviewed personally. A free consultation call comes first — always.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="px-10 py-4 text-xs tracking-widest uppercase transition-all hover:opacity-90"
              style={{ background: "var(--cream)", color: "var(--teal-deep)", letterSpacing: "0.15em" }}
            >
              Apply Now
            </Link>
            <Link
              href="/faq"
              className="px-10 py-4 text-xs tracking-widest uppercase transition-all hover:opacity-70"
              style={{ border: "1px solid rgba(250,247,242,0.4)", color: "var(--cream)", letterSpacing: "0.15em" }}
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
