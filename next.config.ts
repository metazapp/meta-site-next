/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Use trailingSlash for better compatibility with static exports
  trailingSlash: true,
  // Disable image optimization for static exports
  images: { unoptimized: true }, 
  // Disable strict mode for development to reduce the number of re-renders
  reactStrictMode: false,
  // Skip middleware URL normalization (moved from experimental)
  skipMiddlewareUrlNormalize: true,
  // Enable experimental features for better static site generation
  experimental: {
    // This makes static site generation more reliable with dynamic routes
    workerThreads: false,
    cpus: 1,
    // Add the following to ignore TypeScript errors during build
    typedRoutes: false
  },
  // Disable eslint during builds for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig;