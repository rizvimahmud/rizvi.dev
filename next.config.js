const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer()({
  swcMinify: true,
  reactStrictMode: true,
});

module.exports = nextConfig;
