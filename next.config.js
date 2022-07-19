/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },

  experimental: {
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
