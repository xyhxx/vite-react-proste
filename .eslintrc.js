module.exports = {
  extends: ['proste/reactTS', 'proste/vitest'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    warnOnUnsupportedTypeScriptVersion: true,
  },
  plugins: ['xyhxx'],
  rules: {
    'xyhxx/if-line': 1,
    'xyhxx/object-pattern-newline': 1,
  },
  overrides: [
    {
      files: ['cypress/**', 'cypress.config.ts'],
      plugins: ['cypress'],
      parserOptions: {
        project: './cypress/tsconfig.json',
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: true,
      },
      env: {
        'cypress/globals': true,
      },
    },
  ],
};
