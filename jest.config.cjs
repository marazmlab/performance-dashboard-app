module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\.(js|jsx)$': 'babel-jest',
  },
  testMatch: ['**/src/tests/**/*.test.jsx'],
};
