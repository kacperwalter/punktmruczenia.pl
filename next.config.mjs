/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    loadPaths: [process.cwd()],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  }
};

export default nextConfig;
