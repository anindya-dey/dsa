import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { cppEntries } from "@/lib/catalog/cpp";
import { getCppEntryContent } from "@/lib/content/cpp";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return cppEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = cppEntries.find((e) => e.slug === slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.summary };
}

export default async function CppEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getCppEntryContent(slug);
  if (!page) notFound();

  return (
    <Container>
      <PageHeader
        back={{ href: "/cpp", label: "C++ Toolkit" }}
        eyebrow="C++ Toolkit"
        title={page.meta.title}
        description={page.meta.summary}
      />
      <ArticleLayout headings={page.headings}>{page.content}</ArticleLayout>
    </Container>
  );
}
