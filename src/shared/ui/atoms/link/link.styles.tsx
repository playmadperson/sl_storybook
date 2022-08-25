import { css, SerializedStyles, Theme } from "@emotion/react";
import { LinkStyleProps } from "./link.types";

export const linkStyles = ({
  disabled,
  size,
  theme,
}: LinkStyleProps & { theme: Theme }): SerializedStyles =>
  css`
    color: ${theme.links.default.default};
    text-decoration: none;
    transition: all 0.2s ease;
    font-size: ${size === "large" ? "16px" : "14px"};

    &:hover,
    &:focus {
      color: ${theme.links.default.hover};
      text-decoration: underline;
    }

    &:active {
      color: ${theme.links.default.active};
    }

    ${disabled &&
    css`
      color: ${theme.links.default.disabled};
      pointer-events: none;
    `}
  `;
