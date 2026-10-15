# Editorial review plan

A careful, article-by-article read of the whole site: 375 articles,
about 247,000 words of prose. Mechanical problems (links, compiling code,
Mermaid syntax, em-dashes, titles, tiers) are already caught automatically
by `pnpm check:content` and `pnpm check:cpp`. This plan covers what those
checks cannot verify: whether each article is **correct, clear, and in
house style**.

Created 2026-10-15, after the full-site review (see the "Full-site review
and fixes" notes in `content-batches.md`).

## Order and batch size

Batches of **5 articles**, in this order:

1. **C++ Toolkit** (18 articles, 4 batches). Small, and every other
   vertical links into it, so it is reviewed first.
2. **DSA** (154 articles, 31 batches). Each pattern overview, then that
   pattern's problems, in roadmap order.
3. **System Design** (97 articles, 20 batches). Fundamentals, then LLD,
   then HLD, in catalog order.
4. **AI/ML** (106 articles, 22 batches). Concepts, then Systems, in catalog
   order.

77 batches in total. A session should take **3 to 6 batches** (15 to 30
articles). Past that, attention to detail drops and review quality with
it. Never start a batch you cannot finish in the same session.

## Why 5 at a time

Five articles fit comfortably in one review pass with every claim checked,
every code block tested, and every edit re-read. It is also a small,
reviewable commit: one batch, one commit, easy to revert.

## Per-batch workflow

1. **Read** each of the 5 articles in full, top to bottom, before editing
   anything.
2. **Check** each against the checklist below. Write down every finding
   (file, line, problem, fix) before changing text.
3. **Edit.** Fix findings with targeted edits. Preserve each article's
   opening style and skeleton unless they are the problem. Do not rewrite
   sound prose just to change its wording.
4. **Verify.**
   - `pnpm check:content` and `pnpm check:cpp` must pass.
   - For any article with C++: compile every snippet and, for DSA
     problems, run the optimal and brute-force solutions against hand-made
     tests (normal cases plus empty input, a single element, duplicates,
     negatives, and `INT_MIN`/`INT_MAX` boundaries) with
     `-fsanitize=address,undefined`.
   - Re-read every edited paragraph once more in context.
5. **Record.** Mark the batch `done` in the tables below, with the commit
   SHA and a one-line summary of what changed (or "no changes needed").
6. **Commit and push** one commit per batch, using the
   message format `docs(review): batch C1 - <short summary>`.

If a finding is too big for the batch (a missing topic, or a structural
move between patterns), do not do it inside the batch. Add it to
**Follow-ups** at the bottom of this file and keep going.

## Checklist for every article

**Correctness**

- Every technical claim is true. Verify numbers, complexity bounds,
  dates, attributions, and library or system behavior. Re-do any
  arithmetic (capacity estimates, memory sizes, error rates).
- No overclaims ("all", "always", "every modern X") without support.
- Diagrams are semantically right (arrows go the way data flows), not
  just syntactically valid.
- Link text matches what the target page is about.

**Clarity**

- Follows the skeleton: plain-language definition, concrete example,
  mechanics, trade-offs and failure modes, related links.
- Has a worked example.
- Defines a term before using it, or links to where it is defined.
- Prose over bullet dumps; bullets only for genuinely listy content.

**House style** (full rules in `content-batches.md`)

- Second person, short sentences, one idea per sentence.
- No em-dashes. Also fix awkward commas left by the automated em-dash
  pass (some should read as colons).
- Opening does not default to "Picture this" / "Imagine a", and does not
  repeat the opening style of the article before it.
- Word count in band: fundamentals 700-1100, pattern overview 450-1050,
  problem page 190-500, LLD/HLD 900-1400, C++ entry 300-600. Outside the
  band is acceptable only when the content truly needs it; note why.
- No inline links to C++ Toolkit entries; those go in "Related C++ tools".

**Per vertical**

- *C++ Toolkit:* every claim matches the C++ standard (complexity
  guarantees, invalidation rules, comparator semantics, what throws and
  what is undefined). Snippets that show output must produce it.
  Statement-level fragments are fine, but must be valid C++ once their
  placeholder variables are declared.
- *DSA patterns:* the "how to spot it" clues match the cheat sheet; the
  pattern's problems are the right ones for it.
- *DSA problems:* problem statement and constraints match the linked
  LeetCode problem; brute force has code and an honest reason it is slow;
  optimal solution explains *why* it works; complexity table matches the
  code; "Related C++ tools" lists the tools the code actually uses.
- *System Design:* capacity estimates recomputed; LLD sketches are sound
  designs; HLD case studies cover requirements, estimates, API, data
  model, architecture, deep dives, and trade-offs.
- *AI/ML:* concepts stay conceptual (no derivations) but are accurate;
  systems articles reflect current practice; overlap with sibling topics
  is a deliberate difference of angle, not repetition.

## DSA solutions not yet runtime-tested

These 58 problems compile (`pnpm check:cpp`) but have not been run against
test cases. Test them when their batch comes up, and remove each from this
list once tested.

`climbing-stairs`, `clone-graph`, `combination-sum`, `container-with-most-water`, `contains-duplicate`, `copy-list-with-random-pointer`, `critical-connections-in-a-network`, `daily-temperatures`, `design-add-and-search-words`, `design-hashmap`, `design-linked-list`, `diameter-of-binary-tree`, `different-ways-to-add-parentheses`, `fibonacci-number`, `find-pivot-index`, `group-anagrams`, `house-robber`, `insert-delete-getrandom-o1`, `invert-binary-tree`, `jump-game`, `k-th-symbol-in-grammar`, `longest-common-subsequence`, `longest-repeating-character-replacement`, `longest-substring-without-repeating-characters`, `lowest-common-ancestor-of-a-binary-tree`, `max-sum-subarray-of-size-k`, `merge-intervals`, `merge-k-sorted-lists`, `merge-sorted-array`, `merge-two-sorted-lists`, `min-cost-to-connect-all-points`, `minimum-time-visiting-all-points`, `number-of-1-bits`, `number-of-connected-components`, `number-of-recent-calls`, `pacific-atlantic-water-flow`, `partition-labels`, `permutations`, `range-sum-query`, `redundant-connection`, `reservoir-sampling`, `reverse-linked-list`, `reverse-string`, `rotate-array`, `rotate-image`, `search-a-2d-matrix-ii`, `set-matrix-zeroes`, `single-number`, `sort-colors`, `spiral-matrix`, `subsets`, `subsets-via-bitmask`, `two-sum`, `valid-palindrome`, `valid-parentheses`, `word-ladder`, `word-search-ii`, `zero-one-knapsack`

## Batches

### Phase 1: C++ Toolkit (18 articles)

| Batch | Articles | Status |
| --- | --- | --- |
| C1 | `content/cpp/vector.mdx`<br>`content/cpp/string.mdx`<br>`content/cpp/unordered-map.mdx`<br>`content/cpp/map.mdx`<br>`content/cpp/deque.mdx` | todo |
| C2 | `content/cpp/stack-queue.mdx`<br>`content/cpp/priority-queue.mdx`<br>`content/cpp/pair-tuple.mdx`<br>`content/cpp/optional.mdx`<br>`content/cpp/function-lambdas.mdx` | todo |
| C3 | `content/cpp/comparators.mdx`<br>`content/cpp/algorithms.mdx`<br>`content/cpp/binary-search-algos.mdx`<br>`content/cpp/numeric.mdx`<br>`content/cpp/integer-overflow.mdx` | todo |
| C4 | `content/cpp/bit-operations.mdx`<br>`content/cpp/invalidation.mdx`<br>`content/cpp/smart-pointers.mdx` | todo |

### Phase 2: DSA (154 articles: each pattern overview, then its problems)

| Batch | Articles | Status |
| --- | --- | --- |
| D1 | `content/dsa/patterns/asymptotic-analysis/index.mdx`<br>`content/dsa/patterns/asymptotic-analysis/problems/contains-duplicate.mdx`<br>`content/dsa/patterns/asymptotic-analysis/problems/minimum-time-visiting-all-points.mdx`<br>`content/dsa/patterns/asymptotic-analysis/problems/reverse-string.mdx`<br>`content/dsa/patterns/linear-structures/index.mdx` | todo |
| D2 | `content/dsa/patterns/linear-structures/problems/design-circular-deque.mdx`<br>`content/dsa/patterns/linear-structures/problems/design-linked-list.mdx`<br>`content/dsa/patterns/linear-structures/problems/rotate-array.mdx`<br>`content/dsa/patterns/hash-based-structures/index.mdx`<br>`content/dsa/patterns/hash-based-structures/problems/group-anagrams.mdx` | todo |
| D3 | `content/dsa/patterns/hash-based-structures/problems/longest-consecutive-sequence.mdx`<br>`content/dsa/patterns/hash-based-structures/problems/two-sum.mdx`<br>`content/dsa/patterns/recursion-and-math/index.mdx`<br>`content/dsa/patterns/recursion-and-math/problems/fibonacci-number.mdx`<br>`content/dsa/patterns/recursion-and-math/problems/k-th-symbol-in-grammar.mdx` | todo |
| D4 | `content/dsa/patterns/recursion-and-math/problems/pow-x-n-recursive.mdx`<br>`content/dsa/patterns/sorting-and-selection/index.mdx`<br>`content/dsa/patterns/sorting-and-selection/problems/k-closest-points-to-origin.mdx`<br>`content/dsa/patterns/sorting-and-selection/problems/largest-number.mdx`<br>`content/dsa/patterns/sorting-and-selection/problems/merge-sorted-array.mdx` | todo |
| D5 | `content/dsa/patterns/sorting-and-selection/problems/sort-colors.mdx`<br>`content/dsa/patterns/bit-manipulation/index.mdx`<br>`content/dsa/patterns/bit-manipulation/problems/missing-number.mdx`<br>`content/dsa/patterns/bit-manipulation/problems/number-of-1-bits.mdx`<br>`content/dsa/patterns/bit-manipulation/problems/single-number.mdx` | todo |
| D6 | `content/dsa/patterns/bit-manipulation/problems/subsets-via-bitmask.mdx`<br>`content/dsa/patterns/two-pointers/index.mdx`<br>`content/dsa/patterns/two-pointers/problems/container-with-most-water.mdx`<br>`content/dsa/patterns/two-pointers/problems/linked-list-cycle-detection.mdx`<br>`content/dsa/patterns/two-pointers/problems/three-sum.mdx` | todo |
| D7 | `content/dsa/patterns/two-pointers/problems/valid-palindrome.mdx`<br>`content/dsa/patterns/sliding-window/index.mdx`<br>`content/dsa/patterns/sliding-window/problems/longest-repeating-character-replacement.mdx`<br>`content/dsa/patterns/sliding-window/problems/longest-substring-without-repeating-characters.mdx`<br>`content/dsa/patterns/sliding-window/problems/max-sum-subarray-of-size-k.mdx` | todo |
| D8 | `content/dsa/patterns/sliding-window/problems/minimum-window-substring.mdx`<br>`content/dsa/patterns/monotonic-structures/index.mdx`<br>`content/dsa/patterns/monotonic-structures/problems/daily-temperatures.mdx`<br>`content/dsa/patterns/monotonic-structures/problems/largest-rectangle-in-histogram.mdx`<br>`content/dsa/patterns/monotonic-structures/problems/sliding-window-maximum.mdx` | todo |
| D9 | `content/dsa/patterns/monotonic-structures/problems/trapping-rain-water.mdx`<br>`content/dsa/patterns/binary-search-variants/index.mdx`<br>`content/dsa/patterns/binary-search-variants/problems/find-minimum-in-rotated-sorted-array.mdx`<br>`content/dsa/patterns/binary-search-variants/problems/first-and-last-position-in-sorted-array.mdx`<br>`content/dsa/patterns/binary-search-variants/problems/koko-eating-bananas.mdx` | todo |
| D10 | `content/dsa/patterns/binary-search-variants/problems/search-in-rotated-sorted-array.mdx`<br>`content/dsa/patterns/divide-and-conquer/index.mdx`<br>`content/dsa/patterns/divide-and-conquer/problems/count-inversions.mdx`<br>`content/dsa/patterns/divide-and-conquer/problems/different-ways-to-add-parentheses.mdx`<br>`content/dsa/patterns/divide-and-conquer/problems/majority-element.mdx` | todo |
| D11 | `content/dsa/patterns/prefix-sums-and-difference-arrays/index.mdx`<br>`content/dsa/patterns/prefix-sums-and-difference-arrays/problems/find-pivot-index.mdx`<br>`content/dsa/patterns/prefix-sums-and-difference-arrays/problems/product-of-array-except-self.mdx`<br>`content/dsa/patterns/prefix-sums-and-difference-arrays/problems/range-sum-query.mdx`<br>`content/dsa/patterns/prefix-sums-and-difference-arrays/problems/subarray-sum-equals-k.mdx` | todo |
| D12 | `content/dsa/patterns/intervals-and-sweep-line/index.mdx`<br>`content/dsa/patterns/intervals-and-sweep-line/problems/insert-interval.mdx`<br>`content/dsa/patterns/intervals-and-sweep-line/problems/meeting-rooms-ii.mdx`<br>`content/dsa/patterns/intervals-and-sweep-line/problems/merge-intervals.mdx`<br>`content/dsa/patterns/intervals-and-sweep-line/problems/non-overlapping-intervals.mdx` | todo |
| D13 | `content/dsa/patterns/matrix-and-grid-algorithms/index.mdx`<br>`content/dsa/patterns/matrix-and-grid-algorithms/problems/rotate-image.mdx`<br>`content/dsa/patterns/matrix-and-grid-algorithms/problems/search-a-2d-matrix-ii.mdx`<br>`content/dsa/patterns/matrix-and-grid-algorithms/problems/set-matrix-zeroes.mdx`<br>`content/dsa/patterns/matrix-and-grid-algorithms/problems/spiral-matrix.mdx` | todo |
| D14 | `content/dsa/patterns/stacks-and-queues/index.mdx`<br>`content/dsa/patterns/stacks-and-queues/problems/decode-string.mdx`<br>`content/dsa/patterns/stacks-and-queues/problems/min-stack.mdx`<br>`content/dsa/patterns/stacks-and-queues/problems/number-of-recent-calls.mdx`<br>`content/dsa/patterns/stacks-and-queues/problems/valid-parentheses.mdx` | todo |
| D15 | `content/dsa/patterns/linked-list-manipulation/index.mdx`<br>`content/dsa/patterns/linked-list-manipulation/problems/copy-list-with-random-pointer.mdx`<br>`content/dsa/patterns/linked-list-manipulation/problems/merge-two-sorted-lists.mdx`<br>`content/dsa/patterns/linked-list-manipulation/problems/remove-nth-node-from-end-of-list.mdx`<br>`content/dsa/patterns/linked-list-manipulation/problems/reorder-list.mdx` | todo |
| D16 | `content/dsa/patterns/linked-list-manipulation/problems/reverse-linked-list.mdx`<br>`content/dsa/patterns/binary-trees-and-bsts/index.mdx`<br>`content/dsa/patterns/binary-trees-and-bsts/problems/binary-search-tree-iterator.mdx`<br>`content/dsa/patterns/binary-trees-and-bsts/problems/binary-tree-level-order-traversal.mdx`<br>`content/dsa/patterns/binary-trees-and-bsts/problems/binary-tree-maximum-path-sum.mdx` | todo |
| D17 | `content/dsa/patterns/binary-trees-and-bsts/problems/construct-binary-tree-from-preorder-and-inorder-traversal.mdx`<br>`content/dsa/patterns/binary-trees-and-bsts/problems/diameter-of-binary-tree.mdx`<br>`content/dsa/patterns/binary-trees-and-bsts/problems/invert-binary-tree.mdx`<br>`content/dsa/patterns/binary-trees-and-bsts/problems/kth-smallest-element-in-a-bst.mdx`<br>`content/dsa/patterns/binary-trees-and-bsts/problems/lowest-common-ancestor-of-a-binary-tree.mdx` | todo |
| D18 | `content/dsa/patterns/binary-trees-and-bsts/problems/serialize-and-deserialize-binary-tree.mdx`<br>`content/dsa/patterns/binary-trees-and-bsts/problems/validate-binary-search-tree.mdx`<br>`content/dsa/patterns/heaps-and-priority-queues/index.mdx`<br>`content/dsa/patterns/heaps-and-priority-queues/problems/find-median-from-data-stream.mdx`<br>`content/dsa/patterns/heaps-and-priority-queues/problems/kth-largest-element-in-a-stream.mdx` | todo |
| D19 | `content/dsa/patterns/heaps-and-priority-queues/problems/kth-largest-element-in-an-array.mdx`<br>`content/dsa/patterns/heaps-and-priority-queues/problems/merge-k-sorted-lists.mdx`<br>`content/dsa/patterns/heaps-and-priority-queues/problems/top-k-frequent-elements.mdx`<br>`content/dsa/patterns/trie-prefix-tree/index.mdx`<br>`content/dsa/patterns/trie-prefix-tree/problems/design-add-and-search-words.mdx` | todo |
| D20 | `content/dsa/patterns/trie-prefix-tree/problems/implement-trie.mdx`<br>`content/dsa/patterns/trie-prefix-tree/problems/word-search-ii.mdx`<br>`content/dsa/patterns/graph-traversals/index.mdx`<br>`content/dsa/patterns/graph-traversals/problems/clone-graph.mdx`<br>`content/dsa/patterns/graph-traversals/problems/number-of-islands.mdx` | todo |
| D21 | `content/dsa/patterns/graph-traversals/problems/pacific-atlantic-water-flow.mdx`<br>`content/dsa/patterns/graph-traversals/problems/rotting-oranges.mdx`<br>`content/dsa/patterns/graph-traversals/problems/word-ladder.mdx`<br>`content/dsa/patterns/graph-specializations/index.mdx`<br>`content/dsa/patterns/graph-specializations/problems/alien-dictionary.mdx` | todo |
| D22 | `content/dsa/patterns/graph-specializations/problems/course-schedule.mdx`<br>`content/dsa/patterns/graph-specializations/problems/network-delay-time.mdx`<br>`content/dsa/patterns/graph-specializations/problems/number-of-connected-components.mdx`<br>`content/dsa/patterns/graph-specializations/problems/redundant-connection.mdx`<br>`content/dsa/patterns/advanced-graphs/index.mdx` | todo |
| D23 | `content/dsa/patterns/advanced-graphs/problems/cheapest-flights-within-k-stops.mdx`<br>`content/dsa/patterns/advanced-graphs/problems/critical-connections-in-a-network.mdx`<br>`content/dsa/patterns/advanced-graphs/problems/min-cost-to-connect-all-points.mdx`<br>`content/dsa/patterns/backtracking-and-pruning/index.mdx`<br>`content/dsa/patterns/backtracking-and-pruning/problems/combination-sum.mdx` | todo |
| D24 | `content/dsa/patterns/backtracking-and-pruning/problems/n-queens.mdx`<br>`content/dsa/patterns/backtracking-and-pruning/problems/permutations.mdx`<br>`content/dsa/patterns/backtracking-and-pruning/problems/subsets.mdx`<br>`content/dsa/patterns/backtracking-and-pruning/problems/word-search.mdx`<br>`content/dsa/patterns/dynamic-programming/index.mdx` | todo |
| D25 | `content/dsa/patterns/dynamic-programming/problems/burst-balloons.mdx`<br>`content/dsa/patterns/dynamic-programming/problems/climbing-stairs.mdx`<br>`content/dsa/patterns/dynamic-programming/problems/coin-change.mdx`<br>`content/dsa/patterns/dynamic-programming/problems/decode-ways.mdx`<br>`content/dsa/patterns/dynamic-programming/problems/house-robber-ii.mdx` | todo |
| D26 | `content/dsa/patterns/dynamic-programming/problems/house-robber.mdx`<br>`content/dsa/patterns/dynamic-programming/problems/longest-common-subsequence.mdx`<br>`content/dsa/patterns/dynamic-programming/problems/longest-increasing-subsequence.mdx`<br>`content/dsa/patterns/dynamic-programming/problems/maximum-subarray.mdx`<br>`content/dsa/patterns/dynamic-programming/problems/word-break.mdx` | todo |
| D27 | `content/dsa/patterns/dynamic-programming/problems/zero-one-knapsack.mdx`<br>`content/dsa/patterns/greedy-algorithms/index.mdx`<br>`content/dsa/patterns/greedy-algorithms/problems/best-time-to-buy-and-sell-stock.mdx`<br>`content/dsa/patterns/greedy-algorithms/problems/gas-station.mdx`<br>`content/dsa/patterns/greedy-algorithms/problems/jump-game.mdx` | todo |
| D28 | `content/dsa/patterns/greedy-algorithms/problems/partition-labels.mdx`<br>`content/dsa/patterns/string-algorithms/index.mdx`<br>`content/dsa/patterns/string-algorithms/problems/find-the-index-of-the-first-occurrence.mdx`<br>`content/dsa/patterns/string-algorithms/problems/longest-palindromic-substring.mdx`<br>`content/dsa/patterns/string-algorithms/problems/repeated-substring-pattern.mdx` | todo |
| D29 | `content/dsa/patterns/range-query-structures/index.mdx`<br>`content/dsa/patterns/range-query-structures/problems/count-of-smaller-numbers-after-self.mdx`<br>`content/dsa/patterns/range-query-structures/problems/range-add-to-segment.mdx`<br>`content/dsa/patterns/range-query-structures/problems/range-minimum-query.mdx`<br>`content/dsa/patterns/range-query-structures/problems/range-sum-query-mutable.mdx` | todo |
| D30 | `content/dsa/patterns/number-theory-and-combinatorics/index.mdx`<br>`content/dsa/patterns/number-theory-and-combinatorics/problems/count-primes.mdx`<br>`content/dsa/patterns/number-theory-and-combinatorics/problems/super-pow.mdx`<br>`content/dsa/patterns/number-theory-and-combinatorics/problems/unique-paths.mdx`<br>`content/dsa/patterns/design-data-structures/index.mdx` | todo |
| D31 | `content/dsa/patterns/design-data-structures/problems/design-hashmap.mdx`<br>`content/dsa/patterns/design-data-structures/problems/insert-delete-getrandom-o1.mdx`<br>`content/dsa/patterns/design-data-structures/problems/reservoir-sampling.mdx`<br>`content/dsa/patterns/design-data-structures/problems/time-based-key-value-store.mdx` | todo |

### Phase 3: System Design (97 articles: fundamentals, LLD, HLD)

| Batch | Articles | Status |
| --- | --- | --- |
| S1 | `content/system-design/fundamentals/scalability/index.mdx`<br>`content/system-design/fundamentals/capacity-planning-and-estimation/index.mdx`<br>`content/system-design/fundamentals/latency-vs-throughput/index.mdx`<br>`content/system-design/fundamentals/load-balancing/index.mdx`<br>`content/system-design/fundamentals/caching/index.mdx` | todo |
| S2 | `content/system-design/fundamentals/cdn/index.mdx`<br>`content/system-design/fundamentals/database-fundamentals/index.mdx`<br>`content/system-design/fundamentals/olap-vs-oltp/index.mdx`<br>`content/system-design/fundamentals/object-storage/index.mdx`<br>`content/system-design/fundamentals/search-and-inverted-index/index.mdx` | todo |
| S3 | `content/system-design/fundamentals/geospatial-indexing/index.mdx`<br>`content/system-design/fundamentals/replication/index.mdx`<br>`content/system-design/fundamentals/partitioning-and-sharding/index.mdx`<br>`content/system-design/fundamentals/consistent-hashing/index.mdx`<br>`content/system-design/fundamentals/probabilistic-data-structures/index.mdx` | todo |
| S4 | `content/system-design/fundamentals/stream-vs-batch-processing/index.mdx`<br>`content/system-design/fundamentals/networking-basics/index.mdx`<br>`content/system-design/fundamentals/proxies/index.mdx`<br>`content/system-design/fundamentals/api-design/index.mdx`<br>`content/system-design/fundamentals/serialization-and-schema-evolution/index.mdx` | todo |
| S5 | `content/system-design/fundamentals/api-gateway-and-service-mesh/index.mdx`<br>`content/system-design/fundamentals/message-queues-and-pubsub/index.mdx`<br>`content/system-design/fundamentals/idempotency-and-exactly-once/index.mdx`<br>`content/system-design/fundamentals/cap-theorem-and-consistency-models/index.mdx`<br>`content/system-design/fundamentals/consensus-and-leader-election/index.mdx` | todo |
| S6 | `content/system-design/fundamentals/clock-synchronization-and-logical-time/index.mdx`<br>`content/system-design/fundamentals/multi-region-and-active-active/index.mdx`<br>`content/system-design/fundamentals/distributed-transactions/index.mdx`<br>`content/system-design/fundamentals/event-sourcing-and-cqrs/index.mdx`<br>`content/system-design/fundamentals/backpressure-and-flow-control/index.mdx` | todo |
| S7 | `content/system-design/fundamentals/microservices-vs-monolith/index.mdx`<br>`content/system-design/fundamentals/availability-and-reliability/index.mdx`<br>`content/system-design/fundamentals/reliability-engineering/index.mdx`<br>`content/system-design/fundamentals/observability/index.mdx`<br>`content/system-design/fundamentals/rate-limiting/index.mdx` | todo |
| S8 | `content/system-design/fundamentals/concurrency-and-parallelism/index.mdx`<br>`content/system-design/fundamentals/auth-basics/index.mdx`<br>`content/system-design/fundamentals/security-fundamentals/index.mdx`<br>`content/system-design/fundamentals/multi-tenancy-and-data-residency/index.mdx`<br>`content/system-design/fundamentals/container-orchestration/index.mdx` | todo |
| S9 | `content/system-design/fundamentals/cloud-cost-finops/index.mdx`<br>`content/system-design/fundamentals/testing-at-scale/index.mdx`<br>`content/system-design/fundamentals/zero-trust-supply-chain/index.mdx`<br>`content/system-design/lld/parking-lot/index.mdx`<br>`content/system-design/lld/elevator-system/index.mdx` | todo |
| S10 | `content/system-design/lld/library-management-system/index.mdx`<br>`content/system-design/lld/chess-game/index.mdx`<br>`content/system-design/lld/vending-machine/index.mdx`<br>`content/system-design/lld/lru-lfu-cache/index.mdx`<br>`content/system-design/lld/rate-limiter-lld/index.mdx` | todo |
| S11 | `content/system-design/lld/url-shortener-lld/index.mdx`<br>`content/system-design/lld/logging-framework/index.mdx`<br>`content/system-design/lld/movie-ticket-booking/index.mdx`<br>`content/system-design/lld/task-scheduler-lld/index.mdx`<br>`content/system-design/lld/in-memory-file-system/index.mdx` | todo |
| S12 | `content/system-design/lld/splitwise/index.mdx`<br>`content/system-design/lld/tic-tac-toe/index.mdx`<br>`content/system-design/lld/atm/index.mdx`<br>`content/system-design/lld/hotel-management-system/index.mdx`<br>`content/system-design/lld/car-rental-system/index.mdx` | todo |
| S13 | `content/system-design/lld/text-editor-undo-redo/index.mdx`<br>`content/system-design/lld/pubsub-broker-lld/index.mdx`<br>`content/system-design/lld/bank-ledger-system/index.mdx`<br>`content/system-design/lld/shopping-cart/index.mdx`<br>`content/system-design/hld/load-balancer-system/index.mdx` | todo |
| S14 | `content/system-design/hld/cdn-service/index.mdx`<br>`content/system-design/hld/distributed-id-generator/index.mdx`<br>`content/system-design/hld/distributed-message-queue/index.mdx`<br>`content/system-design/hld/distributed-cache/index.mdx`<br>`content/system-design/hld/key-value-store/index.mdx` | todo |
| S15 | `content/system-design/hld/object-storage-system/index.mdx`<br>`content/system-design/hld/distributed-file-storage/index.mdx`<br>`content/system-design/hld/metrics-monitoring-system/index.mdx`<br>`content/system-design/hld/log-aggregation-system/index.mdx`<br>`content/system-design/hld/web-crawler/index.mdx` | todo |
| S16 | `content/system-design/hld/search-autocomplete/index.mdx`<br>`content/system-design/hld/url-shortener/index.mdx`<br>`content/system-design/hld/rate-limiter-distributed/index.mdx`<br>`content/system-design/hld/chat-application/index.mdx`<br>`content/system-design/hld/news-feed/index.mdx` | todo |
| S17 | `content/system-design/hld/notification-system/index.mdx`<br>`content/system-design/hld/ride-sharing-app/index.mdx`<br>`content/system-design/hld/video-streaming-service/index.mdx`<br>`content/system-design/hld/payment-system/index.mdx`<br>`content/system-design/hld/distributed-job-scheduler/index.mdx` | todo |
| S18 | `content/system-design/hld/collaborative-editing/index.mdx`<br>`content/system-design/hld/google-maps/index.mdx`<br>`content/system-design/hld/stock-exchange/index.mdx`<br>`content/system-design/hld/e-commerce-flash-sale/index.mdx`<br>`content/system-design/hld/proximity-service/index.mdx` | todo |
| S19 | `content/system-design/hld/video-conferencing/index.mdx`<br>`content/system-design/hld/leaderboard/index.mdx`<br>`content/system-design/hld/recommendation-system/index.mdx`<br>`content/system-design/hld/fraud-detection/index.mdx`<br>`content/system-design/hld/ad-click-aggregator/index.mdx` | todo |
| S20 | `content/system-design/hld/webhook-delivery/index.mdx`<br>`content/system-design/hld/large-scale-migration/index.mdx` | todo |

### Phase 4: AI/ML (106 articles: concepts, then systems)

| Batch | Articles | Status |
| --- | --- | --- |
| A1 | `content/ai-ml/concepts/what-is-machine-learning/index.mdx`<br>`content/ai-ml/concepts/loss-functions-and-risk/index.mdx`<br>`content/ai-ml/concepts/gradient-descent/index.mdx`<br>`content/ai-ml/concepts/overfitting-and-bias-variance/index.mdx`<br>`content/ai-ml/concepts/regularization/index.mdx` | todo |
| A2 | `content/ai-ml/concepts/train-validation-test/index.mdx`<br>`content/ai-ml/concepts/curse-of-dimensionality/index.mdx`<br>`content/ai-ml/concepts/linear-and-logistic-regression/index.mdx`<br>`content/ai-ml/concepts/decision-trees-and-ensembles/index.mdx`<br>`content/ai-ml/concepts/gradient-boosting/index.mdx` | todo |
| A3 | `content/ai-ml/concepts/support-vector-machines/index.mdx`<br>`content/ai-ml/concepts/clustering-and-knn/index.mdx`<br>`content/ai-ml/concepts/perceptrons-and-mlps/index.mdx`<br>`content/ai-ml/concepts/activation-functions/index.mdx`<br>`content/ai-ml/concepts/backpropagation/index.mdx` | todo |
| A4 | `content/ai-ml/concepts/optimizers/index.mdx`<br>`content/ai-ml/concepts/normalization-and-initialization/index.mdx`<br>`content/ai-ml/concepts/convolutional-neural-networks/index.mdx`<br>`content/ai-ml/concepts/recurrent-neural-networks/index.mdx`<br>`content/ai-ml/concepts/lstm-and-gru/index.mdx` | todo |
| A5 | `content/ai-ml/concepts/sequence-to-sequence/index.mdx`<br>`content/ai-ml/concepts/attention-mechanism/index.mdx`<br>`content/ai-ml/concepts/transformers/index.mdx`<br>`content/ai-ml/concepts/autoencoders/index.mdx`<br>`content/ai-ml/concepts/generative-adversarial-networks/index.mdx` | todo |
| A6 | `content/ai-ml/concepts/diffusion-models/index.mdx`<br>`content/ai-ml/concepts/graph-neural-networks/index.mdx`<br>`content/ai-ml/concepts/mixture-of-experts/index.mdx`<br>`content/ai-ml/concepts/word-embeddings/index.mdx`<br>`content/ai-ml/concepts/language-models-and-scaling/index.mdx` | todo |
| A7 | `content/ai-ml/concepts/transfer-learning/index.mdx`<br>`content/ai-ml/concepts/image-classification/index.mdx`<br>`content/ai-ml/concepts/object-detection-and-segmentation/index.mdx`<br>`content/ai-ml/concepts/speech-recognition-and-synthesis/index.mdx`<br>`content/ai-ml/concepts/vision-language-models/index.mdx` | todo |
| A8 | `content/ai-ml/concepts/reinforcement-learning-basics/index.mdx`<br>`content/ai-ml/concepts/rlhf/index.mdx`<br>`content/ai-ml/concepts/interpretability/index.mdx`<br>`content/ai-ml/concepts/alignment-and-safety/index.mdx`<br>`content/ai-ml/systems/ml-system-design-basics/index.mdx` | todo |
| A9 | `content/ai-ml/systems/supervised-unsupervised-rl/index.mdx`<br>`content/ai-ml/systems/batch-vs-real-time-prediction/index.mdx`<br>`content/ai-ml/systems/training-data-pipelines/index.mdx`<br>`content/ai-ml/systems/data-labeling-annotation/index.mdx`<br>`content/ai-ml/systems/data-versioning-lineage/index.mdx` | todo |
| A10 | `content/ai-ml/systems/feature-engineering-basics/index.mdx`<br>`content/ai-ml/systems/feature-stores/index.mdx`<br>`content/ai-ml/systems/embeddings-vector-representations/index.mdx`<br>`content/ai-ml/systems/similarity-search-ann/index.mdx`<br>`content/ai-ml/systems/vector-databases/index.mdx` | todo |
| A11 | `content/ai-ml/systems/evaluation-metrics/index.mdx`<br>`content/ai-ml/systems/offline-vs-online-evaluation/index.mdx`<br>`content/ai-ml/systems/ab-testing-experimentation/index.mdx`<br>`content/ai-ml/systems/model-monitoring-drift/index.mdx`<br>`content/ai-ml/systems/concept-drift-retraining/index.mdx` | todo |
| A12 | `content/ai-ml/systems/bias-fairness-explainability/index.mdx`<br>`content/ai-ml/systems/privacy-preserving-ml/index.mdx`<br>`content/ai-ml/systems/responsible-ai-safety/index.mdx`<br>`content/ai-ml/systems/model-serving-architectures/index.mdx`<br>`content/ai-ml/systems/inference-optimization/index.mdx` | todo |
| A13 | `content/ai-ml/systems/batching-and-latency/index.mdx`<br>`content/ai-ml/systems/gpu-accelerator-management/index.mdx`<br>`content/ai-ml/systems/model-runtimes-compilation/index.mdx`<br>`content/ai-ml/systems/multi-model-serving-routing/index.mdx`<br>`content/ai-ml/systems/edge-on-device-inference/index.mdx` | todo |
| A14 | `content/ai-ml/systems/serverless-inference/index.mdx`<br>`content/ai-ml/systems/model-caching-warm-pools/index.mdx`<br>`content/ai-ml/systems/autoscaling-inference/index.mdx`<br>`content/ai-ml/systems/llm-serving/index.mdx`<br>`content/ai-ml/systems/prompt-engineering-systems/index.mdx` | todo |
| A15 | `content/ai-ml/systems/rag/index.mdx`<br>`content/ai-ml/systems/chunking-indexing-strategies/index.mdx`<br>`content/ai-ml/systems/fine-tuning-vs-prompting-vs-rag/index.mdx`<br>`content/ai-ml/systems/lora-peft/index.mdx`<br>`content/ai-ml/systems/agents-and-tool-use/index.mdx` | todo |
| A16 | `content/ai-ml/systems/llm-guardrails-validation/index.mdx`<br>`content/ai-ml/systems/evaluating-llm-systems/index.mdx`<br>`content/ai-ml/systems/cost-token-budgets/index.mdx`<br>`content/ai-ml/systems/llm-caching/index.mdx`<br>`content/ai-ml/systems/llm-gateways/index.mdx` | todo |
| A17 | `content/ai-ml/systems/mlops-cicd/index.mdx`<br>`content/ai-ml/systems/model-registry/index.mdx`<br>`content/ai-ml/systems/experiment-tracking/index.mdx`<br>`content/ai-ml/systems/reproducibility-metadata/index.mdx`<br>`content/ai-ml/systems/distributed-training/index.mdx` | todo |
| A18 | `content/ai-ml/systems/hyperparameter-tuning/index.mdx`<br>`content/ai-ml/systems/automl/index.mdx`<br>`content/ai-ml/systems/model-governance-compliance/index.mdx`<br>`content/ai-ml/systems/cost-optimization-ml/index.mdx`<br>`content/ai-ml/systems/multi-tenant-ml-platforms/index.mdx` | todo |
| A19 | `content/ai-ml/systems/feature-model-backfills/index.mdx`<br>`content/ai-ml/systems/rag-chat-system/index.mdx`<br>`content/ai-ml/systems/semantic-vector-search/index.mdx`<br>`content/ai-ml/systems/model-serving-platform/index.mdx`<br>`content/ai-ml/systems/feature-platform/index.mdx` | todo |
| A20 | `content/ai-ml/systems/ctr-ad-ranking/index.mdx`<br>`content/ai-ml/systems/content-moderation/index.mdx`<br>`content/ai-ml/systems/llm-gateway-system/index.mdx`<br>`content/ai-ml/systems/anomaly-detection-system/index.mdx`<br>`content/ai-ml/systems/ml-training-platform/index.mdx` | todo |
| A21 | `content/ai-ml/systems/feature-store-lld/index.mdx`<br>`content/ai-ml/systems/model-registry-lld/index.mdx`<br>`content/ai-ml/systems/tokenizer-lld/index.mdx`<br>`content/ai-ml/systems/embedding-cache-lld/index.mdx`<br>`content/ai-ml/systems/vector-index-lld/index.mdx` | todo |
| A22 | `content/ai-ml/systems/feature-transform-pipeline/index.mdx` | todo |

## Follow-ups

Findings too large for a single batch go here, with the batch where they
were found.

| Found in | Finding | Status |
| --- | --- | --- |
| (none yet) | | |
