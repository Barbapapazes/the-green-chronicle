<script lang="ts" setup>
defineProps<{
  date: string
}>()
</script>

<template>
  <time :datetime="date">
    {{ formatDate(date) }}
  </time>
</template>
