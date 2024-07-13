<template>
  <div class="flex flex-col justify-between p-6 h-svh">
    <div class="flex flex-col gap-1">
      <NuxtLink class="flex gap-1 group">
        <span>-></span><span>andrii lytvyn</span></NuxtLink
      >
      <NuxtLink to="/design" class="flex gap-1 group">
        <span class="opacity-0 group-hover:opacity-100">-></span
        ><span>design</span></NuxtLink
      >
      <NuxtLink to="/photography" class="flex gap-1 group">
        <span class="opacity-0 group-hover:opacity-100">-></span
        ><span>photography</span></NuxtLink
      >
      <!-- <NuxtLink to="/webdev" class="flex gap-1 group">
        <span class="opacity-0 group-hover:opacity-100">-></span>
        <span>webdev</span></NuxtLink
      > -->
      <NuxtLink
        href="https://instagram.com/harmyder.design"
        target="_blank"
        class="flex gap-1 group"
      >
        <span class="opacity-0 group-hover:opacity-100">-></span>
        <span>harmyder.design</span></NuxtLink
      >
      <NuxtLink
        href="https://t.me/nneeeooo"
        target="_blank"
        class="flex gap-1 group"
      >
        <span class="opacity-0 group-hover:opacity-100">-></span>
        <span>contact</span></NuxtLink
      >
    </div>
    <div>
      <span class="text-body text-footer">copyright © 2024 andrii lytvyn</span>
    </div>
  </div>
</template>
