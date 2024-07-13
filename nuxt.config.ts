// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/eslint'],
  googleFonts: {
    inject: true,
    base64: true,
    outputDir: 'assets',
    fontsDir: 'google-fonts.css',
    families: {
      Inter: [600, 700],
    },
  },
  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
})
