import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['172.20.10.3', '172.20.10.4', 'localhost', '127.0.0.1'],
  // ... any other config
};

export default nextConfig;