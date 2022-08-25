import { messagesStyles } from "shared/ui/styles";

import lato300 from "shared/assets/fonts/Lato-Light.woff2";
import lato300fallback from "shared/assets/fonts/Lato-Light.woff";
import lato400 from "shared/assets/fonts/Lato-Regular.woff2";
import lato400fallback from "shared/assets/fonts/Lato-Regular.woff";
import lato700 from "shared/assets/fonts/Lato-Bold.woff2";
import lato700fallback from "shared/assets/fonts/Lato-Bold.woff";

import { Global, css, useTheme } from "@emotion/react";
import React, { ReactElement } from "react";

export const AppStyles = (): ReactElement => {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Lato";
          font-style: normal;
          font-weight: 300;
          src: local(""), url(${lato300}) format("woff2"),
            url(${lato300fallback}) format("woff");
        }
        @font-face {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          src: local(""), url(${lato400}) format("woff2"),
            url(${lato400fallback}) format("woff");
        }
        @font-face {
          font-family: "Lato";
          font-style: normal;
          font-weight: 700;
          src: local(""), url(${lato700}) format("woff2"),
            url(${lato700fallback}) format("woff");
        }

        body {
          font-family: "Lato", sans-serif;
          color: ${colors.defined.texts.default};
          font-size: 14px;
          width: 100%;
          height: 100vh;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${colors.defined.texts.header};
        }

        h1 {
          font-size: 24px;
          line-height: 28px;
        }

        .app {
          position: relative;
        }

        ${messagesStyles(theme)}
      `}
    />
  );
};

export const layoutStyles = css`
  display: grid;
  grid-template-rows: 64px 1fr 64px;
  grid-row-gap: 16px;
  height: 100vh;
`;
