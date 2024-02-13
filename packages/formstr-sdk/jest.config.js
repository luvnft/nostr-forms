module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.html$': 'html-loader',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
};
