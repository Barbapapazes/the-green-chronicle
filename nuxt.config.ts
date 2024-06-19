export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
  ],
  css: [
    '~/assets/app.css',
  ],
  content: {
    documentDriven: true,
  },
  colorMode: {
    preference: 'light',
  },
  ui: {
    icons: ['heroicons', 'simple-icons'],
  },
  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ['/', '/api/search.json'],
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
