import { useTheme } from "@emotion/react";
import React, { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";
import { linkStyles } from "./link.styles";
import { LinkProps } from "./link.types";

export const Link = ({
  children,
  disabled,
  size,
  ...rest
}: LinkProps): ReactElement => {
  const theme = useTheme();
  return (
    <RouterLink {...rest} css={linkStyles({ disabled, size, theme })}>
      {children}
    </RouterLink>
  );
};
