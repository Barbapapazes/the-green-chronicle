<script lang="ts" setup>
const { data: articles } = await useAsyncData('content:home:customer-stories', () => queryContent('/articles/').where({ categories: { $contains: 'customer-stories' } }).only(['_path', 'title', 'categories', 'description', 'publishedAt', 'image', 'authors']).sort({ publishedAt: -1 }).limit(3).find())
</script>

<template>
  <ULandingSection
    title="They trust us"
    description="We are proud to have worked with some of the best companies in the world."
    :links="[{ label: 'Our Customer Stories', color: 'gray', trailingIcon: 'i-heroicons-arrow-right', size: 'lg', to: '/categories/customer-stories' }]"
    align="left"
  >
    <div class="flex flex-col gap-4">
      <ArticleCardWide
        v-for="article in articles"
        :key="article._path"
        :to="article._path!"
        :title="article.title!"
        :description="article.description"
        :image="article.image"
      />
    </div>
  </ULandingSection>
</template>
