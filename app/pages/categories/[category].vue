<script lang="ts" setup>
import { computed } from 'vue'

const category = useRoute().params.category as string

const { data } = await useAsyncData(`content:category:${category}`, () => queryContent('/articles').where({ categories: { $contains: category } }).only(['_path', 'title', 'categories', 'description', 'publishedAt', 'image', 'authors']).find())

if (!data.value) {
  throw createError({
    statusCode: 404,
    message: 'Category not found',
  })
}

const formattedCategory = formatCategory(category)
const description = `All articles related to ${formattedCategory}`
useSeoMeta({
  title: formattedCategory,
  description,
  ogTitle: formattedCategory,
  ogDescription: description,
})

const firstArticle = computed(() => data.value?.[0])
const remainingArticles = computed(() => data.value?.slice(1))
</script>

<template>
  <UContainer>
    <UPage v-if="data">
      <UPageHeader
        headline="Category"
        :title="formattedCategory"
      />

      <UPageBody
        v-if="firstArticle"
      >
        <div class="group relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center xl:items-start">
          <div class="md:col-start-1 md:row-start-1 flex flex-col">
            <h3 class="text-xl font-semibold">
              <NuxtLink :to="firstArticle._path">
                <span class="absolute inset-0 z-10" />
                <span>
                  {{ firstArticle.title }}
                </span>
              </NuxtLink>
            </h3>

            <p class="mt-4 text-stone-500">
              {{ firstArticle.description }}
            </p>

            <dl
              v-if="firstArticle.publishedAt || firstArticle.authors"
              class="mt-6 flex justify-between items-center text-sm"
            >
              <template v-if="firstArticle.authors">
                <dt class="sr-only">
                  Author
                </dt>
                <dd>
                  <ArticleCardAuthors :authors="firstArticle.authors" />
                </dd>
              </template>
              <template v-if="firstArticle.publishedAt">
                <dt class="sr-only">
                  Published at
                </dt>
                <dd>
                  <ArticleCardDate :date="firstArticle.publishedAt" />
                </dd>
              </template>
            </dl>
          </div>

          <div class="overflow-hidden rounded-md row-start-1 md:col-start-2 xl:col-span-2">
            <!-- Do not use NuxtImg to avoid breaking images. -->
            <img
              v-if="firstArticle.image"
              :src="firstArticle.image.src"
              :alt="firstArticle.image.alt"
              class="aspect-[16/9] object-cover transition-transform transform ease-in duration-300 group-hover:scale-[102%]"
              aria-hidden="true"
            >
          </div>
        </div>

        <UPageGrid class="mt-8">
          <ArticleCard
            v-for="article in remainingArticles"
            :key="article._path"
            :to="article._path!"
            :title="article.title!"
            :description="article.description"
            :date="article.publishedAt"
            :image="article.image"
            :authors="article.authors"
          />
        </UPageGrid>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
