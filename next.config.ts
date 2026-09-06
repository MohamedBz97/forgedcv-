import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output is required for local `node .next/standalone/server.js`,
  // but it breaks Vercel's build finalization (missing next-server.js.nft.json),
  // so disable it when building on Vercel (VERCEL env is set during their build).
  ...(process.env.VERCEL
    ? {}
    : {
        output: "standalone" as const,
      }),
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
