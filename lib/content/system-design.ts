import path from "node:path";
import fs from "node:fs";
import { CONTENT_ROOT, compileContentFile, contentFileExists } from "@/lib/mdx";
import { getSystemDesignTopic } from "@/lib/catalog/system-design";
import type { SystemDesignTrack } from "@/lib/catalog/types";

const SYSTEM_DESIGN_ROOT = path.join(CONTENT_ROOT, "system-design");

function topicPath(track: SystemDesignTrack, slug: string): string {
  return path.join(SYSTEM_DESIGN_ROOT, track, slug, "index.mdx");
}

export function topicHasContent(track: SystemDesignTrack, slug: string): boolean {
  return contentFileExists(topicPath(track, slug));
}

export function topicMtime(
  track: SystemDesignTrack,
  slug: string,
): Date | undefined {
  const filePath = topicPath(track, slug);
  return contentFileExists(filePath) ? fs.statSync(filePath).mtime : undefined;
}

export async function getTopic(track: SystemDesignTrack, slug: string) {
  const meta = getSystemDesignTopic(track, slug);
  if (!meta) return undefined;

  const hasContent = topicHasContent(track, slug);
  if (!hasContent) {
    return { meta, hasContent: false as const, content: null, frontmatter: null, headings: [] };
  }

  const { content, frontmatter, headings } = await compileContentFile(
    topicPath(track, slug),
  );

  return { meta, hasContent: true as const, content, frontmatter, headings };
}
