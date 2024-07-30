<template>
  <NuxtLink
    :to="$props.link"
    target="_blank"
    class="relative flex h-fit aspect-[4/3] lg:aspect-video"
  >
    <SanityImage :asset-id="thumbAssetIdDesktop" class="hidden lg:block" />
    <SanityImage :asset-id="thumbAssetIdMobile" class="lg:hidden" />
    <div class="absolute flex flex-col gap-1 bottom-4 left-4">
      <span class="font-stretch text-body-alt [font-variant-ligatures:none]">
        {{ title }}
      </span>
      <span>{{ description }}<br />{{ stack }}</span>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  thumbAssetIdDesktop: string
  thumbAssetIdMobile: string
  title: string
  description: string
  stack: string
  link: string
}>()
</script>
