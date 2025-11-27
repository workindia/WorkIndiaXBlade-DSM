module.exports = {
  extends: ['../../eslint.config.mjs'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
