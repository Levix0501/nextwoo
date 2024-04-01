/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1440, 1920, 2048, 2560, 3840],
    remotePatterns: [
      {
        hostname: process.env.IMAGE_HOSTNAME,
      },
    ],
  },
};

export default nextConfig;
