module.exports = {
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
  automock: false,
  bail: false,
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!**/node_modules/**"],

  roots: ["<rootDir>/src"],

  coverageDirectory: "<rootDir>/coverage",

  moduleFileExtensions: ["js", "jsx", "json"],

  moduleNameMapper: {
    "\\.(css|less|styl|scss|sass|sss)$": "identity-obj-proxy",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/configs/jest/fileMock.js",
  },

  transform: {
    "\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    "\\.(json|css|svg|less|styl|scss|sass|sss)$":
      "<rootDir>/configs/jest/fileMock.js",
  },

  testRegex: "(\\.|/)(test)\\.js?$",

  unmockedModulePathPatterns: ["node_modules/react/", "node_modules/enzyme/"],

  setupFilesAfterEnv: [],

  verbose: true,
};
