export default {
  transform: {},
  testEnvironment: "node",
  setupFilesAfterEnv: ["./jest.setup.js"],
  testPathIgnorePatterns: [
    "/node_modules/", // É sempre bom manter esta linha
    "tests/dominio/project.test.js",
    "tests/dominio/ngo.test.js",
    "tests/controllers/project.test.js",
    "tests/auth.test.js"
  ],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
