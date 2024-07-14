<template>
  <div class="flex flex-col justify-between overflow-scroll h-svh">
    <NuxtLink to="/" class="absolute z-10 px-3 py-2 bg-bg top-6 left-6">{{
      '<- back'
    }}</NuxtLink>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="i in content.designs" :key="i.asset._ref">
        <SanityImage
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
