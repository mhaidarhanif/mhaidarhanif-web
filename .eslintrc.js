module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  globals: {
    React: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'external',
          ['index', 'sibling', 'parent'],
          'internal',
          ['type', 'unknown', 'object'],
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'object',
            pattern: '*.css',
            patternOptions: { matchBase: true },
            position: 'after',
          },
          {
            group: 'object',
            pattern: '*.svg',
            patternOptions: { matchBase: true },
            position: 'after',
          },
        ],
        warnOnUnassignedImports: true,
      },
    ],
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
}
