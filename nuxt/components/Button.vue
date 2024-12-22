<template>
  <NuxtLink
    :to="href"
    :target="target"
    class="flex px-4 py-2.5 rounded-lg bg-fg text-bg w-fit items-center gap-2 hover:-translate-y-0.5 transition-transform"
  >
    <Icon :name="icon" class="w-3.5 h-3.5" />
    <button>{{ text }}</button>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  icon: string
  href: string
  target: '_blank' | '_self'
}>()
</script>
