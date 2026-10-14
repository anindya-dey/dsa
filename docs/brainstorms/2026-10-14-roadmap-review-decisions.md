---
date: 2026-10-14
topic: dsa-system-design-roadmap-review
---

# DSA & System Design Roadmap — Review Decisions (Round 2)

Follow-up to `2026-10-13-dsa-system-design-site-rewrite-requirements.md`.
This note records the structural decisions made after the first full
roadmap review, so future content phases don't re-litigate them.

## DSA — four phases, rebalanced

The four-pillar spine is kept, but contents drifted as topics were added.
Three topics were misfiled and Phase 4 had become a catch-all:

- `monotonic-structures` and `divide-and-conquer` moved to Phase 2 (they are
  core patterns, the same tier as sliding window and binary search).
- `trie-prefix-tree` moved to Phase 3 (it is a tree).
- Phase 4 renamed from "Advanced Optimization & State Space Exploration" to
  **Advanced Algorithms & Specialized Structures**, and now holds only
  backtracking, DP, greedy, string algorithms, range-query structures, number
  theory, and design-data-structures.

Resulting distribution: P1 = 6, P2 = 10, P3 = 6, P4 = 7 (29 total).

## System Design — same three tracks, grouped for navigation

The Fundamentals / LLD / HLD split is unchanged, but the flat lists became
too long to scan, so topics now carry an optional `group`:

- **Fundamentals (36)** grouped into: Scalability & Performance, Data &
  Storage, Communication & APIs, Distributed Systems, Reliability &
  Operations, Security.
- **LLD (21)** stays a single list — still a navigable length.
- **HLD (33)** split into Infrastructure Components (build the block) vs
  Product Case Studies (apply the blocks end-to-end).

## Topics added in this round

- `concurrency-and-parallelism` (Fundamentals) — required by several LLD
  problems (parking lot, bank ledger, ticket booking, task scheduler) and
  probed in HLD rounds.
- `reliability-engineering` — SLOs, error budgets, and incident response,
  distinct from `observability` (which covers the three pillars of
  telemetry).
- `multi-tenancy-and-data-residency` and `large-scale-migration`
  (Strangler Fig) — the remaining principal-level gaps.

## Level coverage rationale

- Junior: core patterns (P1–P2), basic LLD, caching/DB basics — covered.
- Senior: all patterns, SD fundamentals, LLD, ~8–10 HLD — covered.
- Lead: HLD depth, trade-offs, capacity, consistency, multi-region — covered
  except the two gaps now filled (concurrency, reliability engineering).
- Principal: technically covered including the four new topics; the
  remaining principal-level material is organizational judgment (influence,
  strategy, build-vs-buy) which is out of scope for a technical reference.

## Content style — the house rules

All published content follows one voice, established in the
`two-pointers` pattern and `caching` topic rewrites:

- Second person, short sentences, one idea per sentence.
- Skeleton: plain-language definition → concrete example → mechanics →
  trade-offs/failure modes → related links.
- Every topic includes a worked example; analogies are welcome.
- Prose over bullet dumps; bullets only for genuinely listy content.
- Em-dashes kept to a minimum (target: zero in new content).
- Length targets: pattern overview ~500–650 words, problem page
  ~350–500, fundamentals topic ~700–1000.
