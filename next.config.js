/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()
const nextConfig = {
  assetPrefix: 'https://open-actions-directory-beta.vercel.app',
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: "/_vercel/insights/:match*",
        destination: "https://open-actions-directory-beta.vercel.app/_vercel/insights/:match*"
      },
      {
        // Rewrite image optimization API path to ensure the asset prefix is respected
        source: '/_next/image*',
        destination: 'https://open-actions-directory-beta.vercel.app/_next/image*'
      }
    ]
  },
}

module.exports = withMDX(nextConfig)