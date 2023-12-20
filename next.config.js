/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()
const nextConfig = {
  assetPrefix: 'https://open-actions-directory.vercel.app',
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: "/_vercel/insights/:match*",
        destination: "https://open-actions-directory.vercel.app/_vercel/insights/:match*"
      }
    ]
  },
}
 
module.exports = withMDX(nextConfig)