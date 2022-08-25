import type {
  ButtonVariants,
  MainColors,
  GlobalShadows,
} from "shared/configs/themes/types";
import themes from "shared/configs/themes";
import { getLiftedShadowForColor } from "./createShadows";

export const createButtonsTheme = (
  themeName: keyof typeof themes,
  colors: MainColors,
  shadows: GlobalShadows
): ButtonVariants => ({
  primary: {
    main: colors.global.blue.default,
    hover: colors.global.blue.sky,
    active: colors.global.blue.default,
    disabled: colors.global.blue.pup,
    text: colors.global.white.default,
    lifted: getLiftedShadowForColor("rgba(134, 176, 255, 0.08)"),
    pressed: shadows.pressed,
  },
  secondary: {
    main: colors.global.blue.pup,
    hover: colors.global.blue.space,
    active: colors.global.blue.pup,
    disabled: colors.global.blue.pup,
    toggled: colors.global.purple.default,
    text: colors.global.contrast.default,
    lifted: shadows.lifted,
    pressed: shadows.pressed,
  },
  success: {
    main: colors.global.green.default,
    hover: colors.global.green.shamrock,
    active: colors.global.green.default,
    disabled: colors.global.blue.pup,
    text: colors.global.white.default,
    lifted: getLiftedShadowForColor("rgba(3, 114, 74, 0.08)"),
    pressed: shadows.pressed,
  },
  danger: {
    main: colors.global.red.default,
    hover: colors.global.red.coral,
    active: colors.global.red.default,
    disabled: colors.global.blue.pup,
    text: colors.global.white.default,
    lifted: getLiftedShadowForColor("rgba(190, 33, 33, 0.08)"),
    pressed: shadows.pressed,
  },
  warning: {
    main: colors.global.orange.default,
    hover: colors.global.orange.mandarin,
    active: colors.global.orange.default,
    disabled: colors.global.blue.pup,
    text: colors.global.white.default,
    lifted: getLiftedShadowForColor("rgba(219, 123, 35, 0.08)"),
    pressed: shadows.pressed,
  },
  info: {
    main: colors.global.blue.water,
    hover: colors.global.blue.whale,
    active: colors.global.blue.water,
    disabled: colors.global.blue.pup,
    text: colors.global.white.default,
    lifted: getLiftedShadowForColor("rgba(9, 109, 217, 0.08)"),
    pressed: shadows.pressed,
  },
});
