import React from "react";
import { Story, Meta } from "@storybook/react";
import { Input } from "./input";
import { InputProps } from "./input.types";

export default {
  component: Input,
  title: "UI kit/Atoms/Inputs",
  argTypes: {
    size: { options: ["small", "large", undefined], control: "radio" },
    bordered: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  decorators: [
    (Component) => (
      <div style={{ width: "300px" }}>
        <Component />
      </div>
    ),
  ],
} as Meta;

const Template: Story<InputProps> = (props): React.ReactElement => (
  <Input {...props} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Default input",
  bordered: true,
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Large input",
  bordered: true,
  size: "large",
};
export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Disabled input",
  bordered: true,
  disabled: true,
};
export const WithError = Template.bind({});
WithError.args = {
  placeholder: "Placeholder",
  value: "Error occurred",
  bordered: true,
  status: "error",
};

export const PasswordInput = Template.bind({});
PasswordInput.argTypes = {
  password: { control: "boolean" },
};
PasswordInput.args = {
  placeholder: "Enter your password",
  bordered: true,
  password: true,
};
