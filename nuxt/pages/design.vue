<template>
  <div class="flex">
    <NuxtLink
      to="/"
      class="flex flex-col items-center justify-between py-6 max-w-16 min-w-16 bg-bg font-stretch text-body-alt h-svh"
    >
      <div class="flex flex-col items-center gap-3">
        <Icon name="material-symbols:arrow-back" class="w-4 h-4" />
        <span class="[writing-mode:vertical-lr] rotate-180"> back </span>
      </div>
      <span class="[writing-mode:vertical-lr] rotate-180 text-fg2">design</span>
    </NuxtLink>
    <div
      class="grid grid-cols-1 overflow-scroll md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-svh"
    >
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
