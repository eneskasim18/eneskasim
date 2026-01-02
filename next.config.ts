import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages repository name needs to be set as basePath for production
  basePath: process.env.NODE_ENV === 'production' ? '/eneskasim' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
