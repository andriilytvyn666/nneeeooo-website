<template>
  <div class="flex hell">
    <div class="w-full px-2 py-3 overflow-scroll h-svh md:p-6">
      <Navbar>
        <Button
          text="behance"
          icon="simple-icons:behance"
          href="https://www.behance.net/e45b410b"
          target="_blank"
        />
      </Navbar>
      <div
        class="grid grid-cols-1 gap-y-[0.875rem] gap-x-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <img
          class="flex border rounded-lg overflow-clip border-fg2"
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
