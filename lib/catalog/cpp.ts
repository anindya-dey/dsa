export interface CppEntryMeta {
  slug: string;
  title: string;
  summary: string;
}

export const cppEntries: CppEntryMeta[] = [
  { slug: "vector", title: "std::vector", summary: "The dynamic array: contiguous memory, amortized growth, invalidation rules." },
  { slug: "string", title: "std::string", summary: "Construction, comparison, substr, and the operations that copy." },
  { slug: "unordered-map", title: "std::unordered_map / unordered_set", summary: "Hash containers: O(1) average, iteration-order gotchas." },
  { slug: "map", title: "std::map / std::set", summary: "Ordered containers: O(log n) everything, lower_bound/upper_bound." },
  { slug: "deque", title: "std::deque", summary: "Double-ended queue: block storage, front/back O(1), not contiguous." },
  { slug: "stack-queue", title: "std::stack / std::queue", summary: "Adapters over a container: LIFO and FIFO with a chosen underlying store." },
  { slug: "priority-queue", title: "std::priority_queue", summary: "The heap: max-heap by default, the comparator trick, no decrease-key." },
  { slug: "pair-tuple", title: "std::pair / std::tuple / std::array", summary: "Structured bindings, lexicographic comparison, fixed-size arrays." },
  { slug: "optional", title: "std::optional", summary: "Maybe-value: returning not-found without sentinels." },
  { slug: "function-lambdas", title: "std::function & Lambdas", summary: "Closures, captures, and the comparator pattern used across this site." },
  { slug: "algorithms", title: "Sorting & nth_element", summary: "sort, stable_sort, nth_element, partial_sort: what each guarantees." },
  { slug: "binary-search-algos", title: "lower_bound & upper_bound", summary: "The boundary functions: the useful half of the binary-search family." },
  { slug: "numeric", title: "Numeric Utilities", summary: "accumulate, iota, gcd, minmax, numeric_limits, pow: the small utilities." },
  { slug: "invalidation", title: "Iterator Invalidation", summary: "Which operations invalidate which iterators: erase-while-iterating and friends." },
];

export function getCppEntry(slug: string): CppEntryMeta | undefined {
  return cppEntries.find((entry) => entry.slug === slug);
}
