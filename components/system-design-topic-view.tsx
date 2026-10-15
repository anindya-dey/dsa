import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { ComingSoon } from "@/components/coming-soon";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { TierBadge } from "@/components/tier-badge";
import { systemDesignTrackTitles } from "@/lib/catalog/system-design";
import { getTopic } from "@/lib/content/system-design";
import { tierOf } from "@/lib/catalog/tiers";
import type { SystemDesignTrack } from "@/lib/catalog/types";

export async function SystemDesignTopicView({
  track,
  slug,
}: {
  track: SystemDesignTrack;
  slug: string;
}) {
  const page = await getTopic(track, slug);
  if (!page) notFound();

  const { meta, hasContent, content, headings } = page;

  if (!hasContent) {
    return (
      <ComingSoon
        title={meta.title}
        summary={meta.summary}
        backHref="/system-design"
        backLabel="System Design roadmap"
      />
    );
  }

  return (
    <Container>
      <PageHeader
        back={{ href: "/system-design", label: "System Design roadmap" }}
        eyebrow={systemDesignTrackTitles[track]}
        title={meta.title}
        description={meta.summary}
      >
        <TierBadge tier={tierOf(slug)} />
      </PageHeader>

      <ArticleLayout headings={headings}>{content}</ArticleLayout>
    </Container>
  );
}
