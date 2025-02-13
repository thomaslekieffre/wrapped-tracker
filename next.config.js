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
}

module.exports = nextConfig 