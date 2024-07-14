// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint',
    '@nuxtjs/sanity',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
        storesDirs: ['./stores/**'],
      },
    ],
  ],
  googleFonts: {
    inject: true,
    base64: true,
    outputDir: 'assets',
    fontsDir: 'google-fonts.css',
    families: {
      Inter: [600, 700],
    },
  },
  sanity: {
    projectId: '5zmqw6cj',
    dataset: 'production',
    apiVersion: '2024-07-14',
    minimal: true,
  },
  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
})
