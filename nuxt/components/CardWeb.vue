<template>
  <NuxtLink
    :to="$props.link"
    target="_blank"
    class="relative flex h-fit aspect-[4/3] lg:aspect-video border border-fg2 rounded-lg overflow-hidden"
  >
    <SanityImage :asset-id="thumbAssetIdDesktop" class="hidden lg:block" />
    <SanityImage :asset-id="thumbAssetIdMobile" class="lg:hidden" />
    <div class="absolute flex flex-col gap-1 bottom-6 left-6 text-bg">
      <span
        class="font-moderniz text-[1rem] leading-5 [font-variant-ligatures:none]"
      >
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
