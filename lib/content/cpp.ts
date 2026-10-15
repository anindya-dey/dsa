import fs from "node:fs";
import path from "node:path";
import { CONTENT_ROOT, compileContentFile } from "@/lib/mdx";
import { getCppEntry } from "@/lib/catalog/cpp";

const CPP_ROOT = path.join(CONTENT_ROOT, "cpp");

export function cppEntryPath(slug: string): string {
  return path.join(CPP_ROOT, `${slug}.mdx`);
}

export function cppEntryHasContent(slug: string): boolean {
  return fs.existsSync(cppEntryPath(slug));
}

export async function getCppEntryContent(slug: string) {
  const meta = getCppEntry(slug);
  if (!meta) return undefined;

  const filePath = cppEntryPath(slug);
  if (!fs.existsSync(filePath)) return undefined;

  const { content, frontmatter, headings } = await compileContentFile(filePath);
  return { meta, content, frontmatter, headings };
}
