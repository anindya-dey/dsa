import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { CONTENT_ROOT } from "@/lib/mdx";
import { dsaPatterns, dsaPhaseTitles } from "@/lib/catalog/dsa";
import {
  systemDesignTopics,
  systemDesignTrackTitles,
} from "@/lib/catalog/system-design";
import { aiMlTopics, aiMlTrackTitles } from "@/lib/catalog/ai-ml";
import { cppEntries } from "@/lib/catalog/cpp";
import { listProblemsForPattern, patternHasContent } from "@/lib/content/dsa";
import { topicHasContent } from "@/lib/content/system-design";

export interface SearchEntry {
  url: string;
  title: string;
  summary: string;
  body: string;
  section: string;
}

const MAX_BODY_CHARS = 4000;

export function mdxToPlainText(raw: string): string {
  const { content } = matter(raw);
  // "Related ..." end sections are link lists to other pages; indexing them
  // makes every page match its neighbours' titles.
  const related = content.search(/^## Related /m);
  const prose = related === -1 ? content : content.slice(0, related);
  return prose
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`\n]*)`/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^[>\-*+]\s+/gm, " ")
    .replace(/^#{1,6}\s+/gm, " ")
    .replace(/\|/g, " ")
    .replace(/[*_]+/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function readBody(file: string): string {
  return mdxToPlainText(fs.readFileSync(file, "utf8")).slice(0, MAX_BODY_CHARS);
}

export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const pattern of dsaPatterns) {
    if (!patternHasContent(pattern.slug)) {
      continue;
    }
    const overview = path.join(
      CONTENT_ROOT,
      "dsa",
      "patterns",
      pattern.slug,
      "index.mdx",
    );
    entries.push({
      url: `/dsa/patterns/${pattern.slug}`,
      title: pattern.title,
      summary: pattern.summary,
      body: readBody(overview),
      section: `DSA · Phase ${pattern.phase} · ${dsaPhaseTitles[pattern.phase]}`,
    });

    for (const problem of listProblemsForPattern(pattern.slug)) {
      const file = path.join(
        CONTENT_ROOT,
        "dsa",
        "patterns",
        pattern.slug,
        "problems",
        `${problem.slug}.mdx`,
      );
      entries.push({
        url: `/dsa/patterns/${pattern.slug}/${problem.slug}`,
        title: problem.title,
        summary: `A ${problem.variant ? `${problem.variant} ` : ""}${pattern.title} problem`,
        body: readBody(file),
        section: `DSA · ${pattern.title}`,
      });
    }
  }

  for (const topic of systemDesignTopics) {
    if (!topicHasContent(topic.track, topic.slug)) {
      continue;
    }
    const file = path.join(
      CONTENT_ROOT,
      "system-design",
      topic.track,
      topic.slug,
      "index.mdx",
    );
    entries.push({
      url: `/system-design/${topic.track}/${topic.slug}`,
      title: topic.title,
      summary: topic.summary,
      body: readBody(file),
      section: `System Design · ${systemDesignTrackTitles[topic.track]}${topic.group ? ` · ${topic.group}` : ""}`,
    });
  }

  for (const topic of aiMlTopics) {
    const file = path.join(
      CONTENT_ROOT,
      "ai-ml",
      topic.track,
      topic.slug,
      "index.mdx",
    );
    if (!fs.existsSync(file)) {
      continue;
    }
    entries.push({
      url: `/ai-ml/${topic.track}/${topic.slug}`,
      title: topic.title,
      summary: topic.summary,
      body: readBody(file),
      section: `AI/ML · ${aiMlTrackTitles[topic.track]}${topic.group ? ` · ${topic.group}` : ""}`,
    });
  }

  for (const entry of cppEntries) {
    const file = path.join(CONTENT_ROOT, "cpp", `${entry.slug}.mdx`);
    if (!fs.existsSync(file)) {
      continue;
    }
    entries.push({
      url: `/cpp/${entry.slug}`,
      title: entry.title,
      summary: entry.summary,
      body: readBody(file),
      section: "C++ Toolkit",
    });
  }

  return entries;
}
