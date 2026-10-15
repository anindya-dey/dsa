import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { ComingSoon } from "@/components/coming-soon";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { TierBadge } from "@/components/tier-badge";
import { aiMlTrackTitles } from "@/lib/catalog/ai-ml";
import { getTopic } from "@/lib/content/ai-ml";
import { tierOf } from "@/lib/catalog/tiers";
import type { AiMlTrack } from "@/lib/catalog/types";

export async function AiMlTopicView({
  track,
  slug,
}: {
  track: AiMlTrack;
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
        backHref="/ai-ml"
        backLabel="AI/ML roadmap"
      />
    );
  }

  return (
    <Container>
      <PageHeader
        back={{ href: "/ai-ml", label: "AI/ML roadmap" }}
        eyebrow={aiMlTrackTitles[track]}
        title={meta.title}
        description={meta.summary}
      >
        <TierBadge tier={tierOf(slug)} />
      </PageHeader>

      <ArticleLayout headings={headings}>{content}</ArticleLayout>
    </Container>
  );
}
