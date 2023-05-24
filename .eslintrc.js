module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: 'off',
    semi: 'off',
    "comma-dangle": 'off',
    "space-before-function-paren": 'off',
    'eol-last': 'off',
    "spaced-comment": 'off',
    "no-var": 'off',
    "no-trailing-spaces": 'off',
    "vue/multi-word-component-names": 'off',
    "no-undef": 'off',
    "no-unused-vars": 'off',
  }
}
