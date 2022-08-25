import { LinksVariants, MainColors } from "../types";

export const createLinks = (colors: MainColors): LinksVariants => ({
  default: {
    default: colors.global.blue.default,
    hover: colors.global.blue.sky,
    active: colors.global.blue.default,
    disabled: colors.global.blue.mouse,
  },
});
