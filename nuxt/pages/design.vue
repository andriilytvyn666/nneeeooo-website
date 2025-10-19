<template>
  <div
    class="w-full flex-col sm:flex-col px-2 py-2 md:p-6 flex md:h-screen h-[110vh] overflow-scroll grid-bg"
  >
    <Navbar />
    <div
      class="grid grid-cols-1 pb-24 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:pb-0"
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
