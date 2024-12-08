export default defineNuxtConfig({

  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxthq/studio',
  ],

  css: [
    '~/assets/app.css',
  ],

  colorMode: {
    preference: 'light',
  },

  runtimeConfig: {
    app: {
      url: '',
    },
  },
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-08-18',

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
})
