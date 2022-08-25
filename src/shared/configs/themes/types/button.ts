import type { Shadows } from "./shadows";

export type ButtonColors = {
  main: string;
  hover: string;
  active: string;
  disabled: string;
  text: string;
};

export type ButtonVariants = {
  primary: ButtonColors & Shadows;
  secondary: ButtonColors & Shadows & { toggled?: string };
  success: ButtonColors & Shadows;
  danger: ButtonColors & Shadows;
  warning: ButtonColors & Shadows;
  info: ButtonColors & Shadows;
};
