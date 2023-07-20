module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  injectGlobals: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@containers/(.*)$': '<rootDir>/src/containers/$1',
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', // Use Babel for JavaScript/TypeScript files
  },
  globals: {
    'ts-jest': {
      babelConfig: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
              modules: 'auto', // Handle ESM syntax
            },
          ],
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
        plugins: ['@babel/plugin-syntax-import-meta'], // Add this line
      },
    },
  },
};
