import React, { ReactElement } from "react";
import { useTheme } from "@emotion/react";
import { buttonStyles } from "./button.styles";
import { ButtonProps } from "./button.types";

export const Button = ({ children, ...props }: ButtonProps): ReactElement => {
  const theme = useTheme();
  const { variant, size, fullwidth, toggled, icon, ...rest } = props;
  const onlyIcon = icon && !children;
  return (
    <button
      type="button"
      css={buttonStyles({ variant, theme, size, fullwidth, toggled, onlyIcon })}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
};
