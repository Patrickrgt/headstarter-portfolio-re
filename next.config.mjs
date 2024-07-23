/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/.well-known/discord',
        destination: '/api/well-known/discord',
      },
    ];
  },
  
};

export default nextConfig;
