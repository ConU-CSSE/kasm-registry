/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Conu-CSSE Dep',
    description: 'Concordia image registry for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/ConU-CSSE/kasm-registry/',
    contactUrl: 'https://github.com/ConU-CSSE/kasm-registry/issue',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
