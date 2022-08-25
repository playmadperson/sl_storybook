import type { MainColors } from "shared/configs/themes/types";
import { colorsHelpers } from "shared/configs/themes/lib";
import { globalColors } from "./global";

const themeColors = colorsHelpers.createThemeColors("light", globalColors);

export const colors: MainColors = {
  global: globalColors,
  defined: themeColors,
};
