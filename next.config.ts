import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "dlyf.github.io",
        pathname: "/portfolio2022/img/**",
      },
    ],
  },
};

export default nextConfig;
