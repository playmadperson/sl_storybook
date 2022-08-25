import { css, SerializedStyles, Theme } from "@emotion/react";

import { ButtonProps, ButtonSize } from "./button.types";

type GenericButtonProps = Pick<ButtonProps, "fullwidth">;
type SpecificButtonProps = Omit<ButtonProps, "children"> & {
  theme: Theme;
  onlyIcon?: boolean;
};

const getButtonPaddings = (size: ButtonSize | undefined): SerializedStyles => {
  switch (size) {
    case "large":
      return css`
        padding: 8px 16px;
        height: 40px;
        font-size: 16px;
      `;
    case "small":
      return css`
        padding: 0 8px;
        height: 24px;
      `;
    default:
      return css`
        padding: 4px 16px;
        height: 32px;
      `;
  }
};

const getIconButtonPaddings = (
  size: ButtonSize | undefined
): SerializedStyles => {
  switch (size) {
    case "large":
      return css`
        padding: 8px 11px;
      `;
    case "small":
      return css`
        padding: 0 4px;
      `;
    default:
      return css`
        padding: 4px 8px;
      `;
  }
};

const createGenericButtonStyles = ({ fullwidth }: GenericButtonProps) => css`
  text-align: center;
  border-radius: 4px;
  transition: all 0.2s ease;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  cursor: pointer;
  width: ${fullwidth ? "100%" : "auto"};
`;

export const buttonStyles = ({
  size,
  fullwidth,
  variant,
  theme,
  toggled,
  onlyIcon,
}: SpecificButtonProps): SerializedStyles => css`
  ${createGenericButtonStyles({ fullwidth })}
  ${getButtonPaddings(size)}
  ${onlyIcon && getIconButtonPaddings(size)}
  
  color: ${toggled && variant === "secondary"
    ? theme.colors.global.white.default
    : theme.buttons[variant].text};
  background-color: ${toggled && variant === "secondary"
    ? theme.buttons[variant].toggled
    : theme.buttons[variant].main};
  box-shadow: ${theme.buttons[variant].lifted};
  border: ${toggled && variant === "secondary"
    ? "none"
    : `1px solid ${theme.colors.global.blue.lightPup}`};

  &:hover,
  &:focus {
    color: ${theme.buttons[variant].text};
    background-color: ${theme.buttons[variant].hover};
  }

  &:active,
  &:not([disabled]):active {
    background-color: ${theme.buttons[variant].active};
    box-shadow: ${theme.buttons[variant].pressed};
  }

  &:disabled {
    color: ${theme.colors.global.blue.mouse};
    background-color: ${theme.buttons[variant].disabled};
    box-shadow: none;
    cursor: default;
  }
`;
