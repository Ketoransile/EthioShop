import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        // port: "",
        // pathname: "/my-bucket/**",
        // search: "",
      },
    ],
  },
};

export default nextConfig;
