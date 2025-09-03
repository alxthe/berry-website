import React from "react";

export default function BlogPage() {
  const featuredPost = {
    date: "December 10, 2024",
    category: "research",
    title: "Why Talking Helps: The Science Behind Berry",
    excerpt: "New research shows that verbalizing thoughts activates different brain regions than typing. Here's what it means for teen mental health.",
    readTime: "8 min read",
    author: "Dr. Lisa Park"
  };

  const posts = [
    {
      date: "December 8, 2024",
      category: "teen voices",
      title: "How I Stopped Doomscrolling with Berry",
      excerpt: "A 16-year-old shares her journey from 6 hours of daily screen time to mindful tech use.",
      readTime: "5 min read",
      author: "Maya R."
    },
    {
      date: "December 5, 2024",
      category: "parenting",
      title: "5 Signs Your Teen Needs a Break from Social Media",
      excerpt: "Recognizing when online life is overwhelming offline wellbeing.",
      readTime: "6 min read",
      author: "Sarah Chen"
    },
    {
      date: "December 1, 2024",
      category: "product",
      title: "Berry 2.0: What's New in Our Latest Update",
      excerpt: "Improved voice recognition, new reflection prompts, and better battery life.",
      readTime: "4 min read",
      author: "Alex Kumar"
    },
    {
      date: "November 28, 2024",
      category: "mental health",
      title: "The Power of Micro-Reflections",
      excerpt: "Why 5 minutes of daily reflection beats hour-long therapy sessions for many teens.",
      readTime: "7 min read",
      author: "Dr. Amara Johnson"
    },
    {
      date: "November 25, 2024",
      category: "teen voices",
      title: "Berry Helped Me Through My Parents' Divorce",
      excerpt: "A personal story about finding stability during family change.",
      readTime: "6 min read",
      author: "Anonymous"
    },
    {
      date: "November 20, 2024",
      category: "research",
      title: "Study: Teens Who Reflect Daily Show 40% Less Anxiety",
      excerpt: "Results from our 6-month study with 500 high school students.",
      readTime: "10 min read",
      author: "Berry Research Team"
    }
  ];

  const categories = [
    { name: "all posts", count: 48 },
    { name: "teen voices", count: 15 },
    { name: "parenting", count: 12 },
    { name: "mental health", count: 10 },
    { name: "research", count: 8 },
    { name: "product", count: 3 }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-neutral-50" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-neutral-600">berry blog</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
              stories, science, and support
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-700">
              insights on teen mental health, product updates, and community stories
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium">
              {featuredPost.category}
            </span>
            <span className="text-sm text-neutral-600">{featuredPost.date}</span>
            <span className="text-sm text-neutral-500">•</span>
            <span className="text-sm text-neutral-600">{featuredPost.readTime}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {featuredPost.title}
          </h2>
          <p className="text-lg text-neutral-700 mb-6">
            {featuredPost.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-600">by {featuredPost.author}</span>
            <a href="#" className="inline-flex items-center rounded-2xl bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-800">
              read full article →
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                i === 0
                  ? "bg-neutral-900 text-white"
                  : "border border-neutral-200 bg-white hover:bg-neutral-50"
              }`}
            >
              {cat.name}
              <span className="text-xs opacity-70">({cat.count})</span>
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="rounded-3xl border border-neutral-200 bg-white p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-neutral-600">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-neutral-700 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-600">{post.author}</p>
                  <p className="text-xs text-neutral-500">{post.date}</p>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium hover:text-neutral-600"
                >
                  read →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-amber-50 to-rose-50 p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">weekly wisdom</h2>
            <p className="mt-4 text-lg text-neutral-700">
              get our best content on teen mental health, product updates, and community stories
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your email"
                className="flex-1 rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
                required
              />
              <button className="rounded-2xl bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800">
                subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-neutral-500">
              unsubscribe anytime. we respect your inbox.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">explore by topic</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { topic: "anxiety & stress", icon: "😰", posts: 12 },
            { topic: "social media", icon: "📱", posts: 8 },
            { topic: "family dynamics", icon: "👨‍👩‍👧", posts: 6 },
            { topic: "school pressure", icon: "📚", posts: 9 },
            { topic: "friendship", icon: "👥", posts: 7 },
            { topic: "self-esteem", icon: "💪", posts: 5 },
            { topic: "sleep & rest", icon: "😴", posts: 4 },
            { topic: "mindfulness", icon: "🧘", posts: 11 }
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className="rounded-3xl border border-neutral-200 bg-white p-6 hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-semibold mb-1">{item.topic}</h4>
              <p className="text-sm text-neutral-600">{item.posts} articles</p>
            </a>
          ))}
        </div>
      </section>

      {/* Author Spotlight */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">writer spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Lisa Park",
                role: "Child Psychologist",
                bio: "20+ years helping teens navigate anxiety and social pressures.",
                articles: 15
              },
              {
                name: "Maya Rodriguez",
                role: "Teen Contributor",
                bio: "High school senior sharing real experiences with mental health.",
                articles: 8
              },
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                bio: "Building tools for teen wellness based on personal experience.",
                articles: 12
              }
            ].map((author, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-rose-100 mx-auto mb-4" />
                <h4 className="font-semibold text-lg">{author.name}</h4>
                <p className="text-sm text-neutral-600 mb-2">{author.role}</p>
                <p className="text-sm text-neutral-700 mb-3">{author.bio}</p>
                <a href="#" className="text-sm font-medium hover:text-neutral-600">
                  view {author.articles} articles →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="mx-auto max-w-6xl px-4 py-8 text-center">
        <button className="inline-flex items-center rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-medium hover:bg-neutral-50">
          load more articles
        </button>
      </section>
    </>
  );
}
