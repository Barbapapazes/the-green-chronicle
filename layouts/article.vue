<script lang="ts" setup>
const { page } = useContent()

const { data: relatedArticles } = await useAsyncData(`content:related-articles:${page.title}`, () => queryContent('/articles').where({ categories: { $in: page.categories }, _extension: 'md' }).only(['_path', 'title', 'categories', 'description', 'publishedAt']).sort({ publishedAt: -1 }).limit(3).find())
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader
        :title="page.title"
      >
        <template #headline>
          <dl>
            <dt class="sr-only">
              Categories
            </dt>
            <dd>
              <template v-for="(category, index) in page.categories" :key="category">
                <ULink
                  :to="`/categories/${category}`"
                >
                  {{ formatCategory(category) }}
                </ULink>

                <span v-if="index < page.categories.length - 1">
                  -
                </span>
              </template>
            </dd>
          </dl>
        </template>

        <!-- Add the image and then the author at the left and the date at the right -->
      </UPageHeader>

      <UPageBody prose>
        <slot />
      </UPageBody>

      <section v-if="relatedArticles">
        <h2 class="text-lg font-semibold">
          Related Articles
        </h2>

        <UPageGrid class="mt-6">
        <UCard v-for="article in relatedArticles" :key="article._path" as="article" :ui="{ base: 'relative' }">
          <template #header>
            <header>
              <h3>
                <NuxtLink :to="article._path">
                  <span class="absolute inset-0" />
                  <span>
                    {{ article.title }}
                  </span>
                </NuxtLink>
              </h3>
            </header>
          </template>

          <p>
            {{ article.description }}
          </p>

          <template #footer>
            <footer>
              <dl>
                <dt class="sr-only">
                  Published at
                </dt>
                <dd>
                  {{ formatDate(article.publishedAt) }}
                </dd>
              </dl>
            </footer>
          </template>
        </UCard>
        </UPageGrid>
      </section>
    </UPage>
  </UContainer>
</template>
