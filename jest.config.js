/**
 * Jest configuration for WorkIndia Design System Monorepo
 */

module.exports = {
  projects: ['<rootDir>/packages/tokens', '<rootDir>/packages/dsm'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testTimeout: 10000,
};
