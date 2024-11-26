<template>
  <div class="relative flex">
    <div
      class="absolute z-10 px-2 py-2 transition-all border rounded-lg sm:px-3 mt-30 top-14 left-3 bg-fg3 border-fg3 lg:left-auto lg:right-3 lg:top-4 h-fit hover:border-fg2 w-fit"
    >
      <NuxtLink
        to="https://www.instagram.com/nneeeooo.pix"
        target="_blank"
        class="flex items-center gap-2 text-fg"
      >
        <Icon name="simple-icons:instagram" />
        <span class="hidden sm:flex text-body-alt font-helvetica"
          >Instagram</span
        >
      </NuxtLink>
    </div>
    <ButtonBack caption="photo" />
    <div class="h-screen overflow-scroll">
      <Navbar caption="photo" class="sticky top-0 z-10 lg:hidden" />
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <NuxtLink
          v-for="item in images"
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
const photo = await sanityStore.getPhoto()

const images = photo.flatMap((item) => item.images)

useSeoMeta({
  title: '[andrii lytvyn] - photo',
})

useHead(head)
</script>
