import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const faqs = [
  {
    category: "The basics",
    questions: [
      {
        q: "Is this sexual in any way?",
        a: "No. Full stop. Every session is entirely platonic — no sexual touch, no sexual energy, no ambiguity. If at any point something feels off, you say so and it stops immediately. The boundary is clear, consistent, and non-negotiable.",
      },
      {
        q: "Isn&apos;t this... weird?",
        a: "It can feel that way at first — we live in a culture that has made touch unfamiliar, even a little scary. But the science is clear: platonic touch is one of the most powerful tools we have for nervous system regulation, stress relief, and feeling connected. What feels weird is how rare it has become, not the thing itself.",
      },
      {
        q: "Who is this for?",
        a: "People going through transitions. People who are lonely, grieving, or burned out. People who haven&apos;t been held in a long time and feel it. People healing from trauma. People who are curious and just want to feel what co-regulation actually feels like. People who are doing everything right and still feel like something is missing. There is no single type of person who benefits from this — there is just the human need for safe, caring touch.",
      },
      {
        q: "Do I have to be in crisis to come?",
        a: "Not at all. Some people arrive in real pain. Others come for maintenance — like a massage or therapy appointment that is simply part of how they take care of themselves. You do not need a reason beyond wanting to feel rested and held.",
      },
    ],
  },
  {
    category: "Safety & consent",
    questions: [
      {
        q: "How does consent work?",
        a: "Consent is not a form you sign and forget. Every session begins with a real conversation about what feels comfortable — what positions feel okay, what touch feels welcome, what you want more or less of. You can change your mind at any point. You can ask to stop anything at any time. You are in charge of your own experience.",
      },
      {
        q: "What if I feel uncomfortable during the session?",
        a: "You say so. That is the whole point of the check-in and the ongoing consent conversation — you always have the language and the permission to redirect or stop. There is no awkwardness in saying &ldquo;I&apos;d rather not&rdquo; or &ldquo;can we shift?&rdquo; That is exactly what those words are for.",
      },
      {
        q: "Why is it application-only?",
        a: "Because this work requires mutual trust. The application and consultation call give us both a chance to feel whether it is a good fit before we are in a room together. I take my clients seriously, and I want them to take this seriously too. The process protects everyone.",
      },
      {
        q: "What happens on the free consultation call?",
        a: "It is just a conversation — 15 to 30 minutes, video or phone, no pressure. We talk about what brings you here, what you are looking for, any questions or concerns you have. It is a chance to hear each other&apos;s voices, get a sense of the vibe, and decide together if we want to move forward. Nothing is required of you except showing up honestly.",
      },
    ],
  },
  {
    category: "Practical questions",
    questions: [
      {
        q: "What should I wear?",
        a: "Comfortable clothing you can relax in — sweats, soft pants, a loose top. You stay fully clothed for the entire session.",
      },
      {
        q: "Where do sessions take place?",
        a: "Sessions take place in your space or mine — whichever feels right. I bring the full experience to you. If you prefer, I also have a private, thoughtfully prepared space in the Salt Lake City area. Details are confirmed after your consultation call.",
      },
      {
        q: "Is there a travel fee?",
        a: "No additional fee within the Salt Lake Valley. A $30 travel fee applies for locations outside the Salt Lake Valley, up to 45 miles away. In-home sessions are paid in advance.",
      },
      {
        q: "How do I pay?",
        a: "Payment details are confirmed during your consultation call. Session fees are due before or at the start of the session.",
      },
      {
        q: "Can I book multiple sessions?",
        a: "Yes, and many clients find that sessions become more restorative over time as the nervous system builds familiarity and trust. Returning clients receive priority scheduling.",
      },
    ],
  },
  {
    category: "About Justin",
    questions: [
      {
        q: "What is your background?",
        a: "My professional background is in live audio/visual production. I am not a licensed massage therapist, and I do not offer massage. What I offer is intentional, consensual platonic touch and nervous system co-regulation — a different thing entirely. I have developed my sensitivity to energy and touch through years of lived experience, bodywork received, and careful attention.",
      },
      {
        q: "Why did you start doing this?",
        a: "Honestly? Because I love it, I&apos;m good at it, and I have watched safe, platonic touch genuinely transform people&apos;s lives, including my own. I grew up in a household where physical affection was normal and nourishing, and I have always been able to create that kind of safe, warm space for people. It felt right to make it intentional.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <main style={{ background: "var(--cream)" }}>
      <Nav />

      {/* Header */}
      <section className="pt-36 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "var(--gold)" }}>
          Common questions
        </p>
        <h1
          className="text-5xl md:text-6xl mb-6 max-w-xl mx-auto leading-tight"
          style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
        >
          You&apos;re allowed to have questions.
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--warm-gray)", fontWeight: 300 }}>
          Curiosity is welcome here. So is the part of you that feels a little uncertain. Let&apos;s talk through it.
        </p>
      </section>

      {/* FAQ content */}
      <section className="py-12 pb-24 px-6">
        <div className="max-w-2xl mx-auto space-y-16">
          {faqs.map((section, i) => (
            <Reveal key={section.category} delay={i < 3 ? i + 1 : 0}>
            <div>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-8 pb-3"
                style={{ color: "var(--teal)", borderBottom: "1px solid var(--blush)" }}
              >
                {section.category}
              </p>
              <div className="space-y-8">
                {section.questions.map((item) => (
                  <div key={item.q}>
                    <h3
                      className="text-xl mb-3"
                      style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif" }}
                      dangerouslySetInnerHTML={{ __html: item.q }}
                    />
                    <p
                      className="leading-relaxed"
                      style={{ color: "var(--foreground)", fontWeight: 300 }}
                      dangerouslySetInnerHTML={{ __html: item.a }}
                    />
                  </div>
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--blush)" }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-5"
            style={{ color: "var(--teal-deep)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
          >
            Still have something on your mind?
          </h2>
          <p className="text-lg mb-10" style={{ color: "var(--foreground)", fontWeight: 300 }}>
            The consultation call exists exactly for this. Ask me anything — there are no wrong questions.
          </p>
          <Link
            href="/apply"
            className="inline-block px-12 py-4 text-xs tracking-widest uppercase transition-all hover:opacity-90"
            style={{ background: "var(--teal)", color: "var(--cream)", letterSpacing: "0.15em" }}
          >
            Apply for a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
