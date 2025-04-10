/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // This allows API routes to work correctly
  experimental: {
    appDir: true,
  },
  // Configure output to work better with Vercel
  output: 'standalone',
}

module.exports = nextConfig
