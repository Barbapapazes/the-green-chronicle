<script lang="ts" setup>
const socials = useAppConfig().blog.socials
</script>

<template>
  <UButton :to="socials.x" target="_blank" rel="noopener" icon="i-simple-icons-x" variant="ghost" color="gray">
    <span class="sr-only">Follow us on X</span>
  </UButton>
  <UButton :to="socials.github" target="_blank" rel="noopener" icon="i-simple-icons-github" variant="ghost" color="gray">
    <span class="sr-only">Follow us on GitHub</span>
  </UButton>
</template>
