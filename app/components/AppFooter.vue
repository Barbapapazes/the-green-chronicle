<script lang="ts" setup>
const appConfig = useAppConfig()
</script>

<template>
  <UFooter
    class="mt-24"
    :ui="{ top: { wrapper: 'bg-yellow-800/5' } }"
  >
    <template #top>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-0">
        <div class="flex flex-col gap-6">
          <UIcon
            name="i-noto-bouquet"
            class="w-12 h-12"
          />
          <span class="text-xl font-bold">
            {{ appConfig.app.name }}
          </span>
        </div>

        <ol class="xl:place-self-end grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 xl:gap-20">
          <li
            v-for="item in appConfig.footer.links"
            :key="item.label"
          >
            <span class="font-semibold">
              {{ item.label }}
            </span>
            <ol class="mt-3 flex flex-col text-stone-700">
              <li
                v-for="{ label, ...attrs } in item.children"
                :key="label"
              >
                <ULink
                  v-bind="attrs"
                  class="block py-1 hover:underline hover:underline-offset-2"
                >
                  {{ label }}
                </ULink>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </template>
    <template #left>
      <span class="text-sm text-stone-500">
        {{ appConfig.footer.copyrightNotice }}
      </span>
    </template>
    <template #center>
      <div class="flex flex-col md:flex-row items-center gap-4">
        <div class="flex gap-2 text-xs text-stone-500">
          <ULink
            v-for="{ label, ...attrs } in appConfig.footer.smallLinks"
            :key="label"
            v-bind="attrs"
            class="hover:underline hover:underline-offset-2"
          >
            {{ label }}
          </ULink>
        </div>
      </div>
    </template>
    <template #right>
      <UButton
        v-for="{ name, ...attrs } in appConfig.socials"
        :key="name"
        v-bind="attrs"
        variant="ghost"
        color="gray"
      >
        <span class="sr-only">Follow us on {{ name }}</span>
      </UButton>
    </template>
  </UFooter>
</template>
