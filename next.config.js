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
        // extraOptions: {
        //   automaticAsyncBoundary: true,
        // },
        exposes: {
          './Pricing': './pages/index.js',
          './List': './pages/list.js',
        },
        shared: {
          '@emotion/': {
            eager: true,
            requiredVersion: false,
            singleton: true,
          },
          '@chakra-ui/': {
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
