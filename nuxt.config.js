export default {
  modules: [
    '@nuxt/types',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
  ],
  tailwindcss: {
    jit: true,
  },
  eslint: {
    cache: false,
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    }
  }
}