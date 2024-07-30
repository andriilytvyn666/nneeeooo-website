// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default withNuxt(
  createConfigForNuxt().override('nuxt/vue/rules', {
    rules: {
      'vue/html-self-closing': 'off',
    },
  })
)
