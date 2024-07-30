<template>
  <div class="flex">
    <ButtonBack caption="photo" />
    <div class="h-screen overflow-scroll">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <SanityImage
          v-for="i in content.photos"
          :key="i.asset._ref"
          :asset-id="`${i.asset._ref}?h=900`"
          class="aspect-[4/3] w-full"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sanityStore = useSanityStore()
const content = await sanityStore.getContent()
</script>
