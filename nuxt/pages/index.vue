<template>
  <div
    class="flex flex-col justify-between py-3 pl-3 lg:py-6 lg:pl-6 h-svh font-stretch text-body-alt hell"
  >
    <div class="flex flex-col gap-1">
      <NuxtLink class="flex gap-1 group">
        <span>[ andrii lytvyn ]</span></NuxtLink
      >
      <NuxtLink
        to="https://www.behance.net/e45b410b"
        target="_blank"
        class="flex gap-1 group"
      >
        <span class="opacity-0 group-hover:opacity-100">+</span
        ><span>behance</span></NuxtLink
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
        class="flex gap-1 group text-[#777777]"
      >
        <span class="opacity-0 group-hover:opacity-100">+</span>
        <span>harmyder.design</span></NuxtLink
      >

      <NuxtLink href="/anime" class="flex gap-1 group text-[#777777]">
        <span class="opacity-0 group-hover:opacity-100">+</span>
        <span>anime list</span></NuxtLink
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
      <span class="text-body-alt text-fg2">
        <span class="hidden md:inline">copyright</span>
        © 2024 andrii lytvyn</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: '[andrii lytvyn]',
})

useHead(head)
</script>

<style lang="postcss">
.hell {
  background-image: url('/public/123.jpg');
  background-size: cover;
}
</style>
