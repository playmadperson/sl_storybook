import { Theme } from "@emotion/react";
import { createButtonsTheme, createLinks } from "../lib";
import { colors } from "./colors";
import { shadows } from "./shadows";

export const darkTheme: Theme = {
  name: "dark",
  colors,
  shadows,
  buttons: createButtonsTheme("dark", colors, shadows),
  links: createLinks(colors),
};
