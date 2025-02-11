export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {},
    },
  },
  env: { browser: true, es2021: true },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {},
};
