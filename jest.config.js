export default {
    transform: {},
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./jest.setup.js'],
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
  };