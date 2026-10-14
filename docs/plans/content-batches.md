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
- A worked example in every topic. Analogies are welcome.
- Prose over bullet dumps. Bullets only for genuinely listy content.
- No em-dashes in new content.
- Length targets: pattern overview 500-650 words, problem page 350-500,
  fundamentals 700-1000, LLD/HLD 900-1300.
- Every DSA problem: problem statement, constraints, example, brute force
  with code and why it's slow, optimal C++ with the reasoning, complexity
  table. Practice links stay empty until the curation phase (R11).
- Every HLD: functional and non-functional requirements, architecture
  diagram (Mermaid), component breakdown, back-of-envelope capacity
  estimate, trade-offs, links back to Fundamentals (R10).
- Every LLD: requirements, class design, named design patterns, a C++
  sketch, known variations (R9).

## Batches

| Batch | Focus | DSA | System Design | Status |
| --- | --- | --- | --- | --- |
| 1 | Array/string core, fundamentals core, template validation | Sliding Window, Binary Search Variants, Hash-Based Structures, Prefix Sums & Difference Arrays (10 problems) | Fundamentals: Scalability, Load Balancing, Database Fundamentals, CAP Theorem, Consistent Hashing, Message Queues & Pub/Sub. LLD: Parking Lot. HLD: URL Shortener. | **done** |
| 2 | Finish Phase 2, finish the fundamentals core | Monotonic Structures, Intervals & Sweep Line, Matrix & Grid Algorithms, Stacks & Queues, Linked List Manipulation | Fundamentals: CDN, Rate Limiting, API Design, Observability, Distributed Transactions, Idempotency & Exactly-Once. LLD: LRU/LFU Cache, Rate Limiter. HLD: Distributed Rate Limiter, Chat Application. | **next** |
| 3 | Trees, heaps, graphs; HLD infrastructure depth | Phase 3: Binary Trees & BSTs, Heaps / Priority Queues, Trie, Graph Traversals, Graph Specializations, Advanced Graphs | HLD: News Feed, Notification System, Search Autocomplete, Distributed Cache, Key-Value Store. LLD: Elevator System, Vending Machine, Chess Game. | not started |
| 4 | Dynamic programming; the big product case studies | Phase 4: Dynamic Programming, Backtracking & Pruning, Greedy Algorithms, String Algorithms, Range-Query Structures, Number Theory & Combinatorics, Design Data Structures | HLD: Payment System, Ride-Sharing App, Video Streaming Service, Distributed Job Scheduler, E-commerce / Flash Sale. LLD: Movie Ticket Booking, Task Scheduler, Bank / Ledger. | not started |
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
