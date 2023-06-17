// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '/sta1024.github.io',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
