/**
 * Jest configuration for @workindia/icons package
 */

module.exports = {
  displayName: 'icons',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.{ts,tsx}'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json',
        isolatedModules: false,
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@razorpay/blade|@workindia/dsm|@emotion|clsx|@babel/runtime))',
  ],
  moduleNameMapper: {
    '^@workindia/dsm$': '<rootDir>/src/__mocks__/@workindia/dsm',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/__tests__/**',
    '!src/**/*.d.ts',
    '!src/**/types.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
