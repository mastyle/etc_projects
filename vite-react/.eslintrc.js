module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'prettier', '@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    quotes: ['error', 'single'],
    'no-use-before-define': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: 'next',
            group: 'builtin',
            position: 'after'
          },
          {
            pattern: 'next/**',
            group: 'builtin',
            position: 'after'
          },
          {
            pattern: '@tanstack/query',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@tanstack/query/**',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@tanstack/query-devtools',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@tanstack/query-devtools/**',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@emotion/**',
            group: 'external',
            position: 'after'
          },
          {
            pattern: 'recoil',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '@recoil/**',
            group: 'external',
            position: 'after'
          },
          {
            pattern: 'cocstorage-ui',
            group: 'external',
            position: 'after'
          },
          {
            pattern: 'axios',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '@components/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@hooks/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@api/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@constants/**',
            group: 'internal',
            position: 'after'
          }
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always'
      }
    ],
    'import/no-extraneous-dependencies': 'off',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true
      }
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }]
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};
