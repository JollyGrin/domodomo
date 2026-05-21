"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const VERSIONS = [
  { href: "/", label: "V1", name: "Tokyo Night Market" },
  { href: "/v2", label: "V2", name: "Konbini Editorial" },
  { href: "/v3", label: "V3", name: "Karaage Crunch" },
  { href: "/v4", label: "V4", name: "Dutch × Tokyo Grid" },
];

const STORAGE_KEY = "dd_switcher_hidden";

export default function VersionSwitcher() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY);
    if (stored === "1") setHidden(true);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "." && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setHidden((h) => {
          const next = !h;
          if (typeof window !== "undefined") {
            localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
          }
          return next;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!mounted) return null;

  const normalized = pathname?.replace(/\/$/, "") || "/";

  if (hidden) {
    return (
      <button
        onClick={() => {
          setHidden(false);
          localStorage.setItem(STORAGE_KEY, "0");
        }}
        aria-label="Show version switcher"
        className="fixed top-3 right-3 z-[9999] w-6 h-6 rounded-full bg-black/70 text-white text-[10px] font-mono backdrop-blur hover:bg-black flex items-center justify-center"
        title="Show version switcher (⌘ + .)"
      >
        ▾
      </button>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
      <div className="pointer-events-auto mx-auto mt-3 w-fit max-w-[95vw] flex items-center gap-1 rounded-full border border-white/15 bg-black/75 backdrop-blur-md px-1.5 py-1 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <span
          className="px-2.5 text-[10px] uppercase tracking-[0.18em] text-white/60"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Domo Domo / preview
        </span>
        <div className="flex items-center gap-0.5">
          {VERSIONS.map((v) => {
            const isActive =
              (v.href === "/" && normalized === "") ||
              (v.href !== "/" && normalized === v.href);
            return (
              <Link
                key={v.href}
                href={v.href}
                className={[
                  "group relative rounded-full px-3 py-1.5 text-[11px] font-mono transition",
                  isActive
                    ? "bg-white text-black"
                    : "text-white/85 hover:bg-white/10",
                ].join(" ")}
                title={v.name}
              >
                <span className="font-semibold">{v.label}</span>
                <span className="ml-1.5 text-[10px] opacity-70 hidden sm:inline">
                  {v.name}
                </span>
              </Link>
            );
          })}
        </div>
        <button
          onClick={() => {
            setHidden(true);
            localStorage.setItem(STORAGE_KEY, "1");
          }}
          aria-label="Hide version switcher"
          className="ml-1 w-7 h-7 rounded-full text-white/70 hover:bg-white/10 hover:text-white text-sm flex items-center justify-center"
          title="Hide (⌘ + .)"
        >
          ×
        </button>
      </div>
    </div>
  );
}
