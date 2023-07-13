export default {
  // Nuxt.js modules
  modules: [
    '@nuxt/types',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
  ],
  // Tailwind CSS configuration
  tailwindcss: {
    jit: true,
  },
  // ESLint configuration
  eslint: {
    cache: false,
  },
  // Build configuration
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    },
    extend(config, ctx) {
      // Enable file compression
      config.performance = {
        assetFilter: (assetFilename) => !/\.(map|hot-update\.json)$/.test(assetFilename),
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      }

      // Set caching headers for static resources
      if (ctx.isDev && process.client) {
        config.devServer.headers = {
          'Cache-Control': 'no-store',
          Pragma: 'no-cache'
        }
      }
    }
  }
}