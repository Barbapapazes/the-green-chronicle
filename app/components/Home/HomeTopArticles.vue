<script lang="ts" setup>
const { data: articles } = await useAsyncData('content:home:top-articles', () => queryContent('/articles/').where({
  top: true,
}).only(['_path', 'title', 'categories', 'description', 'publishedAt', 'image', 'authors']).sort({ publishedAt: -1 }).limit(4).find())

const firstArticle = computed(() => articles.value?.[0])
const remainingArticles = computed(() => articles.value?.slice(1))
</script>

<template>
  <ULandingSection>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <UCard
        v-if="firstArticle"
        :ui="{ base: 'relative group', body: { base: 'space-y-4', padding: '' } }"
      >
        <header>
          <div
            class="overflow-hidden rounded-lg"
          >
            <NuxtImg
              :src="firstArticle.image.src"
              :alt="firstArticle.image.alt"
              class="w-full h-80 lg:h-52 object-cover transform group-hover:scale-[101%] transition-transform ease-in duration-200"
            />
          </div>

          <h3 class="mt-6 text-4xl font-bold">
            <NuxtLink :to="firstArticle._path">
              <span class="absolute inset-0 z-10" />
              <span>
                {{ firstArticle.title }}
              </span>
            </NuxtLink>
          </h3>
        </header>

        <p class="text-stone-500">
          {{ firstArticle.description }}
        </p>

        <footer>
          <dl
            v-if="firstArticle.publishedAt || firstArticle.authors"
            class="flex justify-between items-center text-sm"
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
        </footer>
      </UCard>
      <div class="flex flex-col gap-8">
        <ArticleCardWide
          v-for="article in remainingArticles"
          :key="article._path"
          :to="article._path!"
          :title="article.title!"
          :description="article.description"
          :image="article.image"
        />
      </div>
    </div>
  </ULandingSection>
</template>
