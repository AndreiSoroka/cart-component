module.exports = {
  coverageReporters: ["html"],
  coverageDirectory: 'dist/coverage',
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
