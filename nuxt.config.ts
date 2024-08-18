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
    '@nuxt/image',
    '@nuxthq/studio',
  ],

  runtimeConfig: {
    app: {
      url: '',
    },
  },

  css: [
    '~/assets/app.css',
  ],

  colorMode: {
    preference: 'light',
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/api/search.json'],
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  compatibilityDate: '2024-08-18',
})
