import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  // Reduce memory usage during build
  experimental: {
    // Use Webpack's persistent caching to reduce rebuild memory
    webpackMemoryOptimizations: true,
  },

  // Disable source maps in production to save memory during build
  productionBrowserSourceMaps: false,

  // Use SWC minifier (default in Next 15) but with reduced concurrency
  ...(process.env.NODE_ENV === "production" && {
    swcMinify: true,
  }),
};

export default nextConfig;
