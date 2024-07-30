<template>
  <div class="flex">
    <ButtonBack caption="webdev" />
    <div class="flex flex-col overflow-scroll lg:grid lg:grid-cols-2 h-svh">
      <CardWeb
        v-for="item in webdev"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :link="item.link"
        :thumb-asset-id="item.thumbnail.asset._ref"
        :stack="item.stack"
        class="border-b odd:lg:border-r border-fg2"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const { webdev } = await store.getContent()
</script>
