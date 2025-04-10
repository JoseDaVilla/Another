/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure output to work better with Vercel
  output: 'standalone',
  // Explicitly allow images from external domains if needed
  images: {
    domains: ['mchisdshfjkifranztwi.supabase.co'],
  }
}

module.exports = nextConfig
