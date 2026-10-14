import type { DsaPatternMeta, DsaPhaseNumber } from "./types";

export const dsaPhaseTitles: Record<DsaPhaseNumber, string> = {
  1: "Core Mechanics & Complexity Foundations",
  2: "Fundamental Algorithmic Patterns",
  3: "Trees, Heaps, and Graphs",
  4: "Advanced Algorithms & Specialized Structures",
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
      "Call stack behavior, recurrence relations (Master Theorem), and inductive reasoning about recursive code.",
  },
  {
    slug: "sorting-and-selection",
    title: "Sorting & Selection",
    phase: 1,
    variants: ["Comparison Sorts", "Quickselect"],
    summary:
      "Merge/quick/heap sort, stability and comparator design, and linear-time selection of the k-th element.",
  },
  {
    slug: "bit-manipulation",
    title: "Bit Manipulation",
    phase: 1,
    summary:
      "XOR tricks, bit counting, bitmask state, and subset enumeration through binary representations.",
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
    slug: "monotonic-structures",
    title: "Monotonic Structures",
    phase: 2,
    variants: ["Monotonic Stack", "Monotonic Deque"],
    summary:
      "Next greater/smaller element and histogram problems via a monotonic stack; sliding window maximum via a monotonic deque.",
  },
  {
    slug: "binary-search-variants",
    title: "Binary Search Variants",
    phase: 2,
    summary:
      "Exact match vs. lower/upper bounds, search in rotated sorted arrays, and binary search on a monotonic answer space.",
  },
  {
    slug: "divide-and-conquer",
    title: "Divide & Conquer",
    phase: 2,
    summary:
      "Merge-sort-based counting, quickselect, closest pair of points, and the recurrence analysis behind them.",
  },
  {
    slug: "prefix-sums-and-difference-arrays",
    title: "Prefix Sums & Difference Arrays",
    phase: 2,
    summary:
      "Constant-time range sum queries, 2D prefix sums, and O(1) range update queries.",
  },
  {
    slug: "intervals-and-sweep-line",
    title: "Intervals & Sweep Line",
    phase: 2,
    summary:
      "Merging overlapping intervals, scheduling for maximum overlap, and sweep-line counting of concurrent events.",
  },
  {
    slug: "matrix-and-grid-algorithms",
    title: "Matrix & Grid Algorithms",
    phase: 2,
    variants: ["Grid Traversal", "Matrix Transformation"],
    summary:
      "Spiral and rotated traversal, in-place matrix transformation, and flood-fill over a grid.",
  },
  {
    slug: "stacks-and-queues",
    title: "Stacks & Queues",
    phase: 2,
    summary:
      "Problem patterns layered on the basic structures: valid parentheses, min-stack, RPN evaluation, and decode-string.",
  },
  {
    slug: "linked-list-manipulation",
    title: "Linked List Manipulation",
    phase: 2,
    summary:
      "Reversing, merging, reordering, and deep-copying linked lists in place with pointer surgery.",
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
    slug: "trie-prefix-tree",
    title: "Trie (Prefix Tree)",
    phase: 3,
    summary: "Prefix autocomplete, word search, and maximum XOR pair problems.",
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
  {
    slug: "advanced-graphs",
    title: "Advanced Graphs",
    phase: 3,
    variants: ["Minimum Spanning Tree", "Strongly Connected Components"],
    summary:
      "Kruskal/Prim for minimum spanning trees, and Tarjan/Kosaraju for strongly connected components.",
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
    slug: "greedy-algorithms",
    title: "Greedy Algorithms",
    phase: 4,
    summary:
      "Activity selection, interval scheduling, Huffman coding, and proving when a local choice is globally safe.",
  },
  {
    slug: "string-algorithms",
    title: "String Algorithms",
    phase: 4,
    variants: ["KMP", "Rabin-Karp", "Manacher"],
    summary:
      "Pattern matching and palindrome detection with KMP, Rabin-Karp, Z-algorithm, and Manacher.",
  },
  {
    slug: "range-query-structures",
    title: "Range-Query Structures",
    phase: 4,
    variants: ["Fenwick Tree", "Segment Tree", "Sparse Table"],
    summary:
      "Fenwick and segment trees for dynamic range queries, and sparse tables for static range aggregates.",
  },
  {
    slug: "number-theory-and-combinatorics",
    title: "Number Theory & Combinatorics",
    phase: 4,
    summary:
      "Primes and sieves, GCD/LCM, modular arithmetic and fast exponentiation, and nCr combinatorics.",
  },
  {
    slug: "design-data-structures",
    title: "Design Data Structures",
    phase: 4,
    variants: ["LRU/LFU", "Bloom Filter", "Skip List", "Randomized Set"],
    summary:
      "The 'implement it yourself' category: caches, probabilistic filters, ordered structures, and iterators.",
  },
];

export function getDsaPattern(slug: string): DsaPatternMeta | undefined {
  return dsaPatterns.find((pattern) => pattern.slug === slug);
}

export function getDsaPatternsByPhase(phase: DsaPhaseNumber): DsaPatternMeta[] {
  return dsaPatterns.filter((pattern) => pattern.phase === phase);
}
