<template>
  <div class="flex">
    <ButtonBack caption="design" />
    <div class="w-full h-screen overflow-scroll">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <SanityImage
          v-for="i in content.designs"
          :key="i.asset._ref"
          :asset-id="`${i.asset._ref}?h=1000`"
          class="aspect-[1/1.414] w-full"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sanityStore = useSanityStore()
const content = await sanityStore.getContent()
</script>
