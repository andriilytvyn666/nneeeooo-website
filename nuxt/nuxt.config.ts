// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/sanity',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
        storesDirs: ['./stores/**'],
      },
    ],
    '@nuxt/fonts',
    'nuxt-icon-tw',
  ],
  fonts: {
    provider: 'local',
    families: [
      {
        name: 'Helvetica',
        provider: 'local',
      },
      {
        name: 'Stretch Pro',
        provider: 'local',
      },
    ],
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
