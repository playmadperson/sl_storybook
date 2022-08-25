import React from "react";
import { useTheme } from "@emotion/react";
import { Checkbox as AntdCheckbox } from "antd";
import { checkboxStyles } from "./checkbox.styles";
import { CheckboxProps } from "./checkbox.types";

export const Checkbox = ({ size, ...rest }: CheckboxProps) => {
  const theme = useTheme();
  return <AntdCheckbox css={checkboxStyles(theme, size)} {...rest} />;
};
