module.exports = {
  projects: [
    {
      displayName: 'app',
      preset: 'ts-jest',
      testEnvironment: 'node',
      roots: ['<rootDir>/packages/formstr-app'],
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
      transformIgnorePatterns: ['<rootDir>/node_modules/'],
    },
    {
      displayName: 'sdk',
      preset: 'ts-jest',
      testEnvironment: 'node',
      roots: ['<rootDir>/packages/formstr-sdk'],
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
      transformIgnorePatterns: ['<rootDir>/node_modules/'],
    },
  ],
};
