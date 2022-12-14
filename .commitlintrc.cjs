const fs = require('fs')
const path = require('path')

const packages = fs.readdirSync(path.resolve(__dirname, 'packages/@starzkg'))

for (let i = 0; i < packages.length; i++) {
  packages[i] = packages[i].substring('vuepress-plugin-'.length +1, packages[i].length-8)
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['docs', 'example', ...packages]],
    'footer-max-line-length': [0],
  },
}
