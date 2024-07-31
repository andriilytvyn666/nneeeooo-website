<template>
  <slot />
</template>

<script lang="ts" setup>
useServerHeadSafe({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  meta: [
    {
      name: 'charset',
      content: 'utf-8',
    },
    {
      name: 'author',
      content: 'Andrii Lytvyn',
    },
  ],
})
</script>
