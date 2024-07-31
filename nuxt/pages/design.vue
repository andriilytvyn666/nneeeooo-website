<template>
  <div class="flex">
    <ButtonBack caption="design" />
    <div class="w-full h-screen overflow-scroll">
      <Navbar caption="design" class="sticky top-0 lg:hidden" />
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <NuxtLink
          v-for="item in content.designs"
          :key="item.asset._ref"
          :to="$urlFor(item).format('webp').height(1400).quality(100).url()"
          target="_blank"
        >
          <img
            :src="$urlFor(item).format('webp').height(1000).quality(95).url()"
            class="aspect-[1/1.414] w-full"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sanityStore = useSanityStore()
const content = await sanityStore.getContent()

console.log(useSanity().config)
</script>
