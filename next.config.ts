import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-expect-error - turbopack options are not yet in the type definition
    turbopack: {
       root: __dirname,
    }
  }
};

export default nextConfig;
