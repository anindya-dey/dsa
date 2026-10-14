import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ArrowRightIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { RoadmapSection } from "@/components/roadmap-section";
import { TopicList } from "@/components/topic-list";
import { dsaPhaseTitles, getDsaPatternsByPhase } from "@/lib/catalog/dsa";
import { patternHasContent } from "@/lib/content/dsa";
import type { DsaPhaseNumber } from "@/lib/catalog/types";

export const metadata: Metadata = {
  title: "DSA Roadmap",
  description:
    "A phased roadmap of Data Structures & Algorithms patterns, from complexity foundations to advanced optimization.",
};

const PHASES: DsaPhaseNumber[] = [1, 2, 3, 4];

export default function DsaRoadmapPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="Phase 1 → 4"
        title="Data Structures & Algorithms"
        description="Organized around archetypes, not problem lists. Learn the pattern once, then recognize it everywhere."
      />

      <Link
        href="/dsa/cheat-sheet"
        className="group mb-10 flex items-center justify-between gap-4 rounded-2xl bg-accent-wash/70 px-4 py-4 transition-colors hover:bg-accent-wash sm:px-5"
      >
        <span>
          <span className="block font-mono text-[11px] uppercase tracking-widest text-accent-deep">
            Diagnostic matrix
          </span>
          <span className="mt-1 block text-sm text-ink sm:text-base">
            Not sure which pattern a problem needs? Start from its clues.
          </span>
        </span>
        <ArrowRightIcon className="size-4 shrink-0 text-accent-deep transition-transform group-hover:translate-x-0.5" />
      </Link>

      <div className="space-y-10 lg:space-y-14">
        {PHASES.map((phase) => {
          const patterns = getDsaPatternsByPhase(phase);
          const items = patterns.map((pattern) => ({
            href: `/dsa/patterns/${pattern.slug}`,
            title: pattern.title,
            summary: pattern.summary,
            available: patternHasContent(pattern.slug),
            meta: pattern.variants?.join(" · "),
          }));

          return (
            <RoadmapSection
              key={phase}
              id={`phase-${phase}`}
              index={phase}
              title={dsaPhaseTitles[phase]}
              ready={items.filter((item) => item.available).length}
              total={items.length}
            >
              <TopicList items={items} />
            </RoadmapSection>
          );
        })}
      </div>
    </Container>
  );
}
