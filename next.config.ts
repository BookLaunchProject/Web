import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  /* Old route names, kept alive so shared links don't 404 */
  async redirects() {
    return [
      { source: "/workWithAuthor", destination: "/work", permanent: true },
      { source: "/watch&listen", destination: "/watch", permanent: true },
    ];
  },
};

export default nextConfig;
