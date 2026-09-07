<template>
  <!-- TODO: fix this mess -->
   <!-- TODO: rewrite in react -->
  <div
    class="flex flex-col py-6 justify-center pl-6  md:pt-0 md:pl-24 text-body h-svh"
  >
    <div class="flex flex-col gap-6 ">
      <div
        class="flex flex-col gap-3 md:max-w-[50vw] lg:max-w-[40vw] xl:max-w-[30vw] max-w-[90vw] sm:max-w-[70vw]"
      >
        <span class="flex flex-col gap-6 group">
          <NuxtImg
            src="/picture.png"
            alt="Andrii Lytvyn"
            class="rounded-lg max-w-[12rem]"
          />
          <span class="font-moderniz leading-6 text-[20px]"
            >Andrii Lytvyn</span
          ></span
        >
        <div class="flex flex-col gap-1 text-[20px] leading-6 whitespace-pre-line">
          <!-- <NuxtLink
            to="/design"
            class="hover:underline hover:decoration-dotted"
          >
            design portfolio
          </NuxtLink> -->
{{ `I’m a motion designer producing marketing videos and static creatives, turning creative concepts into polished advertising content.

2+ years of design experience
(graphic design, desktop publishing, marketing)

Based in Lviv, Ukraine · Open to remote collaboration` }}          <!-- <NuxtLink
            to="/webdev"
            class="hover:underline hover:decoration-dotted"
          >
            webdev projects
          </NuxtLink> -->
          <!-- <NuxtLink
            href="https://instagram.com/harmyder.design"
            target="_blank"
            class="hover:underline hover:decoration-dotted"
          >
            harmyder.design
          </NuxtLink> -->
        </div>
      </div>
      <div class="flex flex-wrap gap-2">
        <!-- <Button
            text="behance"
            icon="simple-icons:behance"
            href="https://www.behance.net/e45b410b"
            target="_blank"
          /> -->
        <!-- <Button
          text="github"
          icon="simple-icons:github"
          href="https://github.com/nneeeooo"
          target="_blank"
        /> -->

        <!-- <Button
          text="linkedin"
          icon="simple-icons:linkedin"
          href="https://www.linkedin.com/in/andrii-lytvyn-profile/"
          target="_blank"
        /> -->
                <Button
          text="telegram"
          icon="ri:telegram-2-fill"
          href="https://t.me/nneeeooo"
          target="_blank"
        />
                <Button
          text="email"
          icon="bx:bxl-gmail"
          href="mailto:lytvyn.andrii.contact@gmail.com"
          target="_blank"
        />
        <Button
          text="resume"
          icon="ph:read-cv-logo-fill"
          target="_blank"
          href="/Resume_Andrii_Lytvyn_Aug_2026.pdf"
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
