module.exports = {

  extends: [
    '@jycs/eslint-config-jycs-base',
    'plugin:vue/recommended',
  ],

  plugins: [
    'vue',
  ],

  rules: {
    // Vue Rules
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
  },
}
