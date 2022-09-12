// next.config.js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
  reactStrictMode: true,
  swcMinify: true,
  //trailingSlash: true,
})
module.exports = withNextra()
