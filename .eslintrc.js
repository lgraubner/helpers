module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'import/prefer-default-export': 0,
  },
};
