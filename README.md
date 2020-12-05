# eslint-config-jycs-vue

ESLint rule set for Vue.js projects

## Install
```
npm install --save-dev eslint eslint-config-airbnb-base eslint-import-resolver-alias eslint-plugin-vue eslint-config-jycs-base
npm install --save-dev eslint-config-jycs-vue
```

# .eslintrc.js file example
```javascript
module.exports = {
  root: true,
  extends: ['eslint-config-jycs-vue'],
}
```

# Husky config example
Example of usage with Husky for check lint before commit
(Also includes lint for commit message with conventional commit)
```json
{ // package.json
  "scripts": {
    "lint": "eslint ."
  },
  "devDependencies": {
    "@commitlint/cli": "^11.0.0",
    "@commitlint/config-conventional": "^11.0.0",
    "eslint-config-jycs-base": "^1.0.0",
    "eslint": "^6.7.2",
    "eslint-config-airbnb-base": "^14.2.0",
    "eslint-import-resolver-alias": "^1.1.2",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-vue": "^7.0.0",
    "husky": "^4.3.0",
    "lint-staged": "^10.4.0",
  },
  "lint-staged": {
    "*.{js,vue}": [
      "npm run lint",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "lint-staged"
    }
  }
}
```
