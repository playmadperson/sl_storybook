import type { MainColors } from "shared/configs/themes/types";
import { colorsHelpers } from "shared/configs/themes/lib";
import { globalColors } from "./global";

const themeColors = colorsHelpers.createThemeColors("dark", globalColors);

export const colors: MainColors = {
  global: globalColors,
  defined: themeColors,
};
