<template>
  <div class="flex">
    <ButtonBack caption="photo" />
    <div class="h-screen overflow-scroll">
      <Navbar caption="photo" class="sticky top-0 lg:hidden" />
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <NuxtLink
          v-for="item in content.photos"
          :key="item.asset._ref"
          :to="$urlFor(item).format('webp').height(1200).quality(100).url()"
          target="_blank"
        >
          <img
            :src="$urlFor(item).format('webp').height(1000).quality(95).url()"
            class="aspect-[4/3] w-full"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sanityStore = useSanityStore()
const content = await sanityStore.getContent()

useSeoMeta({
  title: '[andrii lytvyn] - photo',
})
</script>
