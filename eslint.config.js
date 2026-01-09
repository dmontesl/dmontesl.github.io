import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default [
  // Global ignores
  {
    ignores: [
      'node_modules/',
      '.astro/',
      'dist/',
      '.cache/',
      'public/',
      '*.config.js',
      '*.config.mjs',
    ],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // Astro rules
  ...eslintPluginAstro.configs.recommended,

  // Global settings for all files
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // React/TSX files
  {
    files: ['**/*.tsx', '**/*.jsx'],
    plugins: {
      react: eslintPluginReact,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+ JSX transform
      'react/prop-types': 'off', // Using TypeScript for prop validation
    },
  },

  // TypeScript files - relax some rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  // Astro files
  {
    files: ['**/*.astro'],
    rules: {
      // Add any Astro-specific rule overrides here
    },
  },
];
