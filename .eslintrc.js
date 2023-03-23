module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': 'off'
  }
}
