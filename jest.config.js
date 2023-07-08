const nextJest = require('next/jest');

const jestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

const createJestConfig = nextJest({ dir: './' })
module.exports = createJestConfig(jestConfig)