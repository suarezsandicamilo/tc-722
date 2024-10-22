//

import js from '@eslint/js';
import globals from 'globals';
import typescript from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    files: ['**/*.{ts,tsx}'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  js.configs.recommended,
  ...typescript.configs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
];
