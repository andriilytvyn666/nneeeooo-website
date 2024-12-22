<template>
  <div class="flex hell">
    <div class="px-2 py-3 overflow-scroll md:p-6 h-svh">
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
  </div>
</template>

<script lang="ts" setup>
const store = useSanityStore()
const webdev = (await store.getWebdev()).webdev

useSeoMeta({
  title: '[andrii lytvyn] - webdev',
})

useHead(head)
</script>
