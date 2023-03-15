const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'pricing',
        filename: 'static/chunks/remoteEntry.js',
        extraOptions: {
          automaticAsyncBoundary: true,
        },
        exposes: {
          './PricingPage': './pages/index.js',
        },
        shared: {
          '@emotion/react': {
            eager: true,
            requiredVersion: false,
            singleton: true,
          },
          '@emotion/styled': {
            eager: true,
            requiredVersion: false,
            singleton: true,
          },
        },
      })
    );

    return config;
  },
}

module.exports = nextConfig
