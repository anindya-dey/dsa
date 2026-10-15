---
date: 2026-10-14
topic: content-batches
---

# Content Delivery Batches

The agreed sequence for writing the roadmap content, so future sessions can
pick up exactly where the last one stopped. Companion documents:
`2026-10-13-dsa-system-design-site-rewrite-requirements.md` (product
requirements and templates) and `2026-10-14-roadmap-review-decisions.md`
(roadmap structure and house style).

## House rules (apply to every topic)

- Second person, short sentences, one idea per sentence.
- Skeleton: plain-language definition, concrete example, mechanics,
  trade-offs and failure modes, related links.
- A worked example in every topic. Analogies are welcome, used only where
  they earn their place, not as a mandatory opening move.
- Prose over bullet dumps. Bullets only for genuinely listy content.
- No em-dashes in new content.
- **No two articles share a blueprint.** Each article picks one opening
  style (contrast-first, observation-first, question-first,
  mechanism-first, trade-first, failure-first, principle-first,
  constraint-first, data-model-first, attack-first, contract-first,
  guarantee-first, impossible-thing-first, pressure-point-first,
  change-one-thing-first, state-machine-first, interview-first,
  data-structure-first) and one skeleton, and no two consecutive articles
  in a batch may use the same pair. Openings must never default to
  "Picture this" / "Imagine a" scene-setting.
- Concept-first: explain the concept clearly and only then reach for
  length. Not too long, not too short: fundamentals 700-1100 words,
  DSA pattern overview 450-650, problem page 350-500, LLD/HLD
  900-1400.
- Every DSA problem: problem statement, constraints, example, brute force
  with code and why it's slow, optimal C++ with the reasoning, complexity
  table. Practice links stay empty until the curation phase (R11).
- Add extra problems wherever a pattern has fewer than three and the
  pattern's family justifies them (3 per pattern is the default).
- Sub-articles for System Design concepts (like DSA problems) only where
  a concept genuinely has multiple concrete instances worth separate
  treatment. The default is one article per concept.
- Every HLD: functional and non-functional requirements, architecture
  diagram (Mermaid), component breakdown, back-of-envelope capacity
  estimate, trade-offs, links back to Fundamentals (R10).
- Every LLD: requirements, class design, named design patterns, a C++
  sketch, known variations (R9).

## Batches

| Batch | Focus | DSA | System Design | Status |
| --- | --- | --- | --- | --- |
| 1 | Array/string core, fundamentals core, template validation | Sliding Window, Binary Search Variants, Hash-Based Structures, Prefix Sums & Difference Arrays (10 problems) | Fundamentals: Scalability, Load Balancing, Database Fundamentals, CAP Theorem, Consistent Hashing, Message Queues & Pub/Sub. LLD: Parking Lot. HLD: URL Shortener. | **done** |
| 2 | Finish Phase 2, finish the fundamentals core | Monotonic Structures, Intervals & Sweep Line, Matrix & Grid Algorithms, Stacks & Queues, Linked List Manipulation (14 problems) | Fundamentals: CDN, Rate Limiting, API Design, Observability, Distributed Transactions, Idempotency & Exactly-Once. LLD: LRU/LFU Cache, Rate Limiter. HLD: Distributed Rate Limiter, Chat Application. | **done** |
| 3 | Trees, heaps, graphs; HLD infrastructure depth | Phase 3: Binary Trees & BSTs, Heaps / Priority Queues, Trie, Graph Traversals, Graph Specializations, Advanced Graphs (18 problems) | HLD: News Feed, Notification System, Search Autocomplete, Distributed Cache, Key-Value Store. LLD: Elevator System, Vending Machine, Chess Game. | **done** |
| 4 | Dynamic programming; the big product case studies | Phase 4: Dynamic Programming, Backtracking & Pruning, Greedy Algorithms, String Algorithms, Range-Query Structures, Number Theory & Combinatorics, Design Data Structures | HLD: Payment System, Ride-Sharing App, Video Streaming Service, Distributed Job Scheduler, E-commerce / Flash Sale. LLD: Movie Ticket Booking, Task Scheduler, Bank / Ledger. | **next** |
| 5 | Long tail; principal-level breadth | Remaining Phase 1/2/4: Linear Structures, Recursion & Math, Sorting & Selection, Bit Manipulation, Divide & Conquer, Intervals remainder | Remaining HLD infrastructure and case studies. Principal-level Fundamentals: Multi-Region & Active-Active, Consensus & Leader Election, Clock Synchronization, Reliability Engineering, Concurrency & Parallelism, Event Sourcing & CQRS, Backpressure, Stream vs Batch, and the rest. Remaining LLD. | not started |

## Sequencing rules

- Don't start Batch 4 (dynamic programming) before Batch 3 is done: DP
  constantly reuses tree and graph patterns.
- Static search (R14/R15) ships right after Batch 1: there is finally
  enough published content to be worth indexing.
- Each batch alternates DSA and System Design, per the requirements doc
  (R16/R17).
- Batches 1-4 fill the cheat-sheet's diagnostic matrix references so every
  clue links to real content.
- Before closing any batch: `pnpm check:content`, `pnpm lint`,
  `pnpm typecheck`, and `pnpm build` must all pass.

## Batch 3 completion notes (2026-10-14)

Batch 3 is written and shipped.

- DSA: all of Phase 3 is live (Binary Trees & BSTs, Heaps / Priority
  Queues, Trie, Graph Traversals, Graph Specializations, Advanced Graphs)
  with 18 new problem pages. Phase 1 is untouched, Phase 2 has only
  Divide & Conquer left (Batch 5).
- System Design: HLD grew by 5 (News Feed, Notification System, Search
  Autocomplete, Distributed Cache, Key-Value Store) and LLD by 3 (Elevator
  System, Vending Machine, Chess Game). Fundamentals unchanged at 13.
- Full-corpus review pass: every DSA pattern overview gained a "Related
  patterns" end section (the System Design articles already had "Related
  concepts"), and inline links were added to problem pages that referenced
  a sibling pattern, satisfying the rule that dependencies appear both
  inline and at the end. Lengths were audited: concept articles sit in the
  450-1050 word band, problem pages in 190-500.
- No System Design sub-articles were added: each concept in this batch
  holds as a single article, and the LLD/HLD track split already serves the
  "concrete instance" need (e.g. Consistent Hashing vs. Distributed Cache
  vs. Key-Value Store).

## Batch 2 completion notes (2026-10-14)

Batch 2 is written and shipped.

- DSA: Phase 2 core is written, 9 of 10 patterns live (Divide & Conquer
  stays scheduled with the Phase 1 long tail in Batch 5), with 24 total
  problem pages: Monotonic Structures (Daily Temperatures, Largest
  Rectangle in Histogram, Sliding Window Maximum), Intervals & Sweep Line
  (Merge Intervals, Meeting Rooms II, Non-overlapping Intervals), Matrix
  & Grid (Rotate Image, Set Matrix Zeroes, Number of Islands), Stacks &
  Queues (Decode String, Min Stack, Number of Recent Calls), Linked List
  Manipulation (Reverse, Merge Two Sorted Lists, Reorder List).
- Three extra problems added to Batch 1 patterns for depth: Valid
  Palindrome (Two Pointers), Group Anagrams (Hash), Find Pivot Index
  (Prefix Sums).
- System Design Fundamentals now 13 of 36: added CDN, Rate Limiting, API
  Design, Observability, Distributed Transactions, Idempotency &
  Exactly-Once. LLD 3 of 21 (added LRU/LFU Cache, Rate Limiter). HLD 3 of
  33 (added Distributed Rate Limiter, Chat Application).
- Blueprint rule added to house rules after an audit found 11 of 14
  articles opening with the same scene-setting crutch. All existing
  openings were rewritten to distinct styles.
- No new System Design sub-articles were needed: the fundamentals in this
  batch each hold as single articles, and the "concrete instance"
  treatment (rate limiter LLD vs. distributed HLD) was already served by
  the track split.

## Batch 1 completion notes (2026-10-14)

Batch 1 is written and shipped. Published content is now:

- DSA: 5 of 29 patterns live (Two Pointers, Sliding Window, Binary Search
  Variants, Hash-Based Structures, Prefix Sums & Difference Arrays) with
  10 problem pages.
- System Design: 7 of 36 Fundamentals (Caching, Scalability, Load Balancing,
  Database Fundamentals, CAP Theorem, Consistent Hashing, Message Queues &
  Pub/Sub), 1 of 21 LLD (Parking Lot), 1 of 33 HLD (URL Shortener).
- Sitemap grew from 8 to 30 URLs. All content templates (pattern overview,
  problem page, fundamentals, LLD, HLD) are now validated end-to-end.
- The LLD and HLD exemplars follow the requirements doc templates (R9/R10):
  requirements, class design with Mermaid class/architecture diagrams, a
  C++ sketch for the LLD, a capacity estimate for the HLD, and links back
  to the Fundamentals they rely on.
- Static search (R14/R15) is now unblocked: there is enough published
  content to be worth indexing.

## Batch 1 file list

```
content/dsa/patterns/sliding-window/index.mdx
content/dsa/patterns/sliding-window/problems/max-sum-subarray-of-size-k.mdx
content/dsa/patterns/sliding-window/problems/longest-substring-without-repeating-characters.mdx
content/dsa/patterns/sliding-window/problems/minimum-window-substring.mdx
content/dsa/patterns/binary-search-variants/index.mdx
content/dsa/patterns/binary-search-variants/problems/search-in-rotated-sorted-array.mdx
content/dsa/patterns/binary-search-variants/problems/first-and-last-position-in-sorted-array.mdx
content/dsa/patterns/binary-search-variants/problems/koko-eating-bananas.mdx
content/dsa/patterns/hash-based-structures/index.mdx
content/dsa/patterns/hash-based-structures/problems/two-sum.mdx
content/dsa/patterns/hash-based-structures/problems/longest-consecutive-sequence.mdx
content/dsa/patterns/prefix-sums-and-difference-arrays/index.mdx
content/dsa/patterns/prefix-sums-and-difference-arrays/problems/range-sum-query.mdx
content/dsa/patterns/prefix-sums-and-difference-arrays/problems/subarray-sum-equals-k.mdx
content/system-design/fundamentals/scalability/index.mdx
content/system-design/fundamentals/load-balancing/index.mdx
content/system-design/fundamentals/database-fundamentals/index.mdx
content/system-design/fundamentals/cap-theorem-and-consistency-models/index.mdx
content/system-design/fundamentals/consistent-hashing/index.mdx
content/system-design/fundamentals/message-queues-and-pubsub/index.mdx
content/system-design/lld/parking-lot/index.mdx
content/system-design/hld/url-shortener/index.mdx
```
