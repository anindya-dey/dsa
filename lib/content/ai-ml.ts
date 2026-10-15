import path from "node:path";
import fs from "node:fs";
import { CONTENT_ROOT, compileContentFile, contentFileExists } from "@/lib/mdx";
import { getAiMlTopic } from "@/lib/catalog/ai-ml";
import type { AiMlTrack } from "@/lib/catalog/types";

const AI_ML_ROOT = path.join(CONTENT_ROOT, "ai-ml");

function topicPath(track: AiMlTrack, slug: string): string {
  return path.join(AI_ML_ROOT, track, slug, "index.mdx");
}

export function topicHasContent(track: AiMlTrack, slug: string): boolean {
  return contentFileExists(topicPath(track, slug));
}

export function topicMtime(
  track: AiMlTrack,
  slug: string,
): Date | undefined {
  const filePath = topicPath(track, slug);
  return contentFileExists(filePath) ? fs.statSync(filePath).mtime : undefined;
}

export async function getTopic(track: AiMlTrack, slug: string) {
  const meta = getAiMlTopic(track, slug);
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
