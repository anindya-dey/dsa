import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "DSA & System Design",
  description:
    "Learn Data Structures & Algorithms and System Design through patterns, not memorization.",
};

const SAMPLE_CLUES = [
  { clue: "Sorted array, find a pair that sums to a target", pattern: "Two Pointers" },
  { clue: "Longest substring with at most k distinct characters", pattern: "Sliding Window" },
  { clue: "Course prerequisites, find a valid order", pattern: "Topological Sort" },
];

const VERTICALS = [
  {
    href: "/dsa",
    index: "01",
    label: "Algorithms",
    title: "Data Structures & Algorithms",
    description:
      "A four-phase roadmap of algorithmic archetypes, from complexity foundations to dynamic programming and tries.",
    cta: "Browse patterns",
  },
  {
    href: "/system-design",
    index: "02",
    label: "Architecture",
    title: "System Design",
    description:
      "The building blocks first, then low-level object design and full distributed case studies.",
    cta: "Browse topics",
  },
];

export default function Home() {
  return (
    <Container>
      <section className="grid gap-10 pt-10 sm:pt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:pt-24">
        <div className="animate-rise">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-deep">
            Pattern-driven learning
          </p>
          <h1 className="mt-4 text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-balance text-ink sm:text-6xl">
            Recognize the pattern.{" "}
            <span className="text-accent-deep">Solve anything.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-pretty text-ink-soft sm:text-lg">
            Every problem teaches recognition first: brute-force reasoning,
            the optimal C++ solution, and the complexity analysis that
            explains why.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:gap-4">
            <Link
              href="/dsa"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 font-mono text-sm text-paper transition-colors hover:bg-accent-deep"
            >
              Start with DSA
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              href="/system-design"
              className="inline-flex h-12 items-center justify-center rounded-full border border-ink/15 px-6 font-mono text-sm text-ink transition-colors hover:border-accent hover:bg-accent-wash hover:text-accent-deep"
            >
              System Design
            </Link>
          </div>
        </div>

        <Link
          href="/dsa/cheat-sheet"
          className="group animate-rise block rounded-3xl bg-accent-wash/70 p-5 transition-colors [animation-delay:120ms] hover:bg-accent-wash sm:p-7"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent-deep">
            Clue → pattern
          </p>
          <ul className="mt-4 space-y-4">
            {SAMPLE_CLUES.map((item) => (
              <li key={item.clue}>
                <p className="text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
                  &ldquo;{item.clue}&rdquo;
                </p>
                <p className="mt-1 font-mono text-sm font-medium text-accent-deep">
                  → {item.pattern}
                </p>
              </li>
            ))}
          </ul>
          <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-ink transition-colors group-hover:text-accent-deep">
            Open the diagnostic matrix
            <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </section>

      <section
        aria-label="Learning tracks"
        className="mt-16 grid gap-2 border-t border-line pt-6 sm:mt-20 sm:grid-cols-2 sm:gap-6 sm:pt-10"
      >
        {VERTICALS.map((vertical) => (
          <Link
            key={vertical.href}
            href={vertical.href}
            className="group -mx-3 rounded-2xl px-3 py-5 transition-colors hover:bg-accent-wash active:bg-accent-wash sm:mx-0 sm:p-6"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
              {vertical.index} / {vertical.label}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent-deep">
              {vertical.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
              {vertical.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-accent-deep">
              {vertical.cta}
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </section>
    </Container>
  );
}
