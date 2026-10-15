import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { PracticeLinks } from "@/components/practice-links";
import { dsaPatterns, getDsaPattern } from "@/lib/catalog/dsa";
import { getProblem, listProblemsForPattern } from "@/lib/content/dsa";

interface PageProps {
  params: Promise<{ slug: string; problem: string }>;
}

export function generateStaticParams() {
  return dsaPatterns.flatMap((pattern) =>
    listProblemsForPattern(pattern.slug).map((problem) => ({
      slug: pattern.slug,
      problem: problem.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, problem } = await params;
  const page = await getProblem(slug, problem);
  if (!page) return {};

  return {
    title: page.frontmatter.title,
    description: `${page.frontmatter.title}: ${page.meta.title} pattern, solved from brute-force to optimal in C++.`,
  };
}

export default async function ProblemPage({ params }: PageProps) {
  const { slug, problem } = await params;
  const page = await getProblem(slug, problem);
  if (!page) notFound();

  const pattern = getDsaPattern(slug);
  if (!pattern) notFound();

  const { frontmatter, headings, content } = page;

  return (
    <Container>
      <PageHeader
        back={{ href: `/dsa/patterns/${slug}`, label: pattern.title }}
        eyebrow={`${pattern.title} · Problem`}
        title={frontmatter.title}
      >
        {frontmatter.variant && <Badge>{frontmatter.variant}</Badge>}
        {frontmatter.difficulty && (
          <Badge tone="accent">{frontmatter.difficulty}</Badge>
        )}
      </PageHeader>

      <ArticleLayout
        headings={headings}
        aside={<PracticeLinks links={frontmatter.practiceLinks} />}
      >
        {content}
      </ArticleLayout>
    </Container>
  );
}
