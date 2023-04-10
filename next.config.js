const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const SHOP_APP_URL =
  process.env.NEXT_PUBLIC_SHOP_APP_URL || 'http://localhost:3002';

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    shop: `shop@${SHOP_APP_URL}/_next/static/${location}/remoteEntry.js`,
  };
}

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
        name: 'content',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer),
        // extraOptions: {
        //   automaticAsyncBoundary: true,
        // },
        exposes: {
          './Pricing': './pages/index.js',
          './List': './pages/list.js',
          './Hero': './pages/hero.js',
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
