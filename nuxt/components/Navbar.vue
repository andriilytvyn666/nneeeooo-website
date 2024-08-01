<template>
  <NuxtLink
    to="/"
    class="flex justify-between p-3 border-b bg-bg font-stretch text-body-alt border-fg3"
  >
    <span>[ andrii lytvyn ]</span>
    <span class="text-fg2">{{ caption }}</span>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  caption: string
}>()
</script>
