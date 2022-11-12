module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'vue/attributes-order': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/return-in-computed-property': 'off',
  },
}
