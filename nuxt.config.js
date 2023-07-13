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
    }
  }
}