import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  CONTENT_ROOT,
  compileContentFile,
  contentFileExists,
  type BaseFrontmatter,
} from "@/lib/mdx";
import { getDsaPattern } from "@/lib/catalog/dsa";

const DSA_ROOT = path.join(CONTENT_ROOT, "dsa", "patterns");

export interface ProblemSummary {
  slug: string;
  title: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  variant?: string;
}

export interface PracticeLink {
  label: string;
  href: string;
}

export type ProblemFrontmatter = BaseFrontmatter & {
  difficulty?: "Easy" | "Medium" | "Hard";
  variant?: string;
  practiceLinks?: PracticeLink[];
};

function patternDir(slug: string): string {
  return path.join(DSA_ROOT, slug);
}

function patternOverviewPath(slug: string): string {
  return path.join(patternDir(slug), "index.mdx");
}

function problemsDir(slug: string): string {
  return path.join(patternDir(slug), "problems");
}

export function patternHasContent(slug: string): boolean {
  return contentFileExists(patternOverviewPath(slug));
}

export function patternOverviewMtime(slug: string): Date | undefined {
  const filePath = patternOverviewPath(slug);
  return contentFileExists(filePath) ? fs.statSync(filePath).mtime : undefined;
}

export function problemMtime(
  patternSlug: string,
  problemSlug: string,
): Date | undefined {
  const filePath = problemFilePath(patternSlug, problemSlug);
  return contentFileExists(filePath) ? fs.statSync(filePath).mtime : undefined;
}

export function listProblemsForPattern(slug: string): ProblemSummary[] {
  const dir = problemsDir(slug);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: (data.title as string) ?? file.replace(/\.mdx$/, ""),
        difficulty: data.difficulty as ProblemSummary["difficulty"],
        variant: data.variant as string | undefined,
      };
    });
}

export async function getPatternOverview(slug: string) {
  const meta = getDsaPattern(slug);
  if (!meta) return undefined;

  const hasContent = patternHasContent(slug);
  const problems = listProblemsForPattern(slug);

  if (!hasContent) {
    return { meta, hasContent: false as const, problems, content: null, frontmatter: null, headings: [] };
  }

  const { content, frontmatter, headings } = await compileContentFile(
    patternOverviewPath(slug),
  );

  return { meta, hasContent: true as const, problems, content, frontmatter, headings };
}

export function problemFilePath(patternSlug: string, problemSlug: string): string {
  return path.join(problemsDir(patternSlug), `${problemSlug}.mdx`);
}

export async function getProblem(patternSlug: string, problemSlug: string) {
  const meta = getDsaPattern(patternSlug);
  if (!meta) return undefined;

  const filePath = problemFilePath(patternSlug, problemSlug);
  if (!contentFileExists(filePath)) return undefined;

  const { content, frontmatter, headings } = await compileContentFile<ProblemFrontmatter>(
    filePath,
  );
  return { meta, content, frontmatter, headings };
}
