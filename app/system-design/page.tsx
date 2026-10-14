import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { RoadmapSection } from "@/components/roadmap-section";
import { TopicList } from "@/components/topic-list";
import {
  getSystemDesignTopicsByTrack,
  systemDesignTrackDescriptions,
  systemDesignTrackTitles,
} from "@/lib/catalog/system-design";
import { topicHasContent } from "@/lib/content/system-design";
import type { SystemDesignTrack } from "@/lib/catalog/types";

export const metadata: Metadata = {
  title: "System Design Roadmap",
  description:
    "Fundamentals, low-level design, and high-level design case studies for building systems that scale.",
};

const TRACKS: SystemDesignTrack[] = ["fundamentals", "lld", "hld"];

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
          const items = getSystemDesignTopicsByTrack(track).map((topic) => ({
            href: `/system-design/${track}/${topic.slug}`,
            title: topic.title,
            summary: topic.summary,
            available: topicHasContent(track, topic.slug),
          }));

          return (
            <RoadmapSection
              key={track}
              id={track}
              index={index + 1}
              title={systemDesignTrackTitles[track]}
              description={systemDesignTrackDescriptions[track]}
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
