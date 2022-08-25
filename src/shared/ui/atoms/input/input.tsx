import React, { ReactElement } from "react";
import { Input as AntdInput } from "antd";
import { useTheme } from "@emotion/react";
import { inputStyles } from "./input.styles";
import { PasswordInputProps } from "./input.types";

export const Input = ({
  password,
  ...props
}: PasswordInputProps): ReactElement => {
  const theme = useTheme();
  const InputComponent = password ? AntdInput.Password : AntdInput;
  return <InputComponent css={inputStyles({ theme, ...props })} {...props} />;
};
