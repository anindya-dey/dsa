---
date: 2026-10-13
topic: dsa-system-design-site-rewrite
---

# DSA & System Design Learning Site — Full Rewrite

## Summary

Rewrite the existing Next.js app into a public, portfolio-grade learning site with two parallel verticals — DSA and System Design — each with a phased roadmap landing page and shallow, SEO-friendly content pages. The full navigation skeleton for both verticals ships immediately; content is built out incrementally across a defined sequence of delivery phases, starting with one fully-built DSA pattern and one fully-built System Design Fundamentals topic to validate the page templates.

---

## Problem Frame

The current repo is an unmodified `create-next-app` scaffold with a single landing page. The landing page's own copy already promises "detailed solutions, from brute-force to optimal approach, with time and space complexity analysis," but no such content exists, and its call-to-action button links to a `/dsa` route that returns a 404.

Separately, the site's owner has been developing a detailed personal study roadmap for Data Structures & Algorithms (phased patterns, a pattern-recognition diagnostic matrix, practice strategy, curated resources) and now wants to extend that same treatment to System Design (fundamentals, low-level design, high-level design case studies). The goal has shifted from "personal notes that might go public later" to a site that is public-facing from its first release and that other learners — not just the owner — can use to recognize patterns and work through solved problems in both domains.

---

## Actors

- A1. Learner: a public visitor browsing DSA or System Design content, optionally using search; has no account and no saved state.
- A2. Site Owner/Author: authors MDX content for both verticals, sequences delivery phases, and maintains content accuracy over time.

---

## Key Flows

- F1. Browse via Roadmap
  - **Trigger:** Learner lands on `/dsa` or `/system-design`.
  - **Actors:** A1
  - **Steps:** Learner views the phased roadmap/track overview → clicks into a pattern or topic → reads the content → follows a cross-link back to the parent pattern (DSA problem) or a relied-upon concept (System Design HLD → Fundamentals).
  - **Outcome:** Learner reaches the specific content they need and can navigate back to the broader structure without getting lost.
  - **Covered by:** R1, R2, R3, R7, R8, R9, R10

- F2. Search
  - **Trigger:** Learner opens site search and enters a query.
  - **Actors:** A1
  - **Steps:** Learner types a query → sees matching results across both verticals → selects a result → lands on that page.
  - **Outcome:** Learner finds relevant content without needing to browse the full hierarchy.
  - **Covered by:** R14, R15

- F3. Encountering unbuilt content
  - **Trigger:** Learner clicks a nav item for a phase/track/pattern/topic that hasn't been written yet.
  - **Actors:** A1
  - **Steps:** Learner clicks the nav link → page loads → a "coming soon" placeholder explains the topic is planned → learner navigates back to built content.
  - **Outcome:** No dead links or 404s; the full planned scope stays visible even before all content exists.
  - **Covered by:** R4, R5

---

## Requirements

**Site structure & navigation**
- R1. The site has two top-level verticals — DSA and System Design — each with its own landing/roadmap page, sharing one site shell (header/nav/footer).
- R2. The DSA vertical's roadmap page links to pattern pages at `/dsa/patterns/[slug]`, plus a Diagnostic Matrix cheat-sheet page.
- R3. The System Design vertical's roadmap page links to three sub-tracks: Fundamentals (`/system-design/fundamentals/[slug]`), Low-Level Design (`/system-design/lld/[slug]`), and High-Level Design (`/system-design/hld/[slug]`).
- R4. All phases/tracks appear in navigation from the first release, even before their content exists, so the full roadmap is visible to visitors immediately.
- R5. Phases/tracks/patterns/topics without content yet render a "coming soon" placeholder page rather than a broken link or 404.
- R6. Every page ships with per-page SEO metadata (title, description) and the site provides a generated sitemap and robots.txt from the first public release.

**Content templates**
- R7. Each DSA problem page includes: problem statement with constraints/examples, a brute-force approach with explanation, an optimal approach (C++) with explanation, time/space complexity for both approaches, and a link back to its parent pattern page.
- R8. Each System Design Fundamentals page includes: concept explanation, when to use/not use it, trade-offs, and links to related concepts.
- R9. Each System Design LLD page includes: requirements, OOP/class design, named design patterns used, a C++ code sketch, and known variations.
- R10. Each System Design HLD page includes: functional and non-functional requirements, an architecture diagram, component breakdown, trade-offs/alternatives considered, a back-of-envelope capacity estimate, and links back to the Fundamentals pages it depends on.
- R11. Each DSA problem page reserves a visible "Practice this on" slot for external links (e.g. LeetCode, GeeksforGeeks); the slot may render empty or hidden until real links are added in a later phase.

**Code & diagrams**
- R12. All code examples across DSA and System Design content are written in C++.
- R13. System Design diagrams (architecture/sequence) are authored as versioned diagram-as-code rather than exported images.

**Search**
- R14. The site provides full-text search across published content, built as a static index requiring no backend service.
- R15. Search ships after the first content is published (delivery phase 2), not in the initial pilot release.

**Delivery sequencing**
- R16. The first release ships the full navigation skeleton for both verticals plus exactly one fully-built DSA pattern and one fully-built System Design Fundamentals topic, used to validate the page templates end-to-end.
- R17. Subsequent releases add search, then expand DSA content, then System Design content, in alternating passes, per the sequence in Key Decisions.
- R18. After the initial content build-out is substantially complete, the site undergoes a review pass to identify missing topics, followed by an iteration pass to correct/update existing content; these two passes repeat periodically as an ongoing content-maintenance loop rather than a one-time step.

---

## Acceptance Examples

- AE1. **Covers R4, R5.** Given the System Design HLD track has no published topics yet, when a learner clicks "High-Level Design" in the System Design nav, then the page loads with a "coming soon" message and a link back to the System Design landing page — not a 404.
- AE2. **Covers R10.** Given an HLD page for "Design a Chat Application," when the learner reads it, then the page links to the Fundamentals pages for any concepts it relies on that are already published (e.g. Message Queues, Load Balancing).
- AE3. **Covers R11.** Given a DSA problem page is published before external practice links are curated, when a learner views the "Practice this on" slot, then it does not render as a broken or dead link — it is either hidden entirely or shown as a clearly non-functional placeholder.
- AE4. **Covers R5, R16.** Given the first release, when a learner visits any DSA pattern page other than the pilot pattern, then they see a "coming soon" placeholder, not an error.

---

## Success Criteria

- A first-time visitor can tell within seconds that the site covers both DSA and System Design, and can see the full planned scope — including unbuilt parts — through navigation alone.
- The pilot DSA pattern page and pilot System Design Fundamentals page fully demonstrate their respective content templates well enough that producing the next topic becomes a content-writing task, not a template-design task.
- Search returns relevant results across both verticals once content exists, with no backend/server cost.
- `ce-plan` can turn delivery phases 1–9+ into concrete technical milestones without inventing additional product scope decisions.

---

## Scope Boundaries

- No user accounts, login, or progress tracking in this phase of work.
- Practice Strategy and Curated Learning Resources (books/courses/YouTube) from the original roadmap stay personal notes, not site pages.
- Populating real LeetCode/GeeksforGeeks links is deferred; only the UI slot (R11) ships now.
- Code examples are C++ only; no multi-language tabs.
- Specific library choices, versions, file layout, and route implementation are planning's responsibility, not re-litigated here beyond the Key Decisions below.

---

## Key Decisions

- Framework: Next.js (App Router) + TypeScript, latest stable release — reuses the existing repo investment and gives the strongest SSG/SEO story for a public, content-heavy React site.
- Styling: Tailwind CSS, latest stable major version — already in the repo; preserves full design control instead of inheriting a generic docs-site theme.
- Content authoring: MDX files in-repo with typed frontmatter via a content layer (e.g. Velite), latest stable version — drives navigation, placeholders, and the Diagnostic Matrix from structured content rather than a database.
- Code highlighting: Shiki-based syntax highlighting, latest stable version — strong C++ support, standard in modern MDX pipelines.
- Diagrams: Mermaid-based diagram-as-code, latest stable version — versioned alongside content, no exported images (implements R13).
- Search: static, backend-free search (e.g. Pagefind), latest stable version — matches a fully static site with no server infrastructure (implements R14).
- Hosting: Vercel — native fit for Next.js, sufficient free tier for a public personal/portfolio site.
- "Latest and stable packages only" is interpreted as the latest non-prerelease (non-beta/non-RC) release of each dependency, re-verified at implementation time rather than fixed to any version named in this document.
- Pilot content picks for the first release (R16): DSA pattern = Two Pointers; System Design Fundamentals topic = Caching.
- Delivery sequence (R17–R18): 1) UI/UX pilot (skeleton + 1 DSA pattern + 1 System Design Fundamentals topic) → 2) search → 3) more DSA → 4) more System Design → 5) remaining DSA → 6) remaining System Design → 7) review for gaps → 8) iterate on findings → 9+) repeat 7–8 as an ongoing maintenance loop.
- The System Design topic catalog (Fundamentals / LLD / HLD) proposed during brainstorming is a starting curriculum, not a locked list — expected to be pruned or extended during delivery phases 4–6.

---

## Dependencies / Assumptions

- Assumes "rewrite the entire project" means restructuring the existing `dsa` repo in place, not standing up a separate repository.
- Assumes no requirement for internationalization/localization.
- Assumes single-author content production — no multi-contributor CMS workflow is needed.
- Assumes continued deployment to a static-friendly host (Vercel assumed; confirm if different).

---

## Outstanding Questions

### Deferred to Planning

- [Affects R2, R3][Technical] Exact mechanism for keeping pattern/topic pages shallow while still surfacing "Phase"/"Track" as metadata (e.g. frontmatter field vs. route segment).
- [Affects R14][Needs research] Confirm the chosen static search tool integrates cleanly with the chosen Next.js + MDX content pipeline at current latest-stable versions.
- [Affects R13][Technical] Specific Mermaid rendering approach within the MDX pipeline (build-time vs. client-time rendering).
- [Affects R16][Technical] Whether the site ships as a single Next.js app or whether the DSA/System Design verticals warrant separate route groups for build isolation.
