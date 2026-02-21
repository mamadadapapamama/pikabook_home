import Image from "next/image";
import Link from "next/link";
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
            Chinese is hard. 
            <br />
            <span className="text-amber-600">Pikabook </span>makes it smart.
          </AnimateOnScroll>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 sm:text-xl">Go beyond the printed page - Get instant pinyin, translation, and AI voice feedback. </p>
        <div className="mt-12 flex flex-wrap items-start justify-center gap-4">
          <AnimateOnScroll delay={200}>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-opacity hover:opacity-85"
              aria-label="Download on the App Store"
            >
              <Image
                src="/images/black.svg"
                alt="Download on the App Store"
                width={180}
                height={53}
                className="h-12 w-auto sm:h-14"
              />
            </a>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <Link
              href="/android-beta"
              className="inline-flex h-12 items-center gap-3 rounded-lg border-2 border-zinc-400 bg-black px-4 py-2 transition-opacity hover:opacity-90 sm:h-14 sm:gap-4 sm:px-5"
              aria-label="Join the open beta"
            >
              <Image
                src="/images/google-play.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
              />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-medium uppercase tracking-wide text-white sm:text-xs">
                  Join the
                </span>
                <span className="text-sm font-bold text-white sm:text-base">Open Beta</span>
              </span>
            </Link>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll delay={300} className="mt-16 w-full max-w-md px-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <Image
            src="/images/hero-2.avif"
            alt="Pikabook app on phone with Chinese learning content"
            width={600}
            height={780}
            className="mx-auto w-full rounded-2xl object-contain"
            priority
          />
        </AnimateOnScroll>
      </header>

      {/* Section 1: Key features */}
      <section className="px-6 py-24" style={{ backgroundColor: "#FFFAF4" }} aria-labelledby="features-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="features-heading" className="text-3xl font-bold text-zinc-900 sm:text-4xl md:text-[2.5rem]">
            <AnimateOnScroll>
              Pikabook helps you understand every sentence on your book— and say it confidently.
            </AnimateOnScroll>
          </h2>
        </div>
        <ul className="mx-auto mt-16 max-w-5xl space-y-24">
          {[
            {
              title: "Study YOUR Chinese book",
              body: "You don't need to start with '你好'. \n Dive straight into any book, right where you left off.",
              image: "/images/section_1.avif",
              highlightWord: "YOUR",
              highlightColor: "#FE6A15",
            },
            {
              title: "Learn line by line",
              body: "Accurate translations and pinyin for every sentence, with clear and natural slow audio.",
              image: "/images/section_2.avif",
            },
            {
              title: "Build vocabulary as you read",
              body: "Save new words into flashcard - you can read it, hear it, say it, anytime.",
              image: "/images/section_3.avif",
            },
            {
              title: "Instant pronunciation feedback",
              body: "Record yourself and get real-time analysis. Know exactly where to improve.",
              image: "/images/section_4.avif",
            },
          ].map((item, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <li key={item.title} className="flex min-h-[20rem] flex-col gap-6 py-8 md:min-h-[24rem] md:flex-row md:items-center md:gap-12 md:py-12">
                <AnimateOnScroll delay={i * 80} className={`md:flex-1 ${imageFirst ? "md:order-1" : "md:order-2"}`}>
                  <div
                    className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-amber-100/80"
                    style={i === 0 ? { backgroundColor: "#FE6A15" } : undefined}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={i === 0 ? "object-contain" : "object-cover"}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll delay={i * 80 + 50} className={`md:flex-1 ${imageFirst ? "md:order-2" : "md:order-1"}`}>
                  <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl md:text-[1.3rem] lg:text-[2.0rem]">
                    {"highlightWord" in item && item.highlightWord
                      ? (() => {
                          const parts = item.title.split(item.highlightWord);
                          return parts.map((part, j) => (
                            <span key={j}>
                              {part}
                              {j < parts.length - 1 && (
                                <span style={{ color: item.highlightColor }}>{item.highlightWord}</span>
                              )}
                            </span>
                          ));
                        })()
                      : item.title}
                  </h2>
                  <p className="mt-4 text-base text-zinc-600 sm:mt-5 sm:text-lg md:text-[1.125rem] lg:text-xl">
                  {item.body.split("\n").map((line, j, arr) => (
                    <span key={j}>
                      {line}
                      {j < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                </AnimateOnScroll>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Section 2: How it works */}
      <section className="px-6 py-24" aria-labelledby="how-heading">
        <div className="mx-auto max-w-2xl">
          <h2 id="how-heading" className="text-center text-3xl font-bold text-zinc-900 sm:text-4xl md:text-[2.5rem]">
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

      {/* Section 3: Calling for the beta users */}
      <section
        className="relative overflow-hidden px-6 py-20 md:py-28"
        style={{ backgroundColor: "#FF8230" }}
        aria-labelledby="cta-heading"
      >
        <div className="relative mx-auto flex max-w-5xl flex-col items-start md:flex-row md:items-center md:gap-12">
          <div className="h-52 w-36 shrink-0 md:h-auto md:w-72">
            <Image
              src="/images/pikabook.svg"
              alt=""
              width={288}
              height={374}
              className="h-full w-full object-left-top object-contain"
            />
          </div>
          <div className="mt-6 max-w-xl md:mt-0">
            <h2 id="cta-heading" className="text-3xl font-bold text-white sm:text-4xl">
              <AnimateOnScroll>Become a Founding Beta Member</AnimateOnScroll>
            </h2>
            <div className="mt-4 space-y-3 text-white/95">
              <AnimateOnScroll delay={50}>
                <p>
                  Pikabook subscription launches next week. Join our Open Beta now and receive 1 month of free access
                  instead of the standard 1-week trial.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <p>
                  If you&apos;re learning Chinese — or supporting your child — this is your chance to shape Pikabook
                  and enjoy extended early access.
                </p>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll delay={150}>
              <Link
                href="/android-beta"
                className="mt-8 inline-flex h-14 items-center justify-center rounded-xl bg-white px-8 font-semibold text-[#FF8230] transition-opacity hover:opacity-95"
              >
                Claim 1-Month Free Access
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 sm:flex-row sm:justify-between sm:items-start">
          <p className="text-sm text-zinc-500">© 2026 Pikabook. All rights reserved.</p>
          <nav className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:gap-6">
            <a
              href="https://www.pikabook.co/privacy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 underline hover:text-zinc-900"
            >
              Privacy policy
            </a>
            <Link href="/contact" className="text-sm text-zinc-600 underline hover:text-zinc-900">
              Contact us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
