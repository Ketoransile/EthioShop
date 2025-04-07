// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   // experimental: {
//   //   nodeMiddleware: true,
//   // },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "m.media-amazon.com",
//         // port: "",
//         // pathname: "/my-bucket/**",
//         // search: "",
//       },
//     ],
//   },
// };
// module.exports = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };
// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
  // add more config options here if needed
};

export default nextConfig;
