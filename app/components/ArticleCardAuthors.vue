<script lang="ts" setup>
defineProps<{
  authors: {
    name: string
    avatar: string
    social: string
  }[]
}>()
</script>

<template>
  <UAvatarGroup
    v-if="authors.length > 1"
    size="xs"
    :max="3"
  >
    <UAvatar
      v-for="author in authors"
      :key="author.name"
      :src="author.avatar"
      :alt="author.name"
    />
  </UAvatarGroup>
  <template v-else-if="authors[0]">
    <div class="flex items-center gap-2 text-sm">
      <UAvatar
        :src="authors[0].avatar"
        :alt="authors[0].name"
        size="xs"
      />
      <span>
        {{ authors[0].name }}
      </span>
    </div>
  </template>
</template>
