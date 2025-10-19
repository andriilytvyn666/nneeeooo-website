<template>
  <div
    class="flex-col px-2 py-3 md:p-6 flex md:h-screen h-[110vh] overflow-scroll"
  >
    <Navbar />
    <div class="grid gap-4 lg:grid-cols-2">
      <CardWeb
        v-for="item in webdev"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :link="item.link"
        :thumb-asset-id-desktop="item.thumbnail169.asset._ref"
        :thumb-asset-id-mobile="item.thumbnail43.asset._ref"
        :stack="item.stack"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const webdev = (await store.getWebdev()).webdev

useSeoMeta({
  title: 'Andrii Lytvyn - Webdev',
})

useHead(head)
</script>
