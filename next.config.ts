import type { NextConfig } from "next";
import { systemDesignTopics } from "./lib/catalog/system-design";

const nextConfig: NextConfig = {
  async redirects() {
    return systemDesignTopics.map((topic) => ({
      source: `/system-design/${topic.slug}`,
      destination: `/system-design/${topic.track}/${topic.slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
