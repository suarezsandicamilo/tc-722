//

import globals from 'globals';
import js from '@eslint/js';
import typescript from 'typescript-eslint';
import react from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  js.configs.recommended,
  ...typescript.configs.recommended,
  react.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
