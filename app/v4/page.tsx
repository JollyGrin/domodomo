"use client";

import Link from "next/link";

const Tick = ({ className = "" }: { className?: string }) => (
  <span className={`inline-block w-px h-2 bg-black ${className}`} />
);

export default function V4() {
  return (
    <main
      className="relative min-h-screen bg-white text-black"
      style={{ fontFamily: "JetBrains Mono, monospace" }}
    >
      {/* Hairline grid bg */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      {/* Top fixed gauge */}
      <div className="border-b border-black/90 pt-20">
        <div className="px-6 sm:px-10 py-3 flex items-center justify-between text-[10px] uppercase tracking-[0.25em]">
          <span>DOMO_DOMO / DOC-001 / REV. 0.1</span>
          <span className="hidden md:inline">PLOT: A2 · 1:1 · NL/JP</span>
          <span>2026-05 · EINDHOVEN [51.44°N · 5.48°E]</span>
        </div>
      </div>

      {/* RULER */}
      <div aria-hidden className="relative border-b border-black/90 h-5 flex items-end">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 flex justify-end items-end"
          >
            <span
              className={`bg-black w-px ${i % 5 === 0 ? "h-3" : "h-1.5"}`}
            />
          </div>
        ))}
      </div>

      {/* HEADER GRID */}
      <header className="grid grid-cols-12 border-b border-black/90">
        <div className="col-span-12 lg:col-span-9 border-r border-black/90 p-6 sm:p-10 relative">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] mb-6">
            <span className="px-2 py-0.5 border border-black">FIG. 01</span>
            <span>Identification / Cover sheet</span>
          </div>

          <h1
            className="font-display text-[14vw] sm:text-[10vw] leading-[0.85] tracking-[-0.04em] uppercase"
            style={{
              fontFamily: "Anton, JetBrains Mono, monospace",
              fontWeight: 400,
            }}
          >
            Domo
            <br />
            Domo
            <span className="text-[#d80027]">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed">
            A fast-casual Japanese popup operating from Eindhoven (NL).
            Three deliverables: karaage, hand-cut fries, Japanese coleslaw.
            Service days: <span className="bg-[#d80027] text-white px-1.5">FR / SA / SU</span>.
            Soft launch: 2026.
          </p>

          <div
            aria-hidden
            className="absolute top-6 right-6 hidden md:flex flex-col items-end gap-1 text-[10px] uppercase tracking-[0.25em]"
          >
            <span>N ↑</span>
            <svg width="20" height="48" viewBox="0 0 20 48">
              <path d="M10 4 L10 44 M10 4 L4 14 M10 4 L16 14 M10 44 L4 38 M10 44 L16 38" stroke="black" fill="none" />
            </svg>
          </div>
        </div>

        <aside className="col-span-12 lg:col-span-3 p-6 sm:p-8 text-[11px] uppercase tracking-[0.2em] space-y-3">
          <div className="flex justify-between border-b border-black/40 pb-2">
            <span>Project</span>
            <span>DD-2026</span>
          </div>
          <div className="flex justify-between border-b border-black/40 pb-2">
            <span>Location</span>
            <span>EHV / NL</span>
          </div>
          <div className="flex justify-between border-b border-black/40 pb-2">
            <span>Discipline</span>
            <span>F&amp;B</span>
          </div>
          <div className="flex justify-between border-b border-black/40 pb-2">
            <span>Format</span>
            <span>Popup</span>
          </div>
          <div className="flex justify-between border-b border-black/40 pb-2">
            <span>Cadence</span>
            <span>Weekly · 3d</span>
          </div>
          <div className="flex justify-between">
            <span>Status</span>
            <span className="text-[#d80027]">In assembly</span>
          </div>
        </aside>
      </header>

      {/* JP CALLOUT BAND */}
      <section className="relative border-b border-black/90 grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 border-r border-black/90 p-6 sm:p-10 flex items-center gap-6 flex-wrap">
          <span
            className="text-7xl sm:text-8xl leading-none"
            style={{ fontFamily: "Shippori Antique, serif" }}
          >
            どうも、どうも。
          </span>
          <p className="text-xs uppercase tracking-[0.25em] max-w-[24ch]">
            (n.) a casual greeting. also the entire ethos.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 p-6 sm:p-10 flex items-center justify-end">
          <p className="text-[11px] uppercase tracking-[0.25em] text-right">
            Sheet 02 / 06 →
          </p>
        </div>
      </section>

      {/* MENU SPEC TABLE */}
      <section className="border-b border-black/90">
        <div className="px-6 sm:px-10 py-3 border-b border-black/90 flex items-center justify-between text-[10px] uppercase tracking-[0.25em]">
          <span>FIG. 02 / Menu schedule</span>
          <span>3 items · no substitutions</span>
        </div>

        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.25em] text-black/60">
              <th className="text-left p-4 border-b border-black/30 w-12">#</th>
              <th className="text-left p-4 border-b border-black/30">Item</th>
              <th className="text-left p-4 border-b border-black/30 hidden md:table-cell">Spec</th>
              <th className="text-left p-4 border-b border-black/30 hidden md:table-cell w-32">Origin</th>
              <th className="text-right p-4 border-b border-black/30 w-24">€</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                n: "01",
                en: "Karaage",
                jp: "唐揚げ",
                spec: "Chicken thigh · soy-ginger brine · 2× fry · 175°C",
                origin: "NIPPON",
                p: "9,00",
              },
              {
                n: "02",
                en: "Hand-cut Fries",
                jp: "ハンドカット",
                spec: "Whole potato · blanch + crisp · togarashi salt",
                origin: "NL · LIMBURG",
                p: "5,00",
              },
              {
                n: "03",
                en: "Japanese Coleslaw",
                jp: "コールスロー",
                spec: "Cabbage · carrot · sesame · rice vinegar · mirin",
                origin: "NL × JP",
                p: "4,00",
              },
            ].map((r) => (
              <tr key={r.n} className="border-b border-black/15 hover:bg-black hover:text-white transition group">
                <td className="p-4 align-top text-[11px] uppercase tracking-[0.18em]">{r.n}</td>
                <td className="p-4 align-top">
                  <div
                    className="text-2xl sm:text-3xl uppercase leading-none tracking-tight"
                    style={{ fontFamily: "Anton, JetBrains Mono, monospace" }}
                  >
                    {r.en}
                  </div>
                  <div
                    className="mt-1 text-base text-black/70 group-hover:text-white/70"
                    style={{ fontFamily: "Shippori Antique, serif" }}
                  >
                    {r.jp}
                  </div>
                </td>
                <td className="p-4 align-top hidden md:table-cell text-[12px] leading-relaxed text-black/75 group-hover:text-white/85 max-w-md">
                  {r.spec}
                </td>
                <td className="p-4 align-top hidden md:table-cell text-[11px] uppercase tracking-[0.18em] text-black/60 group-hover:text-white/70">
                  {r.origin}
                </td>
                <td className="p-4 align-top text-right text-2xl tabular-nums" style={{ fontFamily: "Anton, JetBrains Mono, monospace" }}>
                  {r.p}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-6 sm:px-10 py-3 border-t border-black/90 flex items-center justify-between text-[10px] uppercase tracking-[0.25em]">
          <span>Note 01 / Combo any 2 → −€2,00. No app.</span>
          <span>End of schedule</span>
        </div>
      </section>

      {/* BIG RED BLOCK */}
      <section className="relative border-b border-black/90 bg-[#d80027] text-white overflow-hidden">
        <div className="px-6 sm:px-10 py-3 border-b border-white/30 flex items-center justify-between text-[10px] uppercase tracking-[0.25em]">
          <span>FIG. 03 / Service window</span>
          <span>FR · SA · SU</span>
        </div>

        <div className="p-6 sm:p-10 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7">
            <h2
              className="text-[16vw] md:text-[10vw] leading-[0.82] uppercase"
              style={{ fontFamily: "Anton, JetBrains Mono, monospace" }}
            >
              Weekends.
              <br />
              Only.
              <br />
              For now.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 text-sm space-y-3">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { d: "FRI", h: "17 — 22" },
                { d: "SAT", h: "17 — 23" },
                { d: "SUN", h: "16 — 21" },
              ].map((d) => (
                <div key={d.d} className="border border-white p-3">
                  <p
                    className="text-3xl"
                    style={{ fontFamily: "Anton, JetBrains Mono, monospace" }}
                  >
                    {d.d}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] mt-1">
                    {d.h}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[11px] uppercase tracking-[0.25em] opacity-80">
              Mon — Thu / closed. The fryer rests too.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: DETAIL */}
      <section className="border-b border-black/90 grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 border-r border-black/90 p-6 sm:p-10">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4">FIG. 04 / Detail A</p>
          <h3
            className="text-3xl sm:text-4xl uppercase leading-tight"
            style={{ fontFamily: "Anton, JetBrains Mono, monospace" }}
          >
            Built like an engineering drawing.
            <br />
            Eaten like dinner.
          </h3>
          <p className="mt-6 text-sm leading-relaxed text-black/75 max-w-prose">
            Eindhoven taught us discipline; Tokyo taught us crispness.
            Domo Domo is a small operation built on tolerances:
            oil at 175°C, salt at 0.9% of fry weight, cabbage cut to 2mm
            ribbons. Specifications a kitchen can repeat — three nights a week.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4 text-[11px] uppercase tracking-[0.2em]">
            {[
              ["Oil temp", "175°C"],
              ["Marinade", "12 h"],
              ["Cut size", "9×9 mm"],
              ["Vinegar", "Komezu"],
              ["Slaw rest", "30 min"],
              ["Service", "≤ 4 min"],
            ].map(([k, v]) => (
              <div key={k as string} className="border-t border-black/40 pt-2">
                <dt className="text-black/60">{k}</dt>
                <dd className="mt-1 text-sm text-black">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="col-span-12 md:col-span-6 p-6 sm:p-10 relative">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4">FIG. 05 / Location</p>

          <div className="relative aspect-[4/3] border border-black/90 bg-white overflow-hidden">
            {/* Dimension ticks */}
            <div className="absolute inset-0">
              {/* center cross */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/30" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-black/30" />

              {/* corner ticks */}
              {[
                "top-2 left-2",
                "top-2 right-2",
                "bottom-2 left-2",
                "bottom-2 right-2",
              ].map((p) => (
                <div key={p} className={`absolute ${p}`}>
                  <Tick className="rotate-0" />
                </div>
              ))}

              {/* red dot */}
              <div className="absolute left-[58%] top-[42%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#d80027] ring-4 ring-[#d80027]/20" />
                <span className="text-[10px] uppercase tracking-[0.2em] bg-white border border-black px-1.5 py-0.5">
                  Domo Domo · TBD
                </span>
              </div>

              {/* coords */}
              <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em]">
                51.4416° N
              </span>
              <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.2em]">
                5.4697° E
              </span>
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em]">
                Eindhoven / centrum
              </span>
              <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.2em]">
                scale 1:25 000
              </span>
            </div>
          </div>

          <p className="mt-6 text-sm text-black/70 leading-relaxed max-w-prose">
            Exact address will be released two weeks ahead of soft launch.
            Subscribe below to receive the coordinates first.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex border border-black"
          >
            <input
              type="email"
              placeholder="email.address@domain.nl"
              className="flex-1 px-4 py-3 text-sm bg-white placeholder:text-black/40 outline-none"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-black text-white text-[11px] uppercase tracking-[0.25em] hover:bg-[#d80027]"
            >
              Submit →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/90">
        <div className="px-6 sm:px-10 py-3 grid grid-cols-12 gap-4 text-[10px] uppercase tracking-[0.25em] items-center">
          <span className="col-span-12 md:col-span-4">© 2026 Domo Domo · Eindhoven</span>
          <span className="col-span-12 md:col-span-4 text-center">Set in Anton, JetBrains Mono, Shippori Antique.</span>
          <span className="col-span-12 md:col-span-4 text-right">
            <Link href="/" className="hover:text-[#d80027]">
              Return to sheet 01 ↑
            </Link>
          </span>
        </div>
      </footer>
    </main>
  );
}
