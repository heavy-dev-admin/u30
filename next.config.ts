import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }, { hostname: 'picsum.photos' }],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
  async redirects() {
    return [
      {
        source: '/studio',
        destination: '/studio/production',
        permanent: false,
      },
      {
        source: '/studio/structure',
        destination: '/studio/production',
        permanent: false,
      },
    ]
  },
}

export default config
