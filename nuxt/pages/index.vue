<template>
  <div
    class="flex flex-col justify-between py-3 pl-3 lg:py-6 lg:pl-6 h-svh font-stretch text-body-alt"
  >
    <div class="flex flex-col gap-1">
      <NuxtLink class="flex gap-1 group">
        <span>[ andrii lytvyn ]</span></NuxtLink
      >
      <NuxtLink to="/design" class="flex gap-1 group">
        <span class="opacity-0 group-hover:opacity-100">+</span
        ><span>design</span></NuxtLink
      >
      <NuxtLink to="/photo" class="flex gap-1 group">
        <span class="opacity-0 group-hover:opacity-100">+</span
        ><span>photo</span></NuxtLink
      >
      <NuxtLink to="/webdev" class="flex gap-1 group">
        <span class="opacity-0 group-hover:opacity-100">+</span>
        <span>webdev</span></NuxtLink
      >
      <NuxtLink
        href="https://instagram.com/harmyder.design"
        target="_blank"
        class="flex gap-1 group"
      >
        <span class="opacity-0 group-hover:opacity-100">+</span>
        <span>harmyder.design</span></NuxtLink
      >
      <NuxtLink
        href="https://t.me/nneeeooo"
        target="_blank"
        class="flex gap-1 group"
      >
        <span class="opacity-0 group-hover:opacity-100">+</span>
        <span>contact</span></NuxtLink
      >
    </div>
    <div>
      <span class="text-body-alt text-fg3">
        <span class="hidden md:inline">copyright</span>
        © 2024 andrii lytvyn</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
useServerSeoMeta({
  title: '[andrii lytvyn]',
})
</script>
