const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  collectCoverage: true,
  collectCoverageFrom: [
    './prepare/**/*.ts',
    './lib/**/*.ts',
    './src/**/*.ts',
    './src/**/*.tsx',
    './utils/**/*.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.test.(ts|tsx)'
  ]
};

module.exports = createJestConfig(customJestConfig);
