/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
      "\\.\\./verticals/TestVertical/App$": "<rootDir>/__mocks__/verticals/TestVertical/App.tsx",
      "\\.(css|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
    },
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    globals: {
      "ts-jest": {
        tsconfig: "./tsconfig.app.json",
      },
    },
  };