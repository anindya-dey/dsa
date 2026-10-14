import { notFound, redirect } from "next/navigation";
import { systemDesignTopics } from "@/lib/catalog/system-design";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TrackLessTopicRedirect({ params }: PageProps) {
  const { slug } = await params;
  const topic = systemDesignTopics.find((t) => t.slug === slug);

  if (topic) {
    redirect(`/system-design/${topic.track}/${topic.slug}`);
  }

  notFound();
}

export function generateStaticParams() {
  return [];
}

export const dynamic = "force-dynamic";
