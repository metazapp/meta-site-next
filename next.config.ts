/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Use trailingSlash for better compatibility with static exports
  trailingSlash: true,
  // Disable image optimization for static exports
  images: { unoptimized: true },
  // Disable strict mode for development to reduce the number of re-renders
  reactStrictMode: false,
  // Enable experimental features for better static site generation
  experimental: {
    // This makes static site generation more reliable with dynamic routes
    workerThreads: false,
    cpus: 1
  },
  // Disable eslint during builds for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;