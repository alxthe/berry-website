import React from "react";

export default function ProductPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-neutral-50" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-neutral-600">berry product</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
              a talking plushie with purpose
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-700">
              designed for daily reflection, built for real impact
            </p>
          </div>
        </div>
      </section>

      {/* Product Features Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">what makes berry special</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "voice-first design",
              description: "speak naturally, no typing needed. berry understands you as you are.",
              icon: "🎙️"
            },
            {
              title: "soft & huggable",
              description: "premium materials that feel comforting. designed to be held during conversations.",
              icon: "🧸"
            },
            {
              title: "battery that lasts",
              description: "weeks of daily use on a single charge. simple USB-C charging.",
              icon: "🔋"
            },
            {
              title: "privacy-first",
              description: "local processing when possible. your stories stay yours.",
              icon: "🔐"
            },
            {
              title: "smart time limits",
              description: "5-10 minute sessions by design. prevents endless scrolling habits.",
              icon: "⏰"
            },
            {
              title: "gentle guidance",
              description: "evidence-based prompts from psychology research. no toxic positivity.",
              icon: "✨"
            }
          ].map((feature, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specs */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-purple-50 to-rose-50 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-semibold">technical details</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { label: "dimensions", value: "8 inches tall, perfect for holding" },
              { label: "weight", value: "lightweight at 250g" },
              { label: "battery life", value: "30+ days typical use" },
              { label: "charging", value: "USB-C, 2 hours full charge" },
              { label: "materials", value: "hypoallergenic, washable fabric" },
              { label: "connectivity", value: "bluetooth 5.0 + wifi" },
              { label: "memory", value: "stores 1 year of conversations locally" },
              { label: "compatibility", value: "works with iOS & Android companion app" }
            ].map((spec, i) => (
              <div key={i}>
                <dt className="text-sm uppercase tracking-wider text-neutral-600">{spec.label}</dt>
                <dd className="mt-1 text-lg text-neutral-900">{spec.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Berry Works */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">how berry works with you</h2>
        <div className="mt-12 space-y-8">
          {[
            {
              step: "01",
              title: "squeeze to start",
              description: "give berry a gentle squeeze when you need a moment. no apps to open, no screens to look at."
            },
            {
              step: "02",
              title: "speak freely",
              description: "share what's on your mind. berry listens without judgment and helps you process your thoughts."
            },
            {
              step: "03",
              title: "get perspective",
              description: "berry reflects back what it heard and offers gentle reframes based on CBT and positive psychology."
            },
            {
              step: "04",
              title: "choose an action",
              description: "end with one small step forward. berry helps you identify what's in your control."
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center font-semibold">
                {item.step}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Companion App */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">companion app</h2>
            <p className="mt-4 text-lg text-neutral-700">
              optional app for parents and teens who want insights
            </p>
            <ul className="mt-6 space-y-3 text-neutral-700">
              <li>• view conversation summaries (not transcripts)</li>
              <li>• track mood patterns over time</li>
              <li>• set custom reminders for reflection</li>
              <li>• manage privacy settings</li>
              <li>• export your journey anytime</li>
              <li>• zero ads, zero data selling</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-rose-100 flex items-center justify-center">
              <span className="text-6xl">📱</span>
            </div>
            <p className="mt-6 text-sm text-neutral-600 text-center">
              berry works perfectly without the app. use it only if you want extra features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-3xl border border-neutral-900 bg-neutral-900 text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">simple, honest pricing</h2>
          <div className="mt-8 text-5xl md:text-6xl font-semibold">$149</div>
          <p className="mt-4 text-lg opacity-90">one-time purchase, no subscriptions</p>
          <div className="mt-8 max-w-md mx-auto text-left space-y-2 opacity-90">
            <p>✓ lifetime updates</p>
            <p>✓ 1-year warranty</p>
            <p>✓ 30-day money-back guarantee</p>
            <p>✓ free shipping in US</p>
          </div>
          <a href="/#join" className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white text-neutral-900 px-8 py-3 text-sm font-medium hover:bg-neutral-100">
            join waitlist for early access
          </a>
        </div>
      </section>
    </>
  );
}
