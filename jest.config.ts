/**@type {import ('@jest/types').Config.InitialOptions} */

// Sync object
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};

