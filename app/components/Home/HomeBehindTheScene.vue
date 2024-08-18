<script lang="ts" setup>
const { data: behindTheScenes } = await useAsyncData('content:home:behind-the-scenes', () => queryContent('/articles/').where({ categories: { $contains: 'behind-the-scenes' } }).only(['_path', 'title', 'categories', 'description', 'publishedAt', 'image', 'authors']).sort({ publishedAt: -1 }).limit(3).find())
</script>

<template>
  <ULandingSection
    title="Never seen before"
    description="Discover how we build our products and the technologies we use."
    :links="[{ label: 'Behind the Scenes', color: 'gray', trailingIcon: 'i-heroicons-arrow-right', size: 'lg', to: '/categories/behind-the-scenes' }]"
    align="left"
  >
    <ArticleCard
      v-for="article in behindTheScenes"
      :key="article._path"
      :to="article._path!"
      :title="article.title!"
      :description="article.description"
      :date="article.publishedAt"
      :image="article.image"
      :authors="article.authors"
      class="place-self-start"
    />
  </ULandingSection>
</template>
