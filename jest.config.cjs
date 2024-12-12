// jest.config.cjs
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.jsx'],
  moduleNameMapper: {
    '^(.+)\\.js$': '$1',
  },
};
