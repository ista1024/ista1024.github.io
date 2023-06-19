// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '/',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
