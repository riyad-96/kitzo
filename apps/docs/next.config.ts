import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ['kitzo'],
};

export default nextConfig;
