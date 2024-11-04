const globals = require('globals');
// const path = require('node:path');
// const { fileURLToPath } = require('node:url');
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  {
    ignores: [
      '**/node_modules/',
      '**/coverage/',
      '**/dist/',
      '**/temp/',
      '**/docs/',
      'eslint.config.js',
    ],
  },
  ...compat.extends('airbnb-base', 'plugin:prettier/recommended'),
  {
    languageOptions: {
      globals: {
        ...globals.mocha,
      },

      ecmaVersion: 2022,
      sourceType: 'script',
    },
  },
];
