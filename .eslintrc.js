// .eslintrc.js
module.exports = {
  extends: [
    'eslint-config-alloy/react',
    'eslint-config-alloy/typescript',
  ],
  globals: {
    OnlySVG: true,
    monitor: true,
    CanvasRender: true,
    React: true,
  },
  rules: {
    eqeqeq: 0,
    indent: ['error', 2, { SwitchCase: 1 }],
    'function-paren-newline': 0,
    'react/jsx-indent': [2, 2, {indentLogicalExpressions: true}],
    'react/jsx-indent-props': [2, 2],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/prefer-for-of': 0,
  },
};