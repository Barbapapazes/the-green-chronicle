<script lang="ts" setup>
const appConfig = useAppConfig()

useSeoMeta({
  title: appConfig.app.name,
  description: appConfig.app.description,
  ogTitle: appConfig.app.name,
  ogDescription: appConfig.app.description,
})
</script>

<template>
  <div>
    <HomeTopArticles />

    <HomeLatestNews />

    <HomeCustomerStories />

    <HomeBehindTheScene />
  </div>
</template>
