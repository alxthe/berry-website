import React, { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-neutral-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-semibold leading-tight">
              where you fall in love with your own story
            </h1>
            <p className="mt-6 text-2xl md:text-3xl text-neutral-700 max-w-3xl">
              screen-free ai talking plushie for every day reflection
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#join" className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 text-white px-8 py-4 text-lg font-medium hover:opacity-90">join the waitlist</a>
              <a href="#why" className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 px-8 py-4 text-lg font-medium hover:bg-white">learn more</a>
            </div>
          </div>
        </div>
      </section>

      {/* badges / quick hits */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "talking plushie you can actually talk to",
            "daily reflection on micro-stressors",
            "forces phone-off, screen-free moments",
            "short, time-limited conversations",
            "gratitude + growth oriented",
            "closed-loop knowledge (no browsing)"
          ].map((t, i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 bg-white px-6 py-4 text-lg">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* 3-word problem */}
      <section id="why" className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold">teens are</h2>
            <div className="mt-6 flex flex-wrap gap-3 text-4xl md:text-6xl font-semibold">
              <span className="rounded-xl bg-neutral-900 text-white px-4 py-2">overstimulated</span>
              <span className="rounded-xl bg-neutral-200 px-4 py-2">overconsuming</span>
              <span className="rounded-xl bg-rose-100 px-4 py-2">overexposed</span>
            </div>
            <p className="mt-6 text-xl text-neutral-700 leading-relaxed">
              social feeds leave almost no quiet moments. overexposure turns small, daily
              stressors into heavy cycles of rumination. journaling and meditation help, but few stick with them because they feel boring or hard. berry makes self-reflection natural and fun.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8">
            <h3 className="text-3xl font-semibold">what berry is</h3>
            <ul className="mt-4 space-y-3 text-xl text-neutral-700">
              <li>• a screen-free plushie you speak with</li>
              <li>• a better alternative to journaling / meditation that actually sticks</li>
              <li>• a daily space to reflect on micro-stressors and wins</li>
              <li>• a way to step away from screens and be present with yourself</li>
              <li>• a gentle nudge toward gratitude, growth, and a more positive outlook</li>
              <li>• focused on day-to-day stuff — not heavy or clinical topics</li>
            </ul>
            <p className="mt-4 text-lg text-neutral-500">
              note: we never claim to replace humans or give advice outside a safe, closed knowledge base.
            </p>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            title: "reflect",
            body: "share your day with berry. say it messy. no perfect wording needed.",
          },{
            title: "reframe",
            body: "turn small stress into perspective. notice what's within your control.",
          },{
            title: "renew",
            body: "close with one tiny action or gratitude. feel lighter, step forward.",
          }].map((card, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 bg-white p-8">
              <div className="text-lg uppercase tracking-widest text-neutral-600">{String(i+1).padStart(2,'0')}</div>
              <h3 className="mt-2 text-4xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-xl text-neutral-700">{card.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-dashed border-neutral-300 p-8 text-lg text-neutral-600">
          journaling and meditation improve outlooks, but adoption stays low. berry brings the same benefits in a playful, voice-first way.
        </div>
      </section>

      {/* boundaries */}
      <section id="boundaries" className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-semibold">boundaries by design</h2>
            <p className="mt-4 text-xl text-neutral-700">clear guardrails make berry safe, simple, and focused.</p>
            <ul className="mt-6 space-y-3 text-xl text-neutral-700">
              <li>• built-in time limits for each conversation</li>
              <li>• requires phone off (or airplane mode) to start — forces screen-free time</li>
              <li>• you control memory — view, edit, or delete any entry, anytime</li>
              <li>• no data monetization, ever</li>
              <li>• closed-loop training: pulls only from a safe, curated knowledge base</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8">
            <h3 className="text-3xl font-semibold">daily flow</h3>
            <ol className="mt-4 list-decimal list-inside space-y-2 text-xl text-neutral-700">
              <li>tap the heart to begin a short session</li>
              <li>talk out loud — berry listens and reflects back what it heard</li>
              <li>pick one tiny next step or gratitude</li>
              <li>session ends on time; your phone stays off</li>
            </ol>
            <div className="mt-6 rounded-2xl bg-neutral-50 border border-neutral-200 p-5 text-lg text-neutral-600">
              built for presence, not endless chats.
            </div>
          </div>
        </div>
      </section>

      {/* micro-stressors examples */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8">
          <h3 className="text-3xl font-semibold">made for the day-to-day</h3>
          <p className="mt-3 text-xl text-neutral-700">the little things that pile up:</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
            {["a rough quiz", "friend drama", "scroll fatigue", "practice didn't go well", "comparison spirals", "busy brain at night"].map((t,i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-liner vision */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            title: "reflect",
            text: "share your day with berry.",
          },{
            title: "reframe",
            text: "turn stress into perspective.",
          },{
            title: "renew",
            text: "step forward with positivity.",
          }].map((c,i)=> (
            <div key={i} className="rounded-3xl border border-neutral-200 bg-white p-8">
              <h4 className="text-2xl font-semibold">{c.title}</h4>
              <p className="mt-2 text-xl text-neutral-700">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* join */}
      <section id="join" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="rounded-3xl border border-neutral-200 bg-white p-10 md:p-12">
          <h2 className="text-5xl md:text-6xl font-semibold">join the waitlist</h2>
          <p className="mt-3 text-xl text-neutral-700 max-w-3xl">be the first to try berry. we'll send a short note when your spot opens up.</p>
          {submitted ? (
            <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5 text-green-800 text-lg">
              thanks — you're on the list. see you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value.toLowerCase())}
                className="w-full sm:w-auto flex-1 rounded-2xl border border-neutral-300 px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-neutral-900"
                required
              />
              <button className="rounded-2xl bg-neutral-900 text-white px-8 py-4 text-lg font-medium hover:opacity-90">get early access</button>
            </form>
          )}
          <p className="mt-4 text-base text-neutral-500">no spam. no data monetization. ever.</p>
        </div>
      </section>

      {/* faq */}
      <section id="faq" className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <h2 className="text-5xl md:text-6xl font-semibold">faq</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{
            q: "is berry a replacement for people?",
            a: "no. berry is a short, structured space for you to hear yourself and feel clearer. humans matter most.",
          },{
            q: "does berry browse the internet?",
            a: "no. it uses a safe, closed knowledge base and cannot go online during sessions.",
          },{
            q: "who controls the memories?",
            a: "you do. you can view, edit, or delete entries at any time.",
          },{
            q: "how long are sessions?",
            a: "just a few minutes. short by design to keep things light and consistent.",
          }].map((item, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 bg-white p-8">
              <h3 className="text-2xl font-semibold">{item.q}</h3>
              <p className="mt-2 text-xl text-neutral-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
