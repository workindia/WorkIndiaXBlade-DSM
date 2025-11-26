import js from '@eslint/js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  {
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/node_modules/**',
      '**/*.config.js',
      '**/*.config.mjs',
      '**/*.config.ts',
    ],
  },
  ...compat.config({
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/strict-type-checked',
      'plugin:@typescript-eslint/stylistic-type-checked',
      'prettier',
    ],
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        parserOptions: {
          project: './tsconfig.json',
          tsconfigRootDir: __dirname,
        },
      },
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['prettier'],
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
      // CRITICAL: Block direct imports from @razorpay/blade
      // Developers MUST use @workindia/dsm instead
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@razorpay/blade/*', '@razorpay/blade'],
              message:
                'Direct imports from @razorpay/blade are not allowed. Use @workindia/dsm instead.',
            },
          ],
        },
      ],
    },
  }),
];

export default eslintConfig;

