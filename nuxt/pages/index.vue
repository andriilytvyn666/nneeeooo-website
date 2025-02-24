<template>
  <div
    class="flex flex-col justify-center pl-6 md:pt-0 md:pl-24 h-svh text-body hell"
  >
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <NuxtLink class="flex gap-1 group">
          <span class="font-moderniz leading-6 text-[20px]"
            >Andrii Lytvyn</span
          ></NuxtLink
        >
        <div class="flex flex-col gap-1 text-[20px] leading-6">
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
        <Button
          text="email"
          icon="bx:bxl-gmail"
          href="mailto:lytvyn.andrii.contact@gmail.com"
          target="_blank"
        />
        <Button
          text="telegram"
          icon="ri:telegram-2-fill"
          href="https://t.me/nneeeooo"
          target="_blank"
        />
        <Button
          text="resume"
          icon="ph:read-cv-logo-fill"
          target="_blank"
          href="https://drive.google.com/file/d/1B8MZ8w2O8x_AqAqBksw5DgOSIH0VAoZV/view?usp=sharing"
        />
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
  title: 'Andrii Lytvyn',
})

useHead(head)
</script>

<style lang="postcss">
.hell {
  background-image: url('/public/grid.jpg');
  background-size: cover;
}
</style>
