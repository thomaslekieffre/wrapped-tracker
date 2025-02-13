/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    // Désactive ESLint pendant le build
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 