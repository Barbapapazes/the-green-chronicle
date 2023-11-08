<script lang="ts" setup>
const { data: topArticles } = await useAsyncData('content:home:top-articles', () => queryContent('/articles/').where({
  top: true,
}).only(['_path', 'title', 'categories', 'description', 'publishedAt', 'image', 'authors']).sort({ publishedAt: -1 }).limit(4).find())
const { data: latestArticles } = await useAsyncData('content:home:latest-articles', () => queryContent('/articles/').where({
  top: { $ne: true },
  _partial: false,
}).sort({ publishedAt: -1 }).only(['_path', 'title', 'categories', 'description', 'publishedAt', 'image', 'authors']).limit(4).find())
const { data: customerStories } = await useAsyncData('content:home:customer-stories', () => queryContent('/articles/').where({ categories: { $contains: 'customer-stories' } }).only(['_path', 'title', 'categories', 'description', 'publishedAt', 'image', 'authors']).sort({ publishedAt: -1 }).limit(3).find())
const { data: behindTheScenes } = await useAsyncData('content:home:behind-the-scenes', () => queryContent('/articles/').where({ categories: { $contains: 'behind-the-scenes' } }).only(['_path', 'title', 'categories', 'description', 'publishedAt', 'image', 'authors']).sort({ publishedAt: -1 }).limit(3).find())

const firstTopArticle = computed(() => topArticles.value[0])
const otherTopArticles = computed(() => topArticles.value.slice(1))
</script>

<template>
  <ULandingSection>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <UCard :ui="{ base: 'relative group', body: { base: 'space-y-6', padding: '' } }">
        <header>
          <div v-if="firstTopArticle.image" class="mb-2 overflow-hidden">
            <img :src="firstTopArticle.image.src" :alt="firstTopArticle.image.alt" class="w-full h-80 lg:h-48 object-cover transform group-hover:scale-[101%] transition-transform ease-in duration-200">
          </div>

          <h3 class="text-4xl font-bold">
            <NuxtLink :to="firstTopArticle._path">
              <span class="absolute inset-0 z-10" />
              <span>
                {{ firstTopArticle.title }}
              </span>
            </NuxtLink>
          </h3>
        </header>

        <p class="text-stone-500">
          {{ firstTopArticle.description }}
        </p>

        <footer>
          <dl v-if="firstTopArticle.date || firstTopArticle.authors" class="flex justify-between items-center text-sm">
            <template v-if="firstTopArticle.authors">
              <dt class="sr-only">
                Author
              </dt>
              <dd>
                <ArticleCardAuthors :authors="firstTopArticle.authors" />
              </dd>
            </template>
            <template v-if="firstTopArticle.publishedAt">
              <dt class="sr-only">
                Published at
              </dt>
              <dd>
                <ArticleCardDate :date="firstTopArticle.publishedAt" />
              </dd>
            </template>
          </dl>
        </footer>
      </UCard>
      <div class="flex flex-col gap-8">
        <UCard v-for="article in otherTopArticles" :key="article._path" :ui="{ base: 'relative group', body: { padding: '' } }">
          <template #header>
            <header class="grid grid-cols-5 gap-3 items-center">
              <div v-if="article.image" class="overflow-hidden rounded-l-md col-span-2">
                <img :src="article.image.src" :alt="article.image.alt" class="aspect-[16/9] object-cover transform group-hover:scale-[101%] transition-transform ease-in duration-200">
              </div>

              <div class="col-span-3">
                <h3 class="text-lg font-semibold">
                  <NuxtLink :to="article._path">
                    <span class="absolute inset-0 z-10" />
                    <span>
                      {{ article.title }}
                    </span>
                  </NuxtLink>
                </h3>

                <p class="text-stone-500 text-sm">
                  {{ article.description }}
                </p>
              </div>
            </header>
          </template>
        </UCard>
      </div>
    </div>
  </ULandingSection>
  <ULandingSection title="Latest news">
    <div class="bg-stone-300 p-4 xl:-m-12 lg:p-12 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ArticleCard v-for="article in latestArticles" :key="article._path" :to="article._path" :title="article.title" :description="article.description" :date="article.publishedAt" :image="article.image" :authors="article.authors" class="bg-transparent" />
    </div>
  </ULandingSection>
  <ULandingSection
    title="They trust us"
    description="We are proud to have worked with some of the best companies in the world."
    :links="[{ 'label': 'Our Customer Stories', 'color': 'gray', 'trailing-icon': 'i-heroicons-arrow-right', 'size': 'lg', 'to': '/categories/customer-stories' }]"
    align="left"
  >
    <div class="flex flex-col gap-4">
      <UCard v-for="article in customerStories" :key="article._path" :ui="{ base: 'relative group', body: { padding: '' } }">
        <template #header>
          <header class="grid grid-cols-5 gap-3 items-center">
            <div v-if="article.image" class="overflow-hidden rounded-l-md col-span-2">
              <img :src="article.image.src" :alt="article.image.alt" class="aspect-[16/9] object-cover transform group-hover:scale-[101%] transition-transform ease-in duration-200">
            </div>

            <div class="col-span-3">
              <h3 class="text-lg font-semibold">
                <NuxtLink :to="article._path">
                  <span class="absolute inset-0 z-10" />
                  <span>
                    {{ article.title }}
                  </span>
                </NuxtLink>
              </h3>

              <p class="text-stone-500 text-sm">
                {{ article.description }}
              </p>
            </div>
          </header>
        </template>
      </UCard>
    </div>
  </ULandingSection>
  <ULandingSection
    title="Never seen before"
    description="Discover how we build our products and the technologies we use."
    :links="[{ 'label': 'Behind the Scenes', 'color': 'gray', 'trailing-icon': 'i-heroicons-arrow-right', 'size': 'lg', 'to': '/categories/behind-the-scenes' }]"
    align="left"
  >
    <ArticleCard v-for="article in behindTheScenes" :key="article._path" :to="article._path" :title="article.title" :description="article.description" :date="article.publishedAt" :image="article.image" :authors="article.authors" class="place-self-start" />
  </ULandingSection>
</template>
