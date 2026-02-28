// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
      settings: {
        "import/resolver": {
          typescript: {
            project: "./tsconfig.json",
          },
        },
      },
    },
    rules: {
      // prohibit all console methods to satisfy zero console policy
      "no-console": "error",
      // disallow leftover TODO/FIXME comments
      "no-warning-comments": [
        "error",
        { terms: ["todo", "fixme", "xxx"], location: "anywhere" },
      ],
      // encourage small files
      "max-lines": [
        "warn",
        { max: 120, skipBlankLines: true, skipComments: true },
      ],
    },
  },
]);
