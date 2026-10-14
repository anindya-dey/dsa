import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { dsaPatterns } from "@/lib/catalog/dsa";
import { systemDesignTopics } from "@/lib/catalog/system-design";
import { listProblemsForPattern } from "@/lib/content/dsa";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/dsa", "/dsa/cheat-sheet", "/system-design"];

  const patternRoutes = dsaPatterns.map(
    (pattern) => `/dsa/patterns/${pattern.slug}`,
  );

  const problemRoutes = dsaPatterns.flatMap((pattern) =>
    listProblemsForPattern(pattern.slug).map(
      (problem) => `/dsa/patterns/${pattern.slug}/${problem.slug}`,
    ),
  );

  const topicRoutes = systemDesignTopics.map(
    (topic) => `/system-design/${topic.track}/${topic.slug}`,
  );

  const allRoutes = [
    ...staticRoutes,
    ...patternRoutes,
    ...problemRoutes,
    ...topicRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
