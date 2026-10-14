import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { Badge } from "@/components/badge";
import { ComingSoon } from "@/components/coming-soon";
import { Container } from "@/components/container";
import { ArrowRightIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { dsaPatterns, dsaPhaseTitles } from "@/lib/catalog/dsa";
import { getPatternOverview } from "@/lib/content/dsa";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return dsaPatterns.map((pattern) => ({ slug: pattern.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pattern = dsaPatterns.find((p) => p.slug === slug);
  if (!pattern) return {};

  return {
    title: pattern.title,
    description: pattern.summary,
  };
}

export default async function PatternPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPatternOverview(slug);
  if (!page) notFound();

  const { meta, hasContent, problems, content, headings } = page;

  if (!hasContent) {
    return (
      <ComingSoon
        title={meta.title}
        summary={meta.summary}
        backHref="/dsa"
        backLabel="DSA roadmap"
      />
    );
  }

  const problemList =
    problems.length > 0 ? (
      <section aria-labelledby="problems-title" className="mt-14">
        <h2
          id="problems-title"
          className="font-mono text-xs uppercase tracking-widest text-ink-faint"
        >
          Problems &middot; {problems.length}
        </h2>
        <ul className="-mx-3 mt-3 sm:-mx-4">
          {problems.map((problem) => (
            <li key={problem.slug}>
              <Link
                href={`/dsa/patterns/${slug}/${problem.slug}`}
                className="group flex items-center gap-3 rounded-2xl px-3 py-4 transition-colors hover:bg-accent-wash active:bg-accent-wash sm:px-4"
              >
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-ink transition-colors group-hover:text-accent-deep">
                    {problem.title}
                  </span>
                  <span className="mt-1.5 flex flex-wrap gap-2">
                    {problem.variant && <Badge>{problem.variant}</Badge>}
                    {problem.difficulty && (
                      <Badge tone="accent">{problem.difficulty}</Badge>
                    )}
                  </span>
                </span>
                <ArrowRightIcon className="size-4 shrink-0 text-ink-faint/60 transition-all group-hover:translate-x-0.5 group-hover:text-accent-deep" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    ) : null;

  return (
    <Container>
      <PageHeader
        back={{ href: "/dsa", label: "DSA roadmap" }}
        eyebrow={`Phase ${meta.phase} · ${dsaPhaseTitles[meta.phase]}`}
        title={meta.title}
        description={meta.summary}
      >
        {meta.variants?.map((variant) => <Badge key={variant}>{variant}</Badge>)}
      </PageHeader>

      <ArticleLayout headings={headings} aside={problemList}>
        {content}
      </ArticleLayout>
    </Container>
  );
}
