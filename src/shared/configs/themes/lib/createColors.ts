import type { MainColors } from "shared/configs/themes/types";
import themes from "shared/configs/themes";

export const createThemeColors = (
  themeName: keyof typeof themes,
  colors: MainColors["global"]
): MainColors["defined"] => {
  const isDark = themeName === "dark";

  return {
    backgrounds: {
      content: colors.blue.sapphire,
      controls: colors.blue.space,
      disabled: colors.blue.pup,
    },
    primary: colors.blue.default,
    primarySelection: colors.blue.marengo,
    primaryHover: colors.blue.space,
    success: colors.green.default,
    warning: colors.orange.default,
    danger: colors.red.default,
    info: colors.blue.water,
    accentColors: {
      purple: colors.purple.default,
      cyan: colors.cyan.default,
      blue: colors.blue.king,
    },
    texts: {
      default: colors.gray.aluminium,
      header: isDark ? colors.white.default : "#2B2B2D",
      muted: colors.blue.mouse,
    },
    borders: {
      primary: colors.blue.mouse,
      secondaryButton: colors.blue.lightPup,
    },
  };
};
