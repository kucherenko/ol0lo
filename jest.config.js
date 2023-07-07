// jest.config.js
module.exports = {
  preset: '@nuxt/test-utils',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
  coverageDirectory: '<path-to-coverage-directory>',
}
