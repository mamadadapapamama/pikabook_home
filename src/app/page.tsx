import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const APP_STORE_URL = "https://apps.apple.com/sg/app/pikabook/id6745157690";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero */}
      <header className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-32 text-center">
        <AnimateOnScroll>
          <span className="mb-6 inline-block rounded-full border border-amber-400 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-800">
            Open beta
          </span>
        </AnimateOnScroll>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          <AnimateOnScroll delay={100}>
            Chinese is hard. We get it.
            <br />
            <span className="text-amber-600">Pikabook</span> makes it readable and speakable.
          </AnimateOnScroll>
        </h1>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <AnimateOnScroll delay={200}>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-zinc-900 px-8 font-semibold text-white transition hover:bg-zinc-800"
              aria-label="Download Pikabook on the App Store"
            >
              Get it on the App Store
            </a>
          </AnimateOnScroll>
          <AnimateOnScroll delay={250}>
            <p className="text-sm text-zinc-500">Android coming soon</p>
          </AnimateOnScroll>
        </div>
      </header>

      {/* Section 1: Key features */}
      <section className="border-t border-zinc-200 bg-zinc-50/50 px-6 py-24" aria-labelledby="features-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="features-heading" className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
            <AnimateOnScroll>
              Pikabook helps you understand every sentence on your book— and say it confidently.
            </AnimateOnScroll>
          </h2>
        </div>
        <ul className="mx-auto mt-16 grid max-w-4xl gap-12 sm:grid-cols-1 md:grid-cols-2">
          {[
            {
              title: "Study YOUR Chinese book",
              body: "You don't need to start with '你好'. Dive straight into any book, right where you left off.",
            },
            {
              title: "Learn line by line",
              body: "Get accurate translations and Pinyin, sentence by sentence. If you want a quick translation, you can also learn paragraph by paragraph.",
            },
            {
              title: "Real voices, not robots",
              body: "Listen to native speakers at your own pace—with both natural and slowed-down versions.",
            },
            {
              title: "Build vocabulary as you read",
              body: "Save new words into flashcard - you can read it, hear it, say it, anytime.",
            },
            {
              title: "Instant pronunciation feedback",
              body: "Record yourself and get real-time analysis. Know exactly where to improve.",
            },
          ].map((item, i) => (
            <li key={item.title}>
              <AnimateOnScroll delay={i * 80}>
                <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-zinc-600">{item.body}</p>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 2: How it works */}
      <section className="border-t border-zinc-200 px-6 py-24" aria-labelledby="how-heading">
        <div className="mx-auto max-w-2xl">
          <h2 id="how-heading" className="text-center text-2xl font-semibold text-zinc-900 sm:text-3xl">
            <AnimateOnScroll>How it works</AnimateOnScroll>
          </h2>
          <ol className="mt-12 space-y-8">
            <li>
              <AnimateOnScroll>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-semibold text-amber-800">
                  1
                </span>
                <p className="mt-3 text-lg text-zinc-700">Upload page(s) from your book</p>
              </AnimateOnScroll>
            </li>
            <li>
              <AnimateOnScroll delay={100}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-semibold text-amber-800">
                  2
                </span>
                <p className="mt-3 text-lg text-zinc-700">
                  That's it! You will see line by line explanation, select to check the meaning of the words, save for
                  flipcard, and test your own pronunciation!
                </p>
              </AnimateOnScroll>
            </li>
          </ol>
        </div>
      </section>

      {/* Section 3: CTA */}
      <section className="border-t border-zinc-200 bg-amber-50/50 px-6 py-24" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="cta-heading" className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
            <AnimateOnScroll>
              Ready to read your Chinese book
              <br />
              without frustration?
            </AnimateOnScroll>
          </h2>
          <ul className="mt-10 space-y-2 text-left text-zinc-700 sm:mx-auto sm:max-w-sm sm:text-center">
            <AnimateOnScroll delay={100}>
              <li>• Unlimited page uploads</li>
              <li>• Unlimited evaluation</li>
              <li>• Full listening access</li>
              <li>• Smart vocabulary building</li>
            </AnimateOnScroll>
          </ul>
          <p className="mt-8 text-zinc-600">
            <AnimateOnScroll delay={150}>7-day free trial. Cancel anytime.</AnimateOnScroll>
          </p>
          <AnimateOnScroll delay={200}>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-14 items-center justify-center rounded-xl bg-amber-500 px-8 font-semibold text-amber-950 transition hover:bg-amber-400"
              aria-label="Get Pikabook on the App Store"
            >
              Get started now
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500">
        <p>© Pikabook. All rights reserved.</p>
      </footer>
    </div>
  );
}
