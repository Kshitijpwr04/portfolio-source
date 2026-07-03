import bundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

// Set by CI (see .github/workflows/github-pages.yml) to the project-pages
// subpath (e.g. "/portfolio-source") since this repo isn't <user>.github.io.
// Empty locally, so `npm run dev`/`npm run build` still work at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',

  ...(basePath ? { basePath, assetPrefix: basePath } : {}),

  // Allow dev server access from local network (mobile testing, etc.)
  allowedDevOrigins: ['http://192.168.*.*:3000'],

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  // Turbopack configuration (used in development)
  turbopack: {
    resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  // Experimental features
  experimental: {
    optimizePackageImports: [
      '@fortawesome/react-fontawesome',
      '@fortawesome/fontawesome-svg-core',
    ],
  },
};

// Bundle analyzer for production build analysis
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
