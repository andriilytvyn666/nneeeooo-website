<template>
  <div class="flex">
    <div
      class="absolute z-10 px-2 py-2 transition-all border rounded-lg sm:px-3 mt-30 top-14 left-3 bg-fg3 border-fg3 lg:left-auto lg:right-3 lg:top-4 h-fit hover:border-fg2 w-fit"
    >
      <NuxtLink
        to="https://www.behance.net/e45b410b"
        target="_blank"
        class="flex items-center gap-2 text-fg"
      >
        <Icon name="simple-icons:behance" />
        <span class="hidden sm:flex text-body-alt font-helvetica">Behance</span>
      </NuxtLink>
    </div>
    <ButtonBack caption="design" />
    <div class="w-full h-screen overflow-scroll">
      <Navbar caption="design" class="sticky top-0 z-10 lg:hidden" />
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <img
          class="flex"
          v-for="item in images"
          :key="item.asset._ref"
          :src="$urlFor(item).format('webp').height(1000).quality(95).url()"
        />
      </div>
      <!-- <masonry-wall
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
      </masonry-wall> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const sanityStore = useSanityStore()
const design = await sanityStore.getDesign()

design[0]

const images = design.flatMap((item) => item.images)

useSeoMeta({
  title: '[andrii lytvyn] - design',
})

useHead(head)
</script>
