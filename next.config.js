const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/todolist' : '',
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true
  },
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
