/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://www.opinet.co.kr/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
