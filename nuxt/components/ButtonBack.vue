<template>
  <NuxtLink
    to="/"
    class="flex-col items-center justify-between hidden h-screen py-6 border-r max-w-16 min-w-16 bg-bg font-stretch text-body-alt borber border-fg2 lg:flex"
  >
    <div class="flex flex-col items-center gap-3">
      <Icon name="material-symbols:arrow-back" class="w-4 h-4" />
      <span class="[writing-mode:vertical-lr] rotate-180"> back </span>
    </div>
    <span class="[writing-mode:vertical-lr] rotate-180 text-fg2">
      {{ caption }}
    </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  caption: string
}>()
</script>
