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
  /* Video thumbnails for the home page "Latest conversations" (YouTube + Vimeo) */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**", search: "" },
      { protocol: "https", hostname: "i.vimeocdn.com", pathname: "/video/**", search: "" },
    ],
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
