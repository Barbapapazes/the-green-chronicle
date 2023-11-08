export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/fontaine',
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
})
