// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import parser from '@typescript-eslint/parser';
import plugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';
import vitest from 'eslint-plugin-vitest';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        ...globals.node,
        GeoJSON: 'readonly',
      },
    },
    plugins: { '@typescript-eslint': plugin },
    rules: {
      ...plugin.configs.recommended.rules,
      ...plugin.configs['recommended-type-checked'].rules,
    },
  },
  {
    files: ['**/*.{test,spec}.{ts,tsx}'],
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
  {
    rules: {
      ...prettier.rules,
    },
  },
  {
    ignores: ['dist/**', 'samples/**', 'rslib.config.ts', 'rslib.umd.config.ts'],
  }
];