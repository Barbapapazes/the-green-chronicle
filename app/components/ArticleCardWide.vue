<script lang="ts" setup>
defineProps<{
  to: string
  title: string
  description: string
  image?: {
    src: string
    alt: string
  }
}>()
</script>

<template>
  <UCard
    :ui="{ base: 'relative group', body: { padding: '' } }"
  >
    <template #header>
      <header class="grid grid-cols-5 gap-5 items-center">
        <div
          v-if="image"
          class="overflow-hidden rounded-md col-span-2"
        >
          <NuxtImg
            :src="image.src"
            :alt="image.alt"
            class="aspect-[16/9] object-cover transform group-hover:scale-[101%] transition-transform ease-in duration-200"
          />
        </div>

        <div class="col-span-3">
          <h3 class="text-lg font-semibold">
            <NuxtLink :to="to">
              <span class="absolute inset-0 z-10" />
              <span>
                {{ title }}
              </span>
            </NuxtLink>
          </h3>

          <p class="mt-1 text-stone-500 text-sm">
            {{ description }}
          </p>
        </div>
      </header>
    </template>
  </UCard>
</template>
