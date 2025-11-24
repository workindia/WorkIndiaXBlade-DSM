import js from '@eslint/js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import unicorn from 'eslint-plugin-unicorn';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/*.config.js', '**/*.config.mjs'],
  },
  ...compat.config({
    extends: [
      'eslint:recommended',
      'prettier',
    ],
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        extends: [
          'plugin:@typescript-eslint/strict-type-checked',
          'plugin:@typescript-eslint/stylistic-type-checked',
          'plugin:jsdoc/recommended-typescript',
          'plugin:typescript-enum/recommended',
        ],
        parserOptions: {
          project: ['./tsconfig.json', './tsconfig.eslint.json', './packages/*/tsconfig.json', './packages/*/tsconfig.test.json'],
          tsconfigRootDir: __dirname,
        },
      },
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['jsdoc', 'prettier', 'typescript-enum'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          useTabs: false,
        },
      ],
    },
    settings: {
      jsdoc: {
        mode: 'typescript',
      },
    },
  }),
  {
    plugins: {
      unicorn,
    },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: [/^[A-Z]/], // Allow PascalCase for React components
        },
      ],
    },
  },
];

export default eslintConfig;

