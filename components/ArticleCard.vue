<script lang="ts" setup>
defineProps<{
  to: string
  title: string
  description: string
  date?: string
  image?: {
    src: string
    alt: string
  }
  authors?: {
    name: string
    avatar: string
    social: string
  }[]
}>()
</script>

<template>
  <UCard as="article" :ui="{ base: 'relative group' }">
    <template #header>
      <header>
        <div v-if="image" class="mb-2 overflow-hidden">
          <img :src="image.src" :alt="image.alt" class="w-full h-48 object-cover transform group-hover:scale-[101%] transition-transform ease-in duration-200">
        </div>

        <h3 class="text-lg font-semibold">
          <NuxtLink :to="to">
            <span class="absolute inset-0 z-10" />
            <span>
              {{ title }}
            </span>
          </NuxtLink>
        </h3>
      </header>
    </template>

    <p class="text-stone-500">
      {{ description }}
    </p>

    <template #footer>
      <footer>
        <dl v-if="date || authors" class="flex justify-between items-center text-sm">
          <template v-if="authors">
            <dt class="sr-only">
              Author
            </dt>
            <dd>
              <ArticleCardAuthors :authors="authors" />
            </dd>
          </template>
          <template v-if="date">
            <dt class="sr-only">
              Published at
            </dt>
            <dd>
              <ArticleCardDate :date="date" />
            </dd>
          </template>
        </dl>
      </footer>
    </template>
  </UCard>
</template>
