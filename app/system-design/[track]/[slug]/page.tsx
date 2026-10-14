import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SystemDesignTopicView } from "@/components/system-design-topic-view";
import {
  getSystemDesignTopicsByTrack,
  systemDesignTopics,
} from "@/lib/catalog/system-design";
import { topicHasContent } from "@/lib/content/system-design";
import type { SystemDesignTrack } from "@/lib/catalog/types";

const TRACKS: SystemDesignTrack[] = ["fundamentals", "lld", "hld"];

function isTrack(value: string): value is SystemDesignTrack {
  return (TRACKS as string[]).includes(value);
}

interface PageProps {
  params: Promise<{ track: string; slug: string }>;
}

export function generateStaticParams() {
  return systemDesignTopics.map((topic) => ({
    track: topic.track,
    slug: topic.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { track, slug } = await params;
  if (!isTrack(track)) return {};

  const topic = getSystemDesignTopicsByTrack(track).find(
    (t) => t.slug === slug,
  );
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

export default async function SystemDesignTopicPage({ params }: PageProps) {
  const { track, slug } = await params;
  if (!isTrack(track)) notFound();

  return <SystemDesignTopicView track={track} slug={slug} />;
}
