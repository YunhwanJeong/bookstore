module.exports = {
  root: true,
  env: { browser: true, node: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: true, tsconfigRootDir: './' },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/consistent-type-imports': [2, { fixStyle: 'separate-type-imports' }],
    '@typescript-eslint/no-restricted-imports': [
      2,
      {
        paths: [
          {
            name: 'react-redux',
            importNames: ['useSelector', 'useStore', 'useDispatch'],
            message: 'Please use pre-typed versions from `src/app/hooks.ts` instead.',
          },
        ],
      },
    ],
  },
};
