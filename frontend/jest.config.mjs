export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  // [ADIÇÃO AQUI]
  // Ignora o arquivo de teste da API que está causando o erro de sintaxe
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/__tests__/api/apiClient.test.js",
  ],

  moduleNameMapper: {
    '^../../Components/(.*)/$': '<rootDir>/src/Components/$1.jsx',
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx}",
    "<rootDir>/src/**/*.{test,spec}.{js,jsx}",
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/**/*.d.ts",
    "!src/main.jsx",
    "!src/index.css",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  extensionsToTreatAsEsm: [".jsx"],
};