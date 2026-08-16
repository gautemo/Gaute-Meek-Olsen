import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['vue', 'eslint', 'typescript', 'unicorn', 'oxc'],
  rules: {
    'vue/return-in-computed-property': 'off',
  },
})
