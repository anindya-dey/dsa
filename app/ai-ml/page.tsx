import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { RoadmapSection } from "@/components/roadmap-section";
import { TopicList } from "@/components/topic-list";
import {
  getAiMlGroupsByTrack,
  getAiMlTopicsByTrack,
  aiMlTrackDescriptions,
  aiMlTrackTitles,
} from "@/lib/catalog/ai-ml";
import { topicHasContent } from "@/lib/content/ai-ml";
import { tierOf } from "@/lib/catalog/tiers";
import type { AiMlTrack } from "@/lib/catalog/types";

export const metadata: Metadata = {
  title: "AI/ML Roadmap",
  description:
    "How modern AI models work, conceptually, and the engineering that turns them into products.",
};

const TRACKS = Object.keys(aiMlTrackTitles) as AiMlTrack[];

export default function AiMlRoadmapPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="Concepts → systems"
        title="AI/ML"
        description="How the models actually work (concepts, not mathematics), then the engineering that ships them — data, serving, evaluation, MLOps, and the GenAI-era machinery."
      />

      <div className="space-y-10 lg:space-y-14">
        {TRACKS.map((track, index) => {
          const topics = getAiMlTopicsByTrack(track);
          const groups = getAiMlGroupsByTrack(track);
          const ready = topics.filter((topic) =>
            topicHasContent(track, topic.slug),
          ).length;

          return (
            <RoadmapSection
              key={track}
              id={track}
              index={index + 1}
              title={aiMlTrackTitles[track]}
              description={aiMlTrackDescriptions[track]}
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
                        href: `/ai-ml/${track}/${topic.slug}`,
                        title: topic.title,
                        summary: topic.summary,
                        available: topicHasContent(track, topic.slug),
                        tier: tierOf(topic.slug),
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
