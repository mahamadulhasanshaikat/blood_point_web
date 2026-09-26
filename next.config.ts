import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Cloudflare Pages Static Export কনফিগারেশন
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;