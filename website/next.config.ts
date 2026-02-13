import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/moretech",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
