module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:effector/recommended",
    "plugin:effector/scope",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "effector"],
  rules: {
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/require-default-props": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/no-use-before-define": "off",
  },
};
