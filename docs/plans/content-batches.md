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
| 4 | Dynamic programming; the big product case studies | Phase 4: Dynamic Programming, Backtracking & Pruning, Greedy Algorithms, String Algorithms, Range-Query Structures, Number Theory & Combinatorics, Design Data Structures (21 problems) | HLD: Payment System, Ride-Sharing App, Video Streaming Service, Distributed Job Scheduler, E-commerce / Flash Sale. LLD: Movie Ticket Booking, Task Scheduler, Bank / Ledger. | **done** |
| 5 | Long tail: complete DSA, principal-level Fundamentals | Phase 1: Asymptotic Analysis, Linear Structures, Recursion & Math, Sorting & Selection, Bit Manipulation. Phase 2: Divide & Conquer (all 29 patterns complete, 86 problems). Fundamentals: Multi-Region & Active-Active, Consensus & Leader Election, Clock Synchronization, Reliability Engineering, Concurrency & Parallelism, Event Sourcing & CQRS, Backpressure & Flow Control, Stream vs. Batch. | — | **done** |
| 6a | System Design: finish Fundamentals | — | The 15 remaining Fundamentals (capacity planning, latency vs throughput, OLAP vs OLTP, object storage, search & inverted index, geospatial, networking, proxies, serialization, API gateway, microservices, availability, auth, security, multi-tenancy) | **done** |
| 6a.5 | DSA problem top-up: close variant gaps | DP +5 (Climbing Stairs, LIS, 0/1 Knapsack, Burst Balloons, Word Break) · Trees +3 (Diameter, Invert, BST Iterator) · Two Pointers +1 (3Sum) · Stacks +1 (Valid Parentheses) · Graph Traversals +1 (Word Ladder) · Matrix +2 (Search a 2D Matrix, Spiral Matrix) · Range Query +2 (Range Min Query, segment tree range update) · Prefix Sums +1 (Product Except Self) · Linked List +1 (Copy List with Random Pointer) · String Algorithms +1 (Longest Palindromic Substring) · Backtracking +1 (Combination Sum) · Graph Specializations +2 (Alien Dictionary, Redundant Connections) · Design DS +1 (Reservoir Sampling) | — | **done** |
| 6b | System Design: finish LLD | — | The 12 remaining LLDs (library, URL shortener, logging, in-memory FS, splitwise, tic-tac-toe, ATM, hotel, car rental, text editor, pub/sub broker, shopping cart) | **done** |
| 6c | System Design: HLD infrastructure components | — | Load balancer, CDN, distributed ID generator, message queue, object storage, file storage, metrics, log aggregation, web crawler (9) | **done** |
| 6d | System Design: HLD product case studies | — | Collaborative editing, maps, stock exchange, proximity, video conferencing, leaderboard, recommendation, fraud detection, ad-click aggregator, webhooks, migration (11) | **done** |
| 7a | AI/ML: Fundamentals core | — | ML System Design Basics · Supervised/Unsupervised/RL · Offline vs Online · Batch vs Real-Time · Training Data Pipelines · Data Labeling · Data Versioning · Feature Engineering · Feature Stores · Embeddings · Similarity Search & ANN · Vector Databases (12) | **done** |
| 7b | AI/ML: evaluation, ops, and serving | — | Evaluation Metrics · Offline vs Online Evaluation · A/B Testing · Monitoring & Drift · Concept Drift & Retraining · Bias/Fairness/Explainability · Privacy-Preserving ML · Responsible AI (8) + Model Serving Architectures · Inference Optimization · Batching & Latency · GPU Management · Runtimes · Multi-Model · Edge · Serverless · Model Caching · Autoscaling (10) | **done** |
| 7c | AI/ML: GenAI / LLM systems | — | LLM Serving · Prompt Engineering as a System Concern · RAG · Chunking & Indexing · Fine-Tuning vs Prompting vs RAG · LoRA/PET · Agents & Tool Use · Guardrails · Evaluating LLMs · Cost & Token Budgets · LLM Caching · LLM Gateways (12) | **done** |
| 7d | AI/ML: MLOps, case studies, LLD | — | MLOps & CI/CD · Registry · Experiment Tracking · Reproducibility · Distributed Training · Hyperparameter Tuning · AutoML · Governance · Cost Optimization · Multi-Tenant Platforms · Backfills (11) + case studies (RAG chat, semantic search, serving platform, feature platform, CTR, moderation, LLM gateway, anomaly detection, training platform) + LLDs (feature store, registry, tokenizer, embedding cache, vector index, pipeline) | **done** |
| 8 | C++ Toolkit reference track | 14 entries written (vector, string, unordered_map, map, deque, stack/queue, priority_queue, pair/tuple, optional, function/lambdas, algorithms, binary search, numeric, invalidation); "Related C++ tools" end sections added to 17 DSA pattern overviews; no inline links per the plan | — | **done** |

## Sequencing rules

- Don't start Batch 4 (dynamic programming) before Batch 3 is done: DP
  constantly reuses tree and graph patterns.
- Static search (R14/R15) **shipped 2026-10-14**, after Batch 3: a
  prerendered `/search-index.json` route built from the content
  (`lib/search.ts`), a client dialog with Cmd+K, snippet extraction, and
  section labels. No backend, no external dependency; the index
  regenerates on every build.
- Each batch alternates DSA and System Design, per the requirements doc
  (R16/R17).
- Batches 1-4 fill the cheat-sheet's diagnostic matrix references so every
  clue links to real content.
- Before closing any batch: `pnpm check:content`, `pnpm lint`,
  `pnpm typecheck`, and `pnpm build` must all pass.

## Full-site review and fixes (2026-10-15)

A full review compiled every C++ block, ran optimal solutions under
AddressSanitizer and UBSan, parsed every Mermaid diagram with Mermaid's
own parser, resolved every internal link, and fetched live routes. Fixes:

- **Links.** 100 links used `/dsa/patterns/<p>/problems/<x>`, a path that
  never matched a route; all rewritten, plus a permanent redirect for the
  old shape. One System Design link pointed at a moved AI/ML page.
- **C++.** Fixed solutions that did not compile (Course Schedule
  structured bindings on `vector<int>`, Min Stack missing `;`, helpers
  called before declaration in Validate BST, Pow(x, n), Level Order, and
  a misnamed helper in Majority Element). Tree code now uses LeetCode's
  `val`; cycle detection uses `ListNode`. Removed signed-overflow UB at the
  `INT_MIN`/`INT_MAX` boundary in Longest Consecutive Sequence, and gave
  Number of Islands a real brute-force implementation.
- **Mermaid.** Four diagrams failed to parse (unquoted parentheses in
  labels); the RNN diagram drew hidden state flowing into inputs.
- **DSA structure.** Number of Islands moved to Graph Traversals (it was
  taught before graphs), Kth Largest in a Stream to Heaps, Longest
  Repeating Character Replacement to Sliding Window. The duplicate
  number-theory Pow(x, n) became Super Pow (modular exponentiation); its
  iterative version moved to the recursive page.
- **DSA coverage.** 18 problems added, closing the main Blind 75 gaps and
  giving Sorting & Selection real selection and comparator problems:
  Maximum Subarray, House Robber II, Decode Ways, Best Time to Buy and
  Sell Stock, Top K Frequent Elements, Binary Tree Maximum Path Sum,
  Serialize and Deserialize Binary Tree, Kth Smallest in a BST, Construct
  Binary Tree from Preorder and Inorder, Word Search, Insert Interval,
  Missing Number, Find Minimum in Rotated Sorted Array, Remove Nth Node
  From End, Trapping Rain Water, K Closest Points to Origin, Largest
  Number, Super Pow. Every new solution was tested, brute force included.
- **Cheat sheet.** Grew from 11 clue rows to 30, covering all 29 patterns.
- **Practice links.** 123 of 125 problems link to LeetCode (slugs verified
  against LeetCode's API); close variants are labelled as such. Range Add
  to Segment and Range Minimum Query have no faithful LeetCode equivalent.
- **C++ integration.** New toolkit entries: Custom Comparators, Integer
  Overflow & Limits, Bit Operations, Smart Pointers. Every DSA problem and
  LLD article with code now ends with "Related C++ tools", chosen from the
  library features its code uses.
- **System Design.** New fundamentals: Replication, Partitioning &
  Sharding, Probabilistic Data Structures. Web Crawler gained its Bloom
  filter; News Feed's post rate was corrected (20/s was implausible for
  200M daily users).
- **AI/ML.** Offline vs Online Inference merged into Batch vs Real-Time
  Prediction (same topic, adjacent in the same group). Catalog and
  frontmatter titles aligned. Inline Wikipedia links removed from concept
  articles; an overclaim about MoE adoption softened.
- **House style.** 1,116 em-dashes removed from 141 files (concentrated in
  AI/ML and the C++ Toolkit) and from catalog copy.
- **Guardrails.** `check:content` now fails on broken internal links,
  unquoted Mermaid labels with parentheses, em-dashes in prose,
  catalog/frontmatter title drift, and missing tiers. New `check:cpp`
  compiles every problem page's C++ and runs in CI.
- **UX.** `ink-faint` darkened for contrast (about 4.7:1 to 5.7:1 on
  paper). Diagrams announce their node labels to screen readers. The
  search index no longer includes "Related" link lists and caps body text
  at 4,000 characters.

Not changed, deliberately: word counts outside the original bands (the
Batch 3 audit accepted 450-1050 for concept articles and 190-500 for
problems), and second-person voice in older articles, which would need a
per-article editorial rewrite rather than a mechanical pass.

## Batch 7d completion notes (2026-10-15)

Batch 7d is written and shipped: the final AI/ML batch (26 topics)
across three groups.

- **MLOps & Platform (11)**: MLOps & CI/CD, Model Registry &
  Versioning, Experiment Tracking, Reproducibility & Metadata,
  Distributed Training, Hyperparameter Tuning at Scale, AutoML,
  Model Governance & Compliance, Cost Optimization for ML,
  Multi-Tenant ML Platforms, Feature/Model Backfills & Migrations.
- **Case Studies (9, HLD-style)**: RAG/Chat-With-Your-Docs, Semantic
  / Vector Search, Model Serving Platform, Feature Platform, CTR /
  Ad Ranking, Content Moderation, LLM Gateway, Real-Time Anomaly
  Detection, ML Training Platform.
- **Low-Level Design (6)**: Feature Store, Model Registry,
  Tokenizer (BPE), Embedding Cache, Vector Index, Feature Transform
  Pipeline.

With this, **the entire site is complete**: DSA (29 patterns, 108
problems), System Design (90 topics across Fundamentals / LLD / HLD),
AI/ML Systems (68 topics), and the C++ Toolkit (14 entries). No
"coming soon" placeholders remain. The only deliberately-deferred
item is R11 (curated external practice links on DSA problem pages),
which remains an empty UI slot by design.

## Batch 7c completion notes (2026-10-15)

Batch 7c is written and shipped: the GenAI / LLM Systems group, 12
topics. The AI/ML track is now 42/42 across its first five groups.
Topics: LLM Serving Basics (tokens, KV cache, context windows),
Prompt Engineering as a System Concern (versioned templates, eval
sets, injection), RAG (the pipeline and failure taxonomy), Chunking
& Indexing, Fine-Tuning vs Prompting vs RAG (the decision ladder),
LoRA/PEft (one base, many adapters), Agents & Tool Use (the loop,
sandbox, failure modes), Guardrails & Output Validation (schema
enforcement, injection defense, refusal), Evaluating LLM Systems
(LLM-as-judge biases, groundedness), Cost & Token Budgets, Caching
for LLMs (prompt + semantic), LLM Gateways & Routing. Remaining:
batch 7d (MLOps, case studies, LLD, ~29 topics).

## Batch 6a completion notes (2026-10-15)

Batch 6 (the System Design long tail) was split into four sub-batches,
6a-6d, for shippable size and thematic coherence. Batch 6a (all 15
remaining Fundamentals) is written and shipped: Fundamentals are now
36/36, complete. Highlights: Capacity Planning & Estimation and
Latency vs. Throughput close the Scalability & Performance group;
OLAP vs. OLTP, Object Storage, Search & Inverted Index, and Geospatial
Indexing close Data & Storage; Networking Basics, Proxies,
Serialization, and API Gateway close Communication & APIs;
Microservices vs. Monolith closes Distributed Systems; Availability &
Reliability, Auth Basics, Security Fundamentals, and Multi-Tenancy &
Data Residency close Reliability & Operations and Security. Every
group in the Fundamentals track is now fully written.

## Batch 5 completion notes (2026-10-15)

Batch 5 is written and shipped.

- DSA is now **complete**: all 29 patterns live with 86 problem pages.
  This batch added Phase 1 (Asymptotic Analysis, Linear Structures,
  Recursion & Math, Sorting & Selection, Bit Manipulation) and Divide &
  Conquer (Phase 2), with 15 new problem pages. Note: Asymptotic
  Analysis had never been scheduled in any batch (found by a
  completeness check during this batch) and was written here.
- System Design Fundamentals grew by 8, all principal-level:
  Multi-Region & Active-Active, Consensus & Leader Election, Clock
  Synchronization & Logical Time, Reliability Engineering (SLOs & Error
  Budgets), Concurrency & Parallelism, Event Sourcing & CQRS,
  Backpressure & Flow Control, Stream vs. Batch. Fundamentals now
  21/36, with 15 remaining (all long-tail: batch 6).
- Remaining batches renumbered: batch 6 is the System Design long tail
  (15 fundamentals + 12 LLD + 20 HLD), batch 7 is the AI/ML vertical,
  batch 8 is the C++ Toolkit.

## Batch 4 completion notes (2026-10-15)

Batch 4 is written and shipped.

- DSA: all of Phase 4 is live (Dynamic Programming, Backtracking &
  Pruning, Greedy Algorithms, String Algorithms, Range-Query Structures,
  Number Theory & Combinatorics, Design Data Structures) with 21 new
  problem pages. Only Phase 1 (5 patterns) and Divide & Conquer remain,
  all scheduled for Batch 5.
- System Design: HLD grew by 5 (Payment System, Ride-Sharing App, Video
  Streaming Service, Distributed Job Scheduler, E-commerce / Flash Sale)
  and LLD by 3 (Movie Ticket Booking, Task Scheduler, Bank / Ledger).
  Fundamentals unchanged at 13.
- Cross-link integrity check added to the review pass: every internal
  link in every article validated against published routes plus the
  catalog; two broken links found and fixed.

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
- Static search (R14/R15) has shipped; see the sequencing rules above.

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
