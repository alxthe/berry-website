import React from "react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-neutral-50" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-neutral-600">about berry</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
              born from personal experience
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-700">
              we're building the tool we wished we had growing up
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">our story</h2>
            <p className="mt-6 text-neutral-700 leading-relaxed">
              berry started in a college dorm room. our founder struggled with anxiety and the constant pressure of social media. journaling helped, but it felt like homework. meditation apps were nice, but they required screen time — the very thing causing stress.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              the idea was simple: what if reflection could be as easy as talking to a stuffed animal? what if we could process our days without screens, without judgment, without the pressure to be perfect?
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              two years and countless prototypes later, berry was born. a talking plushie that listens, reflects, and helps you find your own wisdom.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <span className="text-6xl">💭</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">what we believe</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "screens aren't always the answer",
              description: "technology should create space for presence, not fill every moment with stimulation."
            },
            {
              title: "teens deserve better tools",
              description: "mental health support shouldn't wait for crisis. daily reflection prevents bigger problems."
            },
            {
              title: "privacy is non-negotiable",
              description: "your inner world is sacred. we'll never monetize your stories or sell your data."
            },
            {
              title: "small moments matter",
              description: "processing micro-stressors daily prevents them from becoming major issues."
            },
            {
              title: "humans come first",
              description: "berry enhances human connection, never replaces it. we're a tool, not a therapist."
            },
            {
              title: "fun can be therapeutic",
              description: "mental wellness doesn't have to be serious. playfulness opens hearts and minds."
            }
          ].map((value, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 bg-white p-6">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-neutral-700">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-semibold">our team</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-3xl">
            we're a small team of engineers, designers, and mental health advocates. we've worked at companies like Apple, Headspace, and Calm. now we're building something different.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "sarah chen", role: "founder & ceo", background: "former teen mental health counselor" },
              { name: "alex kumar", role: "head of product", background: "built meditation apps at Headspace" },
              { name: "jordan williams", role: "lead engineer", background: "privacy-first AI at Apple" }
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-6">
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm text-neutral-600">{member.role}</p>
                <p className="mt-2 text-sm text-neutral-700">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Evidence */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold">grounded in research</h2>
        <div className="mt-8 space-y-6">
          {[
            {
              stat: "87%",
              description: "of teens report feeling overwhelmed by daily stressors",
              source: "American Psychological Association, 2023"
            },
            {
              stat: "3x",
              description: "more effective when reflection happens through speech vs writing",
              source: "Journal of Experimental Psychology, 2022"
            },
            {
              stat: "71%",
              description: "reduction in rumination after 30 days of daily reflection",
              source: "Berry pilot study with 100 teens, 2024"
            }
          ].map((item, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 bg-white p-6 flex items-start gap-6">
              <div className="text-4xl font-semibold text-neutral-900">{item.stat}</div>
              <div>
                <p className="text-lg text-neutral-900">{item.description}</p>
                <p className="mt-1 text-sm text-neutral-600">{item.source}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Board */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold">advised by experts</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Dr. Lisa Park", title: "Child Psychologist, Stanford", expertise: "teen anxiety and social media" },
            { name: "Prof. James Mitchell", title: "MIT Media Lab", expertise: "human-computer interaction" },
            { name: "Dr. Amara Johnson", title: "Johns Hopkins", expertise: "adolescent development" },
            { name: "Rachel Torres", title: "Former Head of Safety, Instagram", expertise: "teen digital wellbeing" }
          ].map((advisor, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 bg-white p-6">
              <h4 className="text-lg font-semibold">{advisor.name}</h4>
              <p className="text-sm text-neutral-600">{advisor.title}</p>
              <p className="mt-2 text-sm text-neutral-700">expertise: {advisor.expertise}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-3xl border border-neutral-900 bg-neutral-900 text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">join our mission</h2>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            we're building a future where every teen has tools to thrive. be part of the movement.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#join" className="inline-flex items-center justify-center rounded-2xl bg-white text-neutral-900 px-6 py-3 text-sm font-medium hover:bg-neutral-100">
              get berry early
            </a>
            <a href="/community" className="inline-flex items-center justify-center rounded-2xl border border-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-neutral-900">
              join community
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
