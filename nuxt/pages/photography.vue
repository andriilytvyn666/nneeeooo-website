<template>
  <div class="flex flex-col justify-between overflow-scroll h-svh">
    <NuxtLink to="/" class="absolute z-10 top-6 left-6">{{
      '<- back'
    }}</NuxtLink>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-svh">
      <SanityImage
        v-for="i in design.photos"
        :key="i.asset._ref"
        :asset-id="`${i.asset._ref}?h=1000`"
        class="aspect-[4/3] w-full"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const sanityStore = useSanityStore()
const design = await sanityStore.getContent()
</script>
