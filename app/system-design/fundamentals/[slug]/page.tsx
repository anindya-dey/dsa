import type { Metadata } from "next";
import { SystemDesignTopicView } from "@/components/system-design-topic-view";
import { getSystemDesignTopicsByTrack } from "@/lib/catalog/system-design";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getSystemDesignTopicsByTrack("fundamentals").map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getSystemDesignTopicsByTrack("fundamentals").find(
    (t) => t.slug === slug,
  );
  if (!topic) return {};

  return { title: topic.title, description: topic.summary };
}

export default async function FundamentalsTopicPage({ params }: PageProps) {
  const { slug } = await params;
  return <SystemDesignTopicView track="fundamentals" slug={slug} />;
}
