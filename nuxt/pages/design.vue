<template>
  <div class="flex">
    <ButtonBack caption="design" />
    <div class="w-full h-screen overflow-scroll">
      <Navbar caption="design" class="sticky top-0 z-10 lg:hidden" />
      <masonry-wall
        :items="images"
        :ssr-columns="1"
        :min-columns="1"
        :max-columns="4"
        :column-width="360"
      >
        <template #default="{ item }">
          <img
            :src="$urlFor(item).format('webp').height(1000).quality(95).url()"
          />
        </template>
      </masonry-wall>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sanityStore = useSanityStore()
const design = await sanityStore.getDesign()

const images = design.flatMap((item) => item.images)

useSeoMeta({
  title: '[andrii lytvyn] - design',
})

useHead(head)
</script>
