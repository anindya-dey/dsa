import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { patternHasContent } from "@/lib/content/dsa";

export const metadata: Metadata = {
  title: "Cheat Sheet",
  description:
    "A diagnostic matrix mapping problem clues to the algorithmic pattern they most likely require.",
};

interface PatternLink {
  label: string;
  slug: string;
}

interface MatrixEntry {
  clue: ReactNode;
  patterns: PatternLink[];
}

function V({ children }: { children: ReactNode }) {
  return <em className="font-mono not-italic text-ink">{children}</em>;
}

const DIAGNOSTIC_MATRIX: MatrixEntry[] = [
  {
    clue: "Sorted array, pairs, triplets, or subsegment comparison",
    patterns: [{ label: "Two Pointers", slug: "two-pointers" }],
  },
  {
    clue: (
      <>
        Subarray/substring contiguity + &ldquo;longest / shortest / at most{" "}
        <V>k</V>&rdquo;
      </>
    ),
    patterns: [{ label: "Sliding Window", slug: "sliding-window" }],
  },
  {
    clue: (
      <>
        &ldquo;Find the minimum/maximum value <V>X</V> such that a condition
        holds&rdquo;
      </>
    ),
    patterns: [
      { label: "Binary Search on Answer Space", slug: "binary-search-variants" },
    ],
  },
  {
    clue: "Frequency tracking, pair matching, running counts",
    patterns: [
      { label: "Hash Map", slug: "hash-based-structures" },
      { label: "Prefix Sum", slug: "prefix-sums-and-difference-arrays" },
    ],
  },
  {
    clue: "Next greater element, span of stock prices, histogram areas",
    patterns: [{ label: "Monotonic Stack", slug: "monotonic-structures" }],
  },
  {
    clue: "Shortest path in an unweighted graph, or minimum steps/transformations",
    patterns: [{ label: "Breadth-First Search", slug: "graph-traversals" }],
  },
  {
    clue: "Dependencies, build order, prerequisites",
    patterns: [
      { label: "Topological Sort (Kahn’s)", slug: "graph-specializations" },
    ],
  },
  {
    clue: "Grouping dynamic elements, checking for a cycle in an undirected graph",
    patterns: [{ label: "Union-Find (DSU)", slug: "graph-specializations" }],
  },
  {
    clue: (
      <>
        &ldquo;Top <V>K</V> frequent&rdquo;, a stream of continuous
        maximums/medians
      </>
    ),
    patterns: [{ label: "Min/Max Heap", slug: "heaps-and-priority-queues" }],
  },
  {
    clue: "Optimal sub-choices, overlapping subproblems, min/max path costs",
    patterns: [{ label: "Dynamic Programming", slug: "dynamic-programming" }],
  },
  {
    clue: "All possible arrangements, board exploration with constraints",
    patterns: [{ label: "Backtracking", slug: "backtracking-and-pruning" }],
  },
];

function PatternLinks({ patterns }: { patterns: PatternLink[] }) {
  return (
    <span className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
      {patterns.map((pattern) => {
        const available = patternHasContent(pattern.slug);
        return (
          <span key={pattern.label} className="inline-flex items-center gap-2">
            <Link
              href={`/dsa/patterns/${pattern.slug}`}
              className={`font-medium underline-offset-4 hover:underline ${
                available ? "text-accent-deep" : "text-ink-soft"
              }`}
            >
              {pattern.label}
            </Link>
            {!available && <Badge tone="accent">soon</Badge>}
          </span>
        );
      })}
    </span>
  );
}

export default function CheatSheetPage() {
  return (
    <Container>
      <PageHeader
        back={{ href: "/dsa", label: "DSA roadmap" }}
        title="Cheat Sheet"
        description="A diagnostic matrix: translate a problem statement’s clues into the pattern it most likely needs."
      />

      <ol className="-mx-3 sm:hidden">
        {DIAGNOSTIC_MATRIX.map((entry, index) => (
          <li
            key={index}
            className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 rounded-2xl px-3 py-4 odd:bg-accent-wash/40"
          >
            <span className="pt-0.5 font-mono text-xs tabular-nums text-ink-faint">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <p className="text-[0.95rem] leading-relaxed text-ink">{entry.clue}</p>
              <div className="mt-2.5 text-sm">
                <PatternLinks patterns={entry.patterns} />
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="hidden overflow-hidden rounded-2xl border border-line sm:block">
        <table className="w-full text-left text-sm lg:text-base">
          <caption className="sr-only">
            Problem clues and the pattern each one most likely calls for
          </caption>
          <thead>
            <tr className="bg-accent-wash/60">
              <th
                scope="col"
                className="w-[60%] px-5 py-3.5 font-mono text-xs font-medium uppercase tracking-widest text-accent-deep"
              >
                Clue in problem statement
              </th>
              <th
                scope="col"
                className="px-5 py-3.5 font-mono text-xs font-medium uppercase tracking-widest text-accent-deep"
              >
                High-probability pattern
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line/60">
            {DIAGNOSTIC_MATRIX.map((entry, index) => (
              <tr key={index} className="transition-colors hover:bg-accent-wash/40">
                <td className="px-5 py-4 align-top leading-relaxed text-ink-soft">
                  {entry.clue}
                </td>
                <td className="px-5 py-4 align-top">
                  <PatternLinks patterns={entry.patterns} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
