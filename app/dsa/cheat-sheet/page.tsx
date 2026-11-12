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
    "Match problem clues to candidate DSA techniques, with the assumptions that make each one useful.",
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
    clue: "Build or change a sequence: choose storage for indexed access, insertions, or operations at both ends",
    patterns: [{ label: "Linear Structures", slug: "linear-structures" }],
  },
  {
    clue: "Exact membership, duplicate detection, frequencies, or grouping items by a shared key",
    patterns: [{ label: "Hash Map / Set", slug: "hash-based-structures" }],
  },
  {
    clue: "Solve a smaller version of the same problem, or follow a nested, self-similar structure",
    patterns: [{ label: "Recursion", slug: "recursion-and-math" }],
  },
  {
    clue: (
      <>
        Find the <V>k</V>-th smallest/largest element or the <V>k</V> closest
        items without needing the whole input sorted
      </>
    ),
    patterns: [
      { label: "Selection / Quickselect", slug: "sorting-and-selection" },
    ],
  },
  {
    clue: "Order all items by a custom rule, or sort first so equal or related items become neighbors",
    patterns: [{ label: "Sorting", slug: "sorting-and-selection" }],
  },
  {
    clue: "Cancel paired integers with XOR, pack independent flags into bits, or enumerate subsets of a small set with bitmasks",
    patterns: [{ label: "Bit Manipulation", slug: "bit-manipulation" }],
  },
  {
    clue: "Find pairs/triplets in sorted data where moving a pointer rules out candidates, compare sequence ends, or use fast/slow pointers for linked-list cycles",
    patterns: [{ label: "Two Pointers", slug: "two-pointers" }],
  },
  {
    clue: "Fixed-size contiguous windows whose sum or counts can be updated as elements enter and leave",
    patterns: [{ label: "Fixed Sliding Window", slug: "sliding-window" }],
  },
  {
    clue: "Longest substring with at most k distinct characters, or shortest cover of required characters; boundary moves must not skip valid candidates",
    patterns: [{ label: "Variable Sliding Window", slug: "sliding-window" }],
  },
  {
    clue: "Next/previous greater or smaller element, stock spans, histogram areas, or trapped-water boundaries",
    patterns: [{ label: "Monotonic Stack", slug: "monotonic-structures" }],
  },
  {
    clue: "Minimum or maximum in each moving window, where old elements expire from one end",
    patterns: [{ label: "Monotonic Deque", slug: "monotonic-structures" }],
  },
  {
    clue: "Find a value or first/last occurrence in sorted data, or search a rotated sorted array",
    patterns: [{ label: "Binary Search", slug: "binary-search-variants" }],
  },
  {
    clue: (
      <>
        Smallest/largest answer where a yes/no check changes only once as
        candidate values increase: for example, &ldquo;is speed <V>x</V>{" "}
        enough?&rdquo;
      </>
    ),
    patterns: [
      { label: "Binary Search on Answers", slug: "binary-search-variants" },
    ],
  },
  {
    clue: "Split into smaller independent subproblems and combine their answers; count inversions while merging sorted halves",
    patterns: [{ label: "Divide & Conquer", slug: "divide-and-conquer" }],
  },
  {
    clue: (
      <>
        Repeated range sums on an unchanged array, or count subarrays summing
        to <V>k</V> (including negative values)
      </>
    ),
    patterns: [
      { label: "Prefix Sums", slug: "prefix-sums-and-difference-arrays" },
    ],
  },
  {
    clue: "Batch many range additions, then reconstruct the final array; queries do not interleave with updates",
    patterns: [
      { label: "Difference Arrays", slug: "prefix-sums-and-difference-arrays" },
    ],
  },
  {
    clue: "Overlapping ranges, meetings and rooms, merging or inserting time spans",
    patterns: [{ label: "Intervals / Sweep Line", slug: "intervals-and-sweep-line" }],
  },
  {
    clue: "Rotate a matrix, visit cells in spiral order, mark rows/columns, or search a matrix sorted by both rows and columns",
    patterns: [{ label: "Matrix & Grid", slug: "matrix-and-grid-algorithms" }],
  },
  {
    clue: "Matching brackets, nested decoding, undoing the latest action, or processing items strictly in arrival order",
    patterns: [{ label: "Stacks & Queues", slug: "stacks-and-queues" }],
  },
  {
    clue: "Reverse, merge, reorder, or splice linked-list nodes by changing their links",
    patterns: [
      { label: "Linked List Manipulation", slug: "linked-list-manipulation" },
    ],
  },
  {
    clue: "Binary-tree depths, paths, ancestors, or subtree answers; ordered traversal or lookup in a binary search tree",
    patterns: [{ label: "Binary Trees & BSTs", slug: "binary-trees-and-bsts" }],
  },
  {
    clue: (
      <>
        Top <V>k</V> items from a stream, merge <V>k</V> sorted inputs, maintain
        a median with two heaps, or repeatedly remove an extreme as items arrive
      </>
    ),
    patterns: [{ label: "Heaps / Priority Queues", slug: "heaps-and-priority-queues" }],
  },
  {
    clue: "Shared word prefixes, autocomplete, wildcard dictionary lookup, or pruning partial words during a board search",
    patterns: [{ label: "Trie", slug: "trie-prefix-tree" }],
  },
  {
    clue: "Fewest edges, moves, or transformations in a graph or state space where every edge has the same cost",
    patterns: [{ label: "Breadth-First Search (BFS)", slug: "graph-traversals" }],
  },
  {
    clue: "Reachability, connected regions, flood fill, or cycle detection in a graph or grid",
    patterns: [{ label: "BFS / DFS", slug: "graph-traversals" }],
  },
  {
    clue: "Directed prerequisites: find a valid order, or detect that a dependency cycle makes it impossible",
    patterns: [
      { label: "Topological Sort", slug: "graph-specializations" },
    ],
  },
  {
    clue: "Undirected edges added over time: merge components, test connectivity, or detect a redundant edge",
    patterns: [{ label: "Union-Find (DSU)", slug: "graph-specializations" }],
  },
  {
    clue: "Cheapest paths with non-negative edge weights and no hop limit",
    patterns: [{ label: "Dijkstra", slug: "graph-specializations" }],
  },
  {
    clue: "Shortest paths with negative edge weights, or detection of a reachable negative cycle",
    patterns: [{ label: "Bellman-Ford", slug: "graph-specializations" }],
  },
  {
    clue: (
      <>
        Cheapest route with a hop/stop limit: keep track of edges used;{" "}
        <V>k</V> intermediate stops allow <V>k</V> + 1 edges
      </>
    ),
    patterns: [{ label: "Hop-Limited Shortest Paths", slug: "advanced-graphs" }],
  },
  {
    clue: "Connect all nodes of an undirected network at minimum total edge cost, not minimum distance from a source",
    patterns: [{ label: "Minimum Spanning Tree", slug: "advanced-graphs" }],
  },
  {
    clue: "Groups of directed-graph nodes that can all reach one another, or collapsing these groups into an acyclic graph",
    patterns: [{ label: "Strongly Connected Components", slug: "advanced-graphs" }],
  },
  {
    clue: "Undirected edges or nodes whose removal increases the number of connected components",
    patterns: [{ label: "Bridges / Articulation Points", slug: "advanced-graphs" }],
  },
  {
    clue: "Shortest distances between every pair of nodes in a graph small enough for cubic work",
    patterns: [{ label: "Floyd-Warshall", slug: "advanced-graphs" }],
  },
  {
    clue: "Enumerate subsets, permutations, or valid boards by choosing, checking constraints, and undoing choices",
    patterns: [{ label: "Backtracking", slug: "backtracking-and-pruning" }],
  },
  {
    clue: "Counting or optimization over choices where different decision paths reach the same smaller state",
    patterns: [{ label: "Dynamic Programming", slug: "dynamic-programming" }],
  },
  {
    clue: "A local choice you can prove never prevents an optimal answer, such as earliest-finish scheduling or farthest reachable position",
    patterns: [{ label: "Greedy", slug: "greedy-algorithms" }],
  },
  {
    clue: "Find occurrences of a pattern in text, palindromic substrings, or repeated/periodic substrings",
    patterns: [{ label: "String Algorithms", slug: "string-algorithms" }],
  },
  {
    clue: "Updates mixed with range queries: sums/counts suggest Fenwick; more general aggregates or lazy range updates suggest a segment tree",
    patterns: [
      { label: "Segment Tree / Fenwick", slug: "range-query-structures" },
    ],
  },
  {
    clue: "Repeated range minimum, maximum, or GCD queries on data that never changes",
    patterns: [{ label: "Sparse Table", slug: "range-query-structures" }],
  },
  {
    clue: "Primes, divisibility, greatest common divisors, huge modular powers, or counts expressible with combinations/permutations",
    patterns: [
      { label: "Number Theory & Combinatorics", slug: "number-theory-and-combinatorics" },
    ],
  },
  {
    clue: "Build a structure supporting several named operations under stated per-operation time bounds",
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
        description="Match clues in a problem statement to likely solution patterns."
      />

      <div className="mb-8 rounded-2xl border border-line bg-accent-wash/40 px-4 py-4 sm:px-5">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent-deep">
          Before you diagnose
        </p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
          Start with the constraints. Rough budgets are
          2<sup><V>n</V></sup> subsets near <V>n</V> = 20 (not <V>n</V>!
          permutations), O(<V>n</V>&sup2;) near 10<sup>3</sup>, and
          O(<V>n</V> log <V>n</V>) or better near 10<sup>5</sup>. Check time,
          memory, work per operation, and total input across test cases. See{" "}
          <Link
            href="/dsa/patterns/asymptotic-analysis"
            className="font-medium text-accent-deep underline-offset-4 hover:underline"
          >
            asymptotic analysis
          </Link>{" "}
          for the notation and its limits.
        </p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
          Clues suggest candidates, not guarantees; patterns can combine. A
          modulus such as 10<sup>9</sup> + 7 limits the answer’s size, not the
          algorithm.
        </p>
      </div>

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
            Problem clues and candidate techniques to consider
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
                Patterns to consider
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
