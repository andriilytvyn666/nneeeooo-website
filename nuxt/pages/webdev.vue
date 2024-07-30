<template>
  <div class="flex">
    <ButtonBack caption="webdev" class="hidden" />
    <div class="h-screen overflow-scroll">
      <div class="flex flex-col lg:grid lg:grid-cols-2">
        <CardWeb
          v-for="item in webdev"
          :key="item.title"
          :title="item.title"
          :description="item.description"
          :link="item.link"
          :thumb-asset-id-desktop="item.thumbnail169.asset._ref"
          :thumb-asset-id-mobile="item.thumbnail43.asset._ref"
          :stack="item.stack"
          class="border-b odd:lg:border-r border-fg2"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const { webdev } = await store.getContent()
</script>
