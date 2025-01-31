import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mov)$/,
      type: "asset/resource", // Ensures the file is copied to the build output
    });
    return config;
  },
};

export default nextConfig;
