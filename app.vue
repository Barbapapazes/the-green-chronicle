<script lang="ts" setup>
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
</script>

<template>
  <UHeader
    :links="links"
  >
    <template #logo>
      Barba Blog
    </template>

    <template #right>
      <FollowUs />
    </template>
  </UHeader>

  <UMain>
    <NuxtPage />
  </UMain>
</template>
