module.exports = {
  transform: {
    '^.+\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.jsx'],
  moduleNameMapper: {
    '\.(css|scss)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: [
    "/node_modules/(?!react-markdown|devlop)" 
  ],
};