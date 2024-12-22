<template>
  <div class="flex justify-between">
    <NuxtLink to="/" class="flex justify-between pb-3 md:pb-6 text-body-alt">
      <div
        class="flex px-4 py-2.5 rounded-lg bg-fg text-bg w-fit items-center gap-2 hover:-translate-y-0.5 transition-transform"
      >
        <Icon name="mdi:arrow-left" class="w-4 h-4" />
        <!-- <span></span> -->
        <span>homepage</span>
      </div>
    </NuxtLink>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  caption: string
}>()
</script>
