module.exports = {
  presets: [
    "@babel/env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
        importSource: "@emotion/react",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: ["@emotion/babel-plugin"],
};
