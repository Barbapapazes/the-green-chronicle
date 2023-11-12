<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch('/api/search.json', { default: () => [], server: false })

const links = [
  {
    label: 'Seasonal Guides',
    to: '/categories/seasonal-guides',
  },
  {
    label: 'Environmental Impacts',
    to: '/categories/environmental-impacts',
  },
  {
    label: 'Sustainable Practices',
    to: '/categories/sustainable-practices',
  },
  {
    label: 'Customer Stories',
    to: '/categories/customer-stories',
  },
  {
    label: 'Behind the Scenes',
    to: '/categories/behind-the-scenes',
  },
]

const footerLinks = [
  {
    label: 'Product',
    children: [
      {
        label: 'Features',
        to: '#',
      },
      {
        label: 'Pricing',
        to: '#',
      },
      {
        label: 'Integrations',
        to: '#',
      },
      {
        label: 'Security',
        to: '#',
      },
    ],
  },
  {
    label: 'Shop',
    children: [
      {
        label: 'Plants',
        to: '#',
      },
      {
        label: 'Pots',
        to: '#',
      },
      {
        label: 'Accessories',
        to: '#',
      },
      {
        label: 'Gifts',
        to: '#',
      },
    ],
  },
  {
    label: 'Company',
    children: [
      {
        label: 'About',
        to: '#',
      },
      {
        label: 'Blog',
        to: '#',
      },
      {
        label: 'Careers',
        to: '#',
      },
      {
        label: 'Press',
        to: '#',
      },
    ],
  },
]

const { toggleDocsSearch } = useUIState()
const { metaSymbol } = useShortcuts()
</script>

<template>
  <UHeader
    :links="links"
  >
    <template #logo>
      The Green Chronicle
    </template>

    <template #right>
      <UTooltip text="Search" :shortcuts="[metaSymbol, 'k']">
        <UButton icon="i-heroicons-magnifying-glass-solid" variant="ghost" color="gray" @click="toggleDocsSearch">
          <span class="sr-only">Search</span>
        </UButton>
      </UTooltip>
      <FollowUs />
    </template>
  </UHeader>

  <UMain>
    <NuxtPage />
  </UMain>

  <UFooter class="mt-24">
    <template #top>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-0">
        <span class="text-xl font-bold">
          The Green Chronicle
        </span>

        <ol class="xl:place-self-end grid grid-cols-2 md:grid-cols-3 gap-8 xl:gap-20">
          <li v-for="item in footerLinks" :key="item.label">
            <span class="font-semibold">
              {{ item.label }}
            </span>
            <ol class="mt-3 flex flex-col text-zinc-700">
              <li v-for="child in item.children" :key="child.label">
                <ULink :to="child.to" class="block py-1 hover:underline hover:underline-offset-2">
                  {{ child.label }}
                </ULink>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </template>
    <template #left>
      <div class="flex flex-col md:flex-row items-center gap-4">
        <span class="text-sm text-stone-500">
          © 2023 The Green Chronicle. All rights reserved.
        </span>
        <div class="flex gap-2 text-xs text-stone-500">
          <ULink to="#">
            Privacy Policy
          </ULink>
          <ULink to="#">
            Terms of Service
          </ULink>
        </div>
      </div>
    </template>
    <template #right>
      <FollowUs />
    </template>
  </UFooter>

  <ClientOnly>
    <LazyUDocsSearch :files="files" :links="links" :navigation="navigation" />
  </ClientOnly>
</template>
