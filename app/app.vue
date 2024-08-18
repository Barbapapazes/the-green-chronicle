<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content'

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', { default: () => [] as ParsedContent[], server: false })

const appConfig = useAppConfig()

useHead({
  titleTemplate: title => title ? `${title} - ${appConfig.app.name}` : appConfig.app.name,
})
</script>

<template>
  <AppHeader />

  <UMain>
    <NuxtPage />
  </UMain>

  <AppFooter />

  <ClientOnly>
    <LazyUContentSearch
      :files
      :links="appConfig.header.links"
      :navigation
    />
  </ClientOnly>
</template>
