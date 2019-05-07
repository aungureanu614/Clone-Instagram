module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  env: {
    'browser': true,
    'jest': true
  },
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    }
  },
  rules: {
    'prettier/prettier': 'error'
  },
}
