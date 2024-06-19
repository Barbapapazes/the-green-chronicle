<script setup lang="ts">
// copied from ttps://github.com/nuxt/content/blob/main/src/runtime/pages/document-driven.vue
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { useRuntimeConfig } from '#app'
import type { LayoutKey } from '#build/types/layouts'
import { useContent, useContentHead, useRequestEvent } from '#imports'

definePageMeta({
  colorMode: 'light',
})

const { contentHead } = useRuntimeConfig().public.content
const { page, layout } = useContent()

// Page not found, set correct status code on SSR
if (!(page as ParsedContent).value && import.meta.server) {
  const event = useRequestEvent()
  event.node.res.statusCode = 404
}

if (contentHead)
  useContentHead(page)
</script>

<template>
  <div class="document-driven-page">
    <NuxtLayout :name="layout as LayoutKey || 'default'">
      <ContentRenderer
        v-if="page"
        :key="(page as ParsedContent)._id"
        :value="page"
      >
        <template #empty="{ value }">
          <DocumentDrivenEmpty :value="value" />
        </template>
      </ContentRenderer>
      <DocumentDrivenNotFound v-else />
    </NuxtLayout>
  </div>
</template>
