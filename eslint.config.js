// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import checkFile from 'eslint-plugin-check-file';

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname
    }
  },
  files: ['**/*.ts'],
  plugins: {
    'check-file': checkFile
  },
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier
  ],
  rules: {
    semi: 'error',
    'prefer-arrow-callback': ['error'],
    'prefer-template': ['error'],
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.ts': 'SNAKE_CASE'
      },
      {
        ignoreMiddleExtensions: true
      }
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/**': 'KEBAB_CASE'
      }
    ]
  }
});
