// jest.config.js
module.exports = {
  preset: '@nuxt/test-utils',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.vue', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
}
