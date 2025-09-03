import React from "react";

export default function CommunityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-neutral-50" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-neutral-600">berry community</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
              you're not alone in this
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-700">
              join thousands of teens and parents supporting each other
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#discord" className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:opacity-90">
                join discord
              </a>
              <a href="#events" className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-medium hover:bg-white">
                upcoming events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { number: "12,000+", label: "berry users worldwide" },
            { number: "50+", label: "weekly reflection circles" },
            { number: "98%", label: "feel more connected" }
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 text-center">
              <div className="text-3xl font-semibold text-neutral-900">{stat.number}</div>
              <p className="mt-2 text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Spaces */}
      <section id="discord" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">our spaces</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-2xl mb-6">
              💬
            </div>
            <h3 className="text-2xl font-semibold mb-4">berry discord</h3>
            <p className="text-neutral-700 mb-6">
              our main community hub. share wins, get support, join daily reflection circles.
            </p>
            <ul className="space-y-2 text-neutral-700 text-sm">
              <li>• teen-only channels (verified)</li>
              <li>• parent support groups</li>
              <li>• daily gratitude threads</li>
              <li>• weekly challenges</li>
              <li>• mental health resources</li>
            </ul>
            <a href="#" className="mt-6 inline-flex items-center rounded-2xl bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-800">
              join discord →
            </a>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl mb-6">
              🌱
            </div>
            <h3 className="text-2xl font-semibold mb-4">local chapters</h3>
            <p className="text-neutral-700 mb-6">
              in-person meetups in 20+ cities. find your local berry community.
            </p>
            <ul className="space-y-2 text-neutral-700 text-sm">
              <li>• monthly parent coffees</li>
              <li>• teen workshop sessions</li>
              <li>• mindfulness walks</li>
              <li>• screen-free social events</li>
              <li>• guest speaker series</li>
            </ul>
            <a href="#" className="mt-6 inline-flex items-center rounded-2xl border border-neutral-900 px-5 py-2.5 text-sm font-medium hover:bg-neutral-900 hover:text-white">
              find your chapter →
            </a>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold">upcoming events</h2>
        <div className="mt-8 space-y-4">
          {[
            {
              date: "every monday",
              time: "7pm EST",
              title: "mindful mondays",
              description: "weekly group reflection circle. process your week with others.",
              type: "virtual"
            },
            {
              date: "dec 15",
              time: "2pm PST",
              title: "teen wellness workshop",
              description: "learn evidence-based techniques for managing daily stress.",
              type: "los angeles"
            },
            {
              date: "dec 20",
              time: "6pm EST",
              title: "parent support circle",
              description: "connect with other parents navigating teen mental health.",
              type: "virtual"
            },
            {
              date: "jan 5",
              time: "10am CST",
              title: "new year, new habits",
              description: "set intentions for 2025 with the berry community.",
              type: "chicago"
            }
          ].map((event, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-medium text-neutral-600">{event.date}</span>
                    <span className="text-sm text-neutral-500">•</span>
                    <span className="text-sm text-neutral-600">{event.time}</span>
                    <span className="text-sm text-neutral-500">•</span>
                    <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="mt-1 text-neutral-700">{event.description}</p>
                </div>
                <a href="#" className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50">
                  register →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Stories */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">community stories</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "maya, 16",
              story: "berry helped me realize i'm not broken. the community showed me everyone struggles sometimes.",
              location: "seattle"
            },
            {
              name: "james's mom",
              story: "watching my son open up to berry gave us a bridge to better conversations.",
              location: "austin"
            },
            {
              name: "alex, 17",
              story: "the daily reflection circles changed my life. i finally have friends who get it.",
              location: "brooklyn"
            },
            {
              name: "sarah, 15",
              story: "berry community taught me that feeling anxious doesn't make me weak.",
              location: "denver"
            },
            {
              name: "david's dad",
              story: "parent support group helped me understand what my teen is going through.",
              location: "miami"
            },
            {
              name: "emma, 14",
              story: "i love that we can be real here. no filters, no fake positivity.",
              location: "portland"
            }
          ].map((testimonial, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 bg-white p-6">
              <p className="text-neutral-700 italic mb-4">"{testimonial.story}"</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{testimonial.name}</span>
                <span className="text-sm text-neutral-600">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-semibold">community resources</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "reflection guides", description: "downloadable prompts for deeper conversations", icon: "📝" },
              { title: "parent toolkit", description: "resources for supporting your teen", icon: "🧰" },
              { title: "crisis support", description: "24/7 helplines and immediate resources", icon: "🆘" },
              { title: "book club", description: "monthly reads on mental wellness", icon: "📚" },
              { title: "spotify playlists", description: "curated music for different moods", icon: "🎵" },
              { title: "expert AMAs", description: "monthly Q&As with psychologists", icon: "💡" }
            ].map((resource, i) => (
              <div key={i} className="bg-white rounded-2xl p-6">
                <div className="text-2xl mb-3">{resource.icon}</div>
                <h4 className="text-lg font-semibold mb-1">{resource.title}</h4>
                <p className="text-sm text-neutral-700">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-3xl border border-neutral-900 bg-neutral-900 text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">ready to connect?</h2>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            join a community that celebrates growth, not perfection
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#discord" className="inline-flex items-center justify-center rounded-2xl bg-white text-neutral-900 px-6 py-3 text-sm font-medium hover:bg-neutral-100">
              join discord community
            </a>
            <a href="/#join" className="inline-flex items-center justify-center rounded-2xl border border-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-neutral-900">
              get berry first
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
