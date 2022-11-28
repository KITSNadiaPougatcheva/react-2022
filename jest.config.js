const {defaults} = require('jest-config');

module.exports = {
  bail: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  roots: ['src'],
  testMatch: ['<rootDir>/src/**/*.test.{tsx, ts}'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/coverage',
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
  verbose: true,
  setupFiles: [
   // "<rootDir>/setupTests.ts"
  ],
  moduleNameMapper: {
    //"\\.(css|less|styl|scss|sass|sss)$": "identity-obj-proxy",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/configs/jest/fileMock.ts",
    },

    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    //"\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    "\\.(json|css|svg|less|styl|scss|sass|sss)$":
      "<rootDir>/configs/jest/fileMock.ts",
      
    },
    unmockedModulePathPatterns: ['node_modules/react/', 'node_modules/enzyme/'],
};