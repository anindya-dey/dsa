import type { DsaPatternMeta, DsaPhaseNumber } from "./types";

export const dsaPhaseTitles: Record<DsaPhaseNumber, string> = {
  1: "Core Mechanics & Complexity Foundations",
  2: "Fundamental Algorithmic Patterns",
  3: "Trees, Heaps, and Graphs",
  4: "Advanced Optimization & State Space Exploration",
};

export const dsaPatterns: DsaPatternMeta[] = [
  // Phase 1
  {
    slug: "asymptotic-analysis",
    title: "Asymptotic Analysis",
    phase: 1,
    summary:
      "Big-O, Big-Ω, Big-Θ, space vs. time trade-offs, and amortized complexity.",
  },
  {
    slug: "linear-structures",
    title: "Linear Structures",
    phase: 1,
    summary:
      "Dynamic arrays, singly/doubly linked lists, and array-backed vs. linked-node stacks and queues.",
  },
  {
    slug: "hash-based-structures",
    title: "Hash-Based Structures",
    phase: 1,
    summary:
      "Hash functions, open addressing vs. separate chaining, load factors, and collision resolution.",
  },
  {
    slug: "recursion-and-math",
    title: "Recursion & Math",
    phase: 1,
    summary:
      "Call stack behavior, recurrence relations (Master Theorem), and bitwise tricks (XOR, bitmasks).",
  },

  // Phase 2
  {
    slug: "two-pointers",
    title: "Two Pointers",
    phase: 2,
    variants: ["Converging (Left/Right)", "Fast & Slow (Floyd's Cycle)"],
    summary:
      "Sorted-array target sums and palindrome checks via converging pointers; cycle detection via fast & slow pointers.",
  },
  {
    slug: "sliding-window",
    title: "Sliding Window",
    phase: 2,
    variants: ["Fixed Window", "Dynamic Window"],
    summary:
      "Maximum sum subarrays and anagram checks with a fixed window; longest/shortest substring problems with a dynamic window.",
  },
  {
    slug: "binary-search-variants",
    title: "Binary Search Variants",
    phase: 2,
    summary:
      "Exact match vs. lower/upper bounds, search in rotated sorted arrays, and binary search on a monotonic answer space.",
  },
  {
    slug: "prefix-sums-and-difference-arrays",
    title: "Prefix Sums & Difference Arrays",
    phase: 2,
    summary:
      "Constant-time range sum queries, 2D prefix sums, and O(1) range update queries.",
  },

  // Phase 3
  {
    slug: "binary-trees-and-bsts",
    title: "Binary Trees & BSTs",
    phase: 3,
    summary:
      "Traversals (pre/in/post-order), tree construction, lowest common ancestor, and BST validation.",
  },
  {
    slug: "heaps-and-priority-queues",
    title: "Heaps / Priority Queues",
    phase: 3,
    summary: "Top-K elements, K-way merge, and two heaps for streaming medians.",
  },
  {
    slug: "graph-traversals",
    title: "Graph Traversals",
    phase: 3,
    variants: ["Breadth-First Search", "Depth-First Search"],
    summary:
      "Shortest path in unweighted graphs and level-order traversal via BFS; connected components and cycle detection via DFS.",
  },
  {
    slug: "graph-specializations",
    title: "Graph Specializations",
    phase: 3,
    summary:
      "Topological sort, disjoint set union (DSU/Union-Find), and shortest path (Dijkstra, Bellman-Ford).",
  },

  // Phase 4
  {
    slug: "backtracking-and-pruning",
    title: "Backtracking & Pruning",
    phase: 4,
    summary:
      "Subsets, permutations, combinations, N-Queens, and Sudoku with constraint propagation.",
  },
  {
    slug: "dynamic-programming",
    title: "Dynamic Programming",
    phase: 4,
    variants: ["1D DP", "2D / Grid DP", "Knapsack Variants", "Interval & Bitmask DP"],
    summary:
      "Overlapping subproblems and optimal substructure, from Fibonacci to edit distance to interval DP.",
  },
  {
    slug: "monotonic-structures",
    title: "Monotonic Structures",
    phase: 4,
    variants: ["Monotonic Stack", "Monotonic Deque"],
    summary:
      "Next greater/smaller element and histogram problems via a monotonic stack; sliding window maximum via a monotonic deque.",
  },
  {
    slug: "trie-prefix-tree",
    title: "Trie (Prefix Tree)",
    phase: 4,
    summary: "Prefix autocomplete, word search, and maximum XOR pair problems.",
  },
];

export function getDsaPattern(slug: string): DsaPatternMeta | undefined {
  return dsaPatterns.find((pattern) => pattern.slug === slug);
}

export function getDsaPatternsByPhase(phase: DsaPhaseNumber): DsaPatternMeta[] {
  return dsaPatterns.filter((pattern) => pattern.phase === phase);
}
