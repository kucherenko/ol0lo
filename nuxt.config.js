export default {
  // Nuxt.js modules
  modules: [
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
  },
  server: {
    port: 8080,
  }
}
