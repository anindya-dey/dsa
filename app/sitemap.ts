import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { dsaPatterns } from "@/lib/catalog/dsa";
import { systemDesignTopics } from "@/lib/catalog/system-design";
import { cppEntries } from "@/lib/catalog/cpp";
import {
  listProblemsForPattern,
  patternHasContent,
  patternOverviewMtime,
  problemMtime,
} from "@/lib/content/dsa";
import { topicHasContent, topicMtime } from "@/lib/content/system-design";

interface SitemapEntry {
  url: string;
  lastModified?: Date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: SitemapEntry[] = [
    "",
    "/dsa",
    "/dsa/cheat-sheet",
    "/system-design",
    "/cpp",
  ].map((route) => ({ url: `${siteUrl}${route}` }));

  const patternRoutes: SitemapEntry[] = dsaPatterns
    .filter((pattern) => patternHasContent(pattern.slug))
    .map((pattern) => ({
      url: `${siteUrl}/dsa/patterns/${pattern.slug}`,
      lastModified: patternOverviewMtime(pattern.slug),
    }));

  const problemRoutes: SitemapEntry[] = dsaPatterns.flatMap((pattern) =>
    listProblemsForPattern(pattern.slug).map((problem) => ({
      url: `${siteUrl}/dsa/patterns/${pattern.slug}/${problem.slug}`,
      lastModified: problemMtime(pattern.slug, problem.slug),
    })),
  );

  const topicRoutes: SitemapEntry[] = systemDesignTopics
    .filter((topic) => topicHasContent(topic.track, topic.slug))
    .map((topic) => ({
      url: `${siteUrl}/system-design/${topic.track}/${topic.slug}`,
      lastModified: topicMtime(topic.track, topic.slug),
    }));

  const cppRoutes: SitemapEntry[] = cppEntries.map((entry) => ({
    url: `${siteUrl}/cpp/${entry.slug}`,
  }));

  return [
    ...staticRoutes,
    ...patternRoutes,
    ...problemRoutes,
    ...topicRoutes,
    ...cppRoutes,
  ];
}
