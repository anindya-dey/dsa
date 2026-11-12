# Editorial review plan

A careful, article-by-article read of the whole site: 382 articles,
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
- *DSA patterns:* the "how to spot it" clues match the cheat sheet (except
  Asymptotic Analysis, which has no row and no spot-it section); the
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

## Cheat sheet scope decision (2026-11-11)

Raised before starting D1: should Asymptotic Analysis be a cheat-sheet row?
It was row 1, with the clue "input size tells you the budget". That clue
does not name a pattern a problem needs; it states the constraint budget
every row below assumes. Decision: keep the heuristic and the article, but
move the row to an intro note above the matrix ("Before you diagnose"),
linking the pattern page. Immediately after the move, the matrix carried
29 clue rows for 28 distinct pattern pages (Graph Specializations had two
rows). The cheat sheet states the budget before the table rather than as
a table entry.

Consequence for the DSA checklist item "the 'how to spot it' clues match
the cheat sheet": Asymptotic Analysis is exempt from that check because it
teaches analysis rather than choosing a solution technique. Graph
Specializations and Advanced Graphs also have no "How to spot it" heading;
their "Choosing the tool" sections supply the clues instead. Recorded in
`app/dsa/cheat-sheet/page.tsx` and the README cheat-sheet sentence.

### Thorough cheat-sheet review (2026-11-12)

Scope: every existing clue, label, link target, and layout, plus the
constraint-budget note. Read each linked overview's introduction,
recognition/choice guidance, and limitations; checked its practice list.
Read the graph, window, binary-search, trie, range-query, and number-theory
explanations where a mapping needed more detail. This is not completion
of any DSA article-review batch or runtime testing of its solutions.

Findings recorded before editing. Row numbers below refer to the 29-row
matrix after removing Asymptotic Analysis:

| Original row | Finding / disposition |
| --- | --- |
| 1 Linear structures | Rotation is not a unique diagnosis. Focus on building a sequence and choosing storage for indexing or end operations. |
| 2 Hash map/set | Sound; specify exact membership, frequencies, and grouping by a shared key, rather than arbitrary pair matching. |
| 3 Recursion | Sound as an implementation technique; repeated states belong to DP. Use smaller self-similar problems/nested structure, not just an answer for n. |
| 4 Quickselect/custom sort | Separate rank selection from ordering the entire input. Both link to Sorting & Selection. |
| 5 Bits | Sound for XOR cancellation and small-subset masks; remove the absolute n <= 20 cutoff. Enumeration costs depend on the work per subset. |
| 6 Two pointers | Sortedness/pairs alone are insufficient. State the ability to eliminate candidates; retain end comparisons and linked-list fast/slow pointers. |
| 7 Sliding window | Contiguity and longest/shortest are not sufficient. Separate fixed-size bookkeeping from variable windows with safe forward-only boundaries. Sum thresholds with negatives can break the latter. |
| 8 Monotonic structures | Stack clues are sound; deque/window extrema were missing. Split stack and deque use cases. |
| 9 Binary search | An arbitrary yes/no condition is insufficient. Separate sorted/rotated lookup from a monotone answer threshold; fix the answer-space-only label on array lookup. |
| 10 Divide and conquer | Sound; do not require exact halves. Smaller subproblems and a useful combine step are the key. |
| 11 Prefix sums | Separate static range sums/subarray counts from batched range additions. Name Difference Arrays for the latter; retain negative-value subarray sums as an alternative to naive windows. |
| 12 Intervals | Sound; retain overlap/merge/concurrency clues. |
| 13 Matrix/grid | Sound but incomplete; include the row-and-column-sorted staircase search covered by the article. A grid is not by itself a transformation diagnosis. |
| 14 Stacks/queues | Sound; preserve last-in/first-in ordering rather than arbitrary recency queries. |
| 15 Linked lists | Sound; do not imply every linked-list task needs O(1) space. Preserve structural operations on links. |
| 16 Trees/BSTs | Specify binary-tree input; an arbitrary hierarchy may actually be a graph. Retain subtree/path/ancestor and BST ordering clues. |
| 17 Heap | A running maximum needs one variable, not a heap. Replace with repeated extreme removal under insertions, streamed top-k, k-way merge, and two-heap median. |
| 18 Trie | "Searching many words at once" is too broad (multi-pattern text search is different). Specify shared prefixes, dictionary wildcard search, and board-search prefix pruning. |
| 19 BFS/DFS | Distinguish BFS shortest paths in equal-cost graphs from DFS/BFS reachability/flood fill. DFS alone does not guarantee shortest paths. |
| 20 Topological sort | Specify directed prerequisites and cycle impossibility. Kahn's is not the only valid algorithm; DFS also applies with cycle checks. |
| 21 DSU | Plain DSU does not support arbitrary dynamic connectivity/deletions. Specify undirected connectivity under edge additions. |
| 22 Advanced graphs | Split hop limits, MST, SCCs, and bridges/articulation points; add small-graph all-pairs distances. MST minimizes total connection cost, not source distances; k intermediate stops allow k+1 edges. |
| 23 Backtracking | Sound; name subsets/permutations/valid boards and the choose/check/undo shape. |
| 24 DP | Count/min/max language alone is insufficient. Require reusable smaller states reached by different decision paths. |
| 25 Greedy | Sound proof-first clue. Keep that requirement; use earliest-finish scheduling/farthest reach as examples, not universal rules. |
| 26 Strings | Sound; specify substring matching/palindromes/periods rather than arbitrary string problems. |
| 27 Range queries | Fenwick is not the default for arbitrary min/range updates. Distinguish sum/count from general aggregates and add static min/max/GCD sparse tables. |
| 28 Number theory | A modulus controls numeric size, not the algorithm. Remove it as a stand-alone clue; use primes, divisibility, GCD/LCM, modular powers, and combinatorial formulas. |
| 29 Design structures | Sound; focus on the interface and operation bounds, not merely the words "design a class". |

Cross-cutting findings:

- Missing weighted shortest-path clues: non-negative weights/no hop limit
  (Dijkstra), negative edges or reachable negative-cycle detection
  (Bellman-Ford). Both are taught by Graph Specializations.
- The constraint note claims any exponential work fits n <= 20 and uses
  hard time cutoffs. 2^20 is 1,048,576 subsets; 20! is
  2,432,902,008,176,640,000 permutations. Give rough 2^n/quadratic/n log n
  examples with time, memory, operation-cost, and total-input caveats.
- The table should offer candidate techniques, not certainty or exclusive
  assignments. Some topics need several rows; some problems combine tools.
- Previous notes miscounted the original rows and claimed only one
  overview lacked a "How to spot it" heading. Corrected above.

Related-article caveats to revisit in their existing review batches, not
silently copy into this table: Sliding Window omits the safe-boundary
requirement and incorrectly rejects sorted-window maintenance (D7);
Graph Traversals applies the unweighted caveat to traversal rather than
only shortest paths (D20); Advanced Graphs conflates stops with edges and
overstates the impossibility of a state-expanded Dijkstra (D22);
Number Theory treats a modulus as a diagnosis and says exact counts rule
out formulas (D30). These observations do not mark those articles reviewed.

Revisions applied in `app/dsa/cheat-sheet/page.tsx`. The matrix now has
42 focused clues covering the same 28 solution topics; Asymptotic Analysis
remains in the introductory note. The extra rows separate techniques that
have different prerequisites rather than introducing new roadmap topics.
Metadata, caption, and column heading now describe candidates rather than
guaranteed diagnoses. The shorter page subtitle is preserved.

Verification (2026-11-12):

- An AST-based check evaluated the actual matrix and rendered its JSX:
  42 nonempty, unique clues; valid, labeled links; coverage of every
  solution-topic slug; no Asymptotic Analysis table row. All destinations
  have content. This was a one-off check, not a new permanent CI gate.
- All 29 distinct destination routes (28 table topics plus analysis)
  returned HTTP 200 with their expected article title on the local server.
- Production HTML assertions compared every desktop row and mobile item
  with the source: all 42 clues, labels, destinations, and mobile numbers
  01-42 matched. The final constraint note and candidate heading rendered.
- Counterexample checks confirmed the 2^20/20! arithmetic; a naive
  shrink-on-sum window returns length 3 instead of 1 on `[1, -1, 3]`
  with target 3; arbitrary yes/no predicates can alternate rather than
  have one threshold; prefix differences still handle negative values;
  and a triangle with edge weights 2, 2, 3 has MST weight 4 but a direct
  source-to-target shortest path of weight 3. These checks test the
  review's reasoning, not the site's DSA solution implementations.
- Desktop and phone browser checks covered the header, initial rows,
  graph distinctions, long labels, and the final numbered items. Text and
  links wrap within the layouts; the desktop subtitle still fits one line.
- `pnpm validate` passed after the final prose changes: lint, typecheck,
  content checks (3,934 internal links), compilation of 125 DSA problem
  pages, and production generation of 395 pages. `git diff --check`
  passed. No DSA runtime-test entry or batch status was changed.

## Batches

### Phase 1: C++ Toolkit (18 articles)

| Batch | Articles | Status |
| --- | --- | --- |
| C1 | `content/cpp/vector.mdx`<br>`content/cpp/string.mdx`<br>`content/cpp/unordered-map.mdx`<br>`content/cpp/map.mdx`<br>`content/cpp/deque.mdx` | done; `7a476d8`; clarify container concepts, correctness, examples, and prose. Revised again in the refresher pass and final review (2026-11-11): trimmed to DSA basics |
| C2 | `content/cpp/stack-queue.mdx`<br>`content/cpp/priority-queue.mdx`<br>`content/cpp/pair-tuple.mdx`<br>`content/cpp/optional.mdx`<br>`content/cpp/function-lambdas.mdx` | done; refresher pass and final review (2026-11-11); simple DSA-focused refresher |
| C3 | `content/cpp/comparators.mdx`<br>`content/cpp/algorithms.mdx`<br>`content/cpp/binary-search-algos.mdx`<br>`content/cpp/numeric.mdx`<br>`content/cpp/integer-overflow.mdx` | done; refresher pass and final review (2026-11-11); simple DSA-focused refresher |
| C4 | `content/cpp/bit-operations.mdx`<br>`content/cpp/invalidation.mdx`<br>`content/cpp/smart-pointers.mdx` | done; refresher pass and final review (2026-11-11); simple DSA-focused refresher |

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

## Batch C1 review notes

Findings recorded before editing (line numbers refer to the original files):

- `content/cpp/vector.mdx:6-41,45-54,64-96`: byte-offset wording,
  cache behavior, object layout, growth factors, and allocation advice are
  presented as guarantees. Distinguish the contiguous-storage contract
  from typical implementations, bound what `reserve` prevents, and explain
  move versus copy. Cover insertion reallocation, invalidation of `end()`
  even without reallocation, bounded index loops, empty-container access,
  optional bounds diagnostics, the non-binding shrink request, and the
  `vector<bool>` exception. Move the Markdown link out of the C++ comment.
- `content/cpp/string.mdx:6-38,41-68`: string invalidation is not identical
  to vector's; SSO and its sizes are implementation details, not necessarily
  stack storage. `s[s.size()]` permits reading the terminator, a short
  substring need not allocate, and suffix/iterator copies are not zero-copy
  alternatives. Explain `string_view` lifetime, when pass-by-value copies
  or moves, pointer invalidation versus character changes, and numeric
  parsing's partial consumption and exceptions. Add a worked parsing example.
- `content/cpp/unordered-map.mdx:6-29,38-80`: the opening wrongly says
  rehash invalidates pointers; the API switches variable names and contains
  uncompilable ellipses. Correct value-initialization and multimap counts,
  add a worked frequency example, distinguish ordinary operation costs from
  rehash costs and key-processing costs, and remove the empty-bucket scan
  claim. Separate load-factor tuning from rehashing and unspecified bucket
  growth; explain matching hash/equality contracts without promising a
  particular symptom when violated.
- `content/cpp/map.mdx:3,6-9,17-32,42-59,67-90`: not every operation is
  logarithmic. Qualify lookup/insertion/key-erase costs, iterator erase,
  traversal, and comparator costs. The half-open range wrongly uses
  `upper_bound` and recomputes it per iteration: use two cached
  `lower_bound` results and a concrete example, with O(log n + r) cost.
  Guard extrema access on empty maps, correct insertion/erase stability,
  remove the false reference-stability advantage over hash containers, and
  explain custom comparator ordering, equivalence, and the set API difference.
- `content/cpp/deque.mdx:6-31,35-64,68-76`: the block-pointer array is
  growable, block sizes and cache behavior are implementation-dependent,
  and the complexity discussion conflates the contract with allocation
  latency. Add a worked end-operation example and valid erase syntax.
  Middle insertion/erasure can invalidate all references; end pushes
  invalidate all iterators, while end pops preserve surviving element
  iterators with distinct `end()` rules. Explain index shifts, and correct
  the sliding-window link's rationale: it stores indices into the input,
  not stable indices or references into the deque.
- `lib/catalog/cpp.ts:11` (found during browser verification): the
  rendered map header and listings use the catalog summary, which also
  claims "O(log n) everything". Correct that copy along with the article's
  frontmatter so the visible summary does not repeat the error.

All listed C1 findings were corrected. Claims checked against the C++ library requirements:
[vector modifiers](https://eel.is/c++draft/vector.modifiers),
[vector capacity](https://eel.is/c++draft/vector.capacity),
[string access](https://eel.is/c++draft/string.access),
[string invalidation](https://eel.is/c++draft/string.require),
[numeric conversions](https://eel.is/c++draft/string.conversions),
[substring semantics](https://en.cppreference.com/w/cpp/string/basic_string/substr),
[unordered containers](https://eel.is/c++draft/unord.req),
[ordered containers](https://eel.is/c++draft/associative.reqmts), and
[deque modifiers](https://eel.is/c++draft/deque.modifiers).

Verification (2026-11-02):

- All 9 C++ blocks compiled verbatim with C++20 after supplying headers and
  placeholder declarations. A one-off runtime harness caught the API
  fragments' documented missing-key exceptions so later statements could
  run, checked each example's result, and passed 206 assertions with Apple
  Clang 21 under AddressSanitizer and UBSan.
- Additional checks covered reserved vector growth, bounded append loops,
  erase-remove, string copies versus views, terminator access, parsing
  errors and `INT_MIN`/`INT_MAX`, rehash reference stability and collisions,
  half-open/empty map ranges and custom ordering, and deque growth/pop
  stability. Invalidated iterators were never dereferenced; those rules
  were verified against the standard, not inferred from sanitizer silence.
- Prose-only word counts: vector 530, string 487, unordered-map 468,
  map 478, deque 369. All are within the 300-600 band.
- Browser checks confirmed that the corrected deque diagram renders as
  an SVG and the map article renders its half-open range example. A bare
  Node Mermaid parse could not initialize DOMPurify; the browser check
  used the application's real Mermaid renderer instead.
- `pnpm lint`, `pnpm typecheck`, `pnpm check:content` (3,987 links),
  `pnpm check:cpp` (125 DSA problem pages), and `git diff --check` passed.
- Initial `pnpm validate` and a standalone `pnpm build` retry each
  generated all 395 pages, then exited with `SecurityFatalError` on the
  existing Next.js 16.4.0 security advisory gate. The required build check
  is therefore still failing; the batch is reviewed but not `done`, and no
  commit or push was made. Upgrade dependencies in a separately approved
  change, then rerun validation before completing this batch.

### Reader-feedback follow-up (2026-11-03)

Findings recorded before applying the requested clarifications:

- `content/cpp/vector.mdx:6-25,37-43,94-100`: define contiguous versus
  continuous and distinguish program addresses from physical RAM. Explain
  `data()`'s pointer types, element-sized arithmetic, valid indices, empty
  vectors, and pointer lifetime with a runnable example. Separate cache-line
  locality from hardware prefetching, remove unexplained speed qualifications,
  and specify what to benchmark after choosing containers by requirements.
  Expand the packed-bit exception with a proxy-versus-value example and link
  the first body use of amortized complexity to the existing DSA section.
- `content/dsa/patterns/asymptotic-analysis/index.mdx:76-105,138-140`:
  correct the blanket prefetching claim and explain amortized analysis with
  the 16-append geometric-growth example. State that doubling is illustrative,
  distinguish deterministic sequence bounds from expected bounds, remove the
  claim that every two-pointer algorithm has this argument, and correct the
  randomized quickselect comparison. Reuse the existing section rather than
  creating a duplicate article. This is a targeted correction, not completion
  of batch D1's full article review.

All requested clarifications were applied. Verification (2026-11-03):

- All 11 C1 C++ blocks compiled; 221 runtime assertions passed under
  AddressSanitizer and UBSan. The new pointer example also compiled and ran
  verbatim as a complete program. Checks cover mutable/const `data()` types,
  element-pointer arithmetic, empty-vector access without dereferencing,
  and bool proxy aliasing versus an independent copied value.
  Pointer and specialization claims were checked against
  [vector data](https://eel.is/c++draft/vector.data) and
  [vector bool](https://eel.is/c++draft/vector.bool).
- Both edited articles compiled as MDX and rendered to HTML. The first
  body use of amortized complexity links to the actual generated
  `amortized-paying-for-the-expensive-rare-case` heading. The bool heading
  and both new C++ examples also rendered correctly.
- Browser verification of the production output confirmed that clicking
  `amortized O(1)` navigates from the vector page to the intended section
  and scrolls that heading into view.
- Recomputed `1 + 2 + 4 + 8 = 15` relocations, 16 new writes, and 31 total
  element operations. An illustrative doubling model verified the example,
  the ninth append's eight relocations, and the bounds for 1-1,024 appends.
  Tests do not assume that the standard library's vector doubles capacity.
- Length exceptions are deliberate: vector is now 829 prose words to answer
  all seven reader questions without unexplained pointer/cache/proxy terms;
  Asymptotic Analysis is 1,290 words to retain its existing reference sections
  alongside a worked amortization example and the expected-cost distinction.
  No duplicate amortization article or catalog entry was added.
- No hardware performance benchmark was run: the revised text explains
  what readers should measure and avoids promising a particular cache
  miss rate, prefetch behavior, or bandwidth.
- `pnpm validate` passed: lint, typecheck, content checks (3,987 links),
  C++ compilation (125 DSA problems), and production generation (395 pages).
  `git diff --check` also passed.
- This run used installed Next.js 16.4.4, while `package.json` and
  `pnpm-lock.yaml` still declare 16.4.0. Neither dependency file was changed
  by this review. The cause of the installed-version change was not
  investigated. A fresh frozen install still selects the declared version;
  do not treat this local pass as completing the separately approved
  dependency upgrade. Reconcile the dependency pin and installed version,
  then validate that reproducible dependency set before finalizing C1.

### Learner-facing editorial pass (2026-11-03)

Scope approved by the reader: review all five C1 articles for natural,
complete prose, conceptual clarity, and precision without turning the
Toolkit into a detailed implementation guide. Keep useful explanations,
not an arbitrary word count, as the reason for additional length.

Findings recorded before editing:

- Vector repeats storage qualifications, explains private pointer layout
  before everyday size/capacity behavior, and separates performance guidance
  from the container-choice question. Keep the seven reader clarifications,
  but organize them around storage, growth, safe access, and practical choice.
- String opens with several undefined terms and puts optimization before
  ownership. Replace the API dump and lvalue/rvalue/prvalue terminology with
  concrete text, copy/view, and lifetime examples. Define the zero terminator,
  explain what string length counts, and avoid suggesting linguistic sorting.
- Unordered containers are described through asides and fragments instead of
  a clear key/value model. Define hashing, buckets, and rehashing before tuning
  or iterator rules; demonstrate read-only lookup separately from insertion.
  Explain sets with a real membership example and custom keys without a
  detour into hash-combining implementations.
- Ordered containers jump between an API list, tree internals, and advanced
  terminology. Start with sorted keys, retain the corrected half-open example,
  explain set/comparator behavior plainly, and keep complexity and stability
  distinctions without shorthand such as "the ordering is the product".
- Deque's explanation includes a confusing internal "map", abbreviated
  operation lists, and a tangential priority-queue comparison. Lead with
  end operations, simplify the segmented-storage diagram, and explain index,
  iterator, and reference stability in complete sentences.
- Across all five, replace undefined code placeholders and deliberately
  failing API sequences with meaningful, verifiable examples. Move links to
  other Toolkit entries into short related-reading sections; the separate
  invalidation article remains a recorded C3 follow-up, not a source for
  these articles' correctness claims.

Revisions applied. All five articles were reread as prose and checked in
the production browser view, not just searched for mechanical issues.
The pass keeps complete sentences, defines terms before relying on them,
and removes private object-layout details, fixed SSO sizes, and tangential
implementation discussions. Vector retains all seven requested clarifications.

Verification (2026-11-03):

- All 12 C++ blocks compiled and ran under AddressSanitizer and UBSan.
  Each article starts with a complete program; shorter examples use only
  the headers shown there and a function wrapper. No invented placeholder
  declarations or catches were needed to make the examples run.
- The examples and additional checks passed 244 assertions. Coverage includes
  size versus capacity, pointer/proxy behavior, copies versus views, embedded
  zero characters, UTF-8 byte counts, parsing failures, integer boundaries,
  map/set behavior, rehash stability, key ranges, and deque end operations.
- All five articles compiled as MDX and rendered to HTML. Titles and summaries
  match the catalog, and the amortization link still targets its actual
  generated heading. Browser reads covered all five articles; the simplified
  deque diagram rendered as SVG with its directory and block labels.
- A final reading also made map-versus-set iterator access explicit and
  limited the zero-termination statement to C APIs that expect terminated text.
- Final prose word counts: vector 758, string 685, unordered-map 659,
  map 688, deque 593. These intentionally exceed the original band where
  needed for clear definitions and caveats, following the reader's instruction
  not to compress sentences abruptly. This is a concise conceptual guide,
  not a detailed standard-library implementation survey.
- `pnpm validate` passed. After the last prose corrections, content checks
  (3,972 internal links), the production build (395 pages), MDX rendering,
  snippet execution, and `git diff --check` passed again.
- Validation still uses installed Next.js 16.4.4 while the repository pins
  16.4.0. No dependency or unrelated header/layout changes were made by this
  pass. The separately recorded dependency reconciliation remains pending;
  these editorial changes were not committed or pushed.

### Main synchronization and completion (2026-11-03)

Pulled `origin/main` at `6dca1ac` with a fast-forward, preserving all local
article and Toolkit header edits. The new baseline includes:

- `d148dd5`: the Next.js security upgrade to 16.4.4.
- `9ece3d1`: compatible dependency updates.
- `6dca1ac`: side-by-side TypeScript 6 API and TypeScript 7 tooling.

`pnpm install --frozen-lockfile` succeeded without changing the dependency
files. Declared and installed Next.js versions now both read 16.4.4, and
the npm registry advisory query for that version returned no entries.
The earlier pin/runtime mismatch is resolved by the upstream change,
not by an unrecorded local dependency modification.

All 12 C1 C++ examples and 244 sanitizer assertions passed again after
installing the updated dependency set. MDX rendering, catalog consistency,
the amortization anchor, and the illustrative growth arithmetic also passed.
`pnpm validate` passed against the frozen-installed dependency set: lint,
typecheck, content validation (3,972 internal links), compilation of all
125 DSA problem pages, and production generation of 395 pages. No conflicts
or new validation failures were found. The pre-existing local Toolkit
header edit was preserved and included.

Review commit: `7a476d8` (`docs(review): batch C1 - clarify core C++ containers`).
The completion record is committed separately so it can reference that
immutable review commit. Batch C1 is complete; the C3 invalidation article
and the previously unbatched articles remain follow-ups.

### C++ Toolkit refresher pass (2026-11-11)

Reader direction: the Toolkit should be a simple, easy-to-follow refresher
on the basics that help with DSA problems, without excess detail. This pass
covers all 18 entries, so it completes C2 to C4 and revises C1 again.

Findings recorded before editing:

- **Missing basics.** Vector lacked construction (`(n, x)` versus
  `{n, x}`), `emplace_back`, `empty()`, loops by reference, unsigned
  `size() - 1`, copy semantics and reference parameters, grids, and
  `insert`/`erase` syntax. String lacked `c - 'a'` arithmetic, `<cctype>`,
  O(n^2) `s = s + c`, `reverse`/`sort` on strings, and splitting words.
  Unordered containers lacked iteration with structured bindings,
  `insert(x).second`, and the fact that `std::pair` keys have no hash.
  Map lacked `multiset` duplicates and `std::prev(lower_bound)` for the
  largest smaller key. Lambdas lacked recursive helpers with `std::function`.
- **Too much detail for a refresher (C1).** `data()` pointer arithmetic,
  `vector<bool>` proxies, cache lines and bandwidth, NUL terminators,
  `c_str()` lifetime, small-string optimization, load-factor tuning, and
  the deque block diagram. These were cut or reduced to one sentence.
- **Errors in C2 to C4.** `priority_queue` was described as
  "always-sorted" and as usable only over a vector (deque also qualifies).
  `optional` comparison ordering was garbled. `pair-tuple` called
  `std::array` stack-allocated and contained the typo "touple".
  `algorithms` gave a garbled `nth_element` idiom and invalid code such
  as `std::min_element / max_element(...)`. `numeric` misattributed
  `midpoint` to C++17 and omitted `pow` despite its summary. `bit-operations`
  said `1 << 31` overflows, but C++20 defines it as `INT_MIN`. `invalidation`
  carried the issues already recorded in Follow-ups. Several entries
  placed Markdown links inside C++ comments, used `...` placeholders that
  do not compile, and used jargon-heavy, colon-chained prose.

Revisions: every entry now opens with a plain definition and a complete,
runnable program, then covers the operations DSA solutions use and the
traps that cause wrong answers. Each ends with a short "Related C++ tools"
section; links to other Toolkit entries are no longer inline. Catalog
summaries in `lib/catalog/cpp.ts` match the new frontmatter; titles are
unchanged. The vector section keeps the reader's "Contiguous versus
continuous" heading.

Verification (2026-11-11):

- All 47 C++ blocks compiled with Apple Clang (`-std=c++20 -Wall -Wextra`)
  and ran under AddressSanitizer and UBSan with every assertion passing.
  Fragments ran inside `main` with standard headers and the declarations
  from their article's first program.
- A shell-based link check resolved every internal link in the 18 entries.
  No em-dashes remain, and `git diff --check` passed.
- Not run in this first pass: `pnpm validate`. Node was not on the
  shell's PATH; it was found under nvm for the final review below.

### Final review (2026-11-11)

A last full read of all 18 entries, checking every claim again. Findings:

- `binary-search-algos`: `upper_bound` returns `end()` when no element is
  larger than `x`, not "when every element is smaller". Corrected.
- `comparators`: a code comment said "negate" while the code swaps `a`
  and `b`; the heap-direction sentence was ambiguous. Restated as "the
  element that would come last if you sorted with the comparator".
- `bit-operations`: the table's example column claimed `6 op 3` for rows
  that do not use 3. Each row now shows its own expression; left shift
  notes "if it fits".
- `string`: `size()` counts bytes for UTF-8; `substr` copies *up to* `len`
  characters; `std::stoi("42x")` returns 42. Added.
- `map`: the multimap heading had no multimap text, and "rbegin is the
  largest, but only on a nonempty container" misplaced the condition.
- `function-lambdas`: explained why sets, maps, and heaps need both
  `decltype(cmp)` and the `cmp` argument.
- `vector`: replaced "grows geometrically" with plain wording.
- `unordered-map`, `deque`, `smart-pointers`: inline code split across a
  line break, an over-long line, and an awkward `make_unique` call.

Verification:

- All 47 C++ blocks compiled with `-Wall -Wextra` and passed under
  AddressSanitizer and UBSan. A separate program also checked the claims
  made only in prose: `stoi("42x")`, string ordering, `substr` clamping,
  `size() - 1` wraparound, `upper_bound` edges, every bit-table row,
  `1 << 31 == INT_MIN` in C++20, negative `%`, `insert(x).second`,
  multimap counts, and building a heap from a range.
- `pnpm validate` passed on Node 26.13.0 with a frozen install: lint,
  typecheck, content checks (3,934 internal links, 18 C++ entries), C++
  compilation of 125 DSA problem pages, and the production build of all
  pages. The built HTML for the table-heavy entries rendered each table,
  including the escaped `|` cells in Bit Operations.
- Prose word counts: vector 722, unordered-map 435, invalidation 428,
  string 428, smart-pointers 421, bit-operations 418, comparators 403,
  integer-overflow 384, numeric 370, binary-search-algos 370, map 368,
  function-lambdas 362, priority-queue 328, algorithms 315, pair-tuple 315,
  stack-queue 300, deque 297, optional 263. Vector exceeds the band
  because it is the basic container every other entry builds on.

Review commit: `c586116` (`docs(review): batches C2-C4 - rewrite C++
Toolkit as DSA refresher`). Phase 1 (C++ Toolkit) is complete.

## Follow-ups

Findings too large for a single batch go here, with the batch where they
were found.

| Found in | Finding | Status |
| --- | --- | --- |
| C1 | Upgrade the existing Next.js 16.4.0 dependency in a separate change. The npm registry confirms high/critical advisories [GHSA-p3m5-59mp-jv5r](https://github.com/advisories/GHSA-p3m5-59mp-jv5r), [GHSA-2464-fhr4-w9xw](https://github.com/advisories/GHSA-2464-fhr4-w9xw), and [GHSA-673q-mjm6-r5xr](https://github.com/advisories/GHSA-673q-mjm6-r5xr). Application-specific exploitability was not assessed; no dependency versions were changed in this editorial batch. | done in main's `d148dd5`; verified after the pull and frozen install |
| C1 | In C3, correct `content/cpp/invalidation.mdx`: the table treats string rules as vector rules, omits vector's non-reallocating `end()` invalidation, and incorrectly preserves deque references on middle edits. Its prose also overstates reference stability, misstates the cause of erase-loop invalidation, and omits unordered iterator-erase worst-case complexity. Align it with the corrected C1 entries and distinguish character writes from string pointer invalidation. | done in the refresher pass (2026-11-11): rewritten with a corrected per-container table; worst-case erase cost left out to keep the refresher simple |
| Batch 9 (gap fill) | Seven articles were added after this plan was written and are not in any batch above: `deployment-strategies`, `distributed-lock-service`, `search-engine`, `data-augmentation`, `self-supervised-learning`, `time-series-forecasting`, `bandits-and-exploration`. Review them with the same checklist, as a batch of their own. | todo |
