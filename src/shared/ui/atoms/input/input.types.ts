import { InputProps as AntdInputProps } from "antd";
import { PasswordProps } from "antd/es/input";

export type InputProps = AntdInputProps & { password?: boolean };
export type PasswordInputProps = InputProps & PasswordProps;
