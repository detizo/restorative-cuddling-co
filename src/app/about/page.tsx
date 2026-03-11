import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <main style={{ background: "var(--cream)" }}>
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center" style={{ background: "var(--cream)" }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "var(--gold)" }}>
          About
        </p>
        <h1
          className="text-5xl md:text-6xl leading-tight max-w-2xl mx-auto"
          style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
        >
          Hi. I&apos;m Justin.
        </h1>
      </section>

      {/* Story */}
      <section className="py-12 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/images/genuine-hug.jpg"
                alt="Justin giving a warm, genuine embrace"
                fill
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={1}>
          <div className="py-4">
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--foreground)", fontWeight: 300 }}>
              I grew up with a mother who made physical affection feel like the most natural thing in the world. We&apos;d take naps together when I was a kid — I&apos;d curl up next to her and just stay there, completely at ease, completely held. That feeling never left me. I love snuggling. Genuinely, deeply love it.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--foreground)", fontWeight: 300 }}>
              Now I&apos;m a father, and I&apos;ve passed that same warmth down to my children. Our daily morning tradition begins with snuggling in bed and writing together — it&apos;s one of the most grounding parts of my day, and theirs.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--foreground)", fontWeight: 300 }}>
              People have always told me I have a gift for creating space that feels safe. I connect with people in a platonic way — warmly, genuinely, without agenda — and I carry a kind of calm, grounded, reassuring energy that seems to help people exhale.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)", fontWeight: 300 }}>
              I started Restorative Cuddling Co. because I believe in what touch can do. Not as a novelty. Not as a workaround. As a real, necessary, deeply human thing — the kind of thing that can genuinely restore a person.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6" style={{ background: "var(--blush)" }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2
              className="text-4xl md:text-5xl text-center mb-16"
              style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
            >
              What I believe
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                heading: "Presence is a practice.",
                body: "A session is not me going through motions. I arrive fully — prepared, grounded, and genuinely invested in how you are doing. You will feel the difference.",
              },
              {
                heading: "Safety is not a footnote.",
                body: "Consent and comfort are not boxes to check at the start of a session. They are the container that everything else lives inside of. We tend to them continuously.",
              },
              {
                heading: "You already know what you need.",
                body: "My job is not to tell you what healing looks like. It is to create the conditions where your body can remember what it already knows — that it is safe, that it is held, that it can rest.",
              },
            ].map((item) => (
              <div key={item.heading}>
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none" className="mb-6" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="2.5" fill="var(--gold)" opacity="0.7" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                    <line key={a} x1="24" y1="24" x2={24 + 20 * Math.cos((a * Math.PI) / 180)} y2={24 + 20 * Math.sin((a * Math.PI) / 180)} stroke="var(--gold)" strokeWidth={a % 90 === 0 ? "1" : "0.5"} opacity={a % 90 === 0 ? "0.6" : "0.35"} />
                  ))}
                  {[0, 90, 180, 270].map((a) => (
                    <circle key={a} cx={24 + 8 * Math.cos((a * Math.PI) / 180)} cy={24 + 8 * Math.sin((a * Math.PI) / 180)} r="1.5" fill="var(--gold)" opacity="0.4" />
                  ))}
                </svg>
                <h3
                  className="text-xl mb-4"
                  style={{ color: "var(--teal)", fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}
                >
                  {item.heading}
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--foreground)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo divider */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <Image
          src="/images/embrace-sofa.jpg"
          alt="Two people in a peaceful, restful embrace"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "rgba(45,78,76,0.15)" }} />
      </div>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--teal-deep)" }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="text-4xl mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, color: "var(--cream)" }}
          >
            Want to work together?
          </h2>
          <p className="text-lg mb-10" style={{ color: "var(--cream)", opacity: 0.85, fontWeight: 300 }}>
            Sessions are application-only. Start with a short form and we&apos;ll schedule a free call from there.
          </p>
          <Link
            href="/apply"
            className="inline-block px-12 py-4 text-xs tracking-widest uppercase transition-all hover:opacity-90"
            style={{ background: "var(--cream)", color: "var(--teal-deep)", letterSpacing: "0.15em" }}
          >
            Apply for a Session
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
