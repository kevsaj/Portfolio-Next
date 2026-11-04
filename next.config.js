/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.shields.io', pathname: '/**' },
      { protocol: 'https', hostname: 'github.com', pathname: '/**' },
    ],
  },
}

module.exports = nextConfig
