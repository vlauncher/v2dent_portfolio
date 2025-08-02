import type { NextConfig } from 'next';
import type { Configuration, RuleSetRule } from 'webpack';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  // Add base path if needed
  // basePath: isDev ? '' : '/your-repo-name',
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: isDev ? '' : '',
  },
  // Webpack configuration
  webpack: (config: Configuration) => {
    // Handle static files
    const rules = (config.module?.rules || []) as RuleSetRule[];
    
    config.module = config.module || { rules: [] };
    config.module.rules = rules;
    
    rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });
    return config;
  },
  // Output directory for the static export
  distDir: 'out',
};

export default nextConfig;
