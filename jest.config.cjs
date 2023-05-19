const JSON5 = require('json5');
const fs = require('fs');
const path = require('path');

const tsConfig = JSON5.parse(fs.readFileSync('./tsconfig.json').toString());

/**
 * Converts TypeScript path mappings to Jest moduleNameMapper format.
 * Because "@swc/jest" not supported aliases from ts config in 2023
 *
 * @returns {Object} An object where keys are paths in Jest format and values are corresponding paths in TypeScript format.
 *
 * Example:
 * Converts from:
 * "@/*": ["./src/*"]
 * To:
 * { '@/(.*)': '<rootDir>/src/$1' }
 */
function makeModuleNameMapper() {
  const { paths } = tsConfig.compilerOptions;

  return Object.entries(paths).reduce((aliases, [key, val]) => {
    const newKey = key.replace('/*', '/(.*)');
    const templatePath = val[0].replace('/*', '/$1');
    aliases[newKey] = path.join('<rootDir>', templatePath);
    return aliases;
  }, {".module\\.scss$": 'identity-obj-proxy',});
}

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  coverageReporters: ["html"],
  setupFilesAfterEnv: ['<rootDir>/src/shared/config/jest/jest-setup.ts'],
  coverageDirectory: 'dist/coverage',
  collectCoverageFrom: [
    'src/*/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/*.stories.*', // storybook
    '!**/*.meta.ts', // meta files
    '!src/app/**', // app config
    '!src/shared/config/**', // configs
  ],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  'moduleNameMapper': makeModuleNameMapper()
};
