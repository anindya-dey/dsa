export interface CppEntryMeta {
  slug: string;
  title: string;
  summary: string;
}

export const cppEntries: CppEntryMeta[] = [
  { slug: "vector", title: "std::vector", summary: "The growable array: creating, looping, copying, grids, size versus capacity, and insert and erase." },
  { slug: "string", title: "std::string", summary: "Owned text: indexing, substrings, searching, character tricks, building strings, and parsing numbers." },
  { slug: "unordered-map", title: "std::unordered_map / unordered_set", summary: "Hash-based lookup: counting, safe reads, iteration, sets, average O(1) cost, and keys without a hash." },
  { slug: "map", title: "std::map / std::set", summary: "Sorted keys: lookup, smallest and largest, lower_bound ranges, multiset duplicates, and custom order." },
  { slug: "deque", title: "std::deque", summary: "A double-ended queue: O(1) changes at both ends, indexed access, and its use in sliding windows." },
  { slug: "stack-queue", title: "std::stack / std::queue", summary: "LIFO and FIFO: push, peek, pop that returns nothing, BFS with a queue, and the underlying container." },
  { slug: "priority-queue", title: "std::priority_queue", summary: "The heap: max-heap by default, min-heaps with std::greater, custom comparators, top-k, and lazy deletion." },
  { slug: "pair-tuple", title: "std::pair / std::tuple / std::array", summary: "Small fixed groups of values: structured bindings, field-by-field comparison, and fixed-size arrays." },
  { slug: "optional", title: "std::optional", summary: "A value that may be missing: returning not-found without magic values like -1." },
  { slug: "function-lambdas", title: "std::function & Lambdas", summary: "Lambdas, captures, passing them to algorithms, and recursive helpers with std::function." },
  { slug: "comparators", title: "Custom Comparators", summary: "Strict weak ordering: the contract every sort, set, map, and heap comparator must keep." },
  { slug: "algorithms", title: "Sorting & nth_element", summary: "sort, stable_sort, nth_element, partial_sort, and the everyday helpers: reverse, unique, min_element." },
  { slug: "binary-search-algos", title: "lower_bound & upper_bound", summary: "Binary search on a sorted range: first >= x, first > x, counting, presence, and insertion points." },
  { slug: "numeric", title: "Numeric Utilities", summary: "accumulate, iota, gcd, min and max, abs, numeric_limits, and why pow returns a double." },
  { slug: "integer-overflow", title: "Integer Overflow & Limits", summary: "Where int runs out, why signed overflow is undefined, and the habits that prevent it." },
  { slug: "bit-operations", title: "Bit Operations", summary: "The operators, the classic tricks, subsets as masks, std::bitset, and C++20's <bit> functions." },
  { slug: "invalidation", title: "Iterator Invalidation", summary: "When saved iterators and references stop working, and how to erase safely while looping." },
  { slug: "smart-pointers", title: "Smart Pointers", summary: "unique_ptr, shared_ptr, and weak_ptr: ownership you can read from the type." },
];

export function getCppEntry(slug: string): CppEntryMeta | undefined {
  return cppEntries.find((entry) => entry.slug === slug);
}
