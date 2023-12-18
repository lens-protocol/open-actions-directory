/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()
const nextConfig = {
  assetPrefix: 'https://open-actions-directory.vercel.app',
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
module.exports = withMDX(nextConfig)