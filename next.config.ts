import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true, // ✅ Allows SVG images (if needed)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // ✅ Allows all HTTPS image sources
      },
    ],
    loader: 'default', // ✅ Keeps the default Next.js loader
  },
  
};

export default nextConfig;


// next.config.ts
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'img.freepik.com',
//       },
//     ],
//   },
// };

// export default nextConfig;
