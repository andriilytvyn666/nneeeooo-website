<template>
  <div class="flex hell">
    <div class="w-full px-2 py-3 overflow-scroll h-svh md:p-6">
      <Navbar />
      <div
        class="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <NuxtLink
          v-for="item in images"
          :key="item.image.asset._ref"
          :to="item.link"
        >
          <img
            class="flex border rounded-lg overflow-clip border-fg2"
            :src="
              $urlFor(item.image).format('webp').height(1000).quality(95).url()
            "
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sanityStore = useSanityStore()
const design = await sanityStore.getDesign()

// console.log(design)

const posts = design.flatMap((item) => item.posts)
const images = posts.map((post) => ({
  image: post.preview,
  link: post.link,
}))

useSeoMeta({
  title: 'Andrii Lytvyn - Design',
})

useHead(head)
</script>
