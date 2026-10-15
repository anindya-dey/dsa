import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { RoadmapSection } from "@/components/roadmap-section";
import { TopicList } from "@/components/topic-list";
import {
  getSystemDesignGroupsByTrack,
  getSystemDesignTopicsByTrack,
  systemDesignTrackDescriptions,
  systemDesignTrackTitles,
} from "@/lib/catalog/system-design";
import { topicHasContent } from "@/lib/content/system-design";
import type { SystemDesignTrack } from "@/lib/catalog/types";

export const metadata: Metadata = {
  title: "System Design Roadmap",
  description:
    "Fundamentals, low-level design, high-level design, and AI/ML systems for building systems that scale.",
};

const TRACKS = Object.keys(systemDesignTrackTitles) as SystemDesignTrack[];

export default function SystemDesignRoadmapPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="Concepts → objects → architecture"
        title="System Design"
        description="The building blocks every system is made of, the object-level designs that compose them, and full distributed case studies."
      />

      <div className="space-y-10 lg:space-y-14">
        {TRACKS.map((track, index) => {
          const topics = getSystemDesignTopicsByTrack(track);
          const groups = getSystemDesignGroupsByTrack(track);
          const ready = topics.filter((topic) =>
            topicHasContent(track, topic.slug),
          ).length;

          return (
            <RoadmapSection
              key={track}
              id={track}
              index={index + 1}
              title={systemDesignTrackTitles[track]}
              description={systemDesignTrackDescriptions[track]}
              ready={ready}
              total={topics.length}
            >
              <div className="space-y-8">
                {groups.map((group) => (
                  <section
                    key={group.group}
                    aria-label={group.group || undefined}
                  >
                    {group.group && (
                      <h3 className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                        {group.group} &middot; {group.topics.length}
                      </h3>
                    )}
                    <TopicList
                      items={group.topics.map((topic) => ({
                        href: `/system-design/${track}/${topic.slug}`,
                        title: topic.title,
                        summary: topic.summary,
                        available: topicHasContent(track, topic.slug),
                      }))}
                    />
                  </section>
                ))}
              </div>
            </RoadmapSection>
          );
        })}
      </div>
    </Container>
  );
}
