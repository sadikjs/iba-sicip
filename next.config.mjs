/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/uploads/**",
        search: "",
      },
      {
        pathname: "/assets/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
