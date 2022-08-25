import { Theme } from "@emotion/react";
import { createButtonsTheme, createLinks } from "../lib";
import { colors } from "./colors";
import { shadows } from "./shadows";

export const lightTheme: Theme = {
  name: "light",
  colors,
  shadows,
  buttons: createButtonsTheme("light", colors, shadows),
  links: createLinks(colors),
};
