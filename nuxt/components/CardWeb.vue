<template>
  <NuxtLink
    :to="$props.link"
    target="_blank"
    class="relative flex h-fit aspect-video"
  >
    <SanityImage :asset-id="thumbAssetId" />
    <div class="absolute flex flex-col gap-1 bottom-6 left-6">
      <span class="font-stretch text-body-alt [font-variant-ligatures:none]">
        {{ title }}
      </span>
      <span>{{ description }}<br />{{ stack }}</span>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  thumbAssetId: string
  title: string
  description: string
  stack: string
  link: string
}>()
</script>
