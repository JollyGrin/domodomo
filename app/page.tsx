import Link from "next/link";

export default function V1() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0807] text-white selection:bg-[#ff2e63]">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[55rem] h-[55rem] rounded-full opacity-[0.18] blur-[140px] bg-[#ff2e63]" />
        <div className="absolute -bottom-32 -right-40 w-[45rem] h-[45rem] rounded-full opacity-[0.12] blur-[140px] bg-[#ffb800]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] rounded-full opacity-[0.08] blur-[100px] bg-[#3aa6ff]" />
      </div>

      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* grain */}
      <div className="grain relative">
        {/* Top utility bar */}
        <header className="relative z-10 pt-20 sm:pt-24 px-6 sm:px-10 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] font-mono text-white/60">
          <span>EST. 2026 / EINDHOVEN, NL</span>
          <span className="hidden sm:inline">どうも、どうも。</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2e63] blink" />
            OPEN FR / SA / SU
          </span>
        </header>

        {/* HERO */}
        <section className="relative z-10 px-6 sm:px-10 pt-10 sm:pt-16 pb-10">
          <div className="relative">
            {/* katakana behind */}
            <div
              aria-hidden
              className="absolute inset-x-0 -top-4 sm:-top-8 text-center pointer-events-none select-none text-[18vw] sm:text-[14vw] leading-none font-jp text-white/[0.06] tracking-tight"
            >
              どうも どうも
            </div>

            <h1
              className="relative font-display text-[18vw] sm:text-[15vw] leading-[0.85] tracking-tight text-center rise"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block text-white">DOMO</span>
              <span className="block text-[#ff2e63] -mt-[3vw]">DOMO.</span>
            </h1>

            {/* floating stickers */}
            <span
              className="hidden sm:flex absolute top-4 right-[8%] w-28 h-28 rounded-full bg-[#ffd23f] text-[#0a0807] items-center justify-center text-center text-[11px] font-bold uppercase leading-tight wobble"
              style={{ ["--rot" as never]: "-8deg" }}
            >
              KARAAGE
              <br />
              IS HERE
            </span>
            <span
              className="hidden sm:flex absolute -bottom-2 left-[6%] w-24 h-24 rounded-full border-2 border-white/30 text-white items-center justify-center text-center text-[10px] font-mono uppercase leading-tight wobble"
              style={{ ["--rot" as never]: "6deg" }}
            >
              POPUP
              <br />
              NEXT
              <br />
              MONTH
            </span>
          </div>

          <p
            className="mt-10 sm:mt-12 mx-auto max-w-2xl text-center text-base sm:text-lg text-white/75 leading-relaxed rise"
            style={{ animationDelay: "0.2s" }}
          >
            A fast-casual Japanese popup in Eindhoven.
            <br className="hidden sm:block" />
            <span className="text-white">Karaage. Hand-cut fries. Japanese coleslaw.</span>{" "}
            That&apos;s the whole menu.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 rise"
            style={{ animationDelay: "0.35s" }}
          >
            <a
              href="#menu"
              className="group relative inline-flex items-center gap-3 rounded-full bg-[#ff2e63] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-[#0a0807] transition"
            >
              See the menu
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#hours"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-3.5 text-sm font-mono uppercase tracking-[0.18em] text-white/80 hover:bg-white/10"
            >
              When we&apos;re open
            </a>
          </div>
        </section>

        {/* Marquee strip */}
        <section
          aria-hidden
          className="relative z-10 border-y border-white/10 bg-[#ff2e63] text-[#0a0807] overflow-hidden"
        >
          <div className="marquee-track flex whitespace-nowrap py-3 sm:py-4 font-display text-3xl sm:text-5xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex items-center">
                <span className="px-6">FRIDAY</span>
                <span className="px-4 opacity-60">●</span>
                <span className="px-6">SATURDAY</span>
                <span className="px-4 opacity-60">●</span>
                <span className="px-6">SUNDAY</span>
                <span className="px-4 opacity-60">●</span>
                <span className="px-6">EINDHOVEN</span>
                <span className="px-4 opacity-60">●</span>
                <span className="px-6">どうも</span>
                <span className="px-4 opacity-60">●</span>
              </span>
            ))}
          </div>
        </section>

        {/* MENU */}
        <section
          id="menu"
          className="relative z-10 px-6 sm:px-10 py-20 sm:py-28"
        >
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
                01 — Menu
              </p>
              <h2 className="mt-3 font-display text-5xl sm:text-7xl">
                Three things.
                <br />
                Done <span className="text-[#ffd23f]">right.</span>
              </h2>
            </div>
            <p className="hidden sm:block font-mono text-xs text-white/40 max-w-[16ch] text-right uppercase tracking-[0.2em]">
              No bloat,
              <br />
              no fusion,
              <br />
              no apologies.
            </p>
          </div>

          <ul className="divide-y divide-white/10 border-y border-white/10">
            {[
              {
                en: "Karaage",
                jp: "唐揚げ",
                desc: "Soy-ginger-marinated thigh, double-fried until shatter-crisp. Lemon & Kewpie on the side.",
                price: "€9",
              },
              {
                en: "Hand-cut Fries",
                jp: "ハンドカット",
                desc: "Cut fresh, twice-cooked, finished with togarashi salt. Yuzu mayo if you ask nicely.",
                price: "€5",
              },
              {
                en: "Japanese Coleslaw",
                jp: "コールスロー",
                desc: "Cabbage, carrot, sesame, rice vinegar, a whisper of mirin. Cold, sharp, alive.",
                price: "€4",
              },
            ].map((item, i) => (
              <li
                key={item.en}
                className="group grid grid-cols-12 gap-4 sm:gap-8 py-7 sm:py-9 items-baseline hover:bg-white/[0.03] transition rise"
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <span className="col-span-1 font-mono text-xs text-white/40">
                  0{i + 1}
                </span>
                <div className="col-span-7 sm:col-span-7">
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <h3
                      className="font-display text-3xl sm:text-5xl text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.en}
                    </h3>
                    <span className="font-jp text-xl sm:text-2xl text-[#ff2e63]">
                      {item.jp}
                    </span>
                  </div>
                  <p className="mt-3 text-sm sm:text-base text-white/65 max-w-xl leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="col-span-4 sm:col-span-4 text-right font-display text-4xl sm:text-6xl text-[#ffd23f] tabular-nums">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-mono text-xs text-white/50 uppercase tracking-[0.18em]">
            ↳ Combo any two for −€2. That&apos;s the whole loyalty programme.
          </p>
        </section>

        {/* HOURS / WHERE */}
        <section
          id="hours"
          className="relative z-10 px-6 sm:px-10 pb-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            <div className="lg:col-span-7 rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#ff2e63]/20 blur-3xl" />
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
                02 — Hours
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-6xl">
                Weekends only.
                <br />
                <span className="text-[#ff2e63]">For now.</span>
              </h2>

              <dl className="mt-10 grid grid-cols-3 gap-4 text-center">
                {[
                  { d: "FRI", h: "17:00 — 22:00" },
                  { d: "SAT", h: "17:00 — 23:00" },
                  { d: "SUN", h: "16:00 — 21:00" },
                ].map((d) => (
                  <div
                    key={d.d}
                    className="rounded-2xl border border-white/10 bg-black/30 py-6"
                  >
                    <dt
                      className="font-display text-4xl sm:text-5xl text-[#ffd23f]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {d.d}
                    </dt>
                    <dd className="mt-2 font-mono text-xs text-white/70">
                      {d.h}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 text-sm text-white/55 font-mono uppercase tracking-[0.15em]">
                Mon — Thu: gone fishing.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-[2rem] bg-[#ffd23f] text-[#0a0807] p-8 sm:p-12 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -bottom-16 -right-10 font-jp text-[12rem] leading-none opacity-20 select-none"
              >
                旨
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] opacity-70">
                03 — Find us
              </p>
              <h3 className="mt-3 font-display text-4xl sm:text-5xl leading-[0.95]">
                Eindhoven.
                <br />
                The good side.
              </h3>
              <p className="mt-6 font-mono text-sm leading-relaxed">
                Exact address dropping
                <br />
                two weeks before opening.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a0807] text-[#ffd23f] px-5 py-3 text-xs uppercase font-mono tracking-[0.2em] hover:bg-[#ff2e63] hover:text-white transition"
              >
                Get the drop →
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative z-10 border-t border-white/10 px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-[11px] uppercase tracking-[0.22em] font-mono text-white/45">
          <span>© 2026 Domo Domo · Eindhoven</span>
          <span className="font-jp text-base text-white/70 normal-case tracking-normal">
            またね — see you soon.
          </span>
          <span>
            <Link href="/v2" className="hover:text-white">
              Next look ↗
            </Link>
          </span>
        </footer>
      </div>
    </main>
  );
}
