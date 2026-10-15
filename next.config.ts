import type { NextConfig } from "next";
import { systemDesignTopics } from "./lib/catalog/system-design";
import { aiMlTopics } from "./lib/catalog/ai-ml";

// Pages that moved or were merged during content reviews. Old URLs keep
// working for anyone who bookmarked or linked them.
const movedPages = [
  {
    source: "/dsa/patterns/matrix-and-grid-algorithms/number-of-islands",
    destination: "/dsa/patterns/graph-traversals/number-of-islands",
  },
  {
    source: "/dsa/patterns/sorting-and-selection/kth-largest-element-in-a-stream",
    destination: "/dsa/patterns/heaps-and-priority-queues/kth-largest-element-in-a-stream",
  },
  {
    source: "/dsa/patterns/string-algorithms/longest-repeating-character-replacement",
    destination: "/dsa/patterns/sliding-window/longest-repeating-character-replacement",
  },
  {
    source: "/dsa/patterns/number-theory-and-combinatorics/pow-x-n",
    destination: "/dsa/patterns/recursion-and-math/pow-x-n-recursive",
  },
  {
    source: "/ai-ml/systems/offline-vs-online-inference",
    destination: "/ai-ml/systems/batch-vs-real-time-prediction",
  },
  {
    source: "/system-design/ai-ml/offline-vs-online-inference",
    destination: "/ai-ml/systems/batch-vs-real-time-prediction",
  },
].map((page) => ({ ...page, permanent: true }));

const nextConfig: NextConfig = {
  async redirects() {
    const flatSystemDesign = systemDesignTopics.map((topic) => ({
      source: `/system-design/${topic.slug}`,
      destination: `/system-design/${topic.track}/${topic.slug}`,
      permanent: true,
    }));

    // AI/ML moved out of System Design into its own vertical; the old
    // /system-design/ai-ml/<slug> URLs now live at /ai-ml/systems/<slug>.
    const aiMlMoved = aiMlTopics
      .filter((topic) => topic.track === "systems")
      .map((topic) => ({
        source: `/system-design/ai-ml/${topic.slug}`,
        destination: `/ai-ml/systems/${topic.slug}`,
        permanent: true,
      }));

    // Problem pages live at /dsa/patterns/<pattern>/<problem>; older links
    // used a /problems/ segment that never matched a route.
    const problemSegment = {
      source: "/dsa/patterns/:pattern/problems/:problem",
      destination: "/dsa/patterns/:pattern/:problem",
      permanent: true,
    };

    return [...flatSystemDesign, ...aiMlMoved, problemSegment, ...movedPages];
  },
};

export default nextConfig;
