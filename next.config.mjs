/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/uploads/**",
      },
      {
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
