import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'dev.weart.hu' },
    ],
  },
};

export default nextConfig;
