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
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"], // 需要忽略的组件名
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: 'off',
    semi: 'off',
    "comma-dangle": 'off',
    "space-before-function-paren": 'off',
    'eol-last': 'off',
    "spaced-comment": 'off',
    "no-var": 'off',
    "no-trailing-spaces": 'off'
  }
}
