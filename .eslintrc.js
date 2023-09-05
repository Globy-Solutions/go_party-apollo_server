module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:jest/recommended',
    '@react-native-community'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'sort-keys-fix/sort-keys-fix': 'error',
        'no-shadow': 0,
        'no-undef': 0
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'sort-keys-fix', 'jest', 'react-native', 'import'],
  root: true,
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    'comma-dangle': ['error', 'never'],
    'import/no-anonymous-default-export': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'no-console': 1,
    'no-inline-comments': [
      'error',
      {
        ignorePattern: 'eslint-disable-*|@ts-ignore'
      }
    ],
    'no-restricted-syntax': [
      'error',
      {
        message: 'Unexpected property on console object was called',
        selector:
          'CallExpression[callee.object.name="console"][callee.property.name!=/^(warn|error|info|trace)$/]'
      }
    ],
    'prettier/prettier': 0,
    quotes: 'off',
    'react-hooks/exhaustive-deps': [
      'warn', { additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)' }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-native/no-raw-text': 0,
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
    'react/react-in-jsx-scope': 0,
    semi: 0,
    'sort-keys': ['error', 'asc', { 'caseSensitive': true, 'minKeys': 2, 'natural': true }]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json']
      }
    }
  }
};
