import type { NextConfig } from "next";
import { systemDesignTopics } from "./lib/catalog/system-design";
import { aiMlTopics } from "./lib/catalog/ai-ml";

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

    return [...flatSystemDesign, ...aiMlMoved];
  },
};

export default nextConfig;
