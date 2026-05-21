"use client";

import Link from "next/link";

export default function V2() {
  return (
    <main
      className="relative min-h-screen bg-[#f4ede3] text-[#1a1612] selection:bg-[#c64224] selection:text-[#f4ede3]"
      style={{ fontFamily: "Inter Tight, system-ui" }}
    >
      {/* Paper grain */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.5] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(rgba(26,22,18,0.05) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Top rule */}
      <div className="border-b border-[#1a1612]/15 pt-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-3 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#1a1612]/60">
          <span>Vol. 01 · Issue 1 · The Eindhoven Edition</span>
          <span className="hidden sm:inline">May 2026 / Premiere</span>
          <span>€ 0,00</span>
        </div>
      </div>

      {/* Masthead */}
      <header className="max-w-[1400px] mx-auto px-6 sm:px-10 pt-10 sm:pt-14 pb-8 border-b border-[#1a1612]/15">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 lg:col-span-9">
            <p
              className="font-editorial italic text-[#c64224] text-xl sm:text-2xl"
              style={{ fontFamily: "Fraunces, serif", fontStyle: "italic" }}
            >
              a small popup, a short menu, an honest dinner —
            </p>
            <h1
              className="mt-3 font-editorial leading-[0.86] tracking-[-0.03em] text-[16vw] sm:text-[11vw] lg:text-[9.5vw]"
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 600,
                fontVariationSettings: "'opsz' 144",
              }}
            >
              Domo,
              <span className="italic font-normal"> Domo.</span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-2 text-[11px] uppercase tracking-[0.22em] text-[#1a1612]/70">
            <span className="text-[#c64224] font-medium">Now Booking — Soft Launch</span>
            <span>Eindhoven, NL</span>
            <span>Fri · Sat · Sun</span>
          </div>
        </div>
      </header>

      {/* Lead article */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 py-12 sm:py-16 grid grid-cols-12 gap-6 sm:gap-10">
        <aside className="col-span-12 lg:col-span-3 order-2 lg:order-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#1a1612]/55 border-b border-[#1a1612]/20 pb-3">
            On the menu
          </p>
          <ul className="mt-4 divide-y divide-[#1a1612]/15">
            {[
              { en: "Karaage", jp: "唐揚げ", p: "9" },
              { en: "Hand-cut Fries", jp: "ハンドカット", p: "5" },
              { en: "Japanese Coleslaw", jp: "コールスロー", p: "4" },
            ].map((m) => (
              <li
                key={m.en}
                className="py-4 flex items-baseline justify-between gap-3"
              >
                <div>
                  <p
                    className="font-editorial text-xl"
                    style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
                  >
                    {m.en}
                  </p>
                  <p className="font-jp text-sm text-[#1a1612]/55">{m.jp}</p>
                </div>
                <span
                  className="font-editorial text-2xl tabular-nums"
                  style={{ fontFamily: "Fraunces, serif" }}
                >
                  €{m.p}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-[#1a1612]/55 leading-relaxed">
            Combine any two and we&apos;ll take €2 off, no card, no app, no
            questions.
          </p>
        </aside>

        <article className="col-span-12 lg:col-span-6 order-1 lg:order-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#c64224]">
            Feature · Premiere
          </p>
          <h2
            className="mt-2 font-editorial text-4xl sm:text-5xl leading-[1.02]"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
          >
            Three plates, three nights — a karaage shop arrives in Eindhoven.
          </h2>

          <p className="mt-8 text-[17px] leading-[1.65] text-[#1a1612]/85">
            <span
              className="float-left mr-3 mt-1 font-editorial text-[5.5rem] leading-[0.78] text-[#c64224]"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 800 }}
            >
              D
            </span>
            omo Domo opens next month with the kind of menu most kitchens
            wouldn&apos;t dare leave alone: karaage, hand-cut fries and a
            sharp little Japanese coleslaw. That&apos;s it. There is no
            chef&apos;s tasting, no fusion ramen burger, no truffle anything.
            Just three things, cooked carefully, three nights a week.
          </p>

          <p className="mt-6 text-[17px] leading-[1.65] text-[#1a1612]/85">
            The thigh is brined in soy, ginger and sake, then dredged in
            potato starch and dropped twice into clean oil — shatter on the
            outside, juice on the inside. The fries are cut from whole
            potatoes the same morning, blanched, rested, then crisped to
            order with a dust of togarashi salt. The slaw is cabbage,
            carrot and toasted sesame, dressed with rice vinegar and a
            careful spoon of mirin. Cold, bright, the necessary counterweight.
          </p>

          <blockquote
            className="my-10 border-l-2 border-[#c64224] pl-6 italic font-editorial text-2xl sm:text-3xl leading-snug text-[#1a1612]"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            &ldquo;A short menu is the loudest way to say what you actually
            believe about dinner.&rdquo;
          </blockquote>

          <p className="text-[17px] leading-[1.65] text-[#1a1612]/85">
            The shop trades Friday through Sunday — a deliberate pace.
            Walk-ins only for now. The address goes out two weeks ahead of
            opening; until then, the kitchen is testing batches and quietly
            running out of room in the fridge.
          </p>
        </article>

        <aside className="col-span-12 lg:col-span-3 order-3 space-y-8">
          <div className="border border-[#1a1612]/20 p-6 bg-[#f4ede3]">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#1a1612]/55 mb-2">
              Hours
            </p>
            <dl className="space-y-1.5 text-sm">
              {[
                ["Fri", "17:00 — 22:00"],
                ["Sat", "17:00 — 23:00"],
                ["Sun", "16:00 — 21:00"],
                ["Mon — Thu", "Closed"],
              ].map(([d, h]) => (
                <div
                  key={d}
                  className="flex justify-between border-b border-dashed border-[#1a1612]/15 pb-1.5 last:border-0"
                >
                  <dt className="font-medium">{d}</dt>
                  <dd className="font-mono text-[#1a1612]/70">{h}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-[#1a1612] text-[#f4ede3] p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-60">
              From the kitchen
            </p>
            <p
              className="mt-3 font-editorial text-xl italic leading-snug"
              style={{ fontFamily: "Fraunces, serif", fontStyle: "italic" }}
            >
              &ldquo;If it isn&apos;t crisp, it doesn&apos;t leave the
              pass.&rdquo;
            </p>
            <p className="mt-4 text-xs opacity-70 uppercase tracking-[0.22em]">
              — Chef, Domo Domo
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#1a1612]/55 mb-3">
              Stay close
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border-b border-[#1a1612]/40 pb-2"
            >
              <input
                type="email"
                placeholder="you@home.nl"
                className="flex-1 bg-transparent outline-none placeholder:text-[#1a1612]/40 text-sm"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-[0.22em] text-[#c64224] hover:text-[#1a1612]"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-[11px] text-[#1a1612]/55">
              Opening date drops here first.
            </p>
          </div>
        </aside>
      </section>

      {/* Wide editorial image-style block */}
      <section className="border-t border-[#1a1612]/15 bg-[#1a1612] text-[#f4ede3] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-20 sm:py-28 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#f4ede3]/55">
              Plate № 01
            </p>
            <h3
              className="mt-3 font-editorial text-6xl sm:text-8xl leading-[0.88]"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
            >
              Karaage,{" "}
              <span className="italic font-normal text-[#c64224]">
                always.
              </span>
            </h3>
            <p className="mt-6 max-w-prose text-[#f4ede3]/80 leading-relaxed">
              Marinated for hours, fried in minutes. The skin breaks like
              glass; the meat holds steam like a held breath. We serve it
              with lemon, Kewpie, and the dignified silence of a thing that
              doesn&apos;t need a side.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="aspect-[4/5] rounded-sm relative overflow-hidden border border-[#f4ede3]/15">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #c64224 0%, #c64224 18%, #1a1612 60%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(244,237,227,0.4) 1px, transparent 1.5px), radial-gradient(rgba(244,237,227,0.2) 1px, transparent 1.5px)",
                  backgroundSize: "12px 12px, 22px 22px",
                  backgroundPosition: "0 0, 6px 6px",
                }}
              />
              <span
                className="absolute bottom-4 right-5 font-jp text-7xl text-[#f4ede3]/50"
                style={{ fontFamily: "Shippori Antique, serif" }}
              >
                唐揚げ
              </span>
              <span className="absolute top-4 left-5 font-mono text-[10px] uppercase tracking-[0.28em] text-[#f4ede3]/60">
                Fig. 1 — Thigh, double-fried
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Three columns: ethos */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 py-20 sm:py-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-b border-[#1a1612]/15">
        {[
          {
            n: "I.",
            t: "Short menu, long care",
            b: "Three plates means three perfect plates. The kitchen has nowhere to hide and we like it that way.",
          },
          {
            n: "II.",
            t: "Three nights a week",
            b: "Friday, Saturday, Sunday. The other four days we shop, rest, and trim the fryer baskets.",
          },
          {
            n: "III.",
            t: "Walk-in, no fuss",
            b: "No app, no QR, no membership. Show up, order, eat, leave a little less tired than you arrived.",
          },
        ].map((c) => (
          <div key={c.n}>
            <p
              className="font-editorial text-3xl italic text-[#c64224] mb-3"
              style={{ fontFamily: "Fraunces, serif", fontStyle: "italic" }}
            >
              {c.n}
            </p>
            <h4
              className="font-editorial text-2xl sm:text-3xl leading-tight"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
            >
              {c.t}
            </h4>
            <p className="mt-3 text-[15px] leading-relaxed text-[#1a1612]/75">
              {c.b}
            </p>
          </div>
        ))}
      </section>

      {/* Colophon */}
      <footer className="max-w-[1400px] mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-[#1a1612]/55">
        <span>Set in Fraunces & Inter Tight · Printed on the web.</span>
        <span
          className="font-jp normal-case tracking-normal text-base text-[#c64224]"
          style={{ fontFamily: "Shippori Antique, serif" }}
        >
          どうも、どうも。
        </span>
        <Link href="/v3" className="hover:text-[#c64224]">
          Next look ↗
        </Link>
      </footer>
    </main>
  );
}
