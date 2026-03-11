"use client";
import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  background: "var(--cream)",
  border: "1px solid var(--blush)",
  color: "var(--foreground)",
  fontFamily: "Jost, sans-serif",
  fontWeight: 300,
  fontSize: "1rem",
  outline: "none",
  borderRadius: "2px",
};

const labelStyle = {
  display: "block",
  fontSize: "0.75rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  color: "var(--warm-gray)",
  marginBottom: "8px",
};

const steps = [
  {
    id: "welcome",
    heading: "Let\u2019s start with a conversation.",
    sub: "This isn\u2019t a checkout form. It\u2019s the beginning of something intentional. Take your time \u2014 there are no right or wrong answers.",
  },
  {
    id: "basics",
    heading: "First, the basics.",
    sub: "Just enough so I know who I\u2019m talking to.",
  },
  {
    id: "about-you",
    heading: "Tell me a little about you.",
    sub: "No pressure to have a neat answer. Just share what feels true.",
  },
  {
    id: "body",
    heading: "Your body, your terms.",
    sub: "Anything that helps me show up better for you.",
  },
  {
    id: "consent",
    heading: "One last thing.",
    sub: "Before we move forward together.",
  },
];

export default function Apply() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    referral: "",
    referralOther: "",
    whyHere: "",
    hoping: "",
    physical: "",
    safe: "",
    consent: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function next() {
    setDirection("forward");
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function back() {
    setDirection("back");
    setStep((s) => Math.max(s - 1, 0));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Wire up to Resend email API for actual submission
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* Can we proceed from the current step? */
  function canProceed(): boolean {
    switch (step) {
      case 0:
        return true; // welcome
      case 1:
        return form.name.trim() !== "" && form.email.trim() !== "";
      case 2:
        return form.whyHere.trim() !== "";
      case 3:
        return true; // body info is optional
      case 4:
        return form.consent;
      default:
        return true;
    }
  }

  if (submitted) {
    return (
      <main style={{ background: "var(--cream)" }}>
        <Nav />
        <section className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="max-w-xl mx-auto text-center">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              className="mx-auto mb-8"
            >
              <circle cx="28" cy="28" r="4" fill="var(--gold)" opacity="0.7" />
              {[0, 60, 120, 180, 240, 300].map((a) => (
                <path
                  key={a}
                  d="M28 28 Q32 18 28 8 Q24 18 28 28"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="0.8"
                  opacity="0.5"
                  transform={`rotate(${a} 28 28)`}
                />
              ))}
              <circle
                cx="28"
                cy="28"
                r="20"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="0.4"
                opacity="0.3"
              />
            </svg>
            <h1
              className="text-4xl md:text-5xl mb-6"
              style={{
                color: "var(--teal-deep)",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
              }}
            >
              Thank you, {form.name.split(" ")[0]}.
            </h1>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: "var(--foreground)", fontWeight: 300 }}
            >
              I&apos;ve received your application and I&apos;ll be in touch
              within 1&ndash;2 days to schedule your free consultation call.
            </p>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "var(--warm-gray)", fontWeight: 300 }}
            >
              In the meantime, take a breath. You did something good for
              yourself today.
            </p>
            <Link
              href="/"
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--teal)" }}
            >
              &larr; Back to home
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const current = steps[step];

  return (
    <main style={{ background: "var(--cream)" }}>
      <Nav />

      <section className="min-h-screen flex flex-col justify-center px-6 pt-28 pb-16">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto w-full"
        >
          {/* Progress dots */}
          <div className="flex justify-center gap-2 mb-12">
            {steps.map((_, i) => (
              <div
                key={i}
                className="transition-all duration-500"
                style={{
                  width: i === step ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background:
                    i === step
                      ? "var(--teal)"
                      : i < step
                      ? "var(--teal-light)"
                      : "var(--blush)",
                }}
              />
            ))}
          </div>

          {/* Step content with animation */}
          <div
            key={step}
            className="animate-fadeSlide"
            style={{
              animationDirection:
                direction === "back" ? "reverse" : "normal",
            }}
          >
            <h1
              className="text-4xl md:text-5xl mb-4 text-center leading-tight"
              style={{
                color: "var(--teal-deep)",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
              }}
            >
              {current.heading}
            </h1>
            <p
              className="text-lg text-center mb-10 max-w-md mx-auto"
              style={{ color: "var(--warm-gray)", fontWeight: 300 }}
            >
              {current.sub}
            </p>

            {/* Step 0: Welcome */}
            {step === 0 && (
              <div className="text-center">
                <button
                  type="button"
                  onClick={next}
                  className="px-12 py-4 text-xs tracking-widest uppercase transition-all hover:opacity-90"
                  style={{
                    background: "var(--teal)",
                    color: "var(--cream)",
                    letterSpacing: "0.15em",
                  }}
                >
                  Begin
                </button>
              </div>
            )}

            {/* Step 1: Basics */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label style={labelStyle}>
                    Your name{" "}
                    <span style={{ color: "var(--teal)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="First and last name"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    Email address{" "}
                    <span style={{ color: "var(--teal)" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    Phone number{" "}
                    <span
                      style={{
                        color: "var(--warm-gray)",
                        fontWeight: 300,
                        textTransform: "none",
                        letterSpacing: 0,
                      }}
                    >
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Best number to reach you"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    How did you hear about Restorative Cuddling Co.?
                  </label>
                  <select
                    name="referral"
                    value={form.referral}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: "none" as const }}
                  >
                    <option value="">Select one</option>
                    <option value="friend">
                      A friend or someone I know
                    </option>
                    <option value="social">Social media</option>
                    <option value="search">
                      Google or online search
                    </option>
                    <option value="directory">
                      Professional cuddling directory
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {form.referral === "other" && (
                  <div>
                    <label style={labelStyle}>
                      Tell me more{" "}
                      <span
                        style={{
                          color: "var(--warm-gray)",
                          fontWeight: 300,
                          textTransform: "none",
                          letterSpacing: 0,
                        }}
                      >
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      name="referralOther"
                      value={form.referralOther}
                      onChange={handleChange}
                      placeholder="How did you find me?"
                      style={inputStyle}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step 2: About you */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label style={labelStyle}>
                    What brings you here?{" "}
                    <span style={{ color: "var(--teal)" }}>*</span>
                  </label>
                  <textarea
                    name="whyHere"
                    required
                    value={form.whyHere}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What's been on your mind or in your body lately? What made you reach out?"
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    What are you hoping a session might offer you?
                  </label>
                  <textarea
                    name="hoping"
                    value={form.hoping}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Rest, connection, nervous system support, something you can't quite name yet — all valid."
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Body */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label style={labelStyle}>
                    Any physical considerations or health info I should
                    know about?
                  </label>
                  <p
                    className="text-sm mb-3"
                    style={{ color: "var(--warm-gray)", fontWeight: 300 }}
                  >
                    Injuries, chronic pain, sensory sensitivities,
                    anything that affects how your body likes to be touched
                    or held.
                  </p>
                  <textarea
                    name="physical"
                    value={form.physical}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Share as much or as little as feels right."
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    Is there anything that helps you feel more at ease in new situations?
                  </label>
                  <p
                    className="text-sm mb-3"
                    style={{ color: "var(--warm-gray)", fontWeight: 300 }}
                  >
                    Any boundaries, communication preferences, or things I
                    should know to help you feel comfortable.
                  </p>
                  <textarea
                    name="safe"
                    value={form.safe}
                    onChange={handleChange}
                    rows={3}
                    placeholder="This helps me prepare a session that actually works for you."
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Consent */}
            {step === 4 && (
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    required
                    checked={form.consent}
                    onChange={handleChange}
                    style={{
                      marginTop: "4px",
                      accentColor: "var(--teal)",
                      width: "18px",
                      height: "18px",
                      flexShrink: 0,
                    }}
                  />
                  <label
                    htmlFor="consent"
                    className="text-base leading-relaxed"
                    style={{ color: "var(--foreground)", fontWeight: 300 }}
                  >
                    I understand that submitting this application does not
                    guarantee or book a session. A free consultation call
                    will follow, and both parties will confirm before any
                    session is scheduled. My information will not be shared
                    with anyone.
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          {step > 0 && (
            <div className="flex justify-between items-center mt-12">
              <button
                type="button"
                onClick={back}
                className="text-xs tracking-widest uppercase transition-all hover:opacity-70"
                style={{
                  color: "var(--warm-gray)",
                  letterSpacing: "0.15em",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "12px 0",
                }}
              >
                &larr; Back
              </button>

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canProceed()}
                  className="px-10 py-4 text-xs tracking-widest uppercase transition-all hover:opacity-90 disabled:opacity-40"
                  style={{
                    background: "var(--teal)",
                    color: "var(--cream)",
                    letterSpacing: "0.15em",
                    border: "none",
                    cursor: canProceed() ? "pointer" : "default",
                  }}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canProceed()}
                  className="px-10 py-4 text-xs tracking-widest uppercase transition-all hover:opacity-90 disabled:opacity-40"
                  style={{
                    background: "var(--teal)",
                    color: "var(--cream)",
                    letterSpacing: "0.15em",
                    border: "none",
                    cursor: canProceed() ? "pointer" : "default",
                  }}
                >
                  Submit Application
                </button>
              )}
            </div>
          )}

          {step > 0 && (
            <p
              className="text-xs text-center mt-6"
              style={{ color: "var(--warm-gray)", fontWeight: 300 }}
            >
              Step {step} of {steps.length - 1}
            </p>
          )}
        </form>
      </section>

      <Footer />
    </main>
  );
}
