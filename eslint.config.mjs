import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  prettier,
  // ── Default config for all source files ─────────────────────────────────
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  // ── Node.js scripts (CommonJS, no TypeScript constraints) ───────────────
  {
    files: ['scripts/**/*.js', 'commitlint.config.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.commonjs,
      },
    },
    rules: {
      // CommonJS require() is intentional in plain Node.js scripts
      '@typescript-eslint/no-require-imports': 'off',
      // Allow console.log in scripts — these are CLI tools, not app code
      'no-console': 'off',
      // These aren't TS files — relax TS-specific rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: ['node_modules/', 'dist/', '.next/', 'out/', 'doc/'],
  },
);
