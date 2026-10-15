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
    clue: (
      <>
        Input size tells you the budget: <V>n</V> &le; 20 allows
        exponential, 10<sup>3</sup> allows O(<V>n</V>&sup2;), 10<sup>5</sup>{" "}
        needs O(<V>n</V> log <V>n</V>) or better
      </>
    ),
    patterns: [{ label: "Asymptotic Analysis", slug: "asymptotic-analysis" }],
  },
  {
    clue: "Index access, rotating or shifting elements, adds and removes at both ends",
    patterns: [{ label: "Linear Structures", slug: "linear-structures" }],
  },
  {
    clue: "Frequency tracking, pair matching, “have I seen this before?”",
    patterns: [{ label: "Hash Map / Set", slug: "hash-based-structures" }],
  },
  {
    clue: "The answer for n is built from the answer for a smaller n, or a self-similar shape",
    patterns: [{ label: "Recursion", slug: "recursion-and-math" }],
  },
  {
    clue: (
      <>
        &ldquo;<V>k</V>-th smallest / closest&rdquo;, or an order defined by a
        custom rule
      </>
    ),
    patterns: [
      { label: "Quickselect / Custom Sort", slug: "sorting-and-selection" },
    ],
  },
  {
    clue: (
      <>
        Every element appears twice except one, flags packed into an integer,
        or all subsets of <V>n</V> &le; 20 items
      </>
    ),
    patterns: [{ label: "Bit Manipulation", slug: "bit-manipulation" }],
  },
  {
    clue: "Sorted array, pairs or triplets, converging from both ends, or a fast/slow pair for cycles",
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
    clue: "Next greater element, span of stock prices, histogram areas, trapped water",
    patterns: [{ label: "Monotonic Stack / Deque", slug: "monotonic-structures" }],
  },
  {
    clue: (
      <>
        Sorted or rotated input, or &ldquo;find the minimum/maximum value{" "}
        <V>X</V> such that a condition holds&rdquo;
      </>
    ),
    patterns: [
      { label: "Binary Search on Answer Space", slug: "binary-search-variants" },
    ],
  },
  {
    clue: "Split in half, solve both halves, combine; counting pairs that cross the split",
    patterns: [{ label: "Divide & Conquer", slug: "divide-and-conquer" }],
  },
  {
    clue: (
      <>
        Sum of a subarray, &ldquo;subarray sums to <V>k</V>&rdquo;, or many
        range additions applied at once
      </>
    ),
    patterns: [
      { label: "Prefix Sums", slug: "prefix-sums-and-difference-arrays" },
    ],
  },
  {
    clue: "Overlapping ranges, meetings and rooms, merging or inserting time spans",
    patterns: [{ label: "Intervals / Sweep Line", slug: "intervals-and-sweep-line" }],
  },
  {
    clue: "Rotate, spiral, or transform a 2D matrix in place",
    patterns: [{ label: "Matrix & Grid", slug: "matrix-and-grid-algorithms" }],
  },
  {
    clue: "Matching brackets, nested structure to decode, most-recent-first or first-in-first-out order",
    patterns: [{ label: "Stacks & Queues", slug: "stacks-and-queues" }],
  },
  {
    clue: "Reverse, reorder, or splice a linked list in place with O(1) extra space",
    patterns: [
      { label: "Linked List Surgery", slug: "linked-list-manipulation" },
    ],
  },
  {
    clue: "Hierarchies; depth, path, or subtree answers; sorted order from a BST",
    patterns: [{ label: "Binary Trees & BSTs", slug: "binary-trees-and-bsts" }],
  },
  {
    clue: (
      <>
        &ldquo;Top <V>K</V>&rdquo;, merge <V>k</V> sorted inputs, a running
        median or maximum over a stream
      </>
    ),
    patterns: [{ label: "Min/Max Heap", slug: "heaps-and-priority-queues" }],
  },
  {
    clue: "Prefix queries, autocomplete, searching many words at once",
    patterns: [{ label: "Trie", slug: "trie-prefix-tree" }],
  },
  {
    clue: "Shortest path in an unweighted graph, flood fill, or minimum steps/transformations",
    patterns: [{ label: "BFS / DFS", slug: "graph-traversals" }],
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
    clue: "Weighted shortest paths with extra limits, cheapest way to connect everything, critical links",
    patterns: [{ label: "Advanced Graphs", slug: "advanced-graphs" }],
  },
  {
    clue: "All possible arrangements, board exploration with constraints",
    patterns: [{ label: "Backtracking", slug: "backtracking-and-pruning" }],
  },
  {
    clue: "Optimal sub-choices, overlapping subproblems, “number of ways”, min/max costs",
    patterns: [{ label: "Dynamic Programming", slug: "dynamic-programming" }],
  },
  {
    clue: "A local choice you can prove is always safe: earliest end, farthest reach, running minimum",
    patterns: [{ label: "Greedy", slug: "greedy-algorithms" }],
  },
  {
    clue: "Find a pattern in text, palindromes, repeated or periodic substrings",
    patterns: [{ label: "String Algorithms", slug: "string-algorithms" }],
  },
  {
    clue: "Many range queries (sum, min) mixed with point or range updates",
    patterns: [
      { label: "Segment Tree / Fenwick", slug: "range-query-structures" },
    ],
  },
  {
    clue: (
      <>
        &ldquo;Return the answer modulo 10<sup>9</sup> + 7&rdquo;, primes,
        counting arrangements
      </>
    ),
    patterns: [
      { label: "Number Theory", slug: "number-theory-and-combinatorics" },
    ],
  },
  {
    clue: "“Design a class” with O(1) or O(log n) guarantees per operation",
    patterns: [
      { label: "Design Data Structures", slug: "design-data-structures" },
    ],
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
