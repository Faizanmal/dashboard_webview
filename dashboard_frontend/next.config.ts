import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack: (config, { dev }) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, './src'),
    };

    // Optional: Development-only plugin
    if (dev) {
      // Example placeholder: add custom plugin here
      // config.plugins?.push(new MyWebpackPluginForTagging());
    }

    return config;
  },
};

export default nextConfig;
