/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    // Désactive ESLint pendant le build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Désactive la vérification TypeScript pendant le build
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'mosaic.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'wrapped-images.spotifycdn.com',
      },
      {
        protocol: 'https',
        hostname: 'image-cdn-fa.spotifycdn.com',
      },
      {
        protocol: 'https',
        hostname: 'daily-mix.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'lineup-images.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'thisis-images.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'seeded-session-images.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'newjams-images.scdn.co',
      }
    ]
  }
}

module.exports = nextConfig 