import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["framer-motion"],
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
      ],
    };
  },
  async redirects() {
    return ["work", "thinking", "about", "workshop", "diagnostic"].map(
      (section) => ({
        source: `/${section}/:path*`,
        destination: `/new/${section}/:path*`,
        permanent: false,
      }),
    );
  },
};

export default nextConfig;
