import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDevMode = mode === "development";
  return {
    publicDir: "./public",
    plugins: [
      react({
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: isDevMode
            ? ["@emotion/babel-plugin", "effector-logger/babel-plugin"]
            : ["@emotion/babel-plugin"],
        },
      }),
      tsconfigPaths(),
      svgr({
        svgrOptions: {
          // typescript: true,
          // ext: "tsx",
          svgo: true,
        },
      }),
    ],
  };
});
