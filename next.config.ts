
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Your GitHub repository is named Web
  basePath: "/Web",

  // Required for static image optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "i.vimeocdn.com",
        pathname: "/video/**",
      },
    ],
  },
};

export default nextConfig;
