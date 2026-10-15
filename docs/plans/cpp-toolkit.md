---
date: 2026-10-14
topic: cpp-toolkit
status: proposed
---

# Proposed Track: C++ Toolkit

A proposed DSA sub-track, recorded here so the scope and the linking rules
are explicit. Nothing in this document is added to the catalog yet; it is
the specification for a future batch (see `content-batches.md`).

## Why (and why scoped this way)

The site's articles use `unordered_map`, `priority_queue` (with its
max-heap-by-default trap), `vector` iterator invalidation, `set` vs
`unordered_set` ordering, `std::function`, and the algorithm library, with
no central place to learn them. Non-C++ readers stall on these; C++ readers
stall on the gotchas.

The scope is deliberately a **short reference, not a tutorial**: each entry
is a compact page in the site's voice, covering what the tool is, its key
operations and complexity, and the gotchas. It is not a "Learn C++" track,
and it does not cover language features the site never uses.

## Entries (14)

1. `std::vector` — the dynamic array; growth, invalidation, `reserve`,
   the `size()` vs `capacity()` distinction.
2. `std::string` — construction, comparison, `substr`, and the operations
   that copy.
3. `std::unordered_map` / `std::unordered_set` — hash containers; average
   vs worst-case complexity, load factor, iteration-order gotchas.
4. `std::map` / `std::set` — ordered containers; O(log n) everything,
   `lower_bound`/`upper_bound`, when order beats hashing.
5. `std::deque` — double-ended queue; block storage, front/back O(1),
   why it is not contiguous.
6. `std::stack` / `std::queue` — adapters, not containers; the underlying
   container choice.
7. `std::priority_queue` — the heap; **max-heap by default**, the
   comparator trick, `push`+`pop` as "replace", no decrease-key.
8. `std::pair` / `std::tuple` — structured bindings, comparison
   lexicographic ordering, `std::array` vs C arrays.
9. `std::optional` — maybe-value; returning not-found without sentinels.
10. `std::function` & lambdas — closures, captures, the comparator
    pattern used across the site.
11. Sorting: `sort`, `stable_sort`, `nth_element`, `partial_sort` — what
    each guarantees, what each costs.
12. Binary search family: `binary_search`, `lower_bound`, `upper_bound`,
    `equal_range` — and why the boundary functions are the useful ones.
13. Numeric: `accumulate`, `iota`, `min`/`max`/`minmax`, `gcd`/`lcm`,
    `numeric_limits` — the small utilities every solution leans on.
14. Iterator invalidation & references — the rules that bite:
   which operations invalidate which iterators, `erase` while
   iterating, dangling references from reallocation.

## Cross-linking rules (decided)

- **No inline links from articles to C++ Toolkit entries.** Articles
  mention containers in passing constantly; linking every mention is noise,
  and the first-use-per-article rule would still add hundreds of links.
- **A "Related C++ tools" end section instead.** Any article that leans on
  a particular container or algorithm names it in an end section, next to
  the existing "Related patterns" / "Related concepts" sections. One or two
  entries per article, not a list of everything used.
- Toolkit entries themselves follow the standard cross-link rule
  (inline + end links to related entries and to the patterns that use the
  tool most).

## Placement

A sub-track under DSA (not a fifth top-level vertical), since DSA is the
site's C++-only vertical per R12 and the toolkit exists to serve those
articles. Route prefix: `/dsa/cpp` or a section on the roadmap page.
The LLD track's C++ sketches would also gain "Related C++ tools" sections.

## Delivery suggestion

Add as **Batch 7**, after the AI/ML vertical (Batch 6) and after the core
DSA + System Design roadmap (Batches 1-5) is complete. Estimated size:
14 entries, each 300-600 words, cheaper than a normal batch because
reference pages are shorter and reference each other heavily.
