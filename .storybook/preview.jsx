import { ThemeProvider } from "@emotion/react";
import { withThemes } from "@react-theming/storybook-addon";
import { AppStyles } from "../src/app/ui/styles";
import themes from "../src/shared/configs/themes";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import ruRU from "antd/es/locale/ru_RU";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      type: "dynamic",
      excludeDecorators: true, 
    },
  },
};

const { dark, light } = themes;

const onThemeSwitch = (context) => {
  const { theme } = context;
  const background = theme.name === "dark" ? "#1D1E2C" : "#F2F4F9";
  const parameters = {
    backgrounds: {
      default: background,
    },
  };
  return {
    parameters,
  };
};

const providerFn = (context) => {
  const { theme } = context;
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={ruRU}>
        <AppStyles />
        {context.children}
      </ConfigProvider>
    </ThemeProvider>
  );
};

export const decorators = [
  withThemes(ThemeProvider, [dark, light], { onThemeSwitch, providerFn }),
];
