import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AiMlTopicView } from "@/components/ai-ml-topic-view";
import {
  getAiMlTopicsByTrack,
  aiMlTopics,
  aiMlTrackTitles,
} from "@/lib/catalog/ai-ml";
import { topicHasContent } from "@/lib/content/ai-ml";
import type { AiMlTrack } from "@/lib/catalog/types";

const TRACKS = Object.keys(aiMlTrackTitles) as AiMlTrack[];

function isTrack(value: string): value is AiMlTrack {
  return (TRACKS as string[]).includes(value);
}

interface PageProps {
  params: Promise<{ track: string; slug: string }>;
}

export function generateStaticParams() {
  return aiMlTopics.map((topic) => ({
    track: topic.track,
    slug: topic.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { track, slug } = await params;
  if (!isTrack(track)) return {};

  const topic = getAiMlTopicsByTrack(track).find((t) => t.slug === slug);
  if (!topic) return {};

  const metadata: Metadata = {
    title: topic.title,
    description: topic.summary,
  };

  if (!topicHasContent(track, slug)) {
    metadata.robots = { index: false, follow: true };
  }

  return metadata;
}

export default async function AiMlTopicPage({ params }: PageProps) {
  const { track, slug } = await params;
  if (!isTrack(track)) notFound();

  return <AiMlTopicView track={track} slug={slug} />;
}
