export default {
  // Nuxt Configuration Options
  target: 'static',
  ssr: false,
  head: {
    title: 'ol0lo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  plugins: [
    '~/plugins/firebase.ts',
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/firebase',
  ],
  firebase: {
    config: {
      // Firebase project configuration object
    },
    services: {
      functions: true,
    },
  },
  build: {},
}