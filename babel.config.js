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
  plugins: ["@emotion/babel-plugin"].concat(
    process.env.NODE_ENV === "production"
      ? []
      : ["effector-logger/babel-plugin"]
  ),
};
