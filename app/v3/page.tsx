"use client";

import Link from "next/link";

const Burst = ({
  text,
  rot = 0,
  bg = "#ee6c4d",
  fg = "#fef6e0",
  size = 140,
  className = "",
}: {
  text: React.ReactNode;
  rot?: number;
  bg?: string;
  fg?: string;
  size?: number;
  className?: string;
}) => (
  <div
    className={`relative inline-flex items-center justify-center wobble ${className}`}
    style={{ width: size, height: size, ["--rot" as never]: `${rot}deg`, transform: `rotate(${rot}deg)` }}
  >
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
      <polygon
        fill={bg}
        points="50,2 58,15 72,8 73,24 88,22 82,36 96,42 84,52 95,64 80,68 84,84 68,80 65,95 52,86 42,97 35,84 20,89 22,73 6,71 16,58 3,50 16,42 6,28 22,28 19,12 35,16 42,3"
      />
    </svg>
    <span
      className="relative z-10 text-center font-display leading-[0.9] uppercase px-3"
      style={{ color: fg, fontFamily: "Bagel Fat One, system-ui" }}
    >
      {text}
    </span>
  </div>
);

export default function V3() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#ffd23f] text-[#3d2817]"
      style={{ fontFamily: "Manrope, system-ui" }}
    >
      {/* Halftone dot bg */}
      <div
        className="pointer-events-none fixed inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(#3d2817 1px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="pointer-events-none fixed inset-0 opacity-[0.15]"
        style={{
          background:
            "radial-gradient(ellipse at top, transparent, #ee6c4d 90%)",
        }}
      />

      {/* Top tape */}
      <div className="relative pt-20 z-10">
        <div className="bg-[#3d2817] text-[#ffd23f] py-2 overflow-hidden border-y-4 border-[#ee6c4d]">
          <div className="marquee-track-fast flex whitespace-nowrap text-2xl sm:text-3xl" style={{ fontFamily: "Bowlby One, system-ui" }}>
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex items-center">
                <span className="px-6">CRUNCH CRUNCH CRUNCH</span>
                <span className="px-4">★</span>
                <span className="px-6">KARAAGE TIME</span>
                <span className="px-4">★</span>
                <span className="px-6">FR / SA / SU ONLY</span>
                <span className="px-4">★</span>
                <span className="px-6">EINDHOVEN</span>
                <span className="px-4">★</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative z-10 px-6 sm:px-10 pt-14 sm:pt-20 pb-16">
        <div className="max-w-6xl mx-auto relative">
          {/* hand label */}
          <p
            className="text-[#ee6c4d] text-3xl sm:text-4xl -rotate-3 inline-block mb-4"
            style={{ fontFamily: "Caveat, cursive", fontWeight: 700 }}
          >
            hi, hi! we&apos;re —
          </p>

          <h1
            className="font-display text-[19vw] sm:text-[15vw] leading-[0.82] tracking-tight"
            style={{ fontFamily: "Bowlby One, system-ui" }}
          >
            <span className="block text-[#3d2817]">DOMO</span>
            <span className="block text-[#ee6c4d] -mt-[2vw]">
              DOMO
              <span className="inline-block text-[#3d2817]">!</span>
            </span>
          </h1>

          {/* big sticker absolute */}
          <div className="absolute top-2 right-2 sm:right-6 hidden sm:block">
            <Burst
              text={
                <span className="text-xl leading-tight">
                  FRIED
                  <br />
                  BABY
                </span>
              }
              rot={14}
              size={180}
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <p
              className="text-3xl sm:text-4xl max-w-2xl leading-tight"
              style={{ fontFamily: "Bagel Fat One, system-ui" }}
            >
              KARAAGE.{" "}
              <span className="text-[#ee6c4d]">FRIES.</span>{" "}
              <span className="underline decoration-wavy decoration-[#3d2817]">
                COLESLAW.
              </span>
            </p>
          </div>

          <p
            className="mt-6 text-xl sm:text-2xl max-w-xl -rotate-[1deg] inline-block bg-[#fef6e0] border-2 border-[#3d2817] px-4 py-2"
            style={{ fontFamily: "Caveat, cursive", fontWeight: 500 }}
          >
            a tiny weekend popup in Eindhoven — three things, done very, very, very right.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="inline-flex items-center gap-3 bg-[#3d2817] text-[#ffd23f] px-7 py-4 rounded-full text-lg font-bold uppercase hover:bg-[#ee6c4d] hover:text-[#fef6e0] transition border-4 border-[#3d2817]"
              style={{ fontFamily: "Bowlby One, system-ui" }}
            >
              SEE THE MENU
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
                <path
                  d="M2 11 L18 11 M12 5 L18 11 L12 17"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
            <a
              href="#hours"
              className="inline-flex items-center gap-3 bg-[#fef6e0] text-[#3d2817] px-7 py-4 rounded-full text-lg font-bold uppercase border-4 border-[#3d2817] hover:bg-[#3d2817] hover:text-[#fef6e0] transition"
              style={{ fontFamily: "Bowlby One, system-ui" }}
            >
              WHEN OPEN?
            </a>

            {/* hand drawn arrow */}
            <svg
              width="140"
              height="60"
              viewBox="0 0 140 60"
              className="text-[#3d2817] hidden md:block -mb-4"
              aria-hidden
            >
              <path
                d="M5 30 C 40 5, 75 5, 130 25"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="1 6"
              />
              <path
                d="M130 25 L120 18 M130 25 L122 32"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <text
                x="40"
                y="55"
                fill="currentColor"
                style={{ fontFamily: "Caveat, cursive", fontSize: 22 }}
              >
                tap me!
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="relative z-10 px-6 sm:px-10 py-16 bg-[#fef6e0] border-y-4 border-[#3d2817]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span
              className="bg-[#3d2817] text-[#ffd23f] px-4 py-1 text-2xl"
              style={{ fontFamily: "Bowlby One, system-ui" }}
            >
              THE WHOLE MENU
            </span>
            <span
              className="text-2xl text-[#ee6c4d]"
              style={{ fontFamily: "Caveat, cursive", fontWeight: 700 }}
            >
              (yes, that&apos;s all of it)
            </span>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                en: "KARAAGE",
                jp: "唐揚げ",
                price: "9",
                desc: "Crunchy outside, juicy thigh inside. Lemon + Kewpie come with.",
                color: "#ee6c4d",
                rot: -2,
              },
              {
                en: "FRIES",
                jp: "ハンドカット",
                price: "5",
                desc: "Hand-cut, twice-fried, togarashi salt dusted. Yuzu mayo on request.",
                color: "#ffd23f",
                rot: 1.5,
              },
              {
                en: "COLESLAW",
                jp: "コールスロー",
                price: "4",
                desc: "Cabbage, carrot, sesame, vinegar, mirin. Cold, sharp, awake.",
                color: "#5dbb63",
                rot: -1,
              },
            ].map((m, i) => (
              <li
                key={m.en}
                className="relative bg-[#fef6e0] border-4 border-[#3d2817] p-6 shadow-[8px_8px_0_#3d2817] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#3d2817] transition"
                style={{ transform: `rotate(${m.rot}deg)` }}
              >
                <span
                  className="absolute -top-5 -left-5 w-14 h-14 rounded-full flex items-center justify-center font-display text-2xl text-[#3d2817] border-4 border-[#3d2817]"
                  style={{ background: m.color, fontFamily: "Bowlby One, system-ui" }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="text-4xl sm:text-5xl leading-none"
                  style={{ fontFamily: "Bowlby One, system-ui" }}
                >
                  {m.en}
                </h3>
                <p
                  className="mt-1 text-2xl"
                  style={{ fontFamily: "Shippori Antique, serif" }}
                >
                  {m.jp}
                </p>
                <p className="mt-4 text-base leading-relaxed">{m.desc}</p>
                <div className="mt-6 flex items-end justify-between">
                  <span
                    className="text-5xl text-[#ee6c4d]"
                    style={{ fontFamily: "Bowlby One, system-ui" }}
                  >
                    €{m.price}
                  </span>
                  <span
                    className="text-xl text-[#3d2817]/60"
                    style={{ fontFamily: "Caveat, cursive", fontWeight: 700 }}
                  >
                    so good
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Burst
              text={
                <span className="text-base leading-tight">
                  ANY 2
                  <br />€−2!
                </span>
              }
              rot={-10}
              size={130}
              bg="#3d2817"
              fg="#ffd23f"
            />
            <p
              className="text-3xl sm:text-4xl max-w-md text-center"
              style={{ fontFamily: "Caveat, cursive", fontWeight: 700 }}
            >
              that&apos;s the entire loyalty programme. you&apos;re welcome.
            </p>
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section id="hours" className="relative z-10 px-6 sm:px-10 py-20 bg-[#ee6c4d] text-[#fef6e0] border-b-4 border-[#3d2817]">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-6xl sm:text-8xl leading-[0.9]"
            style={{ fontFamily: "Bowlby One, system-ui" }}
          >
            OPEN
            <br />
            <span className="text-[#ffd23f]">FR · SA · SU.</span>
          </h2>
          <p
            className="mt-3 text-3xl"
            style={{ fontFamily: "Caveat, cursive", fontWeight: 700 }}
          >
            other days? we&apos;re napping.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { d: "FRI", h: "17 — 22" },
              { d: "SAT", h: "17 — 23" },
              { d: "SUN", h: "16 — 21" },
            ].map((d, i) => (
              <div
                key={d.d}
                className="bg-[#ffd23f] text-[#3d2817] border-4 border-[#3d2817] p-6 shadow-[8px_8px_0_#3d2817]"
                style={{ transform: `rotate(${[-1, 1.5, -2][i]}deg)` }}
              >
                <p
                  className="text-7xl leading-none"
                  style={{ fontFamily: "Bowlby One, system-ui" }}
                >
                  {d.d}
                </p>
                <p
                  className="mt-2 text-3xl"
                  style={{ fontFamily: "Bagel Fat One, system-ui" }}
                >
                  {d.h}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE / NEWSLETTER */}
      <section className="relative z-10 px-6 sm:px-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: "Caveat, cursive", fontWeight: 700 }}
          >
            address dropping soon —
          </p>
          <h2
            className="mt-2 text-6xl sm:text-7xl text-[#ee6c4d]"
            style={{ fontFamily: "Bowlby One, system-ui" }}
          >
            EINDHOVEN, NL
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex flex-col sm:flex-row gap-3 items-stretch max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="your email!!"
              className="flex-1 bg-[#fef6e0] border-4 border-[#3d2817] px-5 py-4 text-lg placeholder:text-[#3d2817]/40 outline-none focus:bg-white"
            />
            <button
              type="submit"
              className="bg-[#3d2817] text-[#ffd23f] border-4 border-[#3d2817] px-6 py-4 text-lg uppercase hover:bg-[#ee6c4d] transition"
              style={{ fontFamily: "Bowlby One, system-ui" }}
            >
              SEND IT
            </button>
          </form>
          <p
            className="mt-3 text-xl text-[#3d2817]/70"
            style={{ fontFamily: "Caveat, cursive", fontWeight: 700 }}
          >
            no spam, just karaage news.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-[#3d2817] text-[#ffd23f] px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <span style={{ fontFamily: "Bowlby One, system-ui" }} className="text-xl">
          DOMO DOMO © 2026
        </span>
        <span
          className="text-2xl"
          style={{ fontFamily: "Shippori Antique, serif" }}
        >
          またね！
        </span>
        <Link
          href="/v4"
          className="text-xl hover:text-[#ee6c4d]"
          style={{ fontFamily: "Bowlby One, system-ui" }}
        >
          NEXT LOOK →
        </Link>
      </footer>
    </main>
  );
}
