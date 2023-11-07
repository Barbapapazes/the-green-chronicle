export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
  ],
  content: {
    documentDriven: true,
  },
  colorMode: {
    preference: 'light'
  },
  ui: {
    icons: ['heroicons', 'simple-icons'],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})
