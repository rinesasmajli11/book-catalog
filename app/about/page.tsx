import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 py-28">
  <div className="max-w-3xl mx-auto text-center">

    <span className="inline-flex items-center justify-center gap-2 mb-6 text-sm font-semibold tracking-widest text-blue-600 uppercase">
      <span className="h-px w-8 bg-blue-600" />
      About BookCatalog
      <span className="h-px w-8 bg-blue-600" />
    </span>

    <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
      A curated library <br />
      <span className="text-blue-600">built for modern readers</span>
    </h1>

    <p className="mt-8 text-xl text-gray-600 leading-relaxed mx-auto">
      BookCatalog is a thoughtfully curated book collection designed for
      readers who value clarity, depth, and discovery. From contemporary
      classics to insightful nonfiction, we focus on books worth your time —
      presented in a calm, polished browsing experience.
    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-6">
      <Link
        href="/products"
        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl transition-all"
      >
        Explore the Library
      </Link>

      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-10 py-4 text-lg font-semibold text-gray-800 hover:border-blue-300 hover:text-blue-600 transition"
      >
        Contact Curators
      </Link>
    </div>

  </div>
</section>

      {/* VALUES / MISSION */}
      <section className="max-w-7xl mx-auto px-8 pb-28">
        <div className="bg-white rounded-[32px] border border-blue-100 shadow-sm p-12 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-5">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To make book discovery feel timeless again: calm browsing,
                honest recommendations, and a collection shaped by quality — not
                noise. We treat every title like a piece of craft.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-5">
                What Makes Us Different
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We prioritize meaningful books and clean presentation. No
                clutter, no distractions — just a refined library experience
                with categories, favorites, and a personal dashboard built
                around your reading taste.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Curated Picks", desc: "Selected titles with strong writing, ideas, and impact." },
              { title: "Reader-First UX", desc: "Designed for focus: simple layout, fast browsing, clean flow." },
              { title: "Save & Return", desc: "Favorites keep your library personal and always ready." },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl border border-blue-100 bg-slate-50 p-8 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-8 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
              How we curate the collection
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We focus on books that deliver value: timeless storytelling,
              practical knowledge, or original ideas. Every title is chosen to
              match one of our core reading pillars.
            </p>

            <ul className="mt-10 space-y-4 text-lg text-gray-700">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-gray-900">Classics & Literature</strong>{" "}
                  — iconic works that shaped culture and language.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-gray-900">Personal Growth</strong>{" "}
                  — habits, mindset, clarity, and real-world resilience.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-gray-900">Business & Creativity</strong>{" "}
                  — strategy, leadership, and building meaningful work.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                <span>
                  <strong className="text-gray-900">Modern Nonfiction</strong>{" "}
                  — history, psychology, and ideas worth debating.
                </span>
              </li>
            </ul>

            <div className="mt-12">
              <Link
                href="/products"
                className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition"
              >
                Browse curated titles →
              </Link>
            </div>
          </div>

          {/* Audience box */}
          <div className="rounded-[32px] bg-white border border-blue-100 shadow-sm p-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-blue-600 uppercase">
              <span className="h-px w-8 bg-blue-600" />
              Who It’s For
            </span>

            <h3 className="mt-6 text-3xl font-semibold text-gray-900">
              Readers who want quality over noise
            </h3>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              If you appreciate a calm, organized library experience — where you
              can discover, save, and return to books that genuinely matter —
              you’re exactly where you should be.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Curious lifelong learners",
                "Busy professionals",
                "Students building taste",
                "Readers who love structure",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 border border-blue-100 px-6 py-4 text-gray-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-8 pb-28">
        <div className="rounded-[32px] bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-blue-100 shadow-sm p-12 md:p-16">
          <h2 className="text-4xl font-semibold text-gray-900">
            Ready to build your personal library?
          </h2>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl">
            Explore the collection, save your favorites, and return anytime —
            your reading space stays organized and elegant.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl transition-all"
            >
              Explore Library
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-10 py-4 text-lg font-semibold text-gray-800 hover:border-blue-300 hover:text-blue-600 transition"
            >
              Open Dashboard
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
