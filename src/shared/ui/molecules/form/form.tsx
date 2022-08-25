import React from "react";
import {
  Form as AntdForm,
  FormItemProps as AntdFormItemProps,
  FormProps as AntdFormProps,
} from "antd";
import { useTheme } from "@emotion/react";
import { formWrapper } from "./form.styles";

export const InternalForm = ({ children, ...rest }: AntdFormProps & {children: React.ReactNode}) => {
  const theme = useTheme();
  return (
    <AntdForm css={formWrapper(theme)} {...rest}>
      {children}
    </AntdForm>
  );
};

export const Item = ({ children, ...rest }: AntdFormItemProps) => (
  <AntdForm.Item {...rest}>{children}</AntdForm.Item>
);
