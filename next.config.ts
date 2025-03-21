import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/djqniifaa/image/upload/v1742591961/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
