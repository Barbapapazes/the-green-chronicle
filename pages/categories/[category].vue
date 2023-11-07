<script lang="ts" setup>
const route = useRoute()

const category = route.params.category as string

const { data } = await useAsyncData(`content:category:${category}`, () => queryContent('/articles').where({ categories: { $contains: category } }).only(['_path', 'title', 'categories', 'description', 'publishedAt']).find())

if (!data.value) {
  throw createError({
    statusCode: 404,
    message: 'Category not found',
  })
}
</script>

<template>
  <UContainer>
    <UPage v-if="data">
      <UPageHeader
        headline="Category"
        :title="formatCategory(category)"
        :subtitle="`${data.length} articles`"
      />

      <UPageBody>
        <div v-for="article in data" :key="article._id">
          <ULink :to="article._path">
            <h2>{{ article.title }}</h2>
          </ULink>
        </div>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
