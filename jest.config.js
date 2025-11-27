/**
 * Jest configuration for WorkIndia Design System Monorepo
 */

module.exports = {
  projects: [
    '<rootDir>/packages/tokens',
    '<rootDir>/packages/dsm',
    '<rootDir>/packages/mcp',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov', 'html'],
};
