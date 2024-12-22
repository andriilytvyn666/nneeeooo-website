<template>
  <div
    class="flex flex-col justify-center py-3 pl-3 lg:py-6 lg:pl-24 h-svh text-body hell"
  >
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <NuxtLink class="flex gap-1 group">
          <span class="font-moderniz leading-8 text-[20px]"
            >Andrii Lytvyn</span
          ></NuxtLink
        >
        <div class="flex flex-col gap-1">
          <NuxtLink
            to="/design"
            class="hover:underline hover:decoration-dotted"
          >
            design portfolio
          </NuxtLink>
          <NuxtLink
            to="/webdev"
            class="hover:underline hover:decoration-dotted"
          >
            webdev projects
          </NuxtLink>
          <NuxtLink
            href="https://instagram.com/harmyder.design"
            target="_blank"
            class="hover:underline hover:decoration-dotted"
          >
            harmyder.design
          </NuxtLink>
        </div>
      </div>
      <div class="flex gap-2">
        <div
          class="flex px-4 py-2.5 rounded-lg bg-fg text-bg w-fit items-center gap-2 hover:-translate-y-0.5 transition-transform"
        >
          <Icon name="bx:bxl-gmail" class="w-4 h-4" />
          <span>email</span>
        </div>
        <div
          class="flex px-4 py-2.5 rounded-lg bg-fg text-bg w-fit items-center gap-2 hover:-translate-y-0.5 transition-transform"
        >
          <Icon name="ri:telegram-2-fill" class="w-4 h-4" />

          <span>telegram</span>
        </div>
      </div>
    </div>

    <!-- <div>
      <span class="text-body-alt text-fg2">
        <span class="hidden md:inline">copyright</span>
        © 2024 andrii lytvyn</span
      >
    </div> -->
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
  background-image: url('/public/grid.jpg');
  background-size: cover;
}
</style>
