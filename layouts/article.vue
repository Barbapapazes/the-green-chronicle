<script lang="ts" setup>
const { page } = useContent()

const { data: relatedArticles } = await useAsyncData(`content:related-articles:${page.title}`, () => queryContent('/articles').where({ categories: { $in: page.categories }, _extension: 'md' }).only(['_path', 'title', 'categories', 'description', 'publishedAt', 'image', 'authors']).sort({ publishedAt: -1 }).limit(3).find())

const host = useAppConfig().blog.host
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader
        class="max-w-5xl mx-auto"
        :title="page.title"
        :description="page.description"
      >
        <template #headline>
          <!-- <dl>
            <dt class="sr-only">
              Categories
            </dt>
            <dd> -->
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
          <!-- </dd>
          </dl> -->
        </template>

        <img v-if="page.image" :src="page.image.src" :alt="page.image.alt" class="mt-8 w-full object-cover rounded-lg aspect-[16/9]">

        <dl class="mt-8 flex justify-between text-stone-700 text-sm">
          <dt class="sr-only">
            Author
          </dt>
          <dd>
            <ol class="space-x-4">
              <li v-for="author in page.authors" :key="author.name">
                <ULink :to="author.social" target="_blank" rel="noopener" class="flex items-center gap-2">
                  <UAvatar :src="author.avatar" :alt="author.name" size="sm" />
                  <span>
                    {{ author.name }}
                  </span>
                </ULink>
              </li>
            </ol>
          </dd>
          <dt class="sr-only">
            Published at
          </dt>
          <dd>
            <span>
              {{ formatDate(page.publishedAt) }}
            </span>
          </dd>
        </dl>
      </UPageHeader>

      <div class="max-w-5xl mx-auto relative">
        <div class="relative lg:absolute flex lg:flex-col gap-2">
          <UTooltip text="Share on X">
            <UButton
              :to="`https://twitter.com/share?text=${page.title}&url=${host}${page._path}`"
              target="_blank"
              icon="i-simple-icons-x"
              size="sm"
              color="primary"
              square
              variant="ghost"
            />
          </UTooltip>
          <UTooltip text="Share on Facebook">
            <UButton
              :to="`https://www.facebook.com/sharer/sharer.php?u=${host}${page._path}&t=${page.title}`"
              target="_blank"
              icon="i-simple-icons-facebook"
              size="sm"
              color="primary"
              square
              variant="ghost"
            />
          </UTooltip>
          <UTooltip text="Share on LinkedIn">
            <UButton
              :to="`https://www.linkedin.com/shareArticle?url=${host}${page._path}&title=${page.title}`"
              target="_blank"
              icon="i-simple-icons-linkedin"
              size="sm"
              color="primary"
              square
              variant="ghost"
            />
          </UTooltip>
        </div>

        <div class="max-w-3xl mx-auto">
          <UPageBody prose>
            <slot />
          </UPageBody>
        </div>
      </div>

      <section v-if="relatedArticles">
        <h2 class="text-2xl text-stone-900 font-bold">
          Related Articles
        </h2>

        <div class="mt-3 border-b border-stone-200" />

        <UPageGrid class="mt-8">
          <ArticleCard v-for="article in relatedArticles" :key="article._path" :to="article._path" :title="article.title" :description="article.description" :date="article.publishedAt" :image="article.image" :authors="article.authors" />
        </UPageGrid>
      </section>
    </UPage>
  </UContainer>
</template>
